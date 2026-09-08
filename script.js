const slides=document.querySelectorAll('.slide');
let currentSlide = 0;


function showslide(Index) {
slides.forEach(slide => {
    slide.classList.remove('active');
});

if(Index>=slides.length){
    currentSlide=0;
}
else if(Index<0){
    currentSlide=slides.length -1;
} else{
    currentSlide = Index;
}

slides[currentSlide].classList.add('active');

}

function nextSlide(){
    showslide(currentSlide +1);
}

function prevSlide(){
    showslide(currentSlide -1);
}