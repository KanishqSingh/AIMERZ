
        function getTheme() {
            return localStorage.getItem('theme') || 'light';
        }


        function setTheme(theme) {
            localStorage.setItem('theme', theme);
            document.getElementById('current-theme').textContent = theme;
            document.body.style.backgroundColor = theme === 'dark' ? '#333' : '#fff';
            document.body.style.color = theme === 'dark' ? '#fff' : '#000';
        }

        setTheme(getTheme());

        document.getElementById('change-theme-button').addEventListener('click', function() {
            const newTheme = prompt('Enter a new theme (light or dark):', getTheme());
            if (newTheme === 'light' || newTheme === 'dark') {
                setTheme(newTheme);
            } else {
                alert('Invalid theme! Please choose "light" or "dark".');
            }
        });

