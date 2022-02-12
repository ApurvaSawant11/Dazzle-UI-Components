const basicModalBtn = document.querySelector('.basic-modal-demo');
const formModalBtn = document.querySelector('.form-modal-demo')
const basicModal = document.querySelector('.basic-modal');
const formModal = document.querySelector('.form-modal');
const basicModalCancel = document.querySelector('.basic-modal-cancel');
const formModalClose = document.querySelector('.form-modal-close')

basicModalBtn.addEventListener('click', () => {
    basicModal.classList.add('show')
})

basicModalCancel.addEventListener('click', () => {
    basicModal.classList.remove('show')
})

formModalBtn.addEventListener('click', () => {
    formModal.classList.add('show')
})

formModalClose.addEventListener('click', () => {
    formModal.classList.remove('show')
})