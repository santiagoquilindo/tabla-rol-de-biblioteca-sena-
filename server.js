const express = require('express');
const sequelize = require('./config/database');
const rolRoutes = require('./routes/rolRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/roles', require('./routes/rolRoutes'));

const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar con la base de datos:', error);
  });
