module.exports = (sequelize, dataTypes) => {
    let alias = "Sale";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        user_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        event_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        quantity: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        total: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },

        date: {
            type: dataTypes.DATE,
            allowNull: false
        },

    }

    let config = {
        tableName: "sales",
        timestamps: false
    }


    const Sale = sequelize.define(alias, cols, config)

    Sale.associate = function (models) {
        Sale.belongsTo(models.Event, {
            as: "events",
            foreignKey: 'event_id'
        }),

            Sale.belongsTo(models.User, {
                as: "users",
                foreignKey: 'user_id'
            })
    }


    return Sale;

}