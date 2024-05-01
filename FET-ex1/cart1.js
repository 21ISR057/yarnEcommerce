var cart = [];
// Function to add a product to the cart
function addToCart(product) {
    cart.push(product);
    updateCart();
    saveCart();
}
// Function to update the cart display
function updateCart() {
    var cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';
    cart.forEach(function (product) {
        var itemDiv = document.createElement('div');
        itemDiv.innerHTML = "\n            <img src=\"".concat(product.name, "\">\n            <h3>").concat(product.name, "</h3>\n            <p>").concat(product.description, "</p>\n            <p>").concat(product.price, "</p>\n        ");
        cartItemsDiv.appendChild(itemDiv);
    });
}
// Function to save the cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
// Function to load the cart from localStorage
function loadCart() {
    var cartString = localStorage.getItem('cart');
    if (cartString) {
        cart = JSON.parse(cartString);
        updateCart();
    }
}
// Initial load of the cart
loadCart();
