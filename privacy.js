// Get elements
const acceptPrivacyPolicyCheckbox = document.getElementById('acceptPrivacyPolicy');
const submitBtn = document.getElementById('submitBtn');

// Enable/Disable Submit button based on checkbox status
acceptPrivacyPolicyCheckbox.addEventListener('change', function() {
    if (acceptPrivacyPolicyCheckbox.checked) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
});

// Handle form submission
submitBtn.addEventListener('click', function() {
    if (acceptPrivacyPolicyCheckbox.checked) {
        alert('You have successfully accepted the Privacy Policy!');
    }
});