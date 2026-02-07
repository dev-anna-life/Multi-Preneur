function quickFilter(filter) {
    const buttons = document.querySelectorAll('.filter-button');
    const properties = document.querySelectorAll('.property-card');

    buttons.forEach(btn => {
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active')
        }
    });

    let visibleCount = 0;
    properties.forEach(property => {
        if (filter === 'all') {
            property.style.display = 'block';
            visibleCount++;
        } else if (filter === 'featured' && property.dataset.featured === 'true') {
            property.style.display = 'block';
            visibleCount++;
        } else if (property.dataset.type === filter) {
            property.style.display = 'block';
            visibleCount++;
        } else {
            property.style.display = 'none';
        }
    });

    document.getElementById('propertyCount').textContent = visibleCount; 
}

function filterProperties() {
    const location =
    document.getElementById('locationFilter').value;
    const type = document.getElementById('typeFilter').value;
    const priceRange =
    document.getElementById('priceFilter').value;
    const properties = document.querySelectorAll('.property-card');

    let visibleCount = 0;

    properties.forEach(property => {
        let show = true;

        if (location && property.dataset.loctaion !==
            location) {
                show = false;
            }

            if (type && property.dataset.type !== type) {
                show = false;
            }

            if (priceRange) {
                const price = parseFloat(property.dataset.price);
                const [min, max] = priceRange.split('-').map(Number);

                if (max) {
                    if (price < min || price > max) show = false;
                } else {
                    if (price < min) show = false;
                }
            }

             if (show) {
                    property.style.display = 'block';
                    visibleCount++;
                } else {
                    property.style.display = 'none';
                }
            });

        document.getElementById('propertyCount').textContent = visibleCount; 

            document.getElementById('propertiesGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

          function viewProperty(id) {
            // This will be connected to your backend later
            alert(`Opening property details for Property ID: ${id}\n\nThis will redirect to a detailed property page with:\n- Full photo gallery\n- Complete specifications\n- Location map\n- Payment plans\n- Contact form`);
            // Future: window.location.href = `/property-details.html?id=${id}`;
        }

                function contactAgent() {
            window.location.href = '/contact.html';
        }