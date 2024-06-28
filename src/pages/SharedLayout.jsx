import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary  mb-4">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Rick&Morty</span>
        </div>
      </nav>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
