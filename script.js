// JavaScript to enhance the parallax effect responsiveness

document.addEventListener('DOMContentLoaded', function() {
    const parallaxElements = document.querySelectorAll('.parallax');

    function updateParallax() {
        parallaxElements.forEach(parallax => {
            let scrollPosition = window.pageYOffset;
            // Adjust the background position for parallax effect
            parallax.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }

    // Update the parallax effect when the user scrolls
    window.addEventListener('scroll', updateParallax);

    // Update parallax on resize to ensure responsiveness
    window.addEventListener('resize', updateParallax);

    // Initial call to set the parallax effect correctly
    updateParallax();
});
