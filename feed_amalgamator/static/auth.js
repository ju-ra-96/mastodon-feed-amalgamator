document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.register-form')
  const username = document.getElementById('username')
  const password = document.getElementById('password')
  const errorMessage = document.getElementById('error-message')
  const confirmPassword = document.getElementById('confirm_password')

  form.addEventListener('submit', function (e) {
    let valid = true
    errorMessage.innerHTML = '' // Clear any existing error messages
    errorMessage.style.display = 'none' // Hide the error message container

    // Username validation
    if (username.value.trim() === '') {
      errorMessage.innerHTML += 'Username is required.<br>'
      valid = false
    } else if (username.value.length < 4 || username.value.length > 20) {
      errorMessage.innerHTML += 'Username must be between 4 and 20 characters.<br>'
      valid = false
    } else if (!/^[a-zA-Z0-9_]+$/.test(username.value)) {
      errorMessage.innerHTML += 'Username can only contain letters, numbers, and underscores.<br>'
      valid = false
    }

    // Password validation
    if (password.value.trim() === '') {
      errorMessage.innerHTML += 'Password is required.<br>'
      valid = false
    } else if (password.value !== confirmPassword.value) {
      errorMessage.innerHTML += 'Passwords do not match.<br>'
      valid = false
    } else if (password.value.length < 8) {
      errorMessage.innerHTML += 'Password must be at least 8 characters long.<br>'
      valid = false
    } else if (password.value.length > 16) {
      errorMessage.innerHTML += 'Password must be no more than 16 characters long.<br>'
      valid = false
    } else if (!/[A-Z]/.test(password.value)) {
      errorMessage.innerHTML += 'Password must contain at least one uppercase letter.<br>'
      valid = false
    } else if (!/[a-z]/.test(password.value)) {
      errorMessage.innerHTML += 'Password must contain at least one lowercase letter.<br>'
      valid = false
    } else if (!/[0-9]/.test(password.value)) {
      errorMessage.innerHTML += 'Password must contain at least one digit.<br>'
      valid = false
    } else if (!/[^a-zA-Z0-9]/.test(password.value)) {
      errorMessage.innerHTML += 'Password must contain at least one special character.<br>'
      valid = false
    }

    if (!valid) {
      e.preventDefault() // Stop form submission
      errorMessage.style.display = 'block' // Show error message container
    }
    // If 'valid' is true, form will submit normally
  })
})
