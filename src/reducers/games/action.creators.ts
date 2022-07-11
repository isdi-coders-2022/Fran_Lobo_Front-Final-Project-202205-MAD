import { createAction } from '@reduxjs/toolkit';
import { actionTypes } from './action.types';
import { iGame, iUser } from '../../interfaces/interfaces';

export const loadGameAction = createAction<iGame[]>(actionTypes['game@load']);

export const addGameAction = createAction<iGame>(actionTypes['game@add']);

export const updateGameAction = createAction<iGame>(actionTypes['game@update']);

export const deleteGameAction = createAction<iGame>(actionTypes['game@delete']);
