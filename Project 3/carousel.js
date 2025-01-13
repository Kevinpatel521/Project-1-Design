document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.carousel-item');
    let activeIndex = 0;

    function cycleItems() {
        const activeItem = document.querySelector('.carousel-item.active');
        activeItem.classList.remove('active');
        activeIndex = (activeIndex + 1) % items.length;
        items[activeIndex].classList.add('active');
    }

    setInterval(cycleItems, 2000); // Rotate carousel items every 2 seconds
});
