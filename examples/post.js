const createProduct = (product) => {
    const jsonproduct = JSON.stringify(product);
    const promiseRes = fetch("https://dummyjson.com/products", {
        headers: { "Content-Type": "application/json" },
        method: 'POST',
        body: jsonproduct,
    })
    return promiseRes
};


const editProduct = (id, propiedades) => {
    const jsonProperty = JSON.stringify(propiedades)
    const idUrl = `https://dummyjson.com/products/${id}`
    const promiseRes = fecth(idUrl, {
        headers: { "Content-Type": "application/json" },
        method: "PATCH",
        body: jsonProperty,
    })
    return promiseRes

}

//Metodos:
//POST	Create
//GET	Read	https://dummyjson.com/products hace un listado de todos los productos, https://dummyjson.com/products/1234 muestra solo ese producto
//PUT	Update/Replace
//PATCH	Update/Modify
//DELETE Delete
//Consigna:
//-Hacer una funcion que traiga una promise de un listado de productos - funcion que le pase y devuelva el detalle del producto con ese ID, funcion que pase un ID y borre el producto.


//const productsPromise = ProductsAPI.fetchProducts() //const resultPromise = ProductsAPI.createProduct({ name: "mesa", price: 200})