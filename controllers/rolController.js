const db = require("../models");
const Rol = db.Rol;

exports.getAllRoles = async (req, res) => {
  try {
    const roles = await Rol.findAll();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createRol = async (req, res) => {
  try {
    const { nombre } = req.body;
    const nuevoRol = await Rol.create({ nombre });
    res.status(201).json(nuevoRol);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
