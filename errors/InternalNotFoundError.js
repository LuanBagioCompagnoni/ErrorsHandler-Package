import BaseError from './BaseError.js';

class InternalNotFoundError extends BaseError {
  constructor(message = 'Registro não encontrado!') {
    super(message, 404);
  }
}

export default InternalNotFoundError;
