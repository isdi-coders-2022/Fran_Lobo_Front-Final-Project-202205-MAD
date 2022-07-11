import { createAction } from '@reduxjs/toolkit';
import { actionTypes } from './action.types';
import { iReview } from '../../interfaces/interfaces';

export const loadReviewAction = createAction<iReview[]>(
  actionTypes['review@load']
);

export const addReviewAction = createAction<iReview>(actionTypes['review@add']);

export const updateReviewAction = createAction<iReview>(
  actionTypes['review@update']
);

export const deleteReviewAction = createAction<iReview>(
  actionTypes['review@delete']
);
