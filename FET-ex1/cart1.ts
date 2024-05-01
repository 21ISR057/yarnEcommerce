interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
}

let cart: Product[] = [];

// Function to add a product to the cart
function addToCart(product: Product) {
    cart.push(product);
    updateCart();
    saveCart();
}

// Function to update the cart display
function updateCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';

    cart.forEach((product) => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            // <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.price}</p>
        `;
        cartItemsDiv.appendChild(itemDiv);
    });
}

// Function to save the cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to load the cart from localStorage
function loadCart() {
    const cartString = localStorage.getItem('cart');
    if (cartString) {
        cart = JSON.parse(cartString);
        updateCart();
    }
}

// Initial load of the cart
loadCart();
