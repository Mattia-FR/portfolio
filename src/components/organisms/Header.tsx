import Navbar from "../molecules/Navbar";
import "./Header.css";
import { Moon, Sun } from "lucide-react";
import { useNavbar } from "../../hooks/useNavbar";
import { useTheme } from "../../hooks/useTheme";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const isVisible = useNavbar();

  return (
    <header
      className={`header ${isVisible ? "header--visible" : "header--hidden"}`}
    >
      <Navbar />
      <button
        type="button"
        className="header__theme-toggle"
        onClick={toggleTheme}
        aria-label="Changer le thème"
      >
        {theme === "dark" ? (
          <Sun size={20} color="var(--color-two)" />
        ) : (
          <Moon size={20} color="var(--color-two)" />
        )}
      </button>
    </header>
  );
}

export default Header;
