export interface iUser {
  _id?: String;
  name: string;
  secondName: string;
  email: string;
  password: string;
  avatar: string;
  playList: string[];
}

export interface iUserApi {
  id: String;
  token: String;
  userData: iUser;
}
export interface iReview {
  _id?: String;
  idUser: string;
  idGame: string;
  text: string;
}
export interface iGame {
  _id?: String;
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
