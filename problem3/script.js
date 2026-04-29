document.getElementById("studentForm").addEventListener("submit", function(e){
    e.preventDefault();

    let valid = true;

    // Clear previous errors
    document.querySelectorAll(".error").forEach(el => el.innerHTML = "");

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = document.getElementById("age").value;
    let roll = document.getElementById("roll").value.trim();
    let photo = document.getElementById("photo").files[0];

    // Name validation
    if(name === ""){
        document.getElementById("nameError").innerHTML = "Name is required";
        valid = false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email === ""){
        document.getElementById("emailError").innerHTML = "Email is required";
        valid = false;
    }
    else if(!email.match(emailPattern)){
        document.getElementById("emailError").innerHTML = "Invalid email format";
        valid = false;
    }

    // Age validation
    if(age === ""){
        document.getElementById("ageError").innerHTML = "Age is required";
        valid = false;
    }
    else if(age < 18 || age > 60){
        document.getElementById("ageError").innerHTML = "Age must be 18-60";
        valid = false;
    }

    // Roll number validation
    let rollPattern = /^STU[0-9]{3}$/;
    if(roll === ""){
        document.getElementById("rollError").innerHTML = "Roll number required";
        valid = false;
    }
    else if(!roll.match(rollPattern)){
        document.getElementById("rollError").innerHTML = "Format: STU123";
        valid = false;
    }

    // Photo validation
    if(!photo){
        document.getElementById("photoError").innerHTML = "Upload photo";
        valid = false;
    }
    else {
        let allowed = ["image/jpeg", "image/png"];
        if(!allowed.includes(photo.type)){
            document.getElementById("photoError").innerHTML = "Only JPG/PNG allowed";
            valid = false;
        }
    }

    // If all valid
    if(valid){
        let btn = document.getElementById("submitBtn");
        btn.innerHTML = "Submitted Successfully";
        btn.classList.add("success");
        btn.disabled = true;
    }
});
