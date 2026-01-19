document.addEventListener("DOMContentLoaded", function() {
    const buyButton = document.getElementById('buyButton');
    const buyAlertModal = document.getElementById('buyAlertModal');

    buyButton.addEventListener('click', function() {
        // Show alert
        buyAlertModal.classList.add('show');

        // Hide alert after 3 seconds
        setTimeout(() => {
            buyAlertModal.classList.remove('show');
        }, 3000);
    });
});