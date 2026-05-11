import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const BAG_IMG_1 = "https://cdn.poehali.dev/projects/f72d538f-bb63-4c68-b783-9d74be58b82e/files/db2eecb3-2608-461f-ba9e-da3ee161f716.jpg";
const BAG_IMG_2 = "https://cdn.poehali.dev/projects/f72d538f-bb63-4c68-b783-9d74be58b82e/files/51624980-64d4-46a3-9576-988d5a2a061b.jpg";

const allProducts = [
  {
    id: 1, name: "Летний шопер", price: 3200, tag: "Хит", category: "Шоперы",
    desc: "Большой вязаный шопер из хлопка — вместительный и стильный. Идеален для пляжа и прогулок.",
    material: "100% хлопок", size: "40×35 см", img: BAG_IMG_1, colors: ["Розовый", "Голубой", "Кремовый"],
  },
  {
    id: 2, name: "Бохо-корзинка", price: 2800, tag: "Новинка", category: "Корзинки",
    desc: "Плетёная корзинка в стиле бохо. Подходит для рынка, пикника и городских прогулок.",
    material: "Джут + хлопок", size: "30×28 см", img: BAG_IMG_2, colors: ["Оливковый", "Бежевый"],
  },
  {
    id: 3, name: "Клатч-кроше", price: 1900, tag: "Популярное", category: "Клатчи",
    desc: "Маленький нарядный клатч ручной работы. Для вечеринок и свиданий.",
    material: "Акрил + металл", size: "22×14 см", img: BAG_IMG_1, colors: ["Розовый", "Оливковый"],
  },
  {
    id: 4, name: "Плечевая авоська", price: 2400, tag: "", category: "Шоперы",
    desc: "Лёгкая сетчатая авоська на плечо — трендовый аксессуар этого сезона.",
    material: "Хлопковая нить", size: "38×32 см", img: BAG_IMG_2, colors: ["Голубой", "Розовый", "Оливковый"],
  },
  {
    id: 5, name: "Мини-рюкзак", price: 3800, tag: "Новинка", category: "Рюкзаки",
    desc: "Компактный вязаный рюкзак с подкладкой. Руки свободны, стиль при тебе.",
    material: "Хлопок + подкладка", size: "28×22 см", img: BAG_IMG_1, colors: ["Кремовый", "Розовый"],
  },
  {
    id: 6, name: "Пляжная корзина", price: 4200, tag: "Хит", category: "Корзинки",
    desc: "Большая плетёная корзина для пляжа. Вместит всё необходимое для отдыха.",
    material: "Рафия + хлопок", size: "50×40 см", img: BAG_IMG_2, colors: ["Бежевый", "Голубой"],
  },
];

const categories = ["Все", "Шоперы", "Корзинки", "Клатчи", "Рюкзаки"];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = activeCategory === "Все"
    ? allProducts
    : allProducts.filter((p) => p.category === activeCategory);

  const selectedProduct = allProducts.find((p) => p.id === selected);

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="font-display text-5xl font-bold mb-3">Каталог</h1>
        <p className="text-muted-foreground text-lg">Авторские вязаные сумки ручной работы</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-primary text-white shadow-md"
                : "bg-cream text-foreground hover:bg-pink-light-brand"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="card-soft overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
            onClick={() => setSelected(p.id)}
          >
            <div className="h-60 overflow-hidden bg-cream">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              {p.tag && (
                <span className="text-xs font-medium text-pink-brand bg-pink-light-brand px-3 py-1 rounded-full">
                  {p.tag}
                </span>
              )}
              <h3 className="font-display text-xl mt-3 mb-1">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{p.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">{p.price.toLocaleString("ru-RU")} ₽</span>
                <button className="btn-primary py-2 px-4 text-sm">
                  Заказать
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2">
              <div className="h-72 md:h-auto overflow-hidden bg-cream">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col">
                <button
                  onClick={() => setSelected(null)}
                  className="self-end text-muted-foreground hover:text-foreground mb-4"
                >
                  <Icon name="X" size={20} />
                </button>
                {selectedProduct.tag && (
                  <span className="text-xs font-medium text-pink-brand bg-pink-light-brand px-3 py-1 rounded-full w-fit mb-3">
                    {selectedProduct.tag}
                  </span>
                )}
                <h2 className="font-display text-2xl font-bold mb-2">{selectedProduct.name}</h2>
                <p className="text-muted-foreground text-sm mb-4">{selectedProduct.desc}</p>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Материал</span>
                    <span className="font-medium">{selectedProduct.material}</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Размер</span>
                    <span className="font-medium">{selectedProduct.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Цвета</span>
                    <span className="font-medium">{selectedProduct.colors.join(", ")}</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="text-2xl font-bold mb-4">{selectedProduct.price.toLocaleString("ru-RU")} ₽</p>
                  <Link
                    to="/contacts"
                    className="btn-primary w-full text-center block"
                    onClick={() => setSelected(null)}
                  >
                    Заказать
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="mt-16 text-center bg-cream rounded-3xl py-12 px-6">
        <h2 className="font-display text-3xl font-bold mb-3">Не нашла подходящую?</h2>
        <p className="text-muted-foreground mb-6">Создай сумку по своим параметрам — цвет, форма, детали</p>
        <Link to="/constructor" className="btn-primary inline-block">
          Создать свою сумку
        </Link>
      </div>
    </main>
  );
}
