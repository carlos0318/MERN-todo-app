const express = require('express');
const cors = require('cors');
require("dotenv").config();
require('./database/conexion');

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", require('./routes/index'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));