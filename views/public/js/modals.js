const portfolioSection = document.querySelector('#portfolio');
const portfolioItems = document.querySelectorAll('.portfolio-link');
const modal = document.querySelector('.modal');
portfolioItems.forEach(item => {
    item.addEventListener('click', e => {
    e.preventDefault();
    displayModal();
    })
})

function displayModal() {
    modal.classList.add('d-block');
    modal.classList.remove('d-none');
}

function closeModal() {
    modal.classList.add('d-none');
    modal.classList.remove('d-block');
}

// close modal
const closeButtons = document.querySelectorAll('.close')
closeButtons.forEach(closeButton => {
    closeButton.addEventListener('click', e => {
        closeModal();
    })
})