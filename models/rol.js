module.exports = (sequelize, DataTypes) => {
  const Rol = sequelize.define('Rol', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'roles',
    timestamps: false
  });

  Rol.associate = (models) => {
    Rol.hasMany(models.Usuario, { foreignKey: 'rol_id' });
  };

  return Rol;
};