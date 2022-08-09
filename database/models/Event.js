module.exports = (sequelize, dataTypes) => {

    let alias = "Event";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: dataTypes.STRING,
            allowNull: false
        },

        price: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },

        stock: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        date: {
            type: dataTypes.DATE,
            allowNull: false
        },

        address: {
            type: dataTypes.STRING,
            allowNull: false
        },

        city: {
            type: dataTypes.STRING,
            allowNull: false
        },

        description: {
            type: dataTypes.TEXT,
            allowNull: false
        },

        category_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        image: {
            type: dataTypes.STRING,
            allowNull: false
        },

        video: {
            type: dataTypes.STRING,
        },
        featured:{
            type: dataTypes.BOOLEAN,
            defaultValue: false

        }

    }

    let config = {
        tableName: "events",
        timestamps: false
    }


    const Event = sequelize.define(alias, cols, config)

    Event.associate = function (models) {
        Event.belongsTo(models.CategoryEvent, {
            as: "categoryEvents",
            foreignKey: 'category_id'
        }),

            Event.hasMany(models.Sale, {
                as: "sales",
                foreignKey: 'event_id'
            })
    }

    return Event;

}