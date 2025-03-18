let element = {
    dragContainer: document.getElementById('dropContainer'),
    imgcontainer: document.getElementById('avatar'),
    text: document.getElementById('sometext'),
    fileInput: document.getElementById('fileUpload'),
    form: document.getElementById("form"),

}
const formdata = {
    image: "",
    username: "",
    email: "",
    githubusername : ""
}




//listening for clicks on the dragcontainer yh i think.....:)
function HandleFileInput(){
    element.dragContainer.addEventListener('click', () => {
        element.fileInput.click();
    });
    
    
    element.fileInput.addEventListener('change', (event) => {
        const files = event.target.files;
        if(files.length >= 0 && files[0].type.startsWith('image/')){
            element.imgcontainer.src = URL.createObjectURL(files[0]);
            element.text.style.display = 'none';
            return;    
        }
        element.text.textContent = "Please enter an image file"
        element.text.style.color = 'red'

     
    });
}
element.form.addEventListener('submit', (e) => {
    e.preventDefault();
    GetUserData();
    ClearScreen();
    
    
});

HandleFileInput();






function GetUserData(){


    formdata.image = element.imgcontainer.src;
    formdata.username = document.getElementById("name").value;
    formdata.email = document.getElementById("email").value;
    formdata.githubusername = document.getElementById("githubusername").value;


     // CONERTING TO JSON HERE OOOOOOOOOO:)
     let items=JSON.parse(localStorage.getItem('userData'))?? {}
    
     items[formdata.username]=formdata
     console.log(items)
     // STORED IN LOCAL STORAGE HERE OOOOOO
     localStorage.setItem('userData',JSON.stringify(items));    
}
function ClearScreen() {
    let submittedTextcontainer = document.createElement("div");
    let submittedText = document.createElement("p");
    submittedText.textContent = "Your form has been successfully submitted";
    submittedTextcontainer.appendChild(submittedText);
    
    // Apply styles to center the container and set background color
    submittedTextcontainer.style.display = 'flex';
    submittedTextcontainer.style.justifyContent = 'center';
    submittedTextcontainer.style.alignItems = 'center';
    submittedTextcontainer.style.height = '100vh';
    
    document.body.innerHTML = '';
    document.body.appendChild(submittedTextcontainer);

    setTimeout(() => {
        location.reload();
    }, 3000);
}
