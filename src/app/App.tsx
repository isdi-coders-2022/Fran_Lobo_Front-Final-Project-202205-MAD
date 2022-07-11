import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/layout/layout';
import { iRouterItem } from '../interfaces/interfaces';
import { loadUserAction } from '../reducers/users/action.creators';
import { loadReviewAction } from '../reducers/reviews/action.creators';
import { ApiGames } from '../services/api';
import { loadGameAction } from '../reducers/games/action.creators';

export function App() {
  const dispatcher = useDispatch();
  const apiGames = useMemo(() => new ApiGames(), []);

  useEffect(() => {
    apiGames
      .getAllReview()
      .then((reviews) => dispatcher(loadReviewAction(reviews)));

    apiGames.getAllGame().then((games) => dispatcher(loadGameAction(games)));

    apiGames.getAllUser().then((users) => dispatcher(loadUserAction(users)));
  }, [apiGames, dispatcher]);

  const HomePage = React.lazy(() => import('../pages /homePage/homePage'));
  // const RankingPage = React.lazy(() => import('./pages /rankingPage'));
  // const DetailsPage = React.lazy(() => import('../pages/detailsPage'));
  // const FavouritePage = React.lazy(() => import('./pages /favouritePage'));

  const routerOptions: iRouterItem[] = [
    { path: '/', label: 'Home - Robots', page: <HomePage /> },
    //{ path: '/details/:id', label: 'Robot', page: <RankingPage /> },
    //{ path: '/create', label: 'Create Robot', page: <DetailsPage /> },
    //{ path: '/edit/:id', label: 'Edit Robot', page: <FavouritePage /> },
    { path: '*', label: '', page: <HomePage /> },
  ];
  return (
    <Layout navOptions={routerOptions}>
      <React.Suspense>
        <Routes>
          {routerOptions.map((item) => (
            <Route
              key={item.label}
              path={item.path}
              element={item.page}
            ></Route>
          ))}
        </Routes>
      </React.Suspense>
    </Layout>
  );
}
