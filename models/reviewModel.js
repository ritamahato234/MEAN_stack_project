// const { DataTypes } = require("sequelize");
// const { sequelize } = require(".");

module.exports = (sequelize,DataTypes)=>{

    const review = sequelize.define("review",{
      
        rating:{
            type:DataTypes.INTEGER
        },
        description:{
            type:DataTypes.TEXT
        }
      
    })


return review




}