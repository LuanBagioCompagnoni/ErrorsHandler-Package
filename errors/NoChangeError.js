import BaseError from './BaseError.js';

class NoChangeError extends BaseError{
  constructor(message = 'Registro não foi alterado!'){
    super(message, 400);
  }
}

export default NoChangeError;