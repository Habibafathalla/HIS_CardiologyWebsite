// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};
 
// Booking form
const form = document.querySelector('#booking')
const usernameInput = document.getElementById("UserName");
const male=document.querySelector('#Male')
const female=document.querySelector('#Female')
const mobile_phoneInput = document.querySelector('#Mobile_phone')
const emailInput = document.querySelector('#Email')
const dateInput = document.querySelector('#day')
const day=document.querySelector('#day')


form.addEventListener('submit',(event)=>{
  event.preventDefault();
   validateForm();
 })

function validateForm(){
  if(usernameInput.value.trim()==''){
    setError(usernameInput,"please enter a username");
  }
  else{
    clearerror(usernameInput);
  }
  
  if(mobile_phoneInput.value.trim()==''){
    setError(mobile_phoneInput,"please enter your number");
  }
  else if(mobile_phoneInput.value.trim().length<11 || mobile_phoneInput.value.trim().length >12){
    setError(mobile_phoneInput,"please enter a Valid number")
  }
  else{
    clearerror(mobile_phoneInput);
  }

 if(isEmailValid(emailInput.value)){
  clearerror(emailInput);
  }
  else{
    setError(emailInput,"Enter Vaild Email");
  }

  if(day.value.trim()==''){
    setError(day,"Selec day");
  }
  else{
    clearerror(day);
  }

  if(male.checked==false && female.checked==false){
    setError(male,"Select  your Gender")
  }
  else{
    clearerror(male,"Select  your Gender")
  }
  
}




function setError(element,errorMessage){
    const parent=element.parentElement;
    parent.classList.add('error');
    const paragraph=parent.querySelector('span');
    paragraph.innerHTML = errorMessage;
}
function clearerror(element){
  const parent=element.parentElement;
  parent.classList.remove('error');
}
function isEmailValid(email){
  const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return reg.test(email)
}



