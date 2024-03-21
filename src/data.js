export const getProductData = () => {
  let products = [];
  for (let i = 0; i < 10; i++) {
    products.push({ id: i, name: "游戏" + i });
  }

  return products;
};
