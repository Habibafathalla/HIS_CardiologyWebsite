const form_1 = document.querySelector('#contact')
const messageInput = document.getElementById("Message");


form_1.addEventListener('submit',(event)=>{
    event.preventDefault();
     validateForm_1();
   })
   function validateForm_1(){
    
    if(messageInput.value.trim()==''){
        setError(messageInput,"please enter a message");
      }
      else{
        clearerror(messageInput);
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
  
  
  