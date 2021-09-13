const Profile = require("../models").Profile;
const Op = require("sequelize").Op;
const constants = require("../utils/constants").constants;

const getProfiles = async (req, res, _) => {
  try {
    const profiles = await Profile.findAll({
      where: { userId: req.body.user.user_id },
      order: [["updatedAt", "DESC"]],
    });
    return res.json(profiles);
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json({
        message: "Error while getting profiles.",
        description: error.message,
      });
  }
};

const getProfileById = async (req, res, _) => {
  try {
    const profile = await Profile.findOne({ where: { id: req.params.id } });
    return res.json(profile);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Error while getting Profile.",
      description: error.message,
    });
  }
};

const getProfile = async (req, res, _) => {
  try {
    const profile = await Profile.findOne({
      where: { id: req.params.id, userId: req.body.user.uid },
      raw: true,
    });
    await Profile.upsert(profile);
    return res.json(profile);
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json({
        message: "Error while getting profile.",
        description: error.message,
      });
  }
};

const postProfile = async (req, res, _) => {
  try {
    delete req.body.id;
    req.body.userId = req.body.user.uid;
    const profile = await Profile.create(req.body);
    return res.json(profile);
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json({
        message: "Error while creating profile.",
        description: error.message,
      });
  }
};

const putProfile = async (req, res, _) => {
  try {
    const userprofile = await Profile.findOne({
      where: { id: req.params.id, userId: req.body.user.uid },
    });
    if (!userprofile) {
      return res
        .status(403)
        .json({
          message: "Invalid profile Id",
          description: "User is not authorized to update profile.",
        });
    }
    req.body.id = req.params.id;
    req.body.userId = req.body.user.uid;
    const profile = await Profile.upsert(req.body);
    return res.json(profile);
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json({
        message: "Error while updating profile.",
        description: error.message,
      });
  }
};

const deleteProfile = async (req, res, _) => {
  try {
    const profile = await Profile.destroy({
      where: { id: req.params.id, userId: req.body.user.uid },
    });
    return res.json(profile);
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json({
        message: "Error while deleting profile.",
        description: error.message,
      });
  }
};

const findProfiles = async (req, res, _) => {
  try {
    let profiles;
    let query = req.query;
    if (query.visaIds) {
      query.visaIds = { [Op.like]: query.visaIds };
    }
    if (query.primarySkillIds) {
      query.primarySkillIds = { [Op.like]: query.primarySkillIds };
    }
    if (query.secondarySkillIds) {
      query.secondarySkillIds = { [Op.like]: query.secondarySkillIds };
    }
    if (query.industryIds) {
      query.industryIds = { [Op.like]: query.industryIds };
    }
    if (req.body.profile.roleTag === constants.ROLE_TAGS.RECRUITER) {
      query.roleTag = constants.ROLE_TAGS.CANDIDATE;
      profiles = await Profile.findAll({
        where: query,
        order: [["updatedAt", "DESC"]],
        raw: true,
      });
    } else if (req.body.profile.roleTag === constants.ROLE_TAGS.CANDIDATE) {
      query.roleTag = constants.ROLE_TAGS.RECRUITER;
      profiles = await Profile.findAll({
        where: query,
        order: [["updatedAt", "DESC"]],
        raw: true,
      });
    } else {
      profiles = await Profile.findAll({
        where: query,
        order: [["updatedAt", "DESC"]],
        raw: true,
      });
    }
    return res.json(profiles);
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json({
        message: "Error while searching profiles.",
        description: error.message,
      });
  }
};

module.exports = {
  getProfiles,
  getProfile,
  getProfileById,
  postProfile,
  putProfile,
  deleteProfile,
  findProfiles,
};
