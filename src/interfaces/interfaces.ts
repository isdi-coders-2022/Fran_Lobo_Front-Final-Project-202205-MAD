export interface iUser {
  _id?: string;
  name: string;
  secondName: string;
  email: string;
  password: string;
  avatar?: string;
  playList?: string[];
}

export interface iUserApi {
  id?: string;
  token?: string;
  userData: iUser;
}
export interface iReview {
  _id?: string;
  idUser: string;
  idGame: string;
  text: string;
}
export interface iGame {
  _id?: string;
  name: string;
  description: string;
  url: string;
  image: string;
}
export interface iRouterItem {
  path: string;
  label: string;
  page: JSX.Element;
}

export interface iStore {
  user: iUserApi;
  reviews: iReview[];
  games: iGame[];
}
