const { obtenerRoles, crearRol } = require('./services/rolService');

const getAllRoles = async (req, res) => {
  try {
    const roles = await obtenerRoles();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createRol = async (req, res) => {
  try {
    const { nombre } = req.body;
    const nuevoRol = await crearRol(nombre);
    res.status(201).json(nuevoRol);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllRoles,
  createRol,
};
