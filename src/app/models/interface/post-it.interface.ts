import { CommentInterface } from './comment.interface';
import { UserInterface } from './user.interface';

export interface PostItInterface {

  user: UserInterface;
  title: string;
  body: string;
  color: string;
  comments?: CommentInterface[];

}
