/* eslint-disable no-undef */
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { reviewReducer } from '../reducers/reviews/reducer';
import { gameReducer } from '../reducers/games/reducer';
import { userReducer } from '../reducers/users/reducer';

function render(
  ui: JSX.Element,
  {
    preloadedState,
    reducer,
  }: {
    preloadedState: {};
    reducer: {};
  }
) {
  function Wrapper({ children }: { children: JSX.Element }) {
    return (
      <Provider
        store={configureStore({
          reducer: {
            user: userReducer,
            review: reviewReducer,
            game: gameReducer,
          },
          preloadedState,
        })}
      >
        {children}
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper });
}

export * from '@testing-library/react';
export { render };
