import HomePage from 'pages/Home/HomePage';
// import Header from './Header/Header';
import { Routes, Route } from 'react-router';
// import PublicRoute from './PublicRoute';
import CatalogPage from 'pages/Catalog/CatalogPage';
import FavoritePage from 'pages/Favorite/FavoritePage';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Route>
    </Routes>
  );
};
