import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  iGame,
  iReview,
  iRouterItem,
  iStore,
  iUser,
  iUserApi,
} from '../../interfaces/interfaces';
import { gameReducer } from '../../reducers/games/reducer';
import { reviewReducer } from '../../reducers/reviews/reducer';
import { userReducer } from '../../reducers/users/reducer';

import { render, screen } from '../../utils/test-utils';
import { Layout } from '../layout/layout';

import { List } from './index';

describe('Given the List component', () => {
  describe('when it is called', () => {
    test('it should be rendered', () => {
      const mockGame: iGame = {
        _id: '1',
        name: 'pepe',
        description: 'vamos que nos vamos,',
        url: 'franciscoLobo',
        image: 'ewlkjdlskjcewjf',
      };

      const reducer = {
        user: userReducer,
        games: gameReducer,
        reviews: reviewReducer,
      };

      const preloadedState: iStore = {
        user: mockGame as unknown as iUserApi,
        games: [] as iGame[],
        reviews: [] as iReview[],
      };

      render(
        <BrowserRouter>
          <Layout>
            <List data={[]} />
          </Layout>
        </BrowserRouter>,
        { preloadedState, reducer }
      );
      const element = screen.getByTestId('1');
      expect(element).toBeInTheDocument();
    });
  });
});
