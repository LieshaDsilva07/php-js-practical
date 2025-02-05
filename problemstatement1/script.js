document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    
    // Username validation (should not be empty)
    if (username === "") {
        alert("Username cannot be empty");
        return;
    }
    
    // Email validation
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email format");
        return;
    }
    
    // Phone number validation (10 digits, numeric only)
    let phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must be 10 digits and contain only numbers");
        return;
    }
    
    // Password validation (at least 7 characters, 1 capital letter, 1 digit, 1 special character)
    let passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 7 characters long, contain 1 capital letter, 1 digit, and 1 special character (&,$,#,@)");
        return;
    }
    
    // Confirm password validation
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }
    
    alert("Registration Successful!");
    document.getElementById("registrationForm").reset();
});
