import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (name && email && message) setSent(true);
  };

  return (
    <main className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="text-center mb-14">
        <h1 className="font-display text-5xl font-bold mb-4">Контакты</h1>
        <p className="text-muted-foreground text-lg">Есть вопросы? Напиши нам!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display text-2xl font-bold mb-6">Свяжитесь с нами</h2>
          <div className="space-y-5">
            {[
              { icon: "Mail", label: "Email", value: "hello@knitgo.ru" },
              { icon: "Phone", label: "Телефон", value: "+7 (999) 000-00-00" },
              { icon: "Send", label: "Telegram", value: "@knitgo_shop" },
              { icon: "Instagram", label: "Instagram", value: "@knitgo.bags" },
              { icon: "Clock", label: "Время работы", value: "Пн–Пт, 10:00–19:00" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-pink-light-brand flex items-center justify-center shrink-0">
                  <Icon name={item.icon} size={18} className="text-pink-brand" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-soft p-6">
          {sent ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-olive-light-brand flex items-center justify-center mx-auto mb-4">
                <Icon name="Check" size={28} className="text-olive-brand" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">Сообщение отправлено!</h3>
              <p className="text-muted-foreground">Ответим в течение 24 часов</p>
            </div>
          ) : (
            <>
              <h2 className="font-display text-2xl font-bold mb-6">Написать нам</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium block mb-1">Имя</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Твоё имя"
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1">Сообщение</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Твой вопрос или пожелание..."
                    rows={4}
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  />
                </div>
                <button
                  onClick={handleSend}
                  disabled={!name || !email || !message}
                  className="btn-primary w-full disabled:opacity-50"
                >
                  Отправить
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
