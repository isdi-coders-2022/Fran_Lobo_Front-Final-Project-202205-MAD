import { iUserApi } from '../interfaces/interfaces';

export class LocalStoreService {
  user: string;
  users: string;
  rooms: string;
  constructor() {
    this.user = 'User';
    this.users = 'Users';
    this.rooms = 'Rooms';
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
    return localStorage.getItem(this.users)
      ? JSON.parse(localStorage.getItem(this.users) as string)
      : '';
  }
}
