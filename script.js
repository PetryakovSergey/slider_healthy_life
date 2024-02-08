const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sideBar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length
// console.log(slidesCount);

let activeSlideIndex = 0

sideBar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', function (e) {
    changeSlide('up')
});

downBtn.addEventListener('click', function (e) {
    changeSlide('down')
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowUp') {
        changeSlide('up')
    } else if (e.key === 'ArrowDown') {
        changeSlide('down')
    }
});

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

    sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`
}