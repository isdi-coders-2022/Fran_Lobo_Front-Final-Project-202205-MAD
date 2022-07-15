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

import { render, screen } from '../../utils/test-utils';
import { CardFav } from './CardFav';

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

describe('Given the UserCard component', () => {
  describe('When it is called', () => {
    test('Then it should render the component', async () => {
      render(
        <BrowserRouter>
          <CardFav game={mockGame} />
        </BrowserRouter>,
        { preloadedState, reducer }
      );
      const element = screen.getByText(/pepe/i);
      expect(element).toBeInTheDocument();
    });
  });
});
