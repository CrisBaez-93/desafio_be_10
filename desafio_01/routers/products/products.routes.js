const express = require("express");
const router = express.Router();
const { products } = require("../../data/data");

/* router.get("/", (req, res) => {
  let productsResponse = [...products];
  return res.json({ success: true, result: productsResponse });
}); */

router.get("/", (req, res)=>{
  res.render("../../public/index", { products })
})

router.post("/productos", (req, res)=>{
  products.push(req.body);
  res.redirect("/");
})

router.get("/:productId", (req, res) => {
  const { productId } = req.params;
  const product = products.find((product) => product.id === +productId);
  if (!product) {
    return res.json({
      success: false,
      error: `El producto ID ${productId} no existe`,
    });
  }
  return res.json({ success: true, result: product });
});

router.post("/", (req, res) => {
  const { name, price, image } = req.body;
  if (!name || !price || !image) {
    return res.json({ succes: false, error: "Formato erroneo" });
  }
  const newProduct = {
    id: products.length + 1,
    name,
    price,
    image,
  };
  products.push(newProduct);
  return res.json({ success: true, result: newProduct });
});

router.put("/:productId", (req, res) => {
  const {
    params: { productId },
    body: { name, price, image },
  } = req;
  if (!name || !price || !image) {
    return res.json({ success: false, error: "Formato erroneo" });
  }
  const productIndex = products.findIndex(
    (product) => product.id === +productId
  );
  if (productIndex < 0)
    return res.json({
      success: false,
      error: `El producto ID ${productId} no existe`,
    });
  const newProduct = {
    ...products[productIndex],
    name,
    price,
    image,
  };
  products[productIndex] = newProduct;
  return res.json({ success: true, result: newProduct });
});

router.delete("/:productId", (req, res) => {
  const { productId } = req.params;
  const productIndex = products.findIndex(
    (product) => product.id === +productId
  );
  if (productIndex < 0)
    return res.json({
      success: false,
      error: `El producto ID ${productId} no existe`,
    });
  products.splice(productIndex, 1);
  return res.json({
    success: true,
    result: `¡El producto ${productId} ha sido eliminado!`,
  });
});

module.exports = router;
