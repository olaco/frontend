// alert("Let's do this");

// // four different way to select the first <p> tag



// var pClass = document.getElementsByClassName("special");


// var pTagId = document.querySelector("#first");
// console.log(pTagId);

// var pTagClass = document.querySelector(".special");
// console.log(pTagClass);

// change the background color when button is clicked, make it toggle between white and pink

//select elemnt

var btn = document.querySelector("button");
var body =document.querySelector("body");

//create a boolean set to false

var isPink= false;
// setup listener

 btn.addEventListener("click", function() {
 document.body.classList.toggle("switchBtn");
 
});
 

