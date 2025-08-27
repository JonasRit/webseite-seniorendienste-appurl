//Slide Index Seite
let slideIndex = 1;
showSlides(slideIndex);
//Zeit bis nächster Slide
time = 5000;

function plusSlides(n) {
  clearInterval(autoSlideInterval); // Timer zurücksetzen

  showSlides(slideIndex += n);
  
  // Neuen Timer starten
  autoSlideInterval = setInterval(function() {
    plusSlides(1);
  }, time);
}

function currentSlide(n) {
  clearInterval(autoSlideInterval); // Timer zurücksetzen

  showSlides(slideIndex = n);
  
  // Neuen Timer starten
	autoSlideInterval = setInterval(function() {
    plusSlides(1);
  }, time);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  let divaufImg = document.getElementsByClassName("divaufImg");

  if (n > slides.length) { 
    slideIndex = 1;
  }    
  
  if (n < 1) { 
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  divaufImg[slideIndex-1].style.display = "block";

  
}

// Automatische Aktualisierung der Slides alle 5 Sekunden
let autoSlideInterval = setInterval(function() {
  plusSlides(1);
}, time);