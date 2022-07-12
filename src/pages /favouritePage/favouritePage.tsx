import { iGame } from '../../interfaces/interfaces';

export function FavouritePage() {
  async function handlerAddAndModify(game: iGame) {
    const sameGame = games.find((game) => game.idGame === game.id);
    if (sameGame === undefined) {
      const newMatch = await new Game(
        weather,
        film.id,
        user?.nickname as string
      );
      addMatch(newMatch);
    }
  }
}
