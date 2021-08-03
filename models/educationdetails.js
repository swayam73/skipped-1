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
    createEducationDetails();
});

function createEducationDetails() {
    let sqlQuery = "CREATE DATABASE IF NOT EXISTS skipped";
    dbconnection.query(sqlQuery, (err, result) => {
        if (err) throw err;
        console.log(result);
        console.log("Database created...");
    });
}

function createEducationDetails() {
    //Sets up the Database Table and Rows
    const createTable = `CREATE TABLE IF NOT EXISTS educationDetails
    ( id int(11) NOT NULL,
  profileId varchar(50) NOT NULL,
  companyId varchar(50) NOT NULL,
  startDate varchar(50) NOT NULL,
  endDate varchar(50) NOT NULL,
  presentCompany boolean NOT NULL,
  designation varchar(50) NOT NULL,
  rolesResponsibility varchar(50) NOT NULL,
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
    var EducationDetailsSchema = sequelize.define('EducationDetails', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
        },
        profileId: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        companyId: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        startDate: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        endDate: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        presentCompany: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        designation: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        rolesResponsibility: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },{
        paranoid: false,
        timestamps: true,
    });
    return EducationDetailsSchema;
}