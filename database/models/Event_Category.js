module.exports= (sequelize, dataTypes)=>{
    let alias = "Event_category"
    let cols ={
        id:{
            type: dataTypes.INTEGER,
            primaryKey :  true
        },
        category:{
            type: dataTypes.STRING
        }
    };
    let config = {
        tablename:"event_category",
        timestamps : false
    }
    
    const Event_category = sequelize.define(alias,cols,config)

    Event_category.associate = function(models){
        Event_category.hasMany(models.Events,{
            as:"events",
            foreignKey:"event_category_id"
        })
    }

    return Event_category 
    }