document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactform');
    const inputs = document.querySelectorAll('.contact-input');

    // Floating label: toggle 'filled' class
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.value.trim() !== '') {
                input.classList.add('filled');
            } else {
                input.classList.remove('filled');
            }
            // Remove error styling when typing
            input.parentElement.classList.remove('error', 'shake');
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const inputData = [
            { id: 'fname', name: 'First Name', type: 'text' },
            { id: 'lname', name: 'Last Name', type: 'text' },
            { id: 'email', name: 'Email', type: 'email' },
            { id: 'tel', name: 'Phone Number', type: 'tel' },
            { id: 'message', name: 'Message', type: 'textarea' },
        ];

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{7,15}$/;

        let valid = true;

        // Clear previous errors
        document.querySelectorAll('.inputwrap').forEach(wrap => wrap.classList.remove('error', 'shake'));

        inputData.forEach(field => {
            const input = document.getElementById(field.id) || document.querySelector(`input[type="${field.type}"]`) || document.getElementById(field.id);
            const value = input.value.trim();
            let errorMessage = '';

            if (!value) errorMessage = `${field.name} is required.`;
            else if (field.type === 'email' && !emailRegex.test(value)) errorMessage = 'Invalid email format.';
            else if (field.type === 'tel' && !phoneRegex.test(value)) errorMessage = 'Invalid phone number.';

            if (errorMessage) {
                const wrap = input.parentElement;
                wrap.classList.add('error', 'shake');

                let errEl = wrap.querySelector('.error-message');
                if (!errEl) {
                    errEl = document.createElement('div');
                    errEl.className = 'error-message';
                    wrap.appendChild(errEl);
                }
                errEl.textContent = errorMessage;
                valid = false;
            }
        });

        // Gender validation
        const gender = document.querySelector('input[name="gender"]:checked');
        if (!gender) {
            const genderWrap = document.querySelector('.gender-wrap');
            genderWrap.classList.add('error', 'shake');
            let errEl = genderWrap.querySelector('.error-message');
            if (!errEl) {
                errEl = document.createElement('div');
                errEl.className = 'error-message';
                genderWrap.appendChild(errEl);
            }
            errEl.textContent = 'Please select a gender.';
            valid = false;
        }

        // Subject validation
        const subject = document.getElementById('selection');
        if (!subject.value || subject.value === 'select') {
            const wrap = subject.parentElement;
            wrap.classList.add('error', 'shake');
            let errEl = wrap.querySelector('.error-message');
            if (!errEl) {
                errEl = document.createElement('div');
                errEl.className = 'error-message';
                wrap.appendChild(errEl);
            }
            errEl.textContent = 'Please select a subject.';
            valid = false;
        }

        if (valid) {
            alert('Form submitted successfully!');
            form.reset();
            inputs.forEach(input => input.classList.remove('filled'));
        }
    });
});
