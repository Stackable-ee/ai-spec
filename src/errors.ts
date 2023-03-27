export class InvalidFormatError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidFormatError';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
