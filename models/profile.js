
module.exports = function(sequelize, Sequelize) {
    var ProfileSchema = sequelize.define('Profile', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
        },
        userId: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        emailId: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        contactNo: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        middleName: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        gender: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        roleTag: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        resumeURL: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        dob: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        totalExperience: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        profileImageURL: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        jobTitleId: {
            type: Sequelize.UUID,
            allowNull: true,
        },
        location: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        currentCTC: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        visaIds: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        socialMediaURLs: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        industryId: {
            type: Sequelize.UUID,
            allowNull: true,
        },
        profileSummary: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        profileTagLine: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        companyEmail: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        status: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
    },{
        paranoid: true,
        timestamps: true,
    });
    return ProfileSchema;
}