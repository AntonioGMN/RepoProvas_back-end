export interface AppError {
  type: "not_found" | "bad_request" | "unauthorized";
}

export function notFound(): AppError {
  throw { type: "not_found" };
}

export function unauthorized(): AppError {
  throw { type: "unauthorized" };
}