import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <header className="flex select-none items-center justify-center py-6 text-center text-3xl font-semibold uppercase tracking-widest">
      <img className="h-12" src="/logo.svg" alt="" />
      <h1>Tasks</h1>
      <span className="absolute right-6">
        <ThemeSwitch />
      </span>
    </header>
  );
}
