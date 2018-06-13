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

  User.associate = function(models) {
    User.hasMany(models.Food, {
      onDelete: "CASCADE"
    });
  };

  User.associate = (models) =>{
    User.belongsToMany(models.Occasion, {
      through: {model: models.UserOccasion}
    })
  };

  User.associate = function(models) {
    User.hasMany(models.Occasion, {
      onDelete: "CASCADE"
    });
  };


  return User;
};
