import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/layout/layout';
import { iRouterItem } from '../interfaces/interfaces';
import { loadReviewAction } from '../reducers/reviews/action.creators';
import { ApiGames } from '../services/api';
import { loadGameAction } from '../reducers/games/action.creators';
import { LoginPage } from '../pages/loginPage/loginPage';
//import { RegisterPage } from '../pages/registerPage/RegisterPage';
import { loadUserAction } from '../reducers/users/action.creators';
import InfoPage from '../pages/infoPage/infoPage';
import { FavouritePage } from '../pages/favouritePage/favouritePage';
import { LocalStoreService } from '../services/localStorage';
import RankingPage from '../pages/rankingPage/rankingPage';
import ProfilePage from '../pages/profilePage/profilePage';

export function App() {
  const dispatcher = useDispatch();
  const apiGames = useMemo(() => new ApiGames(), []);
  const localStorageService = useMemo(() => new LocalStoreService(), []);

  useEffect(() => {
    apiGames
      .getAllReview()
      .then((reviews) => dispatcher(loadReviewAction(reviews)));
    apiGames.getAllGame().then((games) => dispatcher(loadGameAction(games)));
    const localStorageUserData = localStorageService.getUser();
    if (localStorageUserData) {
      apiGames
        .loginWithToken(localStorageUserData.token as string)
        .then((data) => {
          dispatcher(loadUserAction(data));
        });
    }
  }, [apiGames, dispatcher, localStorageService]);

  const HomePage = React.lazy(() => import('../pages/homePage/homePage'));
  // const RankingPage = React.lazy(() => import('./pages /rankingPage'));
  const DetailsPage = React.lazy(
    () => import('../pages/detailsPage/detailsPage')
  );
  const RegisterPage = React.lazy(
    () => import('../pages/registerPage/RegisterPage')
  );
  const ProfilePage = React.lazy(
    () => import('../pages/profilePage/profilePage')
  );
  // const FavouritePage = React.lazy(() => import('./pages /favouritePage'));

  const routerOptions: iRouterItem[] = [
    { path: '/', label: 'Home', page: <HomePage /> },
    { path: '/login', label: 'Login', page: <LoginPage /> },
    { path: '/register', label: 'Register', page: <RegisterPage /> },
    { path: '/details/:id', label: 'Game', page: <DetailsPage /> },
    { path: '/create', label: 'Create', page: <DetailsPage /> },
    { path: '/info', label: 'Info', page: <InfoPage /> },
    { path: '/favourites', label: 'favourites', page: <FavouritePage /> },
    { path: '/ranking', label: 'ranking', page: <RankingPage /> },
    { path: '/profile', label: 'profile', page: <ProfilePage /> },
    { path: '*', label: '', page: <HomePage /> },
  ];
  return (
    <Layout>
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
