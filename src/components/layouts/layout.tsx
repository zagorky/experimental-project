import { Outlet } from 'react-router';
import { Header } from '~components/header.tsx';

export const Layout = () => {
  return (
    <>
      <Header />
      {/*<div className={'flex flex-col justify-center align-items-center'}>*/}
      <Outlet />
      {/*</div>*/}
    </>
  );
};
