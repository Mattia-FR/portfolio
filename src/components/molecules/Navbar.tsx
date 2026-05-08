import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Accueil
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Projets
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
