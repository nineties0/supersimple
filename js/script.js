//changing HTML content
// let logoText = document.getElementById("logo-text");
// logoText.textContent ="Aptech Portal"

// //changing html style
// logoText.style.color="green";
// logoText.style.fontSize="30px";
// logoText.style.fontFamily="cursive"

//event handling
//the dom allowsyou to add event listeners to respond to user interaction

let learnBtn =document.getElementById(Learn-btn)
learnBtn.addEventListener("click", function(){
    let logoText = document.getElementById("logo-text");
logoText.textContent ="Aptech Portal"

//changing html style
logoText.style.color="green";
logoText.style.fontSize="30px";
logoText.style.fontFamily="cursive"
})

const darkModeToogle=document.getElementById("dark-mode-toggle")
const body =document.body;

darkModeToogle.addEventListener("click", function(){
    body.classList.add("dark-mode")
})
