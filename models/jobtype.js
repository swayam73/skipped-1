module.exports = function(sequelize, Sequelize) {
    var JobTypeSchema = sequelize.define('JobType', {
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
        status: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },{
        paranoid: false,
        timestamps: true,
    });
    return JobTypeSchema;
}