import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/layout';
import { iRouterItem } from './interfaces/interfaces';
import { loadUserAction } from './reducers/users/action.creators';
import { loadReviewAction } from './reducers/reviews/action.creators';

function App() {
  return <div className="App"></div>;
}

export default App;
