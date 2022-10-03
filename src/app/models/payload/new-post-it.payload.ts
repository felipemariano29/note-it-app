import { PostItInterface } from '../interface/post-it.interface';
import { UserInterface } from '../interface/user.interface';

export interface NewPostItPayload {

  postIt: PostItInterface;
  user: UserInterface;

}
