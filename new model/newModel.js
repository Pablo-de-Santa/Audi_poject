//AOS

AOS.init();

// Cool Paralax
let layer1 = document.getElementById('layer1')
scroll = window.pageYOffset;
document.addEventListener('scroll', function(e) {
  let offset = window.pageYOffset;
  scroll = offset;
  layer1.style.width = (100 + scroll/5) + '%';
});

let layer2 = document.getElementById('layer2')
scroll = window.pageYOffset;
document.addEventListener('scroll', function(e) {
  let offset = window.pageYOffset;
  scroll = offset;
  layer2.style.width = (100 + scroll/5) + '%';
  layer2.style.left = scroll/50 + '%';
});

let text = document.getElementById('text') && document.getElementById('layer1') // 5% for using logical AND operator
scroll = window.pageYOffset;
document.addEventListener('scroll', function(e) {
  let offset = window.pageYOffset;
  scroll != offset; // 5% for using logical NOT operator
  layer2.style.width = (100 + scroll/5) + '%';
  text.style.top = - scroll/20 + '%';
});

// To top btn

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 700) { 
        document.getElementById("myBtn").style.display = "block";
    } else { 
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
(function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})()  //Use an Immediately Invoked Function Expression (IFFE) + 10%

//Flash light

$(document).mousemove(function(e){
    let X = e.pageX;
    let Y = e.pageY;
    $('.light').css('background', 'radial-gradient(circle at '+X+'px '+Y+'px, transparent, #000 120%)');
  });

  // Initialize and add the map
function initMap() {
    // The location of Uluru
    let uluru = {lat: 48.766666, lng: 11.433333};
    // The map, centered at Uluru
    let map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    let marker = new google.maps.Marker({position: uluru, map: map});
  }


  //For opacity
  $(document).ready(function(){
	$(window).scroll(function(){
		$('.holder').css("opacity", 2.02 - $(window).scrollTop()/900)
	})
})