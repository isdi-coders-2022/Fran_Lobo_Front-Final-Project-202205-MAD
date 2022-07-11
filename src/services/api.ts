import { iGame } from '../interfaces/interfaces';

export class ApiGames {
  apiUrl: string;
  constructor() {
    this.apiUrl = 'http://localhost:3400/game/';
  }

  async getAll(): Promise<iGame[]> {
    const resp = await fetch(`${this.apiUrl}/review/`);
    return await resp.json();
  }

  async getOne(id: iGame['_id']): Promise<iGame> {
    const resp = await fetch(`${this.apiUrl}/review/` + id);
    return await resp.json();
  }

  async setOne(payload: iGame): Promise<iGame> {
    const resp = await fetch(`${this.apiUrl}/review/`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await resp.json();
  }

  async updateOne(id: iGame['_id'], payload: iGame): Promise<iGame> {
    const resp = await fetch(`${this.apiUrl}/review/` + id, {
      method: 'PATCH',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await resp.json();
  }

  async deleteOne(id: iGame['_id']): Promise<iGame> {
    const resp = await fetch(`${this.apiUrl}/review/` + id, {
      method: 'DELETE',
    });
    return await resp.json();
  }
}
