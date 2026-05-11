import { useState } from "react";
import Icon from "@/components/ui/icon";

const faqs = [
  {
    q: "Сколько времени занимает изготовление?",
    a: "Готовые модели из каталога отправляем в течение 3–5 рабочих дней. Индивидуальный заказ (конструктор) — от 7 до 14 рабочих дней.",
  },
  {
    q: "Как ухаживать за вязаной сумкой?",
    a: "Рекомендуем ручную стирку в холодной воде с мягким средством. Не отжимать, сушить в расправленном виде вдали от прямых солнечных лучей.",
  },
  {
    q: "Можно ли заказать определённый цвет, которого нет в конструкторе?",
    a: "Да! Напиши нам в раздел «Контакты» — мы подберём нить нужного оттенка. Доступно более 50 цветов.",
  },
  {
    q: "Делаете ли вы подарочную упаковку?",
    a: "Да, все заказы упакованы в фирменную крафт-коробку. Можем добавить открытку с пожеланием — напиши при оформлении заказа.",
  },
  {
    q: "Принимаете ли вы возврат?",
    a: "Готовые модели из каталога принимаем к возврату в течение 14 дней при сохранении товарного вида. Индивидуальные заказы возврату не подлежат.",
  },
  {
    q: "Есть ли скидки при повторном заказе?",
    a: "Да! Клиентам, которые сделали 2 и более заказов, предоставляется скидка 10%. Напиши нам — мы активируем её для тебя.",
  },
  {
    q: "Как оплатить заказ?",
    a: "Принимаем оплату картой, по СБП или переводом на карту. После подтверждения заказа вышлем реквизиты.",
  },
  {
    q: "Вы отправляете за рубеж?",
    a: "Пока доставляем только по России и странам СНГ (Беларусь, Казахстан, Армения и др.).",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="text-center mb-14">
        <h1 className="font-display text-5xl font-bold mb-4">FAQ</h1>
        <p className="text-muted-foreground text-lg">Ответы на частые вопросы</p>
      </div>

      <div className="space-y-3">
        {faqs.map((item, i) => (
          <div key={i} className="card-soft overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <span className="font-medium pr-4">{item.q}</span>
              <Icon
                name={open === i ? "ChevronUp" : "ChevronDown"}
                size={18}
                className="shrink-0 text-muted-foreground"
              />
            </button>
            {open === i && (
              <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
