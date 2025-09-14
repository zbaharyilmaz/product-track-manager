/**
 * Security utility functions for input sanitization and validation
 */

/**
 * Sanitizes string input to prevent XSS attacks
 * @param {string} input - The input string to sanitize
 * @returns {string} - Sanitized string
 */
export const sanitizeInput = (input) => {
  if (typeof input !== "string") return input;

  return input
    .replace(/[<>]/g, "") // Remove < and > characters
    .replace(/javascript:/gi, "") // Remove javascript: protocol
    .replace(/on\w+=/gi, "") // Remove event handlers
    .trim();
};

/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email format
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates password strength
 * @param {string} password - Password to validate
 * @returns {object} - Validation result with isValid and message
 */
export const validatePasswordStrength = (password) => {
  const minLength = 8;
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[@$?!%&*_-]/.test(password);

  if (password.length < minLength) {
    return {
      isValid: false,
      message: `Password must be at least ${minLength} characters long`,
    };
  }

  if (!hasLowercase) {
    return {
      isValid: false,
      message: "Password must contain at least one lowercase letter",
    };
  }

  if (!hasUppercase) {
    return {
      isValid: false,
      message: "Password must contain at least one uppercase letter",
    };
  }

  if (!hasNumber) {
    return {
      isValid: false,
      message: "Password must contain at least one number",
    };
  }

  if (!hasSpecialChar) {
    return {
      isValid: false,
      message:
        "Password must contain at least one special character (@$?!%&*_-)",
    };
  }

  return { isValid: true, message: "Password is strong" };
};

/**
 * Sanitizes object properties recursively
 * @param {object} obj - Object to sanitize
 * @returns {object} - Sanitized object
 */
export const sanitizeObject = (obj) => {
  if (obj === null || obj === undefined) return obj;

  if (typeof obj === "string") {
    return sanitizeInput(obj);
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => sanitizeObject(item));
  }

  if (typeof obj === "object") {
    const sanitized = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        sanitized[key] = sanitizeObject(obj[key]);
      }
    }
    return sanitized;
  }

  return obj;
};

/**
 * Validates username format
 * @param {string} username - Username to validate
 * @returns {object} - Validation result
 */
export const validateUsername = (username) => {
  const minLength = 5;
  const maxLength = 50;
  const usernameRegex = /^[a-zA-Z0-9_]+$/;

  if (username.length < minLength) {
    return {
      isValid: false,
      message: `Username must be at least ${minLength} characters long`,
    };
  }

  if (username.length > maxLength) {
    return {
      isValid: false,
      message: `Username must be no more than ${maxLength} characters long`,
    };
  }

  if (!usernameRegex.test(username)) {
    return {
      isValid: false,
      message: "Username can only contain letters, numbers, and underscores",
    };
  }

  return { isValid: true, message: "Username is valid" };
};
