import httpStatus from 'http-status';
import BaseError from './base';

export class TimeoutError extends BaseError{
  constructor({ message, errors, status, name, stack}) {
    super({ message, errors, status, name, stack});

    this.status = httpStatus.INTERNAL_SERVER_ERROR;
    this.message = message || 'Server Timeout';
  };
};
