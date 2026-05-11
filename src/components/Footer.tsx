import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="font-display text-2xl font-bold text-gradient">
              Knit & Go
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Вязаные сумки ручной работы для тех, кто любит уникальное
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-pink-light-brand flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Icon name="Instagram" size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-pink-light-brand flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Icon name="Send" size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Магазин</h4>
            <ul className="space-y-2">
              {[
                { label: "Каталог", path: "/catalog" },
                { label: "Создать свою сумку", path: "/constructor" },
              ].map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-sm text-muted-foreground hover:text-pink-brand transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Информация</h4>
            <ul className="space-y-2">
              {[
                { label: "О нас", path: "/about" },
                { label: "Доставка", path: "/delivery" },
                { label: "FAQ", path: "/faq" },
                { label: "Контакты", path: "/contacts" },
              ].map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-sm text-muted-foreground hover:text-pink-brand transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={14} />
                hello@knitgo.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={14} />
                +7 (999) 000-00-00
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" size={14} />
                Пн–Пт, 10:00–19:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © 2024 Knit & Go. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
