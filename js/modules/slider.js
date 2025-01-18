
function slider () {
    function initializeSlider() {
        const slides = document.querySelectorAll('.offer__slide');
        const slider = document.querySelector('.offer__slider');
        const prev = document.querySelector('.offer__slider-prev');  
        const next = document.querySelector('.offer__slider-next');
        const current = document.querySelector('#current');
        const total = document.querySelector('#total');
        const slidesWrapper = document.querySelector('.offer__slider-wrapper');
        const slidesField = document.querySelector('.offer__slider-inner');
        const width = window.getComputedStyle(slidesWrapper).width;
        let slideIndex = 1;
        let offset = 0;
    //^^ назначаю в переменные нужные html селекторы
        
        function slideStyle () {
            slidesField.style.width = 100 * slides.length + '%';
        slidesField.style.display = 'flex';
        slidesField.style.transition = '0.5s all';
        slidesWrapper.style.overflow = 'hidden';
        slides.forEach(slide => {
            slide.style.width = width;
        });
        slider.style.position = 'relative';
        };
        slideStyle();
    //^^ задаю нужные стили для слайдера
    
        function createDots() {
            const dotsWrapper = document.createElement('div');
            dotsWrapper.classList.add('offer__slider-dots');
            slider.appendChild(dotsWrapper);
        
            for (let i = 0; i < slides.length; i++) {
                const dot = document.createElement('div');
                dot.classList.add('offer__slider-dot');
                if (i === 0) {
                    dot.classList.add('active');
                }
                dot.addEventListener('click', () => {
                    offset = +width.replace(/\D/g, '') * i;
                    slidesField.style.transform = `translateX(-${offset}px)`;
                    slideIndex = i + 1;
                    setCurrentDot();
                    setCurrentSlide();
                });
                dotsWrapper.appendChild(dot);
            }
        }
        createDots();
    
        function setCurrentDot() {
            const dots = document.querySelectorAll('.offer__slider-dot');
            dots.forEach((dot, i) => {
                if (i === slideIndex - 1) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
        
        function setCurrentSlide() {
            if (slides.length < 10) {
                total.textContent = `0${slides.length}`;
                current.textContent = `0${slideIndex}`;
            } else {
                total.textContent = slides.length;
                current.textContent = slideIndex;
            }
        }
         setCurrentSlide();
    
         //^^ при помощи условий задаю чтобы отчет цифр начинался с 1 и к цифрам добавлялся 0
         function nextSlide() {
            if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, '');
            }
            slidesField.style.transform = `translateX(-${offset}px)`;
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            setCurrentDot();
            setCurrentSlide();
        }
        function prevSlide() {
            if (offset == 0) {
                offset = +width.replace(/\D/g, '') * (slides.length - 1);
            } else {
                offset -= +width.replace(/\D/g, '');
            }
            slidesField.style.transform = `translateX(-${offset}px)`;
            slideIndex--;
            if (slideIndex < 1) {
                slideIndex = slides.length;
            }
            setCurrentDot();
            setCurrentSlide();
        }
    
        next.addEventListener('click', nextSlide);
        prev.addEventListener('click', prevSlide);
        
    }
    initializeSlider();
};



export default slider;