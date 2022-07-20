import * as actions from './action.creators';
import { AnyAction } from '@reduxjs/toolkit';
import { iReview } from '../../interfaces/interfaces';
import { reviewReducer } from './reducer';

const mockReview: iReview = {
  _id: '1',
  idUser: 'Manolo',
  idGame: '12',
  text: 'A manolo le gustó el juego',
};

const mockReview2: iReview = {
  _id: '2',
  idUser: 'Claudia',
  idGame: '23',
  text: 'A claudia no le gustó tanto',
};

const mockUpdateReview = {
  _id: '1',
  idUser: 'Leo',
  idGame: '33',
  text: 'Leo no sabe que hacer ',
};

const mockedArray: iReview[] = [mockReview, mockReview2];

describe('Given Review reducer', () => {
  describe('When calling it with load action with an array of Review', () => {
    test('It should return a new state with that array of Review', () => {
      const newState = reviewReducer([], actions.loadReviewAction(mockedArray));
      expect(newState).toEqual(mockedArray);
    });
  });
  describe('When calling it with add action with a Review', () => {
    test('It should return a new state with an array with that Review', () => {
      const newState = reviewReducer(
        [],
        actions.addReviewAction(mockedArray[0])
      );
      expect(newState).toEqual([mockedArray[0]]);
    });
  });
  describe('When calling it with update action with a Review or a partial Review', () => {
    test('It should return a new state with an updated array of Review', () => {
      const newState = reviewReducer(
        mockedArray,
        actions.updateReviewAction({
          ...mockedArray[0],
          text: 'test',
        })
      );
      expect(newState.find((item) => item._id === '1')?.text).toEqual('test');
    });
  });
  describe('When calling it with delete action with a review', () => {
    test('It should return a new state with an array of previous Room without the deleted one', () => {
      const newState = reviewReducer(
        mockedArray,
        actions.deleteReviewAction(mockedArray[0])
      );
      expect(newState).toEqual([mockReview2]);
    });
  });
  describe('When calling it with a non related action', () => {
    test('It should return a new state equal to the previous one', () => {
      const newState = reviewReducer(mockedArray, {} as AnyAction);
      expect(newState).toEqual(mockedArray);
    });
  });
});
