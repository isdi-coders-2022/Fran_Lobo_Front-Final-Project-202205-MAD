import { configureStore } from '@reduxjs/toolkit';
import {
  iReview,
  iStore,
  iGame,
  iUserApi,
  iUser,
} from '../interfaces/interfaces';
import { userReducer } from '../reducers/users/reducer';
import { reviewReducer } from '../reducers/reviews/reducer';
import { gameReducer } from '../reducers/games/reducer';

const preloadedState: iStore = {
  user: {
    token: '',
    id: '',
    userData: {
      _id: '',
      name: '',
      secondName: '',
      email: '',
      password: '',
      avatar: '',
      playList: [],
    },
  } as iUserApi,
  reviews: [] as iReview[],
  games: [] as iGame[],
};

export const store = configureStore({
  reducer: {
    user: userReducer,
    reviews: reviewReducer,
    games: gameReducer,
  },
});
