var products = [
    { id: 1, name: 'Soft Yarn', price: 10.99, image: 'yarn1.jpg' },
    { id: 2, name: 'Chunky Yarn', price: 8.99, image: 'yarn2.jpg' },
    { id: 3, name: 'Variegated Yarn', price: 12.99, image: 'yarn3.jpg' }
];
var cart = [];
function renderCart() {
    var cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    var total = 0;
    cart.forEach(function (item) {
        var product = products.find(function (p) { return p.id === item.id; });
        total += product.price * item.quantity;
        var cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = "\n            <img src=\"".concat(product.image, "\" alt=\"").concat(product.name, "\">\n            <div>\n                <strong>").concat(product.name, "</strong><br>\n                Price: $").concat(product.price, "<br>\n                Quantity: ").concat(item.quantity, "\n            </div>\n            <button class=\"btn\" onclick=\"removeFromCart(").concat(item.id, ")\">Remove</button>\n        ");
        cartItems.appendChild(cartItem);
    });
    document.getElementById('cart-total').innerText = total.toFixed(2);
}
function addToCart(productId) {
    var existingItem = cart.find(function (item) { return item.id === productId; });
    if (existingItem) {
        existingItem.quantity++;
    }
    else {
        cart.push({ id: productId, quantity: 1 });
    }
    renderCart();
}
function removeFromCart(productId) {
    cart = cart.filter(function (item) { return item.id !== productId; });
    renderCart();
}
function clearCart() {
    cart = [];
    renderCart();
}
function checkout() {
    // Implement checkout logic here
    alert('Checkout functionality not implemented in this example.');
}
// Initial render
renderCart();
