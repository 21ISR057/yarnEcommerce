const form = document.querySelector('#form');
const username = document.querySelector('#username');
const pass = document.querySelector('#pass');

form.addEventListener('submit',(e)=>{

    if(!validate()){
        e.preventDefault();
    }
})
 function validate(){
    const usernameval=username.value.trim();
    const passval=pass.value.trim();
    let succes=true;
    var lower=/[a-z]/g;
    var upper=/[A-Z]/g;
    var num=/[0-9]/g;
    if(usernameval===''){
        succes=false;
        setError(username,"Username is required");
    }
    else{
        setSucces(username);
     }
    if(passval===''){
        succes=false;
        setError(pass,"Password is required");
    }
    else if (passval.match(lower))
    {
        succes=false
        setError(pass,"Should have ");
    }
    // else if(!validatePass(pass)){
    //     succes=false
    //     setError(pass,"Should have'aA1'");
    // }
    else if(passval.length<=8){
        succes=false
        setError(pass,"Must have atleast 8 character");
    }
    else{
        setSucces(pass);
         }
    return succes;
 }

 const validatePass = (pass) => {
    return String(pass)
    .match(/^[A-Za-z]\w{7,14}$/) ;
  };

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

