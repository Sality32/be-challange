import httpStatus from 'http-status';
import BaseError from './base';

export class ValidationError extends BaseError{
  constructor({ message, errors, status, name, stack, body, user }){
    super({ message, errors, status, name, stack });

    this.status = httpStatus.BAD_REQUEST;
    this.details = errors;
    this.stack = stack
  };
};
