import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/f72d538f-bb63-4c68-b783-9d74be58b82e/files/d827272f-1263-4cb1-9bce-2e895e194dd3.jpg";
const COLLECTION_IMG = "https://cdn.poehali.dev/projects/f72d538f-bb63-4c68-b783-9d74be58b82e/files/51624980-64d4-46a3-9576-988d5a2a061b.jpg";

const products = [
  {
    id: 1,
    name: "Летний шопер",
    price: "3 200 ₽",
    tag: "Хит",
    color: "bg-pink-light-brand",
    img: "https://cdn.poehali.dev/projects/f72d538f-bb63-4c68-b783-9d74be58b82e/files/db2eecb3-2608-461f-ba9e-da3ee161f716.jpg",
  },
  {
    id: 2,
    name: "Бохо-корзинка",
    price: "2 800 ₽",
    tag: "Новинка",
    color: "bg-blue-light-brand",
    img: "https://cdn.poehali.dev/projects/f72d538f-bb63-4c68-b783-9d74be58b82e/files/51624980-64d4-46a3-9576-988d5a2a061b.jpg",
  },
  {
    id: 3,
    name: "Клатч-кроше",
    price: "1 900 ₽",
    tag: "Популярное",
    color: "bg-olive-light-brand",
    img: "https://cdn.poehali.dev/projects/f72d538f-bb63-4c68-b783-9d74be58b82e/files/db2eecb3-2608-461f-ba9e-da3ee161f716.jpg",
  },
];

const features = [
  { icon: "Sparkles", title: "100% ручная работа", desc: "Каждая сумка сделана с любовью и заботой" },
  { icon: "Palette", title: "Любые цвета", desc: "Выбирайте цвета и детали под свой стиль" },
  { icon: "Heart", title: "Уникальность", desc: "Никаких копий — только авторские изделия" },
  { icon: "Package", title: "Быстрая доставка", desc: "Отправляем по России и СНГ" },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream min-h-[90vh] flex items-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-pink-light-brand blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-blue-light-brand blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-olive-light-brand blur-2xl" />
        </div>

        <div className="container mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="inline-block bg-pink-light-brand text-pink-brand text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Вязаные сумки ручной работы ✨
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
              Сумки, которые{" "}
              <span className="text-gradient">говорят</span>{" "}
              о тебе
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Авторские вязаные сумки для девушек, которые ценят уникальность.
              Создай свою или выбери из каталога.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/catalog" className="btn-primary">
                Смотреть каталог
              </Link>
              <Link to="/constructor" className="btn-outline">
                Создать свою
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -right-6 w-72 h-72 rounded-full bg-blue-light-brand opacity-50 blur-2xl" />
            <img
              src={HERO_IMG}
              alt="Вязаная сумка"
              className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover aspect-square"
            />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-5 py-3 z-20">
              <p className="text-xs text-muted-foreground">Заказов выполнено</p>
              <p className="text-2xl font-bold text-gradient">500+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="font-display text-4xl text-center mb-12">
          Почему выбирают нас?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card-soft p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-pink-light-brand flex items-center justify-center mx-auto mb-4">
                <Icon name={f.icon} size={22} className="text-pink-brand" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular */}
      <section className="py-10 bg-cream">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-display text-4xl">Популярное</h2>
            <Link to="/catalog" className="text-sm text-pink-brand font-medium flex items-center gap-1 hover:gap-2 transition-all">
              Весь каталог <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {products.map((p) => (
              <Link to="/catalog" key={p.id} className="group card-soft overflow-hidden hover:shadow-lg transition-all">
                <div className={`${p.color} h-56 overflow-hidden`}>
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-medium text-pink-brand bg-pink-light-brand px-3 py-1 rounded-full">
                    {p.tag}
                  </span>
                  <h3 className="font-display text-lg mt-3 mb-1">{p.name}</h3>
                  <p className="font-semibold text-foreground">{p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 container mx-auto px-4">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-pink-light-brand via-cream to-blue-light-brand p-1">
          <div className="rounded-3xl bg-white/70 backdrop-blur-sm grid md:grid-cols-2 gap-8 items-center px-8 py-12">
            <div>
              <h2 className="font-display text-4xl font-bold mb-4">
                Создай сумку своей мечты
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Выбери цвет пряжи, форму, ручки и дополнительные детали.
                Мы свяжем именно для тебя.
              </p>
              <Link to="/constructor" className="btn-primary inline-block">
                Начать создавать
              </Link>
            </div>
            <div>
              <img
                src={COLLECTION_IMG}
                alt="Коллекция сумок"
                className="rounded-2xl w-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}