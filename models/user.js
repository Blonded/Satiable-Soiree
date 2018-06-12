module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    allergies: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  }, {
    timestamps: false
  });

  // User.associate = function(models) {
  //   // We're saying that a User should belong to an Occasion
  //   // A User can't be created without an Occasion due to the foreign key constraint
  //   User.belongsTo(models.Occasion, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  User.associate = function(models) {
    User.hasMany(models.Food, {
      onDelete: "cascade"
    });
  };

  User.associate = (models) =>{
    User.belongsToMany(models.Occasion, {
      through: {model: models.UserOccasion}
    })
  };

  return User;
};
