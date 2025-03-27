module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    telefono: {
      type: DataTypes.STRING
    },
    rol_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'roles',
        key: 'id'
      }
    }
  }, {
    tableName: 'usuarios',
    timestamps: false
  });

  Usuario.associate = (models) => {
    Usuario.belongsTo(models.Rol, { foreignKey: 'rol_id' });
  };

  return Usuario;
};