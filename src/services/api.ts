import { iGame } from '../interfaces/interfaces';

export class ApiGames {
  apiUrl: string;
  constructor() {
    this.apiUrl = 'http://localhost:3400/';
  }

  async getAllReview(): Promise<iGame[]> {
    const resp = await fetch(`${this.apiUrl}/review/`);
    return await resp.json();
  }

  async getOneReview(id: iGame['_id']): Promise<iGame> {
    const resp = await fetch(`${this.apiUrl}/review/` + id);
    return await resp.json();
  }

  async setOneReview(payload: iGame): Promise<iGame> {
    const resp = await fetch(`${this.apiUrl}/review/`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await resp.json();
  }

  async updateOneReview(id: iGame['_id'], payload: iGame): Promise<iGame> {
    const resp = await fetch(`${this.apiUrl}/review/` + id, {
      method: 'PATCH',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await resp.json();
  }

  async deleteOneReview(id: iGame['_id']): Promise<iGame> {
    const resp = await fetch(`${this.apiUrl}/review/` + id, {
      method: 'DELETE',
    });
    return await resp.json();
  }

  async getAllUser(): Promise<iGame[]> {
    const resp = await fetch(`${this.apiUrl}/user/`);
    return await resp.json();
  }

  async getOneUser(id: iGame['_id']): Promise<iGame> {
    const resp = await fetch(`${this.apiUrl}/user/` + id);
    return await resp.json();
  }

  async setOneUser(payload: iGame): Promise<iGame> {
    const resp = await fetch(`${this.apiUrl}/user/`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await resp.json();
  }

  async updateOneUser(id: iGame['_id'], payload: iGame): Promise<iGame> {
    const resp = await fetch(`${this.apiUrl}/user/` + id, {
      method: 'PATCH',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await resp.json();
  }

  async deleteOneUser(id: iGame['_id']): Promise<iGame> {
    const resp = await fetch(`${this.apiUrl}/user/` + id, {
      method: 'DELETE',
    });
    return await resp.json();
  }
}
