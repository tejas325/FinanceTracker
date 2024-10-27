// Add JavaScript code for the registration page
const registerForm = document.querySelector('.register-form');
const registerButton = document.querySelector('.register-form button[type="submit"]');

registerButton.addEventListener('click', (e) => {
  e.preventDefault();
  const username = document.querySelector('#username').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const confirmPassword = document.querySelector('#confirm-password').value;

  if (username && email && password && confirmPassword) {
    if (password === confirmPassword) {
      // Send a POST request to the server to register the user
      fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          email,
          password
        })
      })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    } else {
      alert('Passwords do not match');
    }
  } else {
    alert('Please fill out all fields');
  }
});
