export interface Loginrequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  username?: string;
  birthdate?: string;
  age?: number;
  email?: string;
  valid: boolean;
}
