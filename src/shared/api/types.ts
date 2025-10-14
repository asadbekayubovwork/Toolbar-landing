/**
 * A configuration object for our HTTP client, similar to Axios.
 */
export interface ApiClientConfig extends Omit<RequestInit, "body"> {
  params?: Record<string, any>
  data?: any // Replaces `body` for a more Axios-like feel
}

/**
 * A custom error class that holds the response object and status.
 * TanStack Query will receive this error on promise rejection.
 */
export class HttpError extends Error {
  response: Response
  status: number

  constructor(response: Response) {
    super(`HTTP Error: ${response.status} ${response.statusText}`)
    this.name = "HttpError"
    this.response = response
    this.status = response.status
  }
}
