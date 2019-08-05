import { LoginData } from './login-data.interface';

export interface SignUpData extends LoginData {
  name: string;
}
