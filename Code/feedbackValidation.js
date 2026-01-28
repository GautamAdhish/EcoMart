document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.fbackForm');
    const inputs = document.querySelectorAll('.contact-input');

    // Floating label logic
    inputs.forEach(input => {
        if (input.value.trim() !== '') {
            input.classList.add('filled');
        }

        input.addEventListener('input', () => {
            if (input.value.trim() !== '') {
                input.classList.add('filled');
            } else {
                input.classList.remove('filled');
            }
            input.parentElement.classList.remove('error', 'shake');
        });
    });

    // Form submit validation
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const fieldData = [
            { index: 0, name: 'First Name', type: 'text' },
            { index: 1, name: 'Last Name', type: 'text' },
            { index: 2, name: 'Email', type: 'email' },
            { index: 3, name: 'Phone Number', type: 'tel' },
            { index: 4, name: 'Title', type: 'text' },
            { index: 5, name: 'Message', type: 'textarea' }
        ];

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{7,15}$/;

        let isValid = true;

        // Clear previous errors
        document.querySelectorAll('.inputwrap').forEach(wrap => wrap.classList.remove('error', 'shake'));

        fieldData.forEach(field => {
            const input = inputs[field.index];
            const value = input.value.trim();
            let errorMsg = '';

            if (!value) {
                errorMsg = `${field.name} is required.`;
            } else if (field.type === 'email' && !emailRegex.test(value)) {
                errorMsg = 'Invalid email format.';
            } else if (field.type === 'tel' && !phoneRegex.test(value)) {
                errorMsg = 'Invalid phone number.';
            }

            if (errorMsg) {
                const wrap = input.parentElement;
                wrap.classList.add('error', 'shake');

                let errEl = wrap.querySelector('.error-message');
                if (!errEl) {
                    errEl = document.createElement('div');
                    errEl.className = 'error-message';
                    wrap.appendChild(errEl);
                }
                errEl.textContent = errorMsg;
                isValid = false;
            }
        });

        if (isValid) {
            alert('Feedback submitted successfully!');
            form.reset();
            inputs.forEach(input => input.classList.remove('filled'));
        }
    });
});
