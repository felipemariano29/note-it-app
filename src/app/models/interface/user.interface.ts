import { PostItInterface } from './post-it.interface';

export interface UserInterface {

  name: string;
  job: string;
  profilePictureUrl: string;
  allPosts: PostItInterface[];

}
