export interface Post {
	id: number;
  title: string;
  image_location: Object;
  posted_date: Date;
  username_post: string;
  status: boolean;
  vote_up: number;
  vote_down: number;
}


export interface Category {
  id: number;
  category_name: string;
}
