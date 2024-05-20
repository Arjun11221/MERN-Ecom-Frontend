export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const res = await fetch("http://localhost:8080/products");
    const data = await res.json();
    resolve({data});
  });
}
