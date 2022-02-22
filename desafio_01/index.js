const express = require('express');

const path = require("path");
const { use } = require('./routers/index');
const productos = require("./data/data")

const apiRoutes = require("./routers/index");

const app = express();
const PORT = process.env.PORT || 8080;

////////////////

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

////////////////

app.use("/api", apiRoutes);


const connectedServer = app.listen(PORT, ()=> {
  console.log(`Server is up and running on port ${PORT}`);
});

connectedServer.on('error', (error) => {
  console.error('Error: ', error);
})