import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  if (darkMode) document.documentElement.classList.add("dark");

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  }

  return <span onClick={toggleDarkMode}>{darkMode ? <Moon /> : <Sun />}</span>;
}
