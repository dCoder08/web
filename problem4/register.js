document.getElementById("regForm").addEventListener("submit", function(e){
    e.preventDefault();

    let valid = true;

    let name = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let user = document.getElementById("user").value.trim();
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;

    document.querySelectorAll(".error").forEach(e => e.innerHTML = "");

    if(name === ""){
        document.getElementById("nameErr").innerHTML = "Required";
        valid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)){
        document.getElementById("emailErr").innerHTML = "Invalid Email";
        valid = false;
    }

    if(user.length < 4){
        document.getElementById("userErr").innerHTML = "Min 4 characters";
        valid = false;
    }

    // Strong password (simple rule)
    if(pass.length < 6){
        document.getElementById("passErr").innerHTML = "Weak Password";
        valid = false;
    }

    if(pass !== cpass){
        document.getElementById("cpassErr").innerHTML = "Not Matching";
        valid = false;
    }

    if(valid){
        document.getElementById("btn").innerHTML = "Registered ✔";
        document.getElementById("btn").style.background = "green";
        document.getElementById("btn").disabled = true;
    }
});
