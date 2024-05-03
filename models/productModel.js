// const { DataTypes } = require("sequelize");
// const { sequelize } = require(".");

module.exports = (sequelize,DataTypes)=>{

    const product = sequelize.define("product",{
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        price:{
            type:DataTypes.INTEGER
        },
        description:{
            type:DataTypes.TEXT
        },
        published:{
            type:DataTypes.BOOLEAN
        }
    })


return product




}