function filterCategory(category) {
            const posts = document.querySelectorAll('#blogGrid article');
            const buttons = document.querySelectorAll('.category-pill');
            
            buttons.forEach(btn => {
                if (btn.dataset.category === category) {
                    btn.classList.add('bg-primary', 'text-white');
                    btn.classList.remove('bg-white', 'text-gray-700', 'hover:bg-gray-100');
                } else {
                    btn.classList.remove('bg-primary', 'text-white');
                    btn.classList.add('bg-white', 'text-gray-700', 'hover:bg-gray-100');
                }
            });
        
            posts.forEach(post => {
                if (category === 'all' || post.dataset.category === category) {
                    post.style.display = 'block';
                    post.classList.add('blog-card');
                } else {
                    post.style.display = 'none';
                }
            });
        }

        function searchArticles() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const posts = document.querySelectorAll('#blogGrid article');
            
            posts.forEach(post => {
                const title = post.querySelector('h3').textContent.toLowerCase();
                const description = post.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        }

        document.getElementById('searchInput')?.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchArticles();
            }
        });