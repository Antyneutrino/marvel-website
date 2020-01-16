const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button-next');
const prevButton = document.querySelector('.carousel-button-prev');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
//console.log(slideWidth);

function setSlidePosition(slide, index){
   slide.style.left = slideWidth * index + 'px';  
}
//const setSlidePosition = (slide, index) => {
//   slide.style.left = slideWidth * index + 'px'; 
//};

function czas() {
  setInterval(slides.forEach(setSlidePosition), 100);  
}
czas();
const moveToSlide = (currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');  
}
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

prevButton.addEventListener('click', e => {
const currentSlide = track.querySelector('.current-slide');
const currentDot = dotsNav.querySelector('.current-slide');   
    
if(currentSlide.previousElementSibling){
    prevSlide = currentSlide.previousElementSibling;
    prevDot = currentDot.previousElementSibling;
}else{
    prevSlide = slides[slides.length - 1];
    prevDot = dots[dots.length - 1];
}
moveToSlide(currentSlide, prevSlide);
updateDots(currentDot, prevDot);
});

nextButton.addEventListener('click', e => {
const currentSlide = track.querySelector('.current-slide');
const currentDot = dotsNav.querySelector('.current-slide'); 
    
if(currentSlide.nextElementSibling){
    nextSlide = currentSlide.nextElementSibling;
    nextDot = currentDot.nextElementSibling;
}else{
    nextSlide = slides[0];
    nextDot = dots[0];
}
    moveToSlide(currentSlide, nextSlide); 
    updateDots(currentDot, nextDot);
});

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if(!targetDot) return;
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide'); 
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    
    moveToSlide(currentSlide, targetSlide);
    
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
})

const searchButton = document.querySelector('.nav-right');
const searchText = document.querySelector('.search-text');
searchButton.addEventListener('click', e=> {
    document.querySelector('.search-text').style.display = 'none';
    document.querySelector('.search-text').style.visibility = 'hidden';
    document.querySelector('.search-container').style.display = 'inline-flex';
    document.querySelector('.search-container').style.visibility = 'visible';
    document.querySelector('.search-container').style.width = '16%';
    document.querySelector('.nav-right').style.width = '16%';
    document.querySelector('.nav-right').style.marginLeft = '5.5%';
    document.querySelector('.nav-right').style.cursor = 'default';
    document.querySelector('.nav-right').style.backgroundColor = 'black';
})