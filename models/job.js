module.exports = function (sequelize, Sequelize) {
  var JobSchema = sequelize.define(
    "Job",
    {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      companyId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      travelOption: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      jobDuration: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      remote: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      visaId: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      lat: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      long: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      paidType: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      minPaidAmount: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      maxPaidAmount: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      paidAmount: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      minExperienceRequired: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      maxExperienceRequired: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      experienceRequired: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      jobTypeId: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      industryId: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      primarySkills: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      secondarySkills: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      noPositions: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdBy: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    {
      paranoid: true,
      timestamps: true,
    }
  );
  return JobSchema;
};
