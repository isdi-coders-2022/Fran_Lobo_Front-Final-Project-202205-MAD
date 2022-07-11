import { createReducer } from '@reduxjs/toolkit';
import { iGame } from '../../interfaces/interfaces';
import * as actions from './action.creators';

const initialState = [] as iGame[];

export const gameReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(actions.loadGameAction, (_state, action) => [...action.payload])
    .addCase(actions.addGameAction, (state, action) => [
      ...state,
      action.payload,
    ])
    .addCase(actions.updateGameAction, (state, action) =>
      state.map((item) =>
        item._id === action.payload._id ? action.payload : item
      )
    )
    .addCase(actions.deleteGameAction, (state, action) =>
      state.filter((item) => item._id !== action.payload._id)
    )
    .addDefaultCase((state) => state)
);
