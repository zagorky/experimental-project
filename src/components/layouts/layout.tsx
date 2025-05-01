import { Link, Outlet } from 'react-router';

export const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/state">UseState</Link>
          </li>
          <li>
            <Link to="/signals">Signals</Link>
          </li>
          <li>
            <Link to="/shadcn">Shadcn</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
