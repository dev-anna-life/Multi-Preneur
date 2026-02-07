document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formMessage = document.getElementById('formMessage');
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;

    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
    formMessage.classList.add('hidden');

    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        inquiryType: document.getElementById('inquiryType').value,
        message: document.getElementById('message').value,
        contactMethod: document.querySelector('input[name="contactMethod"]:checked').value,
        timestamp: new Date().toDateString()
    };

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            formMessage.className = 'p-4 rounded-lg bg-green-100 border border-green-400 text-green-700'
            formMessage.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Thank you! Your message has been sent successfullly. We will get back you soon.';
            formMessage.classList.remove('hidden');

            e.target.reset();

            formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            throw new Error('Server error');
            }
    } catch (error) {
        formMessage.className = 'p-4 rounded-lg bg-red-100 border border-red-400 text-red-700';
        formMessage.innerHTML = '<i class="fas fa-exclamation-triangle mr-2"></i>OOps! Something went wrong. Please try again or call us directly.';
        formMessage.classList.remove('hidden');
    } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
        }
});
    