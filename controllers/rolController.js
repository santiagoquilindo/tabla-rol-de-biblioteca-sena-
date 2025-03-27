const Rol = require('../models/rol');

exports.getAllRoles = async (req, res) => {
  try {
    const roles = await Rol.findAll();
    res.json(roles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createRol = async (req, res) => {
  try {
    const { nombre } = req.body;
    const rol = await Rol.create({ nombre });
    res.status(201).json(rol);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
