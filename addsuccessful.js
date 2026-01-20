document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.cart-btn-popup');
    const cartAlertModal = document.getElementById('cartAlertModal');

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartAlertModal.classList.add('show'); // show popup

            setTimeout(() => {
                cartAlertModal.classList.remove('show'); // hide after 3 seconds
            }, 3000);
        });
    });
});
