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
import HomePage from './homePage';

describe('Given the HomePage component', () => {
  describe('when it is called', () => {
    test('it should be rendered', () => {
      const mockUser: iUser = {
        _id: '',
        name: '',
        secondName: '',
        email: '',
        password: '',
        avatar: '',
        playList: [],
      };

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
          <HomePage />
        </BrowserRouter>,
        { preloadedState, reducer }
      );

      const element = screen.getByText(/leon/i);
      expect(element).toBeInTheDocument();
    });
  });
});
