module.exports = (sequelize, dataTypes) => {

    let alias = "CategoryUser";

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
    }

    let config = {
        tableName: "user_category",
        timestamps: false
    }

    const CategoryUser = sequelize.define(alias, cols, config)

    CategoryUser.associate = function (models) {
        CategoryUser.hasMany(models.User, {
            as: "users",
            foreignKey: 'category_id'
        })
    }

    return CategoryUser;

}