import { configureStore } from '@reduxjs/toolkit';
import { iReview, iUser, iStore } from '../interfaces/interfaces';
import { userReducer } from '../reducers/users/reducer';
import { reviewReducer } from '../reducers/reviews/reducer';
const preloadedState: iStore = {
  users: [] as iUser[],
  reviews: [] as iReview[],
};

export const store = configureStore({
  reducer: { users: userReducer, reviews: reviewReducer },
  preloadedState,
});
