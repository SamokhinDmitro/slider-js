
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let index = 0;

//Показываем активный слайд
const activeSlide = (n) => {
    for(let slide of slides){
        slide.classList.remove('active');
    }

    slides[n].classList.add('active');
}

//Показываем активную точку
const activeDot = n => {
    dots.forEach(dot => {
       dot.classList.remove('active');
    });

    dots[n].classList.add('active');
}

const prepareSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

//Начальное отображение слайдера
prepareSlide(index);


//Переключение слайдера вперед
const nextSlide = () => {
    if(index == slides.length - 1){
        index = 0;
        prepareSlide(index);
    }else{
        index++;
        prepareSlide(index);
    }
};

//Переключение слайдера назад
const prevSlide = () => {
    if(index == 0){
        index = slides.length -1;
        prepareSlide(index);
    }else{
        index--;
        prepareSlide(index);
    }
}

//Переключение по клику на точке
dots.forEach((item, indexItem) => {
    item.addEventListener('click', () => {
        index = indexItem;
        prepareSlide(index);
    })
});

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

//Автопереключение слайдов
setInterval(nextSlide, 3000);

