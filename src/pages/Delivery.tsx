import Icon from "@/components/ui/icon";

const methods = [
  {
    icon: "Package",
    title: "Почта России",
    desc: "Доставка по всей России",
    time: "7–14 дней",
    price: "250–450 ₽",
  },
  {
    icon: "Truck",
    title: "СДЭК",
    desc: "До пункта выдачи или курьером",
    time: "3–7 дней",
    price: "350–600 ₽",
  },
  {
    icon: "MapPin",
    title: "Самовывоз",
    desc: "Москва, по договорённости",
    time: "1–2 дня",
    price: "Бесплатно",
  },
  {
    icon: "Globe",
    title: "Страны СНГ",
    desc: "Беларусь, Казахстан, Армения и др.",
    time: "14–21 день",
    price: "от 600 ₽",
  },
];

export default function Delivery() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-14">
        <h1 className="font-display text-5xl font-bold mb-4">Доставка</h1>
        <p className="text-muted-foreground text-lg">Отправляем по России и СНГ</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-16">
        {methods.map((m) => (
          <div key={m.title} className="card-soft p-6 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-light-brand flex items-center justify-center shrink-0">
              <Icon name={m.icon} size={20} className="text-blue-brand" />
            </div>
            <div>
              <h3 className="font-semibold text-base mb-1">{m.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{m.desc}</p>
              <div className="flex gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground text-xs">Срок</p>
                  <p className="font-medium">{m.time}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Стоимость</p>
                  <p className="font-medium">{m.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-cream rounded-3xl p-8">
        <h2 className="font-display text-2xl font-bold mb-6">Важно знать</h2>
        <ul className="space-y-4">
          {[
            "Все заказы упаковываем в фирменную крафт-коробку и отправляем в течение 1–3 дней после готовности.",
            "После отправки присылаем трекинг-номер для отслеживания посылки.",
            "При заказе от 5 000 ₽ доставка по России бесплатна.",
            "Для Москвы возможна курьерская доставка — уточняйте при оформлении.",
          ].map((text, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
              <div className="w-5 h-5 rounded-full bg-olive-light-brand flex items-center justify-center shrink-0 mt-0.5">
                <Icon name="Check" size={12} className="text-olive-brand" />
              </div>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
