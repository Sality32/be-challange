import httpStatus from 'http-status';
import BaseError from './base';

export class ClientError extends BaseError{
  constructor({ message, errors, status, name, stack}){
    super({ message, errors, status, name, stack });

    this.status = httpStatus.BAD_REQUEST;
    this.message = message || 'Invalid Request';
  };
};
