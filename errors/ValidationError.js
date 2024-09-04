import BaseError from './BaseError.js';

class ValidationError extends BaseError{
  constructor(message = 'Houve um problema ao validar um dos dados fornecidos!', error){
    //error = object with description of each validation error
    //use to return to the client the problems with request to create / change / delete / read with a document
    //front-end will usually list the problems with the request for the client to fix the failures
    const validationErrors = Object.values(error.errors).map(error => error.message);
    super(message, 400, validationErrors);
  }
}

export default ValidationError; 