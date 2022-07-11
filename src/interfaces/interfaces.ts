export interface iUser {
  id?: String;
  name: string;
  secondName: string;
  email: string;
  password: string;
  avatar: string;
  playList: string[];
}
export interface iReview {
  idUser: string;
  idGame: string;
  text: string;
}
