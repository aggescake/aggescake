
function show(){
    document.getElementById('navbar').classList.add('active');
}

function remove(){
    document.getElementById('navbar').classList.remove('active');
}

/* Codigo da animação do carrossel (pra ele passar pro lado)*/ 

let currentIndex = 0;

function showSlide(index) {
  const carrosselImages = document.querySelector('.carrossel-images');
  const totalSlides = document.querySelectorAll('.carrossel img').length;
  
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  
  const offset = -currentIndex * 100;
  carrosselImages.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}