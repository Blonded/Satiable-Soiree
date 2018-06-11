var user = require("./user.js");
var occasion = require("./occasion.js");

module.exports = function(sequelize, DataTypes) {
  var Food = sequelize.define("Food", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  });

  Food.associate = function(user) {
    Food.belongsTo(user.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Food.associate = function(occasion) {
    Food.belongsTo(occasion.Occasion, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Food;
};
