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
    createUserSkills();
});

function createUserSkills() {
    let sqlQuery = "CREATE DATABASE IF NOT EXISTS skipped";
    dbconnection.query(sqlQuery, (err, result) => {
        if (err) throw err;
        console.log(result);
        console.log("Database created...");
    });
}

function createUserSkills() {
    //Sets up the Database Table and Rows
    const createTable = `CREATE TABLE IF NOT EXISTS userSkills
    ( id int(11) NOT NULL,
  profileId varchar(50) NOT NULL,
  skillId varchar(50) NOT NULL,
  skillLevel varchar(50) NOT NULL,
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
    var UserSkillsSchema = sequelize.define('UserSkills', {
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
        skillId: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        skillLevel: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },{
        paranoid: false,
        timestamps: true,
    });
    return UserSkillsSchema;
}