require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const {check,sequelize} = require("./src/common/db/Conn");
const CreateUser = require("./src/User/route");

const Student = require("./src/common/model/User")

app.use(bodyParser.json());
app.use(cors({
    origin: true,
  }));app.use(CreateUser);
app.listen(process.env.PORT, ()=>{
    console.log(`running on port: ${process.env.PORT}`)
});