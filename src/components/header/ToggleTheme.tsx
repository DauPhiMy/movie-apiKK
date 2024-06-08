"use client";
import { LuMoon } from "react-icons/lu";
import { LuSun } from "react-icons/lu";
import { useTheme } from "../../context/ThemeContextProvider";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div onClick={() => toggleTheme()} className="cursor-pointer">
      {theme === "light" ? <LuSun className="size-6" /> : <LuMoon className="size-6" />}
    </div>
  );
}
