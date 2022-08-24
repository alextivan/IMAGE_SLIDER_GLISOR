const container = document.querySelector('.container');
const sideBar = document.querySelector('.sidebar');
const mainSlide = document.querySelector(".main-slide");
const numberOfSlides = mainSlide.querySelectorAll('div').length;
const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
let indexActiveSlide = 0;


mainSlide.style.top = `-${(numberOfSlides - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlider('up');
})

downBtn.addEventListener('click', () => {
    changeSlider('down');
})

function changeSlider(direction){
    if(direction === 'up'){
        indexActiveSlide++;

        if(indexActiveSlide >= numberOfSlides-1){
            indexActiveSlide = 0;
        }
    } else if (direction === 'down') {
        indexActiveSlide--;
        if(indexActiveSlide < 0){
            indexActiveSlide = numberOfSlides - 1;
        }
    } 
    console.log(indexActiveSlide);
    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(${height * indexActiveSlide}px)`;
    sideBar.style.transform = `translateY(${-height * indexActiveSlide}px)`;

}