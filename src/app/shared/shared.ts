export interface Environment {
  production: boolean;
  apiKey: string;
  fbDbUrl: string;
}
export interface User {
email: string;
password: string;
returnSecureToken?: boolean;
}
export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}
