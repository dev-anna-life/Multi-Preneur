function enrollProgram(program) {
    const programNames = {
        'starter': 'Starter Program (₦150,000)',
        'growth': 'Growth Program (₦350,000)',
        'elite': 'Elite Mastery (₦750,000)',
    };

    alert(`You have selected the ${programNames[program]}!\n\nNext steps:\n1. You'll be redirected to the booking form\n2. Schedule your free consultation\n3. Discuss payment options\n4. Start your coaching journey.`);

    document.getElementById('book-session').scrollIntoView({
        behavior: 'smooth'});
}

function contactCustom() {
    window.location.href = '../contact.html';
}

function toggleFaq(id) {
    const faq = document.getElementById(`faq-${id}`);
    faq.classList.toggle('hidden');
}

document.getElementById('consultationForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for booking a free consultation!\n\nWe will contact you shortly to schedule your session. \n\nCheck your email confirmation');
    this.reset();
});