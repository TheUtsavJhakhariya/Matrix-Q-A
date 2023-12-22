        const button = document.getElementById('runaway-button');
        const maxX = window.innerWidth - button.clientWidth;
        const maxY = window.innerHeight - button.clientHeight;

        button.addEventListener('mousemove', () => {
            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);
            button.style.left = randomX + 'px';
            button.style.top = randomY + 'px';
        }); 

        button.addEventListener('click', (e) => {
            e.stopPropagation();
        });
