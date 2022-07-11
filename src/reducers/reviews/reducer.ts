import { createReducer } from '@reduxjs/toolkit';
import { iReview } from '../../interfaces/interfaces';
import * as actions from './action.creators';

const initialState = [] as iReview[];

export const userReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(actions.loadReviewAction, (_state, action) => [...action.payload])
    .addCase(actions.addReviewAction, (state, action) => [
      ...state,
      action.payload,
    ])
    .addCase(actions.updateReviewAction, (state, action) =>
      state.map((item) =>
        item._id === action.payload._id ? action.payload : item
      )
    )
    .addCase(actions.deleteReviewAction, (state, action) =>
      state.filter((item) => item._id !== action.payload._id)
    )
    .addDefaultCase((state) => state)
);
