// To get the form input elements by using query selector 
let personNameInput=document.querySelector('#fullName') as HTMLInputElement;
let personNumberInput=document.querySelector('#phone-number') as HTMLInputElement;
let imageInput=document.querySelector('#user-image') as HTMLInputElement;
let educationalBgInput=document.querySelector('#educational-bg') as HTMLTextAreaElement;
let experienceInput=document.querySelector('#experience') as HTMLTextAreaElement;
let skillsInput=document.querySelector('#skills') as HTMLTextAreaElement;
let color1Input=document.querySelector('#resume-color1') as HTMLInputElement;
let color2Input=document.querySelector('#resume-color2') as HTMLInputElement;
let submitButton=document.querySelector('.submit-button') as HTMLButtonElement;
let emailInput=(document.querySelector('#email') as HTMLInputElement);
let userImageURl:string;
// -------------------------------
// taking image as input and storing it as url in userImageURL
imageInput.addEventListener('change' ,(event)=>{
let targetImage=imageInput.files?.[0];
  userImageURl=targetImage ? URL.createObjectURL(targetImage) : '';  
} )
// if colors are not chosen the default colors will proceed
if(color1Input.value=='#000000'){
  color1Input.value='#f78686';
}
if(color2Input.value=='#000000'){
  color2Input.value='#8699f7';
}
// -----------------------
// making an event listener for submit button to change the html of the page to the resume 
submitButton.addEventListener('click',(event)=>{
  if(!userImageURl){
    userImageURl='images/blank-user.jpeg'
  }
 if(personNameInput.value && userImageURl && personNumberInput.value && emailInput.value && educationalBgInput.value && skillsInput.value && experienceInput.value ){
  let bodyElement=document.querySelector('body') as HTMLBodyElement
  if(bodyElement){
  bodyElement.innerHTML=`
  <div class="main-container">
      <div class="personal-info-container" style=" background-color:${color1Input.value}">
  <img src="${userImageURl}" alt="USER IMAGE" class="person-image">
        <h2 class="personal-info-heading">Personal Information</h2>
        <p class="user-num"> <strong>Phone : </strong> ${personNumberInput.value}</p>
        <p class="user-email"> <strong>Email : </strong> ${emailInput.value}</p>
      </div>
      <div class="educational-container" style=" background-color:${color2Input.value}">
        <h1 class="user-name">${personNameInput.value}</h1>
        <h2 class="education-heading">Education</h2>
        <p class="education-p">${educationalBgInput.value}</p>
        <h2 class="skills-heading">Skills</h2>
        <p class="skills-p">${skillsInput.value}</p>
        <h2 class="experience-heading">Experience</h2>
        <p class="experience-p">${experienceInput.value}</p>
      </div>
      </div>
      `
  }
}
}
);  


