export class HttpError extends Error {
  constructor (message: string, statusCode: number, headers: Record<string, string>) {
    super(message)

    // Maintains proper stack trace (only available on V8)
    /* istanbul ignore next */
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    };

    this.name = 'HttpError'
    this.status = statusCode
    Object.defineProperty(this, 'code', {
      get () {
        console.warn('`error.code` is deprecated, use `error.status`.')
        return statusCode
      }
    })
    this.headers = headers
  }

  public readonly status: number
  public readonly headers: Record<string, string>
}
