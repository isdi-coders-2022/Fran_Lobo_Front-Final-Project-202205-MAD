import { createAction } from '@reduxjs/toolkit';
import { actionTypes } from './action.types';
import { iUser, iUserApi } from '../../interfaces/interfaces';

export const loadUserAction = createAction<iUserApi>(actionTypes['user@load']);
export const updateUserAction = createAction<iUser>(actionTypes['user@update']);
export const deleteUserAction = createAction<iUser>(actionTypes['user@delete']);
export const logout = createAction(actionTypes['user@logout']);
