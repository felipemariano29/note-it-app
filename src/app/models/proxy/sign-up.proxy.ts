import { UserInterface } from '../interface/user.interface';
import { LoginProxy } from './login.proxy';

export interface SignUpProxy {

  login: LoginProxy;
  user: UserInterface;

}
