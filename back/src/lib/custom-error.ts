export class CustomError extends Error {
  status: HttpCode;
  constructor(status: HttpCode, message?: CustomerErrorMessage) {
    super(message);
    this.status = status;
  }
}

type HttpCode = 200 | 400 | 401 | 403 | 404;
type CustomerErrorMessage = string;
