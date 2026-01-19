document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-btn-popup');
    const buyAlertModal = document.getElementById('buyAlertModal');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            buyAlertModal.classList.add('show'); // show popup

            setTimeout(() => {
                buyAlertModal.classList.remove('show'); // hide after 3 seconds
            }, 3000);
        });
    });
});
