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
    createJob();
});

function createJob() {
    let sqlQuery = "CREATE DATABASE IF NOT EXISTS skipped";
    dbconnection.query(sqlQuery, (err, result) => {
        if (err) throw err;
        console.log(result);
        console.log("Database created...");
    });
}

function createJob() {
    //Sets up the Database Table and Rows
    const createTable = `CREATE TABLE IF NOT EXISTS job
    ( id int(11) NOT NULL,
  description varchar(50) NOT NULL,
  title varchar(50) NOT NULL,
  companyId integer(11) NOT NULL,
  travelOption boolean NOT NULL,
  jobDuration varchar(50) DEFAULT NULL,
  remote boolean DEFAULT NULL,
  visaId varchar(50) DEFAULT NULL,
  lat varchar(50) NOT NULL,
  longitude varchar(50) DEFAULT NULL,
  paidType varchar(50) DEFAULT NULL,
  minPaidAmount integer(11) DEFAULT NULL,
  maxPaidAmount integer(11) DEFAULT NULL,
  minExperienceRequired varchar(50) DEFAULT NULL,
  maxExperienceRequired varchar(50) DEFAULT NULL,
  jobTypeId integer(11) DEFAULT NULL,
  industryId varchar(50) DEFAULT NULL,
  primarySkills varchar(50) DEFAULT NULL,
  secondarySkills varchar(50) DEFAULT NULL,
  noPositions varchar(50) DEFAULT NULL,
  status varchar(50) NOT NULL,
  createdBy varchar(50) DEFAULT NULL,
  updatedAt date DEFAULT NULL,
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
    var JobSchema = sequelize.define('Job', {
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
            type: Sequelize.BOOLEAN,
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
        minExperienceRequired: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        maxExperienceRequired: {
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
        updatedAt: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    },{
        paranoid: true,
        timestamps: true,
    });
    return JobSchema;
}