let bodyContainer = document.getElementById("bodyContainer");

let colorpickerBody = document.getElementById("colorpickerBody");

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");

let backgroundcolorText = document.getElementById("backgroundcolorText");

let backgroundColor1 = "FF90BB";
let backgroundColor2 = "A2FF86";
let backgroundColor3 = "FFF9C9";
let backgroundColor4 = "78C1F3";


function onButton1(){

    bodyContainer.style.backgroundColor = "#"+backgroundColor1;

    colorpickerBody.style.backgroundColor = "#"+backgroundColor1;

    backgroundcolorText.textContent = "#"+backgroundColor1;
}

function onButton2(){
    
    bodyContainer.style.backgroundColor = "#"+backgroundColor2;

    colorpickerBody.style.backgroundColor = "#"+backgroundColor2;

    backgroundcolorText.textContent = "#"+backgroundColor2;
}

function onButton3(){
    
    bodyContainer.style.backgroundColor = "#"+backgroundColor3;

    colorpickerBody.style.backgroundColor = "#"+backgroundColor3;

    backgroundcolorText.textContent = "#"+backgroundColor3;
}

function onButton4(){
    
    bodyContainer.style.backgroundColor = "#"+backgroundColor4; 

    colorpickerBody.style.backgroundColor = "#"+backgroundColor4;

    backgroundcolorText.textContent = "#"+backgroundColor4;
}



