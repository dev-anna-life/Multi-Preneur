function registerCourse(course) {
    const courseNames = {
        'fundamentals': 'Real Estate Fundamentals (₦150, 000)',
        'development': 'Property Development Mastery (₦350,000)',
        'investment': 'Investment Strategy & Analysis (₦250,000)',
        'commercial': 'Commercial Real Estate (₦500,000)'
    };

    alert(`You're registering for: ${courseNames[course]}\n\nNext steps:\n1. Complete the registration form\n2. Make payment\n3. Receive course materials\n4. Join the upcoming session!\n\nRedirecting to registration...`);

    window.location.href = '../pages/contact.html'
}

function contactSchedule() {
    Window.location.href = '../pages/contact.html'
}