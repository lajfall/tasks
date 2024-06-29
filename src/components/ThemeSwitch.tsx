import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  }

  return <span onClick={toggleDarkMode}>{darkMode ? <Moon /> : <Sun />}</span>;
}
