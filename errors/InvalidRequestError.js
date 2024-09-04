import BaseError from './BaseError.js';

class InvalidRequestError extends BaseError{
  constructor(message = 'Um ou mais dados enviados estão incorretos!'){
    super(message, 400);
  }
}

export default InvalidRequestError;