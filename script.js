const arrows = document.querySelectorAll('.arrow'),
redSlide = document.querySelector('.slider--red'),
blueSlide = document.querySelector('.slider--blue');

arrows.forEach((arrow)=>{
    arrow.addEventListener('click', ()=>{
        if (redSlide.classList.contains('slider__hidden')){
            redSlide.classList.remove('slider__hidden');
            blueSlide.classList.add('slider__hidden');
        } else if (blueSlide.classList.contains('slider__hidden')){
            redSlide.classList.add('slider__hidden');
            blueSlide.classList.remove('slider__hidden');
        }
    });
});

const burger = document.querySelector(".header__burger")
if (burger) {
    const menu = document.querySelector(".burger__menu");
    const main = document.querySelector("main");
    burger.addEventListener("click", ()=>{
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        main.classList.toggle('_lock');
    });
}