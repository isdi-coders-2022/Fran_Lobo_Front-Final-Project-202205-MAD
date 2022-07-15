import { createReducer } from '@reduxjs/toolkit';
import { iUserApi } from '../../interfaces/interfaces';
import * as actions from './action.creators';

const initialState = {} as iUserApi;

export const userReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(actions.loadUserAction, (_state, action) => action.payload)
    .addCase(actions.updateUserAction, (state, action) => ({
      ...state,
      userData: action.payload,
    }))
    .addCase(actions.logout, () => initialState)
    .addDefaultCase((state) => state)
);
