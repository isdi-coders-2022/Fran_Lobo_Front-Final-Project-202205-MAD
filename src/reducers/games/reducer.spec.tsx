import * as actions from './action.creators';
import { AnyAction } from '@reduxjs/toolkit';
import { iGame } from '../../interfaces/interfaces';
import { gameReducer } from './reducer';

const mockGame: iGame = {
  _id: '1',
  name: 'Virus',
  description: 'Un juego  entretenido para toda la familia',
  url: 'ewrfdsljflsknf,ksenr,ahf,sdnf,dsn',
  image: 'esto es un imagen',
};

const mockGame2: iGame = {
  _id: '2',
  name: 'Pasajeros al tren ',
  description: 'Un juego  que no tiene porque defraudar a nadie ',
  url: 'ewrfdsljflsknf,ksenr,ahf,sdnf,dsn',
  image: 'esto es un imagen, 12',
};

const mockUpdateGame = {
  _id: '1',
  name: 'actualizado ',
  description: 'Se actualizó',
  url: 'wqkdepsfjewfwef',
  image: 'esto es un imagen actualizada',
};

const mockedArray: iGame[] = [mockGame, mockGame2];

describe('Given Game reducer', () => {
  describe('When calling it with load action with an array of Game', () => {
    test('It should return a new state with that array of Game', () => {
      const newState = gameReducer([], actions.loadGameAction(mockedArray));
      expect(newState).toEqual(mockedArray);
    });
  });
  describe('When calling it with add action with a Game', () => {
    test('It should return a new state with an array with that Game', () => {
      const newState = gameReducer([], actions.addGameAction(mockedArray[0]));
      expect(newState).toEqual([mockedArray[0]]);
    });
  });
  describe('When calling it with update action with a Game or a partial Game', () => {
    test('It should return a new state with an updated array of Game', () => {
      const newState = gameReducer(
        mockedArray,
        actions.updateGameAction({
          ...mockedArray[0],
          name: 'test',
        })
      );
      expect(newState.find((item) => item._id === '1')?.name).toEqual('test');
    });
  });
  describe('When calling it with delete action with a Game', () => {
    test('It should return a new state with an array of previous Game without the deleted one', () => {
      const newState = gameReducer(
        mockedArray,
        actions.deleteGameAction(mockedArray[0])
      );
      expect(newState).toEqual([mockGame2]);
    });
  });
  describe('When calling it with a non related action', () => {
    test('It should return a new state equal to the previous one', () => {
      const newState = gameReducer(mockedArray, {} as AnyAction);
      expect(newState).toEqual(mockedArray);
    });
  });
});
