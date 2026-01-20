document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.cart-btn-popup');
    const cartAlertModal = document.getElementById('cartAlertModal');

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartAlertModal.classList.add('show');

            setTimeout(() => {
                cartAlertModal.classList.remove('show');
            }, 3000);
        });
    });
});
