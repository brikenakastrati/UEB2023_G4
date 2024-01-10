let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); 
}

document.querySelectorAll('.planet').forEach(function (planet) {
  planet.addEventListener('click', function () {
    this.classList.toggle('planet-expanded');
  });
});
const triggerText = document.getElementById('trigger-text');
const hiddenText = document.getElementById('hidden-text');


triggerText.addEventListener('click', function() {

  hiddenText.style.display = (hiddenText.style.display === 'none') ? 'inline' : 'none';
});
const triggerText2 = document.getElementById('trigger-text2');
const hiddenText2 = document.getElementById('hidden-text2');


triggerText2.addEventListener('click', function() {

  hiddenText2.style.display = (hiddenText2.style.display === 'none') ? 'inline' : 'none';
});