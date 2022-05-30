const form_1 = document.querySelector('#contact')
const messageInput = document.getElementById("Message");


form_1.addEventListener('submit',(event)=>{
    
     if(validateForm_1()){
      event.preventDefault();
     }
   })
   function validateForm_1(){
    
    if(messageInput.value.trim()==''){
        setError(messageInput,"please enter a message");
        return true;
      }
      else{
        clearerror(messageInput);
        return false;
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
  
  
  
  
  