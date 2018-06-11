module.exports = function(sequelize, DataTypes) {
    var Restriction = sequelize.define("Restriction", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });
  
    Restriction.associate = (models) => {
      Restriction.belongsToMany(models.User, {
        through: 'User',
        as: 'groups'
        // foreignKey: 'RestrictionId'
      });
    };
  
    return Restriction;
  };
  