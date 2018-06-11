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
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  });

  Food.associate = function(models) {
    Food.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Food.associate = function(models) {
    Food.belongsTo(models.Occasion, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Food;
};
