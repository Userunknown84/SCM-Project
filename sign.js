const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSignUpLink = document.getElementById('showSignUp');
const showLoginLink = document.getElementById('showLogin');
showSignUpLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
});
showLoginLink.addEventListener('click', (e) => {
  e.preventDefault();
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';
});
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email === "bhawna9615@gmail.com" && password === "123456") {
    alert("Login successful! Welcome to your medical portal.");
    window.location.href = 'main.html';
  } else {
    document.getElementById('error-message').innerText = "Invalid email or password!";
  }
});
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const signupEmail = document.getElementById('signupEmail').value;
  const signupPassword = document.getElementById('signupPassword').value;
  if (name && signupEmail && signupPassword) {
    alert(`Account created for ${name}! Please login now.`);
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
  } else {
    alert("Please fill out all fields.");
  }
});
const forgotPasswordLink = document.querySelector('.links a[href="#forgot-password"]');
if (forgotPasswordLink) {
  forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();
    const email = prompt("Please enter your registered email:");
    if (email) {
      alert(`A password reset link has been sent to ${email} (simulated).`);
    } else {
      alert("Email is required to reset password.");
    }
  });
}