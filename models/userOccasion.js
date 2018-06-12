module.exports = function (sequelize, DataTypes){
    var UserOccasion = sequelize.define("UserOccasion", {

    },
  {
    timestamps: false
  })
  
    return UserOccasion;
  }
  