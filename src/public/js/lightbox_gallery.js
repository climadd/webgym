// apri Modal = ingrandisci immagine 
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// chiudi Modal = chiudi ingrandimento
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// controllo avanti/indietro
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Controlli immagine tramite dot
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var text = document.getElementsByClassName("text_img")
  var captionText = document.getElementById("caption");

  if (n > slides.length) {slideIndex = 1}/*se dall'ultima slide vai avanti torni alla prima*/

  if (n < 1) {slideIndex = slides.length}/*se dalla prima slide vai indietro vai all'ultima n-esima*/
    
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";/*Imposta un elemento per non essere visualizzato*/
  }

  slides[slideIndex-1].style.display = "block";/*immagini visualizzate*/ 
  
  captionText.innerHTML = text[slideIndex-1].alt;/*mostra testo*/
}