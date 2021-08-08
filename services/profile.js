
const Profile = require('../models').Profile;

const getProfiles = async (req,res,_) => {
    try {
        const profiles = await Profile.findAll({where: {userId: req.body.user.uid}});
        return res.json(profiles);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({message: "Error while getting profiles.", description: error.message});
    }    
}

const getProfile = async (req,res,_) => {
    try {
        const profile = await Profile.findOne({ where: { id: req.params.id, userId: req.body.user.uid } });
        return res.json(profile);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({message: "Error while getting profile.", description: error.message});
    }
    
}

const postProfile = async (req,res,_) => {
    try {
        delete req.body.id;
        req.body.userId = req.body.user.uid;
        const profile = await Profile.create(req.body);
        return res.json(profile);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({message: "Error while creating profile.", description: error.message});
    }
    
}

const putProfile = async (req,res,_) => {
    try {
        const userprofile = await Profile.findOne({ where: { id: req.params.id, userId: req.body.user.uid } });
        if (!userprofile) {
            return res.status(403).json({message: "Invalid profile Id", description: "User is not authorized to update profile."});
        }
        req.body.id = req.params.id;
        req.body.userId = req.body.user.uid;
        const profile = await Profile.upsert(req.body);
        return res.json(profile);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({message: "Error while updating profile.", description: error.message});
    }
    
}

const deleteProfile = async (req,res,_) => {
    try {
        const profile = await Profile.destroy({ where: { id: req.params.id, userId: req.body.user.uid } });
        return res.json(profile);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({message: "Error while deleting profile.", description: error.message});
    }
}

module.exports = {
    getProfiles,
    getProfile,
    postProfile,
    putProfile,
    deleteProfile
};