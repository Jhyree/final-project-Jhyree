// charity_profile.js

// Add event listener to "Volunteer Now" button
document.addEventListener("DOMContentLoaded", function() {
    var volunteerButton = document.getElementById("volunteer-button");
    volunteerButton.addEventListener("click", displayContactForm);
});

// Function to display contact form
function displayContactForm() {
    // Display or create contact form
    var contactForm = document.getElementById("contact-form");
    if (!contactForm) {
        contactForm = document.createElement("form");
        contactForm.id = "contact-form";
        // Create input fields for contact information
        var nameLabel = document.createElement("label");
        nameLabel.textContent = "Name:";
        var nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.name = "name";
        var emailLabel = document.createElement("label");
        emailLabel.textContent = "Email:";
        var emailInput = document.createElement("input");
        emailInput.type = "email";
        emailInput.name = "email";
        // Create submit button
        var submitButton = document.createElement("input");
        submitButton.type = "submit";
        submitButton.value = "Submit";
        // Append input fields and submit button to form
        contactForm.appendChild(nameLabel);
        contactForm.appendChild(nameInput);
        contactForm.appendChild(emailLabel);
        contactForm.appendChild(emailInput);
        contactForm.appendChild(submitButton);
        // Append form to the page
        document.body.appendChild(contactForm);
    } else {
        // Toggle display of existing contact form
        contactForm.style.display = (contactForm.style.display === "none") ? "block" : "none";
    }
}
       document.getElementById('volunteerButton').addEventListener('click', function() {
       var form = document.createElement('form');
       form.innerHTML = '<label for="name">Name:</label><input type="text" id="name" name="name"><br><label for="email">Email:</label><input type="email" id="email" name="email"><br><input type="submit" value="Submit">';
       document.body.appendChild(form);
});
// Example of enhancing interactivity with additional charity details
// For instance, displaying additional details when hovering over certain elements
var additionalDetails = document.getElementById("additional-details");
additionalDetails.addEventListener("mouseover", displayDetails);

function displayDetails() {
    // Display additional details
    alert("Additional charity details: ...");
}
