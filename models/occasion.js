module.exports = function(sequelize, DataTypes) {
  var Occasion = sequelize.define("Occasion", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    zipcode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5]
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    starttime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    endtime: {
      type: DataTypes.TIME,
      allowNull: false
    },
  }, {
		  timestamps: false
    });

  Occasion.associate = function(user) {
    Occasion.belongsTo(user.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Occasion.associate = function(models) {
    Occasion.hasMany(models.Food, {
      onDelete: "CASCADE",
      foreignKey: "OccasionId"
    });
  };

  Occasion.associate = (models) => {
    Occasion.belongsToMany(models.User, {
      through: {model: models.UserOccasion}
    })
  };

  return Occasion;
};
