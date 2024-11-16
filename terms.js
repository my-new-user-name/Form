// Get elements
const acceptCheckbox = document.getElementById('acceptCheckbox');
const submitBtn = document.getElementById('submitBtn');

// Enable/Disable Submit button based on checkbox status
acceptCheckbox.addEventListener('change', function() {
    if (acceptCheckbox.checked) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
});

// Handle form submission
submitBtn.addEventListener('click', function() {
    if (acceptCheckbox.checked) {
        alert('You have successfully accepted the Terms and Conditions!');
    }
});