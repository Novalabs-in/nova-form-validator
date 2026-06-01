// Zero-dependency form validations
export class FormValidator {
  validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  validatePassword(password) {
    // Min 8 chars, 1 uppercase, 1 number
    return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)
  }
}
