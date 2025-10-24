const API_URL = 'http://localhost:3000';

// Show/Hide forms
function showRegister() {
  document.getElementById('registerForm').classList.remove('hidden');
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('profileSection').classList.add('hidden');
  clearMessage();
}

function showLogin() {
  document.getElementById('loginForm').classList.remove('hidden');
  document.getElementById('registerForm').classList.add('hidden');
  document.getElementById('profileSection').classList.add('hidden');
  clearMessage();
}

function showProfile(username) {
  document.getElementById('profileSection').classList.remove('hidden');
  document.getElementById('registerForm').classList.add('hidden');
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('welcomeMessage').textContent = `Welcome, ${username}!`;
  clearMessage();
}

// Register
async function register() {
  const username = document.getElementById('regUsername').value.trim();
  const password = document.getElementById('regPassword').value.trim();

  if (!username || !password) {
    showMessage('Please fill in all fields', 'error');
    return;
  }

  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
      showMessage('Registration successful! Please login.', 'success');
      setTimeout(showLogin, 1500);
    } else {
      showMessage(data.message, 'error');
    }
  } catch (err) {
    showMessage('Connection error', 'error');
    console.error(err);
  }
}

// Login
async function login() {
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  if (!username || !password) {
    showMessage('Please fill in all fields', 'error');
    return;
  }

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', username);
      showMessage('Login successful!', 'success');
      setTimeout(() => showProfile(username), 1000);
    } else {
      showMessage(data.message, 'error');
    }
  } catch (err) {
    showMessage('Connection error', 'error');
    console.error(err);
  }
}

// Logout
function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  showMessage('Logged out successfully', 'success');
  setTimeout(showLogin, 1000);
}

// Show message
function showMessage(msg, type) {
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = msg;
  messageDiv.className = type;
}

function clearMessage() {
  document.getElementById('message').textContent = '';
  document.getElementById('message').className = '';
}

// Check if already logged in
window.onload = () => {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  if (token && username) {
    showProfile(username);
  }
};
