// import { Suspense } from 'react';
import { Link } from 'react-router-dom';
// import Loader from 'components/Loader/Loader';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <>
      <AppBar
        component="header"
        position="static"
        style={{ backgroundColor: '#d1e2ec' }}
      >
        <Toolbar>
          <ul>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <Link to="/">
                <Typography typography="h6" color="orange">
                  Home
                </Typography>
              </Link>
            </li>
          </ul>

          <Link to="catalog">
            <Typography
              style={{ marginLeft: 35 }}
              typography="h6"
              color="orange"
            >
              Catalog
            </Typography>
          </Link>

          <Link to="favorite">
            <Typography
              style={{ marginLeft: 35 }}
              typography="h6"
              color="orange"
            >
              Favorite
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>

      {/* <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main> */}
    </>
  );
};

export default Header;
