const mongoose = require('mongoose');

mongoose
    .connect(process.env.URI)
    .then(() => console.log('db conectada 🚀'))
    .catch(err => console.log('Fallo la conexión' + err));