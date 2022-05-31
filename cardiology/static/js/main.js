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
const day=document.querySelector('#day')
const doctors = document.querySelector('#doctors')
const Time = document.querySelector('#Time')
const TimeInput = document.getElementById("df");
const doctorInput = document.getElementById("hf");


form.addEventListener('submit',(event)=>{
  if (validateForm()){
    event.preventDefault();
   }
  })
function validateForm(){
  var flag = false;
  try{
  if(doctors.value=='Select your doctor'){
    setError(doctorInput,"Please select your doctor");
    flag = true;
  }
  else{
    clearerror(doctorInput);
    
  }
  if(day.value.trim()==''){
    setError(day,"Select day");
    flag = true;
  }
  else{
    clearerror(day);
    
  }
  return flag}
  catch{
  if(Time.value=='Select Time'){
    setError(TimeInput,"Please select Time");
    return true;
    
  }
  else{
    clearerror(TimeInput);
   return false;
  }}

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
// input date validation
var DOB=document.querySelector('#day')
var date=new Date()
var tdate=date.getDate()
var month=date.getMonth()+1

if(tdate<10){
  tdate="0"+tdate
}
if(month<10){
  month="0"+month
}
var year=date.getUTCFullYear()
var curdate=year+"-"+month+"-"+tdate
DOB.min=curdate



