// Select all the star elements from star1 to star12
const stars = [
    document.querySelector('.star1'),
    document.querySelector('.star2'),
    document.querySelector('.star3'),
    document.querySelector('.star4'),
    document.querySelector('.star5'),
    document.querySelector('.star6'),
    document.querySelector('.star7'),
    document.querySelector('.star8')
];

let lastScrollTop = 0; // Store last scroll position

// Listen for the scroll event
window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY; // Current scroll position
    
    // Loop through each star element
    stars.forEach((star) => {
        // If scrolling down (current scroll > last scroll position)
        if (currentScroll > lastScrollTop) {
            // Only trigger upward animation if not already animated
            if (!star.classList.contains('animated')) {
                star.classList.add('animated');
                star.classList.remove('reverse'); // Ensure reverse animation is not active
            }
        } 
        // If scrolling up (current scroll < last scroll position)
        else {
            // Only trigger downward animation if already animated
            if (star.classList.contains('animated')) {
                star.classList.add('reverse');
                star.classList.remove('animated'); // Remove upward animation class
            }
        }
    });
    
    // Update last scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
});
