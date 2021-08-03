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
    createRole();
});

function createRole() {
    let sqlQuery = "CREATE DATABASE IF NOT EXISTS skipped";
    dbconnection.query(sqlQuery, (err, result) => {
        if (err) throw err;
        console.log(result);
        console.log("Database created...");
    });
}

function createRole() {
    //Sets up the Database Table and Rows
    const createTable = `CREATE TABLE IF NOT EXISTS role
    ( id int(11) NOT NULL,
  name varchar(50) NOT NULL,
  description varchar(50) NOT NULL,
  tag varchar(50) NOT NULL,
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
    var RoleSchema = sequelize.define('Role', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        tag: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },{
        paranoid: false,
        timestamps: true,
    });
    return RoleSchema;
}