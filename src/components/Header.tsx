import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const nav = [
  { label: "Главная", path: "/" },
  { label: "Каталог", path: "/catalog" },
  { label: "Создать свою", path: "/constructor" },
  { label: "Доставка", path: "/delivery" },
  { label: "FAQ", path: "/faq" },
  { label: "О нас", path: "/about" },
  { label: "Контакты", path: "/contacts" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="font-display text-2xl font-bold text-gradient">
          Knit & Go
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-pink-brand ${
                location.pathname === item.path
                  ? "text-pink-brand"
                  : "text-foreground/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/constructor"
          className="hidden md:block btn-primary text-sm py-2 px-5"
        >
          Создать сумку
        </Link>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <Icon name={open ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-3">
          {nav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium py-1 transition-colors ${
                location.pathname === item.path
                  ? "text-pink-brand"
                  : "text-foreground/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/constructor"
            onClick={() => setOpen(false)}
            className="btn-primary text-sm text-center mt-2"
          >
            Создать сумку
          </Link>
        </div>
      )}
    </header>
  );
}
