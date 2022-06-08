const { ErrorUtils } = require("./appError");

 class ValidationUtils {
  validateIsNotNullOrUndefined(fieldName, field) {
    if (field === null || typeof field === "undefined") {
      ErrorUtils.throwValidationError(
        `${fieldName} may not be null, undefined or blank`
      );
    }
  }

  validateStringNotEmpty(fieldName, field) {
    this.validateIsNotNullOrUndefined(fieldName, field);
    if (typeof field !== "string") {
      ErrorUtils.throwValidationError(
        `${fieldName} is not a valid string type`
      );
    } else if (field.trim().length === 0) {
      ErrorUtils.throwValidationError(
        `${fieldName} may not be null, undefined or blank`
      );
    }
  }

  validateIsNumber(fieldName, field) {
    this.validateIsNotNullOrUndefined(fieldName, field);
    if (typeof field !== "number") {
      ErrorUtils.throwValidationError(`${fieldName} is not a number`);
    } else if (field < 0) {
      ErrorUtils.throwValidationError(
        `${fieldName} should be a positive number`
      );
    }
  }

  validateIsBoolean(fieldName, field) {
    this.validateIsNotNullOrUndefined(fieldName, field);
    if (typeof field !== "boolean") {
      ErrorUtils.throwValidationError(`${fieldName} should be of type boolean`);
    }
  }

  validateIsEmail(fieldName, field) {
    this.validateIsNotNullOrUndefined(fieldName, field);
    const regEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEx.test(field)) {
      ErrorUtils.throwValidationError(
        `Invalid ${fieldName} provided: ${field}`
      );
    }
  }
};

module.exports = new ValidationUtils();