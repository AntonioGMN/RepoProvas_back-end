export interface AppError {
  type: "not_found" | "bad_request" | "unauthorized",
  message: string;
}

export function notFound(message): AppError {
  throw { type: "not_found", message };
}

export function unauthorized(message): AppError {
  throw { type: "unauthorized", message };
}