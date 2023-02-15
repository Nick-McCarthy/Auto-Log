const loginFormHandler = async (event) => {
    console.log('login.js line 2')
    event.preventDefault();

    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const user_password = document.querySelector('#password-login').value.trim();

    if (email && user_password) {
        console.log("login.js line 10")
        // Send a POST request to the API endpoint
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email, user_password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/homepage');
        } else {
            alert(response.statusText);
        }
    }
};

const signupFormHandler = async (event) => {
    console.log('login.js line 26')
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const user_password = document.querySelector('#password-signup').value.trim();
    console.log(name, email, user_password)
    if (name && email && user_password) {
        const response = await $.post('/api/signup',
            { name, email, user_password },
        ).done(function () {
            console.log('login.js line 37')
        });

        if (response.ok) {
            //document.location.replace('/profile');
            console.log('login.js 41')
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
/*
document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);*/