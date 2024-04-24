const { default: Header } = require('components/Header/Header');
const { default: Loader } = require('components/Loader/Loader');
const { Suspense } = require('react');
const { Outlet } = require('react-router');

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
