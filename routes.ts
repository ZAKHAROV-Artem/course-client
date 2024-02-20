export enum Route {
  MAIN = "/",
  SIGN_IN = "/auth/sign-in",
  SIGN_UP = "/auth/sign-up",
  ERROR = "/auth/error",
}

export const authRoutes = [Route.SIGN_IN, Route.SIGN_UP, Route.ERROR];
export const apiAuthPrefix = "/api/auth";
