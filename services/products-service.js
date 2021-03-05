export async function getProducts() {
  const data = require('../data.json');
  
  if(data && data.products && data.products.length && data.products.length > 0) {
    return data.products;
  }
  
  throw new Error("products config malformed");
}