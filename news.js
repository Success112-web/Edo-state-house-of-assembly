
        const modal = document.getElementById('newsModal');
        const modalBody = document.getElementById('modalBody');
        const closeBtn = document.querySelector('.close-modal');
        const newsCards = document.querySelectorAll('.news-card');

        newsCards.forEach(card => {
            card.addEventListener('click', function(e) {
                if (e.target.classList.contains('read-more')) {
                    e.preventDefault();
                }
                const newsId = this.getAttribute('data-news');
                const news = newsData[newsId];
                modalBody.innerHTML = news.fullContent;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            });
        });
    
