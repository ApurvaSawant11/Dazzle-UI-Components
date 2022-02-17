const basicModalBtn = document.querySelector('.basic-modal-demo');
const formModalBtn = document.querySelector('.form-modal-demo')
const basicModal = document.querySelector('.basic-modal');
const formModal = document.querySelector('.form-modal');
const basicModalCancel = document.querySelector('.basic-modal-cancel');
const formModalClose = document.querySelector('.form-modal-close')


const toggleShowClass = (element) => {
    element.classList.toggle('show');
}


basicModalBtn.addEventListener('click', () => {
    toggleShowClass(basicModal);
})

basicModalCancel.addEventListener('click', () => {
    toggleShowClass(basicModal)
})

formModalBtn.addEventListener('click', () => {
    toggleShowClass(formModal)
})

formModalClose.addEventListener('click', () => {
    toggleShowClass(formModal)
})

// ----------- toast js --------------

const simpleToastDemo = document.querySelector('.simple-toast-demo');
const simpleToast = document.querySelector(".simple-toast-container");
const simpleToastClose = document.querySelector('.simple-toast-close');

const iconToastDemo = document.querySelector('.icon-toast-demo');
const iconToast = document.querySelector(".icon-toast-container");
const iconToastClose = document.querySelector('.icon-toast-close');

simpleToastDemo.addEventListener('click', () => {
    toggleShowClass(simpleToast)
    setTimeout(() => toggleShowClass(simpleToast), 3000);
});

simpleToastClose.addEventListener('click', () => toggleShowClass(simpleToast))

iconToastDemo.addEventListener('click', () => {
    toggleShowClass(iconToast)
    setTimeout(() => toggleShowClass(iconToast), 3000);
});

iconToastClose.addEventListener('click', () => toggleShowClass(iconToast))

// ----------------slider-----------------------

const rangeInput = document.querySelectorAll(".range"),
    rangeInputField = document.querySelectorAll(".range-input-field"),
    range = document.querySelector(".slider .progress");
let priceGap = 1000;

rangeInputField.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(rangeInputField[0].value);
        let maxPrice = parseInt(rangeInputField[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "min-field") {
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});
rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);
        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === "min-range") {
                rangeInput[0].value = maxVal - priceGap
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            rangeInputField[0].value = minVal;
            rangeInputField[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});

// -----------------------carousel------------------
let slidePosition = 1;
CarouselSlideShow(slidePosition);

function moveSlide(n) {
    CarouselSlideShow(slidePosition += n);
}

function currentSlide(n) {
    CarouselSlideShow(slidePosition = n);
}

function CarouselSlideShow(n) {
    const slides = document.querySelectorAll(".container");
    const circles = document.querySelectorAll(".dots");
    if (n > slides.length) {
        slidePosition = 1
    }
    if (n < 1) {
        slidePosition = slides.length
    }

    slides.forEach(slide => {
        slide.style.display = "none";
    })

    circles.forEach(circle => {
        circle.className = circle.className.replace(" enable", "");
    });

    slides[slidePosition - 1].style.display = "block";
    circles[slidePosition - 1].className += " enable";
}

// -------------------navigation simple----------------------
const navbarSearchIcon = document.querySelector('.navbar-search-icon');
const searchbarClose = document.querySelector('.searchbar-close-icon');
const navbarSearchbar = document.querySelector('.navbar-searchbar')

navbarSearchIcon.addEventListener('click', () => {
    navbarSearchbar.classList.toggle('show')
})

searchbarClose.addEventListener('click', () => {
    navbarSearchbar.classList.remove('show')
})




// ------------------------drawer-------------------------------

const listItem = document.querySelectorAll(".list-item");

listItem.forEach((item) => {
    item.addEventListener("click", () => {
        listItem.forEach((item2) => {
            item2.classList.remove("active");
        });
        item.classList.add("active");
    });
});