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