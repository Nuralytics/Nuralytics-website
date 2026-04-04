import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<"light">("light");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {};

  return { theme, toggleTheme };
};
