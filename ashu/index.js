document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const showButton = document.createElement('span');
    showButton.innerHTML = 'Show';
    showButton.style.cursor = 'pointer';
    showButton.style.color = '#4CAF50';
    showButton.style.marginLeft = '10px';

    passwordInput.parentNode.appendChild(showButton);
    passwordInput.style.paddingRight = '50px';
    showButton.style.position = 'absolute';
    showButton.style.right = '10px';
    showButton.style.top = '50%';
    showButton.style.transform = 'translateY(-50%)';
    passwordInput.parentNode.style.position = 'relative';

    showButton.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            showButton.innerHTML = 'Hide';
        } else {
            passwordInput.type = 'password';
            showButton.innerHTML = 'Show';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const logoSplash = document.getElementById('logoSplash');
    const mainContent = document.getElementById('mainContent');
    mainContent.classList.add('hidden'); // Hide the main content


    // Show the main content after 5 seconds
    setTimeout(() => {
        logoSplash.style.display = 'none';
        mainContent.classList.remove('hidden') // Hide the splash screen
        mainContent.style.display = 'flex'; // Show the main content
    }, 5000);
});

showButton.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showButton.innerHTML = 'Hide';
    } else {
        passwordInput.type = 'password';
        showButton.innerHTML = 'Show';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('login-form');
    const loginButton = form.querySelector('button[type="submit"]');
    const loginBox = document.querySelector('.login-box');
    const imageBox = document.querySelector('.image-box');
    const logoContainer = document.querySelector('.logo-container');
    const houseImg = document.querySelector('.house-img');

    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.style.display = 'none';

    const originalButtonContent = loginButton.innerHTML;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        loginButton.innerHTML = '';
        loginButton.appendChild(loader);
        loader.style.display = 'block';

        setTimeout(() => {
            loader.style.display = 'none';
            loginButton.innerHTML = originalButtonContent;

            loginBox.style.transition = 'all 0.5s ease-out';
            imageBox.style.transition = 'all 0.5s ease-out';
            logoContainer.style.transition = 'all 0.5s ease-out';

            loginBox.classList.add('shrink');
            imageBox.classList.add('shrink');
            logoContainer.classList.add('center');

            setTimeout(() => {
                houseImg.style.transition = 'all 0.5s ease-in-out';
                houseImg.classList.add('fullscreen');
                houseImg.style.opacity = '1';

                setTimeout(() => {
                    houseImg.style.right = '0';
                    houseImg.style.width = '50%';

                    setTimeout(() => {
                        loginBox.classList.remove('shrink');
                        logoContainer.classList.remove('center');
                        loginBox.style.opacity = '1';
                        logoContainer.style.opacity = '1';
                        imageBox.classList.remove('shrink');
                        imageBox.style.opacity = '1';
                    }, 500);
                }, 500);
            }, 500);
        }, 3000);
    });
});
