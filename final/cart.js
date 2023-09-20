// Function to update the cart total
function updateCartTotal() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;
    cartItems.forEach((item) => {
        total += item.price;
    });
    document.getElementById('total-amount').textContent = total.toFixed(2);
}

// Function to display cart items
function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';

    cartItems.forEach((item) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <p>${item.name}</p>
                <p>$${item.price.toFixed(2)}</p>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayCartItems();
    updateCartTotal();

    const checkoutButton = document.getElementById('checkout-button');
    checkoutButton.addEventListener('click', () => {
        alert('Payment processing is not implemented in this example.');
    });
});
