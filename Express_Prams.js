// Getting a Single Product !

app.get(`/api/products/:productsId`, (req, res) => {
  const product_id = +req.params.productsId;
  const singleProduct = products.find((product) => {
    return product.id === product_id;
  });

  if (singleProduct) {
    res.json(singleProduct);
    return;
  }
  res.json({ erro: "404 couldnt find the products !" });
});
