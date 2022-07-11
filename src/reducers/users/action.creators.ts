import { createAction } from '@reduxjs/toolkit';
import { actionTypes } from './action.types';
import { iUser } from '../../interfaces/interfaces';

export const loadUserAction = createAction<iUser[]>(actionTypes['user@load']);

export const addUserAction = createAction<iUser[]>(actionTypes['user@add']);

export const addUserUpdate = createAction<iUser[]>(actionTypes['user@update']);

export const deleteUserAction = createAction<iUser[]>(
  actionTypes['user@delete']
);
