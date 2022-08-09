module.exports = (sequelize, dataTypes) => {

    let alias = "CategoryEvent";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        category: {
            type: dataTypes.STRING,
            allowNull: false
        },
        slug: {
            type: dataTypes.STRING,
            allowNull: false
        }
    }

    let config = {
        tableName: "event_category",
        timestamps: false
    }


    const CategoryEvent = sequelize.define(alias, cols, config)

    CategoryEvent.associate = function (models) {
        CategoryEvent.hasMany(models.Event, {
            as: "events",
            foreignKey: 'category_id'
        })
    }

    return CategoryEvent;

}