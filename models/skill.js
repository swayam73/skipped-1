
module.exports = function(sequelize, Sequelize) {
    var SkillSchema = sequelize.define('Skill', {
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
            allowNull: true,
        },
        otherNames: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        status: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    },{
        paranoid: false,
        timestamps: true,
    });
    return SkillSchema;
}