// Define your products array
var products = [
    { id: 1, name: 'Soft Yarn', price: 10.99, image: 'yarn1.jpg' },
    { id: 2, name: 'Chunky Yarn', price: 8.99, image: 'yarn2.jpg' },
    { id: 3, name: 'Variegated Yarn', price: 12.99, image: 'yarn3.jpg' }
];
// Function to render products
function renderProducts() {
    var cardContainer = document.querySelector('.card-container');
    if (!cardContainer)
    return;
    cardContainer.innerHTML = '';
    products.forEach(function (product) {
        var card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = "\n <img src=\"".concat(product.image, "\" alt=\"Card Image\">\n <div class=\"card-content\">\n<h2 class=\"card-title\">").concat(product.name, "</h2>\n<p class=\"card-description\">$").concat(product.price.toFixed(2), "</p>\n<button class=\"add-to-cart\" onclick=\"addToCart(").concat(product.id, ")\">Add to Cart</button>\n </div>\n");
    cardContainer.appendChild(card);
    });
}
// Example function to handle adding a product to the cart
function addToCart(productId) {
    // Your cart logic here
    console.log('Added product with ID:', productId);
}
// Initial rendering of products
renderProducts();
