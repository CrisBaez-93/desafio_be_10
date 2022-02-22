const express = require("express");
const router = express.Router();
const productsRoutes = require("./products/products.routes");

router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.use("/productos", productsRoutes);

module.exports = router;