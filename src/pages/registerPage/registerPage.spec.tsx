import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from '../../components/layout/layout';

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

import { render, screen } from '../../utils/test-utils';
import { Register, RegisterPage } from './RegisterPage';

describe('Given the HomePage component', () => {
  describe('when it is called', () => {
    test('it should be rendered', () => {
      const mockGame: iGame = {
        _id: '1',
        name: 'leon',
        description: 'pepepepepepepepe',
        url: 'wqkejlakslflewnflsf',
        image: 'qwñldekwqñdlmsañld',
      };
      const mockGame2: iGame = {
        _id: '2',
        name: 'ñlkñlkdñla',
        description: 'wqdñlke',
        url: 'qwñls',
        image: 'qweñldk',
      };

      const reducer = {
        user: userReducer,
        games: gameReducer,
        reviews: reviewReducer,
      };

      const preloadedState: iStore = {
        user: mockGame as unknown as iUserApi,
        reviews: [] as iReview[],
        games: [mockGame, mockGame2] as iGame[],
      };

      render(
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>,
        { preloadedState, reducer }
      );

      const element = screen.getByText(/email:/i);
      expect(element).toBeInTheDocument();
      const element1 = screen.getByTestId('1');
      expect(element1).toBeInTheDocument();
    });
  });
});
