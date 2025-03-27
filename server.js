const express = require('express');
const app = express();
const sequelize = require('./config/database');
const rolRoutes = require('./routes/rolRoutes');

app.use(express.json());
app.use('/roles', rolRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
  });
}).catch(err => {
  console.error('Error al conectar con la base de datos:', err);
});
