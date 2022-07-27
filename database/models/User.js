module.exports = (sequelize, dataTypes) => {

    let alias = "User";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        first_name: {
            type: dataTypes.STRING,
            allowNull: false
        },

        last_name: {
            type: dataTypes.STRING,
            allowNull: false
        },

        email: {
            type: dataTypes.STRING,
            allowNull: false
        },

        password: {
            type: dataTypes.STRING,
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

        oldimage: {
            type: dataTypes.STRING,
        },

    }

    let config = {
        tableName: "users",
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config)

    User.associate = function (models) {
        User.belongsTo(models.CategoryUser, {
            as: "user_category",
            foreignKey: 'category_id'
        }),

            User.hasMany(models.Sale, {
                as: "sales",
                foreignKey: 'user_id'
            })
    }

    return User;

}