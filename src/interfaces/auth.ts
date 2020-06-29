export interface SignInCredential {
  email: string;
  password: string;
}

export interface ResponseSession {
  user: User;
  token: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  created_at: string;
  updated_at: string;
}

export interface AuthState {
  token: string;
  user: object;
}

export interface AuthContextData {
  sigIn(credentials: SignInCredential): Promise<void>;
  sigOut(): void;
  user: object;
}
