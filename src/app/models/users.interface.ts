import { User } from 'src/app/models/post.interface';

export class Account {
  id: number;
  email: string;
  username: string;
  password: string;
  remember_token: any;
  role: User;
}
