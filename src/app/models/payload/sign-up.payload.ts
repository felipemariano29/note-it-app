import { UserInterface } from '../interface/user.interface';
import { LoginPayload } from './login.payload';

export interface SignUpPayload {

  login: LoginPayload;
  user: UserInterface;

}
