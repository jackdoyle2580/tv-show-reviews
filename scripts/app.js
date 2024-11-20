// Function to toggle review visibility
function toggleReview() {
    const review = document.getElementById('review');
    if (review.style.display === 'none' || !review.style.display) {
        review.style.display = 'block';
    } else {
        review.style.display = 'none';
    }
}

// Function to handle rating clicks
function rateShow(rating) {
    const result = document.getElementById('rating-result');
    result.textContent = `You rated this show ${rating} star(s)!`;
}

// Function to handle review submission
function submitReview() {
    const review = document.getElementById('user-review').value.trim(); // Get the review and remove unnecessary spaces
    const feedback = document.getElementById('user-feedback');
    
    if (review === '') {
        feedback.textContent = 'Please enter a valid review.';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = 'Thank you for your review!';
        feedback.style.color = 'green';
        
        // Optionally: Clear the textarea after submission
        document.getElementById('user-review').value = '';
    }
}


