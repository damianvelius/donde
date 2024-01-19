//const productsPromise = productsAPI.fetchProducts()
//const resultPromise = productsAPI.createProduct({ name: "mesa", price: 200})
//Consigna:
/*-Hacer 
funcion que traia una promise de un listado de productos 
funcion que le pase y devuelva el detalle del producto con ese ID, 
funcion que pase un ID y borre el producto.
*/

//POST
//GET
//PUT
//PATCH
//DELETE

const funcionsApiProducts = {
  orderApiProducts: async () => {
    const urlApiProducts = "https://dummyjson.com/products";
    const promiseProducts = await fetch(urlApiProducts);
    const productsList = await promiseProducts.json();

    console.log("El listado de productos :", productsList);

    return productsList;
  },

  orderApiProduct: async (idProduct) => {
    const urlId = `https://dummyjson.com/products/${idProduct}`;
    const promiseProduct = await fetch(urlId);
    const productInfo = await promiseProduct.json();

    console.log("Tu Producto :", productInfo);

    return productInfo;
  },

  orderApiProductDelete: async (idProduct) => {
    const urlId = `https://dummyjson.com/products/${idProduct}`;
    const promiseProductDelete = fetch(urlId, {
      method: "DELETE",
    });
    console.log("Tu producto eliminado");
    return promiseProductDelete;
  },
};

funcionsApiProducts.orderApiProduct(5);
