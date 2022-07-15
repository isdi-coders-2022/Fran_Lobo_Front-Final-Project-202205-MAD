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
import { Search } from './search';
const reducer = {
  user: userReducer,
  game: gameReducer,
  review: reviewReducer,
};
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

const preloadedState: iStore = {
  user: mockedUserApi as iUserApi,
  games: [] as iGame[],
  reviews: [] as iReview[],
};

describe('Given the Nav-bar component', () => {
  describe('When it is called', () => {
    test('Then it should render the component', async () => {
      render(
        <BrowserRouter>
          <Search />
        </BrowserRouter>,
        { preloadedState, reducer }
      );
      const display = screen.getByText(/Search your Game/i);
      expect(display).toBeInTheDocument();
    });
  });
});
