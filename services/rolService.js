const Rol = require('../models/rol');

const obtenerRoles = async () => {
    return await Rol.findAll();
};

const crearRol = async (nombre) => {
    return await Rol.create({ nombre });
};

module.exports = {
    obtenerRoles,
    crearRol,
};
