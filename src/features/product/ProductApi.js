export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const res = await fetch("http://localhost:8080/products");
    const data = await res.json();
    resolve({data});
  });
}

export function fetchProductsByFilter(filter, sort) {
  let queryString = '';
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      queryString += `${key}=${categoryValues}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  return new Promise(async (resolve) => {
    const res = await fetch("http://localhost:8080/products?"+queryString);
    const data = await res.json();
    resolve({data});
  });
}




