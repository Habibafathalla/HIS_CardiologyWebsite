const formb = document.querySelector('#form-box') 
const form = document.querySelector('#register')
const usernameInput = document.getElementById("UserName");
const F_NInput = document.querySelector('#First_Name')
const L_NInput = document.querySelector('#Last_Name')
const mobile_phoneInput = document.querySelector('#Mobile_phone')
const emailInput = document.querySelector('#Email')
const passwordInput = document.querySelector('#password')
// const dateInput = document.querySelector('#date')
const male=document.querySelector('#Male')
const female=document.querySelector('#Female')
const namesdiv=document.querySelector('#input-N') 
// const date=document.querySelector('#date')


var DOB=document.querySelector('#date')
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
DOB.max=curdate




form.addEventListener('submit',(event)=>{
 console.log( DOB.value)
 event.preventDefault();
  validateForm();
})

function validateForm(){
  if(F_NInput.value.trim()=='' || L_NInput.value.trim()==''){
  setError(namesdiv,"Please enter your name");
  }
  else{
    clearerror(namesdiv);
  }
  if(usernameInput.value.trim()==''){
    setError(usernameInput,"Please enter a username");
  }
  else{
    clearerror(usernameInput);
  }
  if(mobile_phoneInput.value.trim()==''){
    setError(mobile_phoneInput,"Please enter your number");
  }
  else if(mobile_phoneInput.value.trim().length<11 || mobile_phoneInput.value.trim().length>11){
  
    setError(mobile_phoneInput,"Please enter a Valid number")
  }
  else{
    clearerror(mobile_phoneInput);
  }

 if(emailInput.value.trim()==''){
  setError(emailInput,"Enter Your Email");
  }
  else if(!(isEmailValid(emailInput.value))){
    setError(emailInput,"Enter Vaild Email");
  }
  else{
    clearerror(emailInput)
  }

  if(passwordInput.value.trim()==''){
    setError(passwordInput,"Please enter your Password");
  }
  else{
    clearerror(passwordInput);
  }
  if(DOB.value.trim()==''){
    setError(DOB,"Select your birth date");
  }
  else 
  {
    clearerror(DOB);
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
  if(navigation.classList.contains("active")){
    toggle.style.left="300px";
}
else{
  toggle.style.left="80px";
}
};

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
var loginbtn = document.getElementById("loginbtn");
var regbtn = document.getElementById("regbtn");
function register() {
  x.style.left = "-400px";
  y.style.left = "95px";
  z.style.left = "165px";
  loginbtn.style.color="var(--black1)";
  regbtn.style.color="#fff";
}
function login() {
  x.style.left = "100px";
  y.style.left = "600px";
  z.style.left = "0px";
  loginbtn.style.color="#fff";
  regbtn.style.color="var(--black1)";
}

var modal = document.getElementById("login-form");
function closeform() {
  modal.style.display = "none";
}
