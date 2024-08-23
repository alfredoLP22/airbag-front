export interface ErrorDetail {
  msg: string;
}

export interface ErrorResponse {
  status: boolean;
  data: Record<string, unknown> | ErrorDetail[];
  errors: ErrorDetail[];
}
