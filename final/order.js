const categories = document.querySelectorAll('.category');

categories.forEach((category) => {
    const foodItems = category.querySelector('.food-items');
    const arrowLeft = category.querySelector('.arrow-left');
    const arrowRight = category.querySelector('.arrow-right');
    const scrollStep = 150; // Adjust this value as needed

    arrowLeft.addEventListener('click', () => {
        foodItems.scrollBy({
            left: -scrollStep,
            behavior: 'smooth',
        });
    });

    arrowRight.addEventListener('click', () => {
        foodItems.scrollBy({
            left: scrollStep,
            behavior: 'smooth',
        });
    });
});


// Function to add an item to the cart
function addToCart(name, price) {
    const cartItem = { name, price };
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to display cart link
function displayCartLink() {
    const cartLink = document.querySelector('.cart-link a');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length > 0) {
        cartLink.textContent = `View Cart (${cart.length})`;
    } else {
        cartLink.textContent = 'View Cart';
    }
}

// Initialize the cart link
displayCartLink();
