import BaseError from './BaseError.js';

class LoginError extends BaseError{
  constructor(message = 'Não foi possível realizar o login!'){
    super(message, 400);
  }
}

export default LoginError;