// Sample yarn products
interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

const products: Product[] = [
    { id: 1, name: 'Soft Yarn', price: 10.99, image: 'yarn1.jpg' },
    { id: 2, name: 'Chunky Yarn', price: 8.99, image: 'yarn2.jpg' },
    { id: 3, name: 'Variegated Yarn', price: 12.99, image: 'yarn3.jpg' }
];

interface CartItem {
    id: number;
    quantity: number;
}

let cart: CartItem[] = [];

function renderCart() {
    const cartItems = document.getElementById('cart-items')!;
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id)!;
        total += product.price * item.quantity;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div>
                <strong>${product.name}</strong><br>
                Price: $${product.price}<br>
                Quantity: ${item.quantity}
            </div>
            <button class="btn" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });

    document.getElementById('cart-total')!.innerText = total.toFixed(2);
}

function addToCart(productId: number) {
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }
    renderCart();
}

function removeFromCart(productId: number) {
    cart = cart.filter(item => item.id !== productId);
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
