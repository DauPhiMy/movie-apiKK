import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";
interface themeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
export const themeContext = createContext<themeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };
  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (theme === 'dark') {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
    // console.log(window.matchMedia("(prefers-color-scheme: dark)"))
  }, [theme]);
  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(themeContext);
  if (context === null) {
    throw new Error("error");
  }
  return context;
};
