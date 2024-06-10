import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderPage = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => {
                  return isActive ? 'nav-link text-dark bg-light' : 'nav-link';
                }}
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => {
                  return isActive ? 'nav-link text-dark bg-light' : 'nav-link';
                }}
                aria-current="page"
                to="/state-demo"
              >
                Sate demo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => {
                  return isActive ? 'nav-link text-dark bg-light' : 'nav-link';
                }}
                aria-current="page"
                to="/ex-state"
              >
                EX state
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => {
                  return isActive ? 'nav-link text-dark bg-light' : 'nav-link';
                }}
                aria-current="page"
                to="/effect-didmount"
              >
                useEffect didmount
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => {
                  return isActive ? 'nav-link text-dark bg-light' : 'nav-link';
                }}
                aria-current="page"
                to="/effect-did-update"
              >
                useEffect did update
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => {
                  return isActive ? 'nav-link text-dark bg-light' : 'nav-link';
                }}
                aria-current="page"
                to="/effect-unmount"
              >
                useEffect unmount
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => {
                  return isActive ? 'nav-link text-dark bg-light' : 'nav-link';
                }}
                aria-current="page"
                to="/number-redux"
              >
                Redux number
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => {
                  return isActive ? 'nav-link text-dark bg-light' : 'nav-link';
                }}
                aria-current="page"
                to="/fontsize-redux"
              >
                Font size Redux
              </NavLink>
            </li>

            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderPage;
