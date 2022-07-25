module.exports= (sequelize, dataTypes)=>{
    let alias = "Events"
    let cols ={ 
        id:{
            type: dataTypes.INTEGER,
            primaryKey :  true
        },
        name:{
            type: dataTypes.STRING
        },
        price:{
            type: dataTypes.INTEGER
        },
        stock:{
            type: dataTypes.INTEGER
        },
        date:{
            type: dataTypes.DATE
        },
        address:{
            type: dataTypes.STRING
        },
        city:{
            type: dataTypes.STRING
        },
        event_category_id:{
            type: dataTypes.INTEGER,
            foreignKey: true 
        }
    };
    let config = {
        timestamps : false
    }
    
    const Event = sequelize.define(alias,cols,config)

    Event.associate = function(models){
        Event.belongsTo(models.Event_category,{
            as:"Event_category",
            foreignKey:"event_category_id"
        })

    Event.belongsToMany(models.Users,{
            as:"Users",
            through:"sales",
            foreignKey:"events_id",
            otherKey:"users_id",
            timestamps: false
        })
    }


    return Event 
    }