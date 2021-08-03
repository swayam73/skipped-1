let mysql = require("mysql");
let dbconnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "skipped"
});

dbconnection.connect((err) => {
    if (err) {
        return console.error("ERROR: " + err.message);
    }
    createProfile();
});

function createProfile() {
    let sqlQuery = "CREATE DATABASE IF NOT EXISTS skipped";
    dbconnection.query(sqlQuery, (err, result) => {
        if (err) throw err;
        console.log(result);
        console.log("Database created...");
    });
}

function createProfile() {
    //Sets up the Database Table and Rows
    const createTable = `CREATE TABLE IF NOT EXISTS profile
    ( id int(11) NOT NULL,
  userId varchar(50) NOT NULL,
  emailId varchar(50) NOT NULL,
  contactNo varchar(50) NOT NULL,
  firstName varchar(50) NOT NULL,
  middleName varchar(50) DEFAULT NULL,
  lastName varchar(50) DEFAULT NULL,
  gender varchar(50) NOT NULL,
  roleTag varchar(50) NOT NULL,
  resumeURL varchar(50) DEFAULT NULL,
  DOB date DEFAULT NULL,
  totalExperience integer(11) DEFAULT NULL,
  profileImageURL varchar(50) DEFAULT NULL,
  jobTitleId integer(11) DEFAULT NULL,
  currentLocation varchar(50) DEFAULT NULL,
  currentCTC varchar(50) DEFAULT NULL,
  lat varchar(50) DEFAULT NULL,
  longitude varchar(50) DEFAULT NULL,
  visaIds varchar(50) DEFAULT NULL,
  socialMediaURLs varchar(50) DEFAULT NULL,
  industryId integer(11) DEFAULT NULL,
  profileSummary varchar(50) DEFAULT NULL,
  profileTagLine varchar(50) DEFAULT NULL,
  companyEmail varchar(50) DEFAULT NULL,
  updatedAt varchar(50) DEFAULT NULL,
  status integer(11) DEFAULT NULL,
  PRIMARY KEY (id))`;

    //Execute tables creation query
    dbconnection.query(createTable, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Table and rows created...");
    });
}

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