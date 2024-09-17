
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.getAttribute('data-tab');
            buttons.forEach((button) => button.classList.remove('active'));
            
            contents.forEach((content) => content.style.display = 'none');

          
            document.getElementById(tab).style.display = 'block';
            button.classList.add('active');
        });
    });

