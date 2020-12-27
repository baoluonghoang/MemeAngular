export class Post {
  id: number;
  title:string;
  image: string;
  posted_date: Date;
  vote_up: number;
  vote_down: number;
  status: boolean;
  username: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export class Category {
  category_id: number;
  post_category: string;
  post_id: number;
}

export class User {
  username: string;
  status: boolean;
  role: boolean;
}

export class Account {
  email: string;
  username: string;
  password: string;
  remember_token: any;
}

export class Comment {
  username: string;
  post_id: number;
  content: string;
}

export class Report {
  username: string;
  post_id: number;
  content: string;
  status: boolean;
}

export class Vote {
  username: string;
  post_id: number;
  type: string;
}
