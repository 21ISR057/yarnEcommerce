// Get the product ID from the URL parameter
var urlParams = new URLSearchParams(window.location.search);
var productId = Number(urlParams.get('id'));
// Simulated product data (replace with actual product data retrieval)
var products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'This is a product description.',
        price: '$10.00',
        image: 's3.jpg'
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Another product description.',
        price: '$20.00',
        image: 's5.jpg'
    },
    {
        id: 3,
        name: 'Product 2',
        description: 'Another product description.',
        price: '$20.00',
        image: 's6.jpg'
    },
    {
        id: 4,
        name: 'Product 2',
        description: 'Another product description.',
        price: '$20.00',
        image: 'k1.jpg'
    },
    {
        id: 5,
        name: 'Product 2',
        description: 'Another product description.',
        price: '$20.00',
        image: 's8.jpg'
    },
    {
        id: 6,
        name: 'Product 2',
        description: 'Another product description.',
        price: '$20.00',
        image: 'k4.jpg'
    },
    {
        id: 7,
        name: 'Product 2',
        description: 'Another product description.',
        price: '$20.00',
        image: 's10.jpg'
    },
    {
        id: 8,
        name: 'Product 2',
        description: 'Another product description.',
        price: '$20.00',
        image: 'k6.jpg'
    },
    {
        id: 9,
        name: 'Product 2',
        description: 'Another product description.',
        price: '$20.00',
        image: 's1.jpg'
    },
    {
        id: 10,
        name: 'Product 2',
        description: 'Another product description.',
        price: '$20.00',
        image: 's2.jpg'
    },
    // Add more products as needed
];
// Find the product with the matching ID
var product;
for (var i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
        product = products[i];
        break;
    }
}
if (product) {
    // Display product details
    var productDetailsDiv = document.getElementById('productDetails');
    productDetailsDiv.innerHTML = "\n        <h1>".concat(product.name, "</h1>\n        <img src=\"").concat(product.image, "\" alt=\"Product Image\">\n        <p>").concat(product.description, "</p>\n        <p>Price: ").concat(product.price, "</p>\n    ");
}
else {
    // Product not found, display error message
    var productDetailsDiv = document.getElementById('productDetails');
    productDetailsDiv.innerHTML = "<p>Product not found.</p>";
}
