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
  }, {
    timestamps: false
  });

  Food.associate = function(user) {
    Food.belongsTo(user.User, {
      foreignKey: "UserId",
      onDelete: "CASCADE"
    });
  };

  Food.associate = function(models) {
    Food.belongsTo(models.Occasion, {
      foreignKey: "OccasionId",
      onDelete: "CASCADE"
    });
  };

  return Food;
};
