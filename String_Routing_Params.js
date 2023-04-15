//  Complex Params Example !!!

app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);

  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, +limit);
  }

  if (sortedProducts.length === 0) {
    res.status(200).json(products);
    return;
  }
  res.status(200).json(sortedProducts);
  return;
});
