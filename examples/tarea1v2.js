//chatgt9
let myList;

const apiProducts = () => {
  const url = "https://dummyjson.com/products";
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al obtener la lista de productos");
      }
      return response.json();
    })
    .then((data) => {
      myList = data;
    })
    .catch((error) => {
      console.log("Error en la red:", error);
    });
};

apiProducts();
console.log(myList);

setTimeout(() => {
  console.log("Mi lista de productos de la api:", myList);
}, 1000);
