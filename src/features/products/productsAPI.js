const products = [
    {id: 1, category: 'Phones', name: 'Samsung Galaxy S8', price: 299000},
    {id: 2, category: 'CPU', name: 'AMD Ryzen 5600 X', price: 250000},
    {id: 3, category: 'CPU', name: 'Intel Core9', price: 189000},
];

export function getProducts() {
    return new Promise(function (resolve){
        setTimeout(function (){
            resolve(products);
        }, 2000)
    });
}

export function createProduct() {
    //
}

export function updateProduct() {

}