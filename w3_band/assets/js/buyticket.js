const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

// Show modal buy tickets ( add Class's open into modal )
function showBuyTickets() {
    modal.classList.add('open')
}

//hide modal buy tickets (delete Class's open)
function hideBuyTickets() {
    modal.classList.remove('open')
}

// Loop step of button and listen to click's behavior
for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click',showBuyTickets)
}
// Listen to click's behavior' to delete modal
modalClose.addEventListener('click',hideBuyTickets)

modal.addEventListener('click',hideBuyTickets)

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})