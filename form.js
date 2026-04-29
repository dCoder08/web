const name=document.getElementById("name");
const email=document.getElementById("email");
const password=document.getElementById("password");
const submitbtn=document.getElementById("submit-btn");
const name_Error=document.getElementById('nameError');
const email_Error=document.getElementById('emailError');
const pass_Error=document.getElementById("passwordError");
const form=document.querySelector("form");

form.addEventListener('submit',(e)=>{
    
    let vaalidEmaill=validEmail();
    let validNamee=validName();
    let validpass=validPassword()
    if(!vaalidEmaill||!validNamee||!validpass)
    {
         e.preventDefault();
    }
    

});



function validEmail()
{
    let inputemail=email.value.trim();
    if(inputemail=="")
    {
        email_Error.innerText="Email Required"
        return false;
    }
    else if(!inputemail.includes('@') || !inputemail.includes('.'))
    {
       
        email_Error.innerText="Invalid Email";
        return false;
    }

    return true;
}

function validName()
{
    let inputname=name.value.trim();
    // console.log(e);
    if(inputname=="")
    {
       
        name_Error.innerText="Enter Valid Name!";
        return false;
    }

    return true;

}

function validPassword()
{
    let inputPasswor=password.value.trim();
    pass_Error.innerText="";
    if(inputPasswor=="")
    {
        pass_Error.innerText="Enter Password";
        return false;
    }

    else if(inputPasswor.length<8)
    {
        pass_Error.innerText="Enter minimum length";
        return false;
    }

    return true;
}