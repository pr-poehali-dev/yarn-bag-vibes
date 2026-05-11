const ABOUT_IMG = "https://cdn.poehali.dev/projects/f72d538f-bb63-4c68-b783-9d74be58b82e/files/d827272f-1263-4cb1-9bce-2e895e194dd3.jpg";

export default function About() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="text-center mb-14">
        <h1 className="font-display text-5xl font-bold mb-4">О нас</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Мы — небольшая студия, где каждая сумка вяжется с любовью и вниманием к деталям
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <img
          src={ABOUT_IMG}
          alt="Наша студия"
          className="rounded-3xl w-full object-cover shadow-lg aspect-square"
        />
        <div>
          <h2 className="font-display text-3xl font-bold mb-4">Наша история</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Всё началось в 2020 году, когда Маша, студентка дизайна, связала первую сумку для себя.
            Подружки тут же попросили такую же — и понеслось!
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Сегодня в нашей команде 5 мастериц, которые создают уникальные вещи. Мы используем только
            натуральные нити — хлопок, джут, рафию — и следим за каждым стежком.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            За 4 года мы выполнили более 500 заказов и продолжаем влюблять девушек в вязаные аксессуары.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {[
          { num: "500+", label: "Выполненных заказов" },
          { num: "4 года", label: "На рынке" },
          { num: "5", label: "Мастериц в команде" },
          { num: "100%", label: "Ручная работа" },
        ].map((stat) => (
          <div key={stat.label} className="card-soft p-6 text-center">
            <p className="font-display text-3xl font-bold text-gradient mb-1">{stat.num}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-cream rounded-3xl p-10 text-center">
        <h2 className="font-display text-3xl font-bold mb-3">Наши ценности</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Мы верим, что каждая девушка заслуживает уникальной вещи, которая отражает её характер.
          Никаких масс-маркетных копий — только то, что создано специально для тебя.
        </p>
      </div>
    </main>
  );
}
