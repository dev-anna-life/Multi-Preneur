        function showService(service) {
            document.querySelectorAll('.service-section').forEach(section => {
                section.classList.add('hidden');
            });
            
            document.querySelectorAll('.service-tab').forEach(btn => {
                btn.classList.remove('bg-primary', 'text-white');
                btn.classList.add('text-gray-700', 'hover:bg-gray-100');
            });
            
            document.getElementById(service + '-section').classList.remove('hidden');
            
            const activeBtn = document.getElementById('btn-' + service);
            activeBtn.classList.add('bg-primary', 'text-white');
            activeBtn.classList.remove('text-gray-700', 'hover:bg-gray-100');
        
            document.getElementById(service + '-section').scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
