import { configureStore } from '@reduxjs/toolkit';
import { iReview, iUser, iStore, iGame } from '../interfaces/interfaces';
import { userReducer } from '../reducers/users/reducer';
import { reviewReducer } from '../reducers/reviews/reducer';
import { gameReducer } from '../reducers/games/reducer';
const preloadedState: iStore = {
  users: [] as iUser[],
  reviews: [] as iReview[],
  games: [] as iGame[],
};

export const store = configureStore({
  reducer: { users: userReducer, reviews: reviewReducer, games: gameReducer },
  preloadedState,
});
