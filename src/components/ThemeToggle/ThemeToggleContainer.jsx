import React from "react";
import { useTheme } from "../../context/themeProvider";
import ThemeToggle from "./ThemeToggle";

export default function ThemeToggleContainer({ children }) {
  const [themeMode, toggleTheme] = useTheme();
  return <ThemeToggle toggle={toggleTheme} mode={themeMode} />;
}
