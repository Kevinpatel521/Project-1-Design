// Get the button
const backToTopButton = document.getElementById("back-to-top");

// Listen for scroll events on the window
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Listen for clicks on the button to scroll up smoothly
backToTopButton.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});
