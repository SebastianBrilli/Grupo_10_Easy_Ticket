module.exports= (sequelize, dataTypes)=>{
    let alias = "Users"
    let cols ={
        id:{
            type: dataTypes.INTEGER,
            primaryKey :  true
        },
        first_name:{
            type: dataTypes.STRING
        },
        last_name:{
            type: dataTypes.STRING
        },
        email:{
            type: dataTypes.STRING
        },
        password:{
            type: dataTypes.STRING
        },
        user_category_id:{
            type: dataTypes.INTEGER,
            foreignKey: true 
        },
        image:{
            type:dataTypes.STRING
        },
        oldimage:{
            type:dataTypes.STRING
        }
    };
    let config = {
        timestamps : false
    }
    
    const Users = sequelize.define(alias,cols,config)  

    Users.associate = function(models) { 
        Users.belongsTo(models.User_category,{
            foreignKey:"user_category_id",
            as:"User_category"
        })
        Users.belongsToMany(models.Events,{
            as:"Events",
            through:"sales",
            foreignKey:"users_id",
            otherKey:"events_id",
            timestamps: false
        })
    }
    
    
    return Users 
    }