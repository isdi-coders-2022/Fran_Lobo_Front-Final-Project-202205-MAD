import { iGame, iReview, iUser, iUserApi } from '../interfaces/interfaces';

export class ApiGames {
  apiUrl: string;
  constructor() {
    this.apiUrl = 'http://localhost:3400/';
  }

  async getAllReview(): Promise<iReview[]> {
    const resp = await fetch(`${this.apiUrl}review/`);
    return await resp.json();
  }

  async getOneReview(id: iReview['_id']): Promise<iReview> {
    const resp = await fetch(`${this.apiUrl}review/` + id);
    return await resp.json();
  }

  async setOneReview(payload: iReview): Promise<iReview> {
    const resp = await fetch(`${this.apiUrl}review/`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await resp.json();
  }

  async updateOneReview(
    id: iReview['_id'],
    payload: iReview
  ): Promise<iReview> {
    const resp = await fetch(`${this.apiUrl}review/` + id, {
      method: 'PATCH',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await resp.json();
  }

  async deleteOneReview(id: iReview['_id']): Promise<iReview> {
    const resp = await fetch(`${this.apiUrl}review/` + id, {
      method: 'DELETE',
    });
    return await resp.json();
  }

  async getAllUser(): Promise<iUser[]> {
    const resp = await fetch(`${this.apiUrl}user/`);
    return await resp.json();
  }

  async getOneUser(id: iUser['_id']): Promise<iUser> {
    const resp = await fetch(`${this.apiUrl}user/` + id);
    return await resp.json();
  }

  async setOneUser(payload: iUser): Promise<iUser> {
    const resp = await fetch(`${this.apiUrl}user/`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await resp.json();
  }

  async loginUser(payload: {
    email: string;
    password: string;
  }): Promise<iUserApi> {
    const resp = await fetch(`${this.apiUrl}user/login`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await resp.json();
    console.log('DATA FROM LOGIN', data);

    return data;
  }

  async updateOneUser(payload: Partial<iUser>): Promise<iUser> {
    const resp = await fetch(`${this.apiUrl}user/` + payload._id, {
      method: 'PATCH',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await resp.json();
  }

  async deleteOneUser(id: iUser['_id']): Promise<iUser> {
    const resp = await fetch(`${this.apiUrl}user/` + id, {
      method: 'DELETE',
    });
    return await resp.json();
  }

  async getAllGame(): Promise<iGame[]> {
    const resp = await fetch(`${this.apiUrl}game/`);
    return await resp.json();
  }

  async getOneGame(id: iGame['_id']): Promise<iGame> {
    const resp = await fetch(`${this.apiUrl}game/` + id);
    return await resp.json();
  }
}
