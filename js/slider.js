var slideIndex = 1;
showSlide();

setInterval(addSlide, 5000, 1);

function addSlide(index) {
    slideIndex += index;
    showSlide();
}

function showSlide() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    
    if (slideIndex > slides.length) 
        slideIndex = 1;
    if (slideIndex < 1)
        slideIndex = slides.length;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}