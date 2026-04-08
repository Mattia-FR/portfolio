import { useEffect, useRef, useState } from "react";

export const useNavbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleScroll = () => {
      // Si on est sur desktop, toujours visible, on ne fait rien
      if (!mediaQuery.matches) {
        setIsVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY.current || currentScrollY < 50);
      lastScrollY.current = currentScrollY;
    };

    // Si on redimensionne la fenêtre, on remet visible
    const handleResize = () => {
      if (!mediaQuery.matches) setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return isVisible;
};
