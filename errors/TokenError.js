import BaseError from './BaseError.js';

class TokenError extends BaseError{
    constructor(message = 'Token inválido!'){
        super(`${message}`, 401);
    }
}

export default TokenError;