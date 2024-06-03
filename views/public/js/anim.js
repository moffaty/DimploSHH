document.addEventListener("DOMContentLoaded", function() {
    let breakthroughArtist = document.querySelector('.display-3');
    let leftText = document.querySelector('.left-text');
    let rightText = document.querySelector('.right-text');
    let aboutSection = document.querySelector('#about');
    let isBreakthroughReached = false; // Переменная для отслеживания достижения элемента "прорывной артист"

    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        let breakthroughRect = breakthroughArtist.getBoundingClientRect();
        let aboutRect = aboutSection.getBoundingClientRect();
        return (
            rect.top + 400 >= breakthroughRect.bottom &&
            rect.bottom + 200 <= aboutRect.top
        );
    }
    function updateTextVisibility() {
        if (!isBreakthroughReached && isElementInViewport(leftText) && isElementInViewport(rightText)) {
            // Если элементы достигнуты впервые, запускаем анимацию появления текста
            isBreakthroughReached = true; // Устанавливаем флаг, что элементы достигнуты
            leftText.classList.remove('animate-out');
            leftText.classList.add('animate-in');
            rightText.classList.remove('animate-out');
            rightText.classList.add('animate-in');
        } else if (isBreakthroughReached && (!isElementInViewport(leftText) || !isElementInViewport(rightText))) {
            // Если элементы уже были достигнуты и потом пользователь проскроллил назад, скрываем текст
            isBreakthroughReached = false; // Сбрасываем флаг
            leftText.classList.remove('animate-in');
            leftText.classList.add('animate-out');
            rightText.classList.remove('animate-in');
            rightText.classList.add('animate-out');
        }
    }

    window.addEventListener('scroll', function() {
        updateTextVisibility();
    });
    updateTextVisibility();
});

document.addEventListener("DOMContentLoaded", function() {
    var panels = document.querySelectorAll('.about-left, .about-right');
    var buffer = 200; // Задаем буферную зону

    function updateTextVisibility() {
        var scrollY = window.scrollY;
        var windowHeight = window.innerHeight;

        panels.forEach(function(panel) {
            var rect = panel.getBoundingClientRect();
            var panelTop = rect.top + scrollY;

            if (scrollY + windowHeight - buffer > panelTop && scrollY + buffer < panelTop + rect.height) {
                panel.classList.add('in');
                panel.classList.remove('out');
            } else {
                panel.classList.remove('in');
                panel.classList.add('out');
            }
        });
    }

    window.addEventListener('scroll', updateTextVisibility);
    updateTextVisibility();
});