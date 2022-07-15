import * as actions from './action.creators';
import * as gameActions from '../reviews/action.creators';
import { AnyAction } from '@reduxjs/toolkit';
import { iGame, iUser, iUserApi } from '../../interfaces/interfaces';
import { userReducer } from './reducer';

const mockUser: iUser = {
  name: 'test',
  secondName: 'test',
  email: 'test@test.test',
  password: 'test',
  avatar: 'testUrl',
  playList: [],
};

const mockedUserApi: iUserApi = {
  id: '1',
  token: '12',
  userData: mockUser,
};

const mockInitialState: iUserApi = {
  id: '',
  token: '',
  userData: mockUser,
};

describe('Given user reducer ', () => {
  describe('When calling it with load action with a user', () => {
    test('It should return a new state with that user', () => {
      const newState = userReducer(
        mockInitialState,
        actions.loadUserAction(mockedUserApi)
      );
      expect(newState).toEqual(mockedUserApi);
    });
  });
  describe('When calling it with update action with an updated user', () => {
    test('It should return a new state with that user', () => {
      const newState = userReducer(
        mockInitialState,
        actions.updateUserAction({ ...mockUser, name: 'updated' })
      );
      expect(newState).toEqual({
        ...mockInitialState,
        userData: { ...mockUser, name: 'updated' },
      });
    });
  });
  describe('When calling it with logout action', () => {
    test('It should return a new state without that user`s data', () => {
      const newState = userReducer(mockInitialState, actions.logout());
      expect(newState).toEqual({});
    });
  });
  describe('When calling it with a different action', () => {
    test('It should return a new state without that user`s data', () => {
      const newState = userReducer(
        mockInitialState,
        gameActions.loadReviewAction([])
      );
      expect(newState).toEqual(mockInitialState);
    });
  });
});
