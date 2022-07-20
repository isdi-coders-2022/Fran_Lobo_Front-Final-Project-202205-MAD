import { input } from '@testing-library/user-event/dist/types/utils';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import {
  iGame,
  iReview,
  iStore,
  iUser,
  iUserApi,
} from '../../interfaces/interfaces';
import { gameReducer } from '../../reducers/games/reducer';

import { reviewReducer } from '../../reducers/reviews/reducer';
import { userReducer } from '../../reducers/users/reducer';
import { ApiGames } from '../../services/api';

import { fireEvent, render, screen } from '../../utils/test-utils';
import { LoginPage } from './loginPage';
const reducer = {
  user: userReducer,
  games: gameReducer,
  reviews: reviewReducer,
};
const preloadedState: iStore = {
  user: {} as unknown as iUserApi,
  reviews: [] as iReview[],
  games: [] as iGame[],
};

describe('Given the LoginPage component', () => {
  describe('when it is called', () => {
    test('it should be rendered by submit ', async () => {
      render(
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>,
        { preloadedState, reducer }
      );

      const result = (ApiGames.prototype.loginUser = jest
        .fn()
        .mockResolvedValue({ user: { name: 'pepe' } }));
      const button = screen.getByRole('button');

      fireEvent.click(button);
      // const display = screen.getByText(/Don´t you have an account?/i);
      expect(result).toHaveBeenCalled();
    });
  });
  describe('when it is call', () => {
    test('it should be rendered handleChange', async () => {
      render(
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>,
        { preloadedState, reducer }
      );

      const result = (ApiGames.prototype.loginUser = jest
        .fn()
        .mockResolvedValue({ user: { name: 'pepe' } }));
      const inputs = screen.getAllByRole('textbox');
      fireEvent.change(inputs[0], { target: { value: 'test' } });
      const button = screen.getByRole('button');

      fireEvent.click(button);
      // const display = screen.getByText(/Don´t you have an account?/i);
      expect(result).toHaveBeenCalled();
    });
  });
});
