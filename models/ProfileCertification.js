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
    createProfileCertification();
});

function createProfileCertification() {
    let sqlQuery = "CREATE DATABASE IF NOT EXISTS skipped";
    dbconnection.query(sqlQuery, (err, result) => {
        if (err) throw err;
        console.log(result);
        console.log("Database created...");
    });
}

function createProfileCertification() {
    //Sets up the Database Table and Rows
    const createTable = `CREATE TABLE IF NOT EXISTS profileCertification
    ( id int(11) NOT NULL,
  profileId varchar(50) NOT NULL,
  certificationId varchar(50) NOT NULL,
  validUpto date NOT NULL,
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
    var ProfileCertificationSchema = sequelize.define('ProfileCertification', {
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
        certificationId: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        validUpto: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    },{
        paranoid: false,
        timestamps: true,
    });
    return ProfileCertificationSchema;
}