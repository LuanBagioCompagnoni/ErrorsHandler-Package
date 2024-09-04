import BaseError from './BaseError.js';

class DuplicityError extends BaseError{
  constructor(message = 'Registro já existe!'){
    super(`${message}`, 409);
  }
}

export default DuplicityError;