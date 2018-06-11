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
  });

  User.associate = function(models) {
    // We're saying that a User should belong to an Occasion
    // A User can't be created without an Occasion due to the foreign key constraint
    User.belongsTo(models.Occasion, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  User.associate = (models) => {
    User.belongsToMany(models.Restriction, {
      through: 'Restriction',
      as: 'groups'
      // foreignKey: 'userId'
    });
  };

  return User;
};
