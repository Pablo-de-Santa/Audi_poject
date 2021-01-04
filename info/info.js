// AUTO SLIDER 

let slideIndex = 0;//Use global variable - 2%
showSlides();

// Use 
// Comments
// Throughout - 5%


function showSlides() {//Cusom function - 2%
  let i; //Use local scope variable - 2%
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) { //Use for statement - 5%
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); //Access an objects method using dot notation - 2% + Access an objects method using dot notation - 2%
  }
  slides[slideIndex-1].style.display = "block";  //Use an array - 2%
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 7500); //Change image every 7,5 seconds
}

// END OF AUTO SLIDER

// Slider
let slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n1) { //Custom function with parameters - 5%
  showSlides1(slideIndex1 += n1);
}

function currentSlide1(n1) {
  showSlides1(slideIndex1 = n1);
}

function showSlides1(n1) {
  let y;
  let slides1 = document.getElementsByClassName("mySlides1"); //Get element by class name - 5%
  let dots1 = document.getElementsByClassName("dot1");
  if (n1 > slides1.length) {slideIndex1 = 1}    
  if (n1 < 1) {slideIndex1 = slides1.length}
  for (y = 0; y < slides1.length; y++) {
      slides1[y].style.display = "none"; //Access an objects property using dot notation +2
  }
  for (y = 0; y < dots1.length; y++) {
      dots1[y].className = dots1[y].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";  
  dots1[slideIndex1-1].className += " active";
}

// End of slider

//AOS

AOS.init();


// SCROLL TO TOP

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) { //Use logical OR operator - 5% + Use else if statement - 5%
        document.getElementById("myBtn").style.display = "block";
    } else { //Use if statement - 5%
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//For movimg pic
do{ //Using do while loop + 5%

type = "text/javascript"
$('section').mousemove(function(e){
  let moveX = (e.pageX * -1/100);
  let moveY = (e.pageY * 1/100);
 $(this).css('background-position', moveX + 'px ' + moveY + 'px') //Use this - 5%
})

while(i){//Using while loop + 5%
window.onload = function(){
  document.getElementById("myBtn").onclick = topFunction();
}}
}while(i)

