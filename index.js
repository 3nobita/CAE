// Create the main structure of the login page
const createLoginPage = () => {
    // Create elements
    const html = document.createElement('html');
    const head = document.createElement('head');
    const body = document.createElement('body');
    const container = document.createElement('div');
    const logo = document.createElement('div');
    const loginItem = document.createElement('div');
    const form = document.createElement('form');
    
    // Set attributes and inner content
    html.setAttribute('lang', 'en');
    container.className = 'container';
    logo.className = 'logo';
    loginItem.className = 'login-item';
    form.className = 'form form-login';
    form.setAttribute('action', '/api/login');
    form.setAttribute('method', 'post');

    logo.innerHTML = `<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJOtMlU4h8E4mfpgL1LxAi7j9peIdInZHsKlPfg3ciMColbQXYFZRGndw4hADpGQQ5rDEo5xZMQ4cRWaxaDhnwyRrVTob6VwD79xfVKDPWwReIJKj4KSWpKUdWZrNZzxPirQuwq1d2hhK5K9JUQYgt0Yv8XuJdzoGX25MOIhjAUsSmY4HBThol1e-KXvQ/s367/CEA-removebg-preview.png" width="200px" alt="">`;

    form.innerHTML = `
        <h2 style="text-align: center;">Login</h2>
        <div class="form-field">
            <label class="user" for="user-username"><span class="hidden">User ID</span></label>
            <input id="user-username" type="text" name="userId" class="form-input" placeholder="User ID" required>
        </div>
        <div class="form-field">
            <label class="lock" for="user-password"><span class="hidden">User Password</span></label>
            <input id="user-password" type="password" name="password" class="form-input" placeholder="User Password" required>
        </div>
        <div class="form-field">
            <input type="submit" value="Log in">
        </div>
    `;

    // Append elements
    loginItem.appendChild(form);
    container.appendChild(logo);
    container.appendChild(loginItem);
    body.appendChild(container);
    html.appendChild(head);
    html.appendChild(body);
    
    // Append styles in the head
    const style = document.createElement('style');
    style.innerHTML = `
        @import url('https://netdna.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.css');
        @import url('https://fonts.googleapis.com/css?family=Lato:400,300,700');

        html { height: 100%; }
        body {
            display: flex; justify-content: center; align-items: center; min-height: 100%;
            font-family: 'lato', sans-serif; color: #fff;
            background: linear-gradient(to top, #16222A, #3A6073);
        }
        .container {
            background: rgba(58, 63, 68, 0.5); border-radius: 5px;
            box-shadow: 0 1.5px 0 0 rgba(0, 0, 0, 0.1); width: 450px; 
            display: flex; flex-direction: column; padding: 20px;
        }
        .logo { font-size: 20px; text-align: center; }
        .login-item { color: #fff; margin: 20px 0; border-radius: 3px; }
        input { border: 0; color: inherit; font: inherit; margin: 0; outline: 0; padding: 0; transition: background-color .3s; }
        .user:before { content: '\\f007'; font: 14px fontawesome; color: #5b5b5b; }
        .lock:before { content: '\\f023'; font: 14px fontawesome; color: #5b5b5b; }
        .form input[type="password"], .form input[type="text"], .form input[type="submit"] { width: 100%; }
        .form-login label, .form-login input[type="text"], .form-login input[type="password"], .form-login input[type="submit"] {
            border-radius: 0.25rem; padding: 1rem; color: #3A3F44;
        }
        .form-login label { background-color: #222222; border-bottom-right-radius: 0; border-top-right-radius: 0; padding-left: 1.25rem; padding-right: 1.25rem; }
        .form-login input[type="text"], .form-login input[type="password"] { background-color: #ffffff; border-bottom-left-radius: 0; border-top-left-radius: 0; }
        .form-login input[type="text"]:focus, .form-login input[type="text"]:hover, .form-login input[type="password"]:focus, .form-login input[type="password"]:hover { background-color: #eeeeee; }
        .form-login input[type="submit"] { background-color: #00B9BC; color: #eee; font-weight: bold; text-transform: uppercase; }
        .form-login input[type="submit"]:focus, .form-login input[type="submit"]:hover { background-color: #197071; }
        .form-field { display: flex; margin-bottom: 2rem; }
        .hidden { border: 0; clip: rect(0 0 0 0); height: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute; width: 1px; }
        .text--center { text-align: center; }
        .switch { text-align: center; color: #00B9BC; cursor: pointer; margin-top: 10px; }
    `;
    
    head.appendChild(style);
    
    // Append the entire HTML structure to the document
    document.documentElement.replaceWith(html);
};

// Call the function to create the login page
createLoginPage();
