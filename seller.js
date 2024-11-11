document.getElementById('shop-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const shopName = document.getElementById('shop-name').value;
    const pickupAddress = document.getElementById('pickup-address').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const confirmationDiv = document.getElementById('shop-confirmation');
    confirmationDiv.classList.remove('hidden');
    confirmationDiv.innerHTML = `
        <h2>Shop Confirmation</h2>
        <p>Shop Name: ${shopName}</p>
        <p>Pickup Address: ${pickupAddress}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
    `;
    document.getElementById('shop-form').reset();
});

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const identityProof = document.getElementById('identity-proof').files[0].name;
    const businessLicense = document.getElementById('business-license').files[0].name;
    const salesTaxRegistration = document.getElementById('sales-tax-registration').files[0].name;

    const confirmationDiv = document.getElementById('registration-confirmation');
    confirmationDiv.classList.remove('hidden');
    confirmationDiv.innerHTML = `
        <h2>Registration Confirmation</h2>
        <p>Identity Proof: ${identityProof}</p>
        <p>Business License: ${businessLicense}</p>
        <p>Sales Tax Registration: ${salesTaxRegistration}</p>
    `;
    document.getElementById('registration-form').reset();
});

document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const productTitle = document.getElementById('product-title').value;
    const productDescription = document.getElementById('product-description').value;
    const price = document.getElementById('price').value;
    const productImage = document.getElementById('product-image').files[0].name;

    const confirmationDiv = document.getElementById('product-confirmation');
    confirmationDiv.classList.remove('hidden');
    confirmationDiv.innerHTML = `
        <h2>Product Confirmation</h2>
        <p>Product Title: ${productTitle}</p>
        <p>Description: ${productDescription}</p>
        <p>Price: $${parseFloat(price).toFixed(2)}</p>
        <p>Product Image: ${productImage}</p>
    `;

    // Show success message
    const successMessage = document.getElementById('success-message');
    successMessage.classList.remove('hidden');

    document.getElementById('product-form').reset();
});