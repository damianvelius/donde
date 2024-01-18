//https://dummyjson.com/products
const getProducts = () => {
    const responsePromise = fetch("https://dummyjson.com/products");

    const jsonPromise = responsePromise.then((response) => {
        return response.json();
    });

    return jsonPromise;
};

const getProductsTwo = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const json = await response.json();

    return json;
};

const getProductsThree = () =>
    fetch("https://dummyjson.com/products").then((res) => res.json());

const getProductsTwoExample = async () => {
    const response = await fetch("https://dummyjson.com/products");

    return response.json();
};