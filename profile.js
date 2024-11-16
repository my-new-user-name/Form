// Function to enter edit mode
function editProfile() {
    document.getElementById("profile-content").style.display = "none";
    document.getElementById("edit-form").style.display = "block";
}



// Function to cancel edit mode
function cancelEdit() {
    document.getElementById("edit-form").style.display = "none";
    document.getElementById("profile-content").style.display = "block";
}

// Function to save profile information
function saveProfile() {
    // Get input values
    const name = document.getElementById("name").value;
    const position = document.getElementById("position").value;
    const about = document.getElementById("about").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const location = document.getElementById("location").value;

    // Update display values
    document.getElementById("displayName").innerText = name;
    document.getElementById("displayPosition").innerText = position;
    document.getElementById("displayAbout").innerText = about;
    document.getElementById("displayEmail").innerText = email;
    document.getElementById("displayPhone").innerText = phone;
    document.getElementById("displayLocation").innerText = location;

    // Exit edit mode
    cancelEdit();
}

function back() {
    document.getElementById("profile-content").style.display = "none";
    document.getElementById("edit-form").style.display = "block";
}
