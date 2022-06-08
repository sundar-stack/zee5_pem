class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
  }
}

const ERROR_MAP = {
  CLIENT_ERRORS: {
    BAD_REQUEST_ERR: {
      ERR_CODE: 400,
      ERR_TYPE: "BAD_REQUEST_ERR",
    },
    VALIDATION_ERR: {
      ERR_CODE: 400,
      ERR_TYPE: "VALIDATION_ERR",
    },
    AUTHORIZATION_ERR: {
      ERR_CODE: 401,
      ERR_TYPE: "AUTHORIZATION_ERR",
    },
    FORBIDDEN_ERR: {
      ERR_CODE: 403,
      ERR_TYPE: "FORBIDDEN_ERR",
    },
    NOT_FOUND_ERR: {
      ERR_CODE: 404,
      ERR_TYPE: "NOT_FOUND_ERR",
    },
    CONFLICT_ERR: {
      ERR_CODE: 409,
      ERR_TYPE: "CONFLICT_ERR",
    },
  },
  SERVER_ERRORS: {
    SYSTEM_ERR: {
      ERR_CODE: 500,
      ERR_TYPE: "SYSTEM_ERR",
    },
  },
};

class ErrUtils {
  throwRouteNotFoundError(errMsg) {
    const { ERR_CODE, ERR_TYPE } = ERROR_MAP.CLIENT_ERRORS.NOT_FOUND_ERR;
    throw new AppError(errMsg, ERR_CODE, ERR_TYPE);
  }
  throwValidationError(errMsg) {
    const { ERR_CODE, ERR_TYPE } = ERROR_MAP.CLIENT_ERRORS.VALIDATION_ERR;
    throw new AppError(errMsg, ERR_CODE, ERR_TYPE);
  }
  throwAuthorizationError(errMsg) {
    const { ERR_CODE, ERR_TYPE } = ERROR_MAP.CLIENT_ERRORS.AUTHORIZATION_ERR;
    throw new AppError(errMsg, ERR_CODE, ERR_TYPE);
  }
}
const ErrorUtils = new ErrUtils();
module.exports = {
  AppError,
  ErrorUtils,
  ERROR_MAP,
};
