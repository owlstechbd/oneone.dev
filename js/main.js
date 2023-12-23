
//typing text
document.addEventListener("DOMContentLoaded", function(event) {
  var animatedText = document.querySelector(".animated-text");
  var items = ["We plan", "Web Designer", "Logo Design"];
  var currentIndex = 0;

  function animateText() {
    animatedText.textContent = "";

    var currentText = items[currentIndex];
    var i = 0;

    var typingInterval = setInterval(function() {
      animatedText.textContent += currentText.charAt(i);
      i++;

      if (i >= currentText.length) {
        clearInterval(typingInterval);
        setTimeout(eraseText, 2000);
      }
    }, 100);
  }

  function eraseText() {
    var currentText = animatedText.textContent;
    var i = currentText.length - 1;

    var erasingInterval = setInterval(function() {
      animatedText.textContent = currentText.substring(0, i);
      i--;

      if (i < 0) {
        clearInterval(erasingInterval);
        currentIndex = (currentIndex + 1) % items.length;
        setTimeout(animateText, 500);
      }
    }, 50);
  }

  animateText();
});




//client-logo
const swiper2 = new Swiper('.client-container', {
  loop: true,
  autoplay: {
      delay: 0,
      disableOnInteraction: false, 
  },
  speed: 9000,          //add
  slidesPerView: 5,
});


const swiper = new Swiper('.client-container2', {
  loop: true,
  autoplay: {
      delay: 0,
      disableOnInteraction: false, 
  },
  speed: 9000,          //add
  slidesPerView: 7,
});




//portfolio slider
$(document).ready(function(){
  $(".p-carousel").owlCarousel({
  	loop:true,
    margin:10,
    nav:true,
	autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    center: true,
   
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2.5
        }
    }
  });

  // Custom Navigation
  $(".nav-btn.prev").click(function(){
    $(".owl-carousel").trigger('prev.owl.carousel');
  });

  $(".nav-btn.next").click(function(){
    $(".owl-carousel").trigger('next.owl.carousel');
  });
});
//portfolio slider


$(document).ready(function(){
  $(".testmonail-slide").owlCarousel({
  	loop:true,
    margin:10,
    nav:true,
	  autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
   
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }
  });

  // Custom Navigation
  $(".nav-btn.prev").click(function(){
    $(".testmonail-slider").trigger('prev.owl.carousel');
  });

  $(".nav-btn.next").click(function(){
    $(".testmonail-slider").trigger('next.owl.carousel');
  });
});

//popup
// Get all buttons with the "openPopup" class
var openButtons = document.getElementsByClassName('openPopup');

// Add click event listeners to each button
for (var i = 0; i < openButtons.length; i++) {
  openButtons[i].addEventListener('click', togglePopup);
}

// Function to toggle the popup's visibility
function togglePopup() {
  var overlay = document.getElementById('overlay');
  var popup = document.getElementById('popup');

  // Toggle the display of the overlay and popup
  overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
  popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}


// animation

  new WOW().init();