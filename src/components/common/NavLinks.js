import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white hover:text-gray-300 ${isActive ? "underline" : ""}`
            }
            end
          >
            User State
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/context-api-state"
            className={({ isActive }) =>
              `text-white hover:text-gray-300 ${isActive ? "underline" : ""}`
            }
          >
            Context API State
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reducer"
            className={({ isActive }) =>
              `text-white hover:text-gray-300 ${isActive ? "underline" : ""}`
            }
          >
            Reducer
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/context-api-reducer"
            className={({ isActive }) =>
              `text-white hover:text-gray-300 ${isActive ? "underline" : ""}`
            }
          >
            Context API + Reducer
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/redux"
            className={({ isActive }) =>
              `text-white hover:text-gray-300 ${isActive ? "underline" : ""}`
            }
          >
            Redux
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/redux-toolkit"
            className={({ isActive }) =>
              `text-white hover:text-gray-300 ${isActive ? "underline" : ""}`
            }
          >
            Redux Toolkit
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mobx"
            className={({ isActive }) =>
              `text-white hover:text-gray-300 ${isActive ? "underline" : ""}`
            }
          >
            MobX
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
