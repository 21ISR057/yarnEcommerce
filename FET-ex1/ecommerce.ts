// Define your interfaces if needed
interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

// Define your products array
const products: Product[] = [
    { id: 1, name: 'Soft Yarn', price: 10.99, image: 'yarn1.jpg' },
    { id: 2, name: 'Chunky Yarn', price: 8.99, image: 'yarn2.jpg' },
    { id: 3, name: 'Variegated Yarn', price: 12.99, image: 'yarn3.jpg' }
];

// Function to render products
function renderProducts(): void {
    const cardContainer = document.querySelector('.card-container');
    if (!cardContainer) return;

    cardContainer.innerHTML = '';

    products.forEach((product) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${product.image}" alt="Card Image">
            <div class="card-content">
                <h2 class="card-title">${product.name}</h2>
                <p class="card-description">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        cardContainer.appendChild(card);
    });
}

// Example function to handle adding a product to the cart
function addToCart(productId: number): void {
    // Your cart logic here
    console.log('Added product with ID:', productId);
}

// Initial rendering of products
renderProducts();
