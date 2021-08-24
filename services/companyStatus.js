const CompanyStatus = require("../models").CompanyStatus;

const getCompanyStatuses = async (req, res, _) => {
  try {
    const CompanyStatuses = await CompanyStatus.findAll();
    return res.json(CompanyStatuses);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Error while getting companyStatus.",
      description: error.message,
    });
  }
};

const getCompanyStatus = async (req, res, _) => {
  try {
    const companyStatus = await CompanyStatus.findOne({
      where: { id: req.params.id },
    });
    await CompanyStatus.upsert(companyStatus);
    return res.json(companyStatus);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Error while getting companyStatus.",
      description: error.message,
    });
  }
};

const postCompanyStatus = async (req, res, _) => {
  try {
    delete req.body.id;
    const companyStatus = await CompanyStatus.create(req.body);
    return res.json(companyStatus);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Error while creating companyStatus.",
      description: error.message,
    });
  }
};

const putCompanyStatus = async (req, res, _) => {
  try {
    const companyStatus = await CompanyStatus.findOne({
      where: { id: req.params.id },
    });
    if (!companyStatus) {
      return res.status(403).json({
        message: "Invalid companyStatus Id",
        description: "User is not authorized to update companyStatus.",
      });
    }
    const exp = await CompanyStatus.upsert(req.body);
    return res.json(exp);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Error while updating companyStatus.",
      description: error.message,
    });
  }
};

const deleteCompanyStatus = async (req, res, _) => {
  try {
    const companyStatus = await CompanyStatus.destroy({
      where: { id: req.params.id },
    });
    return res.json(companyStatus);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Error while deleting companyStatus.",
      description: error.message,
    });
  }
};

module.exports = {
  getCompanyStatuses,
  getCompanyStatus,
  postCompanyStatus,
  putCompanyStatus,
  deleteCompanyStatus,
};
