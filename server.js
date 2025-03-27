const express = require('express');
const app = express();
const db = require('./models');
const rolRoutes = require('./routes/rolRoutes');

app.use(express.json());
app.use('/roles', rolRoutes);

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
  });
});
