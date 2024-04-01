document.addEventListener("DOMContentLoaded", function() {
    // Example: Adding event listeners for more complex logic in the future
    document.querySelector('.button').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const targetPage = this.getAttribute('href'); // Get the link target
            // You can add more logic here before navigating
            window.location.href = targetPage; // Navigate to the linked page
        });
    });
});
