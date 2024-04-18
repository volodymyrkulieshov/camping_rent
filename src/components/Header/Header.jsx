import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      {/* <a href="/">Home</a>
      <a href="catalog">Catalog</a>
      <a href="favorite">Favorite</a> */}
      <Link to="/">Home</Link>
      <Link to="catalog">Catalog</Link>
      <Link to="favorite">Favorite</Link>

      <Suspense fallback={'.....LOADING'}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Header;
