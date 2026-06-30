        // Contact Form Validation & Submission
        const contactForm = document.getElementById('contactForm');
        const formSuccess = document.getElementById('formSuccess');
        const resetFormBtn = document.getElementById('resetForm');

        function validateField(field, errorEl, validationFn) {
            const value = field.value.trim();
            const isValid = validationFn(value);
            field.classList.toggle('error', !isValid);
            errorEl.classList.toggle('show', !isValid);
            return isValid;
        }

        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        function isValidPhone(phone) {
            return /^[\d\s\-+()]{7,20}$/.test(phone);
        }

        // Real-time validation on blur
        const nameField = document.getElementById('name');
        const phoneField = document.getElementById('phone');
        const emailField = document.getElementById('email');
        const messageField = document.getElementById('message');

        nameField.addEventListener('blur', () => {
            validateField(nameField, document.getElementById('nameError'), v => v.length > 0);
        });

        phoneField.addEventListener('blur', () => {
            validateField(phoneField, document.getElementById('phoneError'), isValidPhone);
        });

        emailField.addEventListener('blur', () => {
            validateField(emailField, document.getElementById('emailError'), isValidEmail);
        });

        messageField.addEventListener('blur', () => {
            validateField(messageField, document.getElementById('messageError'), v => v.length > 0);
        });

        // Clear error on input
        [nameField, phoneField, emailField, messageField].forEach(field => {
            field.addEventListener('input', () => {
                field.classList.remove('error');
                const errorEl = document.getElementById(field.id + 'Error');
                if (errorEl) errorEl.classList.remove('show');
            });
        });

        // Form submit
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const isNameValid = validateField(nameField, document.getElementById('nameError'), v => v.length > 0);
            const isPhoneValid = validateField(phoneField, document.getElementById('phoneError'), isValidPhone);
            const isEmailValid = validateField(emailField, document.getElementById('emailError'), isValidEmail);
            const isMessageValid = validateField(messageField, document.getElementById('messageError'), v => v.length > 0);

            if (isNameValid && isPhoneValid && isEmailValid && isMessageValid) {
                // Collect form data
                const formData = new FormData(this);
                const data = Object.fromEntries(formData);
                console.log('Form submitted:', data);

                // Show success message
                contactForm.style.display = 'none';
                formSuccess.classList.add('show');
            } else {
                // Scroll to first error
                const firstError = contactForm.querySelector('.error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    firstError.focus();
                }
            }
        });

        // Reset form
        resetFormBtn.addEventListener('click', () => {
            contactForm.reset();
            contactForm.style.display = 'block';
            formSuccess.classList.remove('show');
            // Clear all error states
            contactForm.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
            contactForm.querySelectorAll('.error-msg').forEach(el => el.classList.remove('show'));
        });
