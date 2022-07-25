module.exports= (sequelize, dataTypes)=>{
    let alias = "Sales"
    let cols ={
        id:{
            type: dataTypes.INTEGER,
            primaryKey :  true
        },
        users_id:{
            type: dataTypes.INTEGER,
            foreignKey: true 
        },
        events_id:{
            type: dataTypes.INTEGER,
            foreignKey: true 
        },
        quality:{
            type:dataTypes.INTEGER,
        },
        total:{
            type:dataTypes.DECIMAL
        },
        date:{
            type:dataTypes.DATE
        }
    };
    let config = {
        timestamps : false
    }
    
    const Sales = sequelize.define(alias,cols,config)
    return Sales 
    }