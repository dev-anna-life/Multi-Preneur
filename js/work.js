const reasons = [
   { icon: '💰',
    title: 'Competitive Compensation',
    description: 'Industry-leading commission structures with unlimited earning potential and performance bonuses.'
    },
    {
    icon: '📈',
    title: 'Career Growth',
    description: 'Extensive training programs, mentorship programs, and clear career advancement pathways.'
    },
    {
    icon: '👥',
    title: 'Supportive Team',
    description: 'Join a collaborative environment with experienced professionals who support your success.'
    },
    {
    icon: '🏆',
    title: 'Recognition & Rewards',
    description: 'Regular recognition programs, performance-based rewards, and opportunities for professional achievements.'
    },

];

// Positions data 
const positions = [
    {
        title: 'Business Development Manager',
        type: 'Full-time',
        description: 'Join our team and drive business growth with your strategic expertise.'
    },
    {
        title: 'Operations Specialist',
        type: 'Full-time',
        description: 'Oversee operations and build lasting relationships with our partners'
    },
    {
        title: 'Marketing Manager',
        type: 'Full-time',
        description: 'Lead marketing initiatives and drive brand awareness through innovative campaigns.'
    },
    {
        title: 'Sales Executive',
        type: 'Full-time',
        description: 'Support our clients with exceptional service and relationship-building skills.'
    }
];

// Intialize reasons cards
function IntializeReasons() {
    const reasonsContainer = document.getElementById('reasonsContainer');
    if ( !reasonsContainer ) return;

    reasons.forEach((reason, index) => {
        const card = document.createElement('div');
        card.className = 'bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center opacity-0 animate-fade-in-up';
        card.style.animationDelay = `${(index + 1) * 0.1}s`;
        card.innerHTML = `
            <div class="text-4xl mb-4">${reason.icon}</div>
            <h3 class="text-lg font-semibold mb-2 text-gray-900">${reason.title}</h3>
            <p class="text-gray-600 text-sm">${reason.description}</p> 
        `;
        reasonsContainer.appendChild(card);
    });
}

// Initialize positions cards
    function InitializePositions() {
        const positionsContainer = document.getElementById('positionsContainer');
        if ( !positionsContainer ) return;

        positions.forEach((position, index) => {
            const card = document.createElement('div');
            card.className = 'bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up';
            card.style.animationDelay = `${(index + 1) * 0.1}s`;
            card.innerHTML = `
                <div class="flex items-start justify-between mb-3">
                    <div class="flex-1">
                        <h3 class="text-xl font-semibold text-gray-900 mb-1">${position.title}</h3>
                        </div>
                        <span class="ml-3 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap" style="background-color: #8ac249; color: white;">${position.type}</span>
                </div>
                <p class="text-gray-600 mb-4">${position.description}</p>
                <a href="./services.html" class="inline-block text-blue-900 font-medium transition-colors duration-300 hover:text-green-500"> Learn More → 
                </a>
            `;
            positionsContainer.appendChild(card);
        })
    }

    // Form submission handler
    function submitForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const position = document.getElementById('position').value;

        if ( !name || !email || !phone || !position) {
            alert('Please fill in all required fields.');
            return;
        }

        const form = document.getElementById('application-form'); 
        const successMsg = document.getElementById('success-message');

        form.style.opacity = '0';
        form.style.transform = 'scale(0.95)';
        form.style.transition = 'all 0.3s ease-out';

        setTimeout(function() {
            form.classList.add('hidden');
            successMsg.classList.remove('hidden');
            successMsg.classList.add('animate-fade-in');
            }, 300);

            setTimeout(function() {
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('position').value = '';
                document.getElementById('message').value = '';

                successMsg.classList.add('hidden');
                form.classList.remove('hidden');
                form.style.opacity = '1';
                form.style.transform = 'scale(1)';
            }, 2000);
    }

    //Scroll animations for elements
    function handleScrollAnimations() {
        const elements = document.querySelectorAll(' .opacity-0');

        elements.forEach(function(element) {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if ( rect.top < windowHeight * 0.9 ) {
                element.classList.remove('opacity-0');
    }
        });
    }

    // Intialize when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        IntializeReasons();
        InitializePositions();
        handleScrollAnimations();
    });

    // Listen for scroll events
    window.addEventListener('scroll', handleScrollAnimations);
    window.addEventListener('load', handleScrollAnimations);