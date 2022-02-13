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

simpleToastDemo.addEventListener('click', () => toggleShowClass(simpleToast));

simpleToastClose.addEventListener('click', () => toggleShowClass(simpleToast))

iconToastDemo.addEventListener('click', () => toggleShowClass(iconToast));

iconToastClose.addEventListener('click', () => toggleShowClass(iconToast))