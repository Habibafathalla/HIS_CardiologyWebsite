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

const dateInput = document.querySelector('#day')
const day=document.querySelector('#day')


form.addEventListener('submit',(event)=>{
  event.preventDefault();
   validateForm();
 })

function validateForm(){
  
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



