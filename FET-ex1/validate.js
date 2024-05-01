const form = document.querySelector('#form');
const names = document.querySelector('#names');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const ph = document.querySelector('#ph');
const pass = document.querySelector('#pass');
const cpass = document.querySelector('#cpass');

form.addEventListener('submit',(e)=>{

    if(!validate()){
        e.preventDefault();
    }
})
 function validate(){
    const nameval=names.value.trim();
    const usernameval=username.value.trim();
    const emailval=email.value.trim();
    const phval=ph.value.trim();
    const passval=pass.value.trim();
    const cpassval=cpass.value.trim();
    let succes=true;

    if(nameval===''){
        succes=false;
        setError(names,"Name is required");
    }
    else{
        setSucces(names);
    }

    if(usernameval===''){
        succes=false;
        setError(username,"Username is required");
    }
    else{
        setSucces(username);
     }
    
    if(emailval===''){
        succes=false;
        setError(email,"Email is required");
    }
    else if(!validateEmail(emailval)){
        succes=false;
        setError(email,"Invalid email")
    }
    else{
        setSucces(email);
    }
    if(phval===''){
        succes=false;
        setError(ph,"Phone number is required");
    }
    else if(phval.length<10){
        succes=false;
        setError(ph,"Phone number is invalid");
    }
    else{
        setSucces(ph);
        }

    if(passval===''){
        succes=false;
        setError(pass,"Password is required");
    }
    else if(passval.length<=8){
        succes=false
        setError(pass,"Must have atleast 8 character");
    }
    else{
        setSucces(pass);
         }

    if(cpassval===''){
        succes=false;
        setError(cpass,"Password is required");
    }
    else if(cpassval!==passval){
        succes=false
        setError(cpass,"Password not match");
    }
    else{
        setSucces(cpass);
         }
    return succes;
 }

 const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
//   const validatePass = (pass) => {
//     return String(pass)
//     .match(/^[A-Za-z]\w{7,14}$/) ;
//   };

 function setError(element,message){
    var inputGroup=element.parentElement;
    var errorGroup=inputGroup.querySelector('.error');
    errorGroup.innerText= message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
 }

 function setSucces(element){
    var inputGroup=element.parentElement;
    var errorGroup=inputGroup.querySelector('.error');
    errorGroup.innerText= '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
 }

