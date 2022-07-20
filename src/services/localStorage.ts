import { iUserApi } from '../interfaces/interfaces';

export class LocalStoreService {
  user: string;
  games: string;
  reviews: string;
  constructor() {
    this.user = 'User';
    this.games = 'Games';
    this.reviews = 'Reviews';
  }

  getUser(): iUserApi {
    return localStorage.getItem(this.user)
      ? JSON.parse(localStorage.getItem(this.user) as string)
      : '';
  }

  setUser(user: iUserApi) {
    localStorage.setItem(this.user, JSON.stringify(user));
  }

  removeUser() {
    localStorage.removeItem(this.user);
  }

  getUsers(): iUserApi[] {
    return localStorage.getItem(this.user)
      ? JSON.parse(localStorage.getItem(this.user) as string)
      : '';
  }
}
