import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const PREVIEW_IMG = "https://cdn.poehali.dev/projects/f72d538f-bb63-4c68-b783-9d74be58b82e/files/db2eecb3-2608-461f-ba9e-da3ee161f716.jpg";

const yarnColors = [
  { id: "pink", label: "Розовый", hex: "#F4A3B5" },
  { id: "cream", label: "Кремовый", hex: "#F5ECD7" },
  { id: "blue", label: "Голубой", hex: "#A8D5E2" },
  { id: "olive", label: "Оливковый", hex: "#8FAF6A" },
  { id: "lilac", label: "Сиреневый", hex: "#C9B8D8" },
  { id: "peach", label: "Персиковый", hex: "#F2C4A0" },
  { id: "mint", label: "Мятный", hex: "#A8D8C8" },
  { id: "white", label: "Молочный", hex: "#F9F6F0" },
];

const shapes = [
  { id: "shopper", label: "Шопер", icon: "ShoppingBag" },
  { id: "basket", label: "Корзинка", icon: "Package" },
  { id: "clutch", label: "Клатч", icon: "Wallet" },
  { id: "backpack", label: "Рюкзак", icon: "Backpack" },
];

const handleOptions = [
  { id: "rope", label: "Верёвочные" },
  { id: "leather", label: "Кожаные" },
  { id: "chain", label: "Цепочка" },
  { id: "short", label: "Короткие" },
];

const extras = [
  { id: "fringe", label: "Бахрома" },
  { id: "flower", label: "Цветок" },
  { id: "pompom", label: "Помпон" },
  { id: "zipper", label: "Молния" },
  { id: "pocket", label: "Карман" },
  { id: "lining", label: "Подкладка" },
];

const sizes = [
  { id: "xs", label: "XS", desc: "Клатч 20×14 см" },
  { id: "s", label: "S", desc: "Мини 26×20 см" },
  { id: "m", label: "M", desc: "Средний 32×26 см" },
  { id: "l", label: "L", desc: "Большой 40×34 см" },
];

const step = (n: number, label: string) => ({ n, label });
const steps = [
  step(1, "Форма"),
  step(2, "Цвет"),
  step(3, "Ручки"),
  step(4, "Детали"),
  step(5, "Размер"),
  step(6, "Заказ"),
];

export default function Constructor() {
  const [currentStep, setCurrentStep] = useState(1);
  const [shape, setShape] = useState("");
  const [mainColor, setMainColor] = useState("");
  const [accentColor, setAccentColor] = useState("");
  const [handle, setHandle] = useState("");
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [size, setSize] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const canProceed = () => {
    if (currentStep === 1) return shape !== "";
    if (currentStep === 2) return mainColor !== "";
    if (currentStep === 3) return handle !== "";
    if (currentStep === 5) return size !== "";
    return true;
  };

  const getPrice = () => {
    let base = 1800;
    if (size === "s") base = 2200;
    if (size === "m") base = 2800;
    if (size === "l") base = 3500;
    base += selectedExtras.length * 200;
    if (handle === "leather" || handle === "chain") base += 300;
    return base;
  };

  const handleSubmit = () => {
    if (name && phone) setSubmitted(true);
  };

  const mainColorObj = yarnColors.find((c) => c.id === mainColor);
  const accentColorObj = yarnColors.find((c) => c.id === accentColor);

  if (submitted) {
    return (
      <main className="container mx-auto px-4 py-20 text-center max-w-lg">
        <div className="w-20 h-20 rounded-full bg-olive-light-brand flex items-center justify-center mx-auto mb-6">
          <Icon name="Check" size={36} className="text-olive-brand" />
        </div>
        <h1 className="font-display text-4xl font-bold mb-4">Заявка отправлена!</h1>
        <p className="text-muted-foreground mb-8">
          Мы свяжемся с тобой в течение 24 часов, чтобы подтвердить заказ и обсудить детали.
        </p>
        <Link to="/" className="btn-primary inline-block">
          На главную
        </Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-10">
        <h1 className="font-display text-5xl font-bold mb-3">Создай свою сумку</h1>
        <p className="text-muted-foreground text-lg">Собери уникальный аксессуар по своему вкусу</p>
      </div>

      {/* Steps */}
      <div className="flex items-center justify-center gap-1 mb-10 overflow-x-auto pb-2">
        {steps.map((s, i) => (
          <div key={s.n} className="flex items-center">
            <button
              onClick={() => s.n < currentStep && setCurrentStep(s.n)}
              className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                currentStep === s.n
                  ? "bg-primary text-white shadow"
                  : s.n < currentStep
                  ? "bg-olive-light-brand text-olive-brand cursor-pointer"
                  : "bg-cream text-muted-foreground cursor-default"
              }`}
            >
              {s.n < currentStep ? <Icon name="Check" size={12} /> : <span>{s.n}</span>}
              {s.label}
            </button>
            {i < steps.length - 1 && (
              <div className={`w-4 h-0.5 mx-1 ${s.n < currentStep ? "bg-olive-brand" : "bg-border"}`} />
            )}
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Preview */}
        <div className="md:col-span-1">
          <div className="card-soft p-4 sticky top-20">
            <div
              className="rounded-2xl overflow-hidden h-48 mb-4 transition-all"
              style={{ background: mainColorObj ? `${mainColorObj.hex}40` : "hsl(var(--cream))" }}
            >
              <img src={PREVIEW_IMG} alt="Превью" className="w-full h-full object-cover opacity-80" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-3">Твоя сумка</h3>
            <div className="space-y-2 text-sm">
              {shape && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Форма</span>
                  <span>{shapes.find((s) => s.id === shape)?.label}</span>
                </div>
              )}
              {mainColorObj && (
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Основной цвет</span>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border" style={{ background: mainColorObj.hex }} />
                    <span>{mainColorObj.label}</span>
                  </div>
                </div>
              )}
              {accentColorObj && (
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Акцент</span>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border" style={{ background: accentColorObj.hex }} />
                    <span>{accentColorObj.label}</span>
                  </div>
                </div>
              )}
              {handle && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ручки</span>
                  <span>{handleOptions.find((h) => h.id === handle)?.label}</span>
                </div>
              )}
              {selectedExtras.length > 0 && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Детали</span>
                  <span>{selectedExtras.length} шт.</span>
                </div>
              )}
              {size && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Размер</span>
                  <span>{sizes.find((s) => s.id === size)?.label}</span>
                </div>
              )}
            </div>
            {shape && mainColor && handle && size && (
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Итого</span>
                  <span className="text-xl font-bold text-gradient">{getPrice().toLocaleString("ru-RU")} ₽</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Step content */}
        <div className="md:col-span-2">
          <div className="card-soft p-6">
            {/* Step 1 — Форма */}
            {currentStep === 1 && (
              <div>
                <h2 className="font-display text-2xl font-bold mb-6">Выбери форму</h2>
                <div className="grid grid-cols-2 gap-4">
                  {shapes.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setShape(s.id)}
                      className={`p-5 rounded-2xl border-2 text-center transition-all ${
                        shape === s.id
                          ? "border-primary bg-pink-light-brand"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <Icon name={s.icon} size={28} className="mx-auto mb-2 text-pink-brand" />
                      <span className="font-medium">{s.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2 — Цвет */}
            {currentStep === 2 && (
              <div>
                <h2 className="font-display text-2xl font-bold mb-6">Выбери цвета</h2>
                <div className="mb-6">
                  <p className="font-medium mb-3">Основной цвет</p>
                  <div className="flex flex-wrap gap-3">
                    {yarnColors.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setMainColor(c.id)}
                        title={c.label}
                        className={`w-10 h-10 rounded-full border-4 transition-all hover:scale-110 ${
                          mainColor === c.id ? "border-foreground scale-110" : "border-white shadow"
                        }`}
                        style={{ background: c.hex }}
                      />
                    ))}
                  </div>
                  {mainColorObj && (
                    <p className="text-sm text-muted-foreground mt-2">Выбрано: {mainColorObj.label}</p>
                  )}
                </div>
                <div>
                  <p className="font-medium mb-3">Акцентный цвет <span className="text-muted-foreground font-normal text-sm">(необязательно)</span></p>
                  <div className="flex flex-wrap gap-3">
                    {yarnColors.filter((c) => c.id !== mainColor).map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setAccentColor(accentColor === c.id ? "" : c.id)}
                        title={c.label}
                        className={`w-10 h-10 rounded-full border-4 transition-all hover:scale-110 ${
                          accentColor === c.id ? "border-foreground scale-110" : "border-white shadow"
                        }`}
                        style={{ background: c.hex }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3 — Ручки */}
            {currentStep === 3 && (
              <div>
                <h2 className="font-display text-2xl font-bold mb-6">Тип ручек</h2>
                <div className="grid grid-cols-2 gap-4">
                  {handleOptions.map((h) => (
                    <button
                      key={h.id}
                      onClick={() => setHandle(h.id)}
                      className={`p-5 rounded-2xl border-2 font-medium transition-all ${
                        handle === h.id
                          ? "border-primary bg-pink-light-brand"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {h.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4 — Детали */}
            {currentStep === 4 && (
              <div>
                <h2 className="font-display text-2xl font-bold mb-2">Дополнительные детали</h2>
                <p className="text-muted-foreground text-sm mb-6">+200 ₽ за каждую деталь</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {extras.map((e) => (
                    <button
                      key={e.id}
                      onClick={() => toggleExtra(e.id)}
                      className={`p-4 rounded-2xl border-2 font-medium transition-all text-sm ${
                        selectedExtras.includes(e.id)
                          ? "border-primary bg-pink-light-brand"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {selectedExtras.includes(e.id) && (
                        <Icon name="Check" size={14} className="inline mr-1 text-pink-brand" />
                      )}
                      {e.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5 — Размер */}
            {currentStep === 5 && (
              <div>
                <h2 className="font-display text-2xl font-bold mb-6">Размер</h2>
                <div className="grid grid-cols-2 gap-4">
                  {sizes.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSize(s.id)}
                      className={`p-5 rounded-2xl border-2 text-left transition-all ${
                        size === s.id
                          ? "border-primary bg-pink-light-brand"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <span className="text-2xl font-bold font-display block mb-1">{s.label}</span>
                      <span className="text-sm text-muted-foreground">{s.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 6 — Заказ */}
            {currentStep === 6 && (
              <div>
                <h2 className="font-display text-2xl font-bold mb-6">Оформить заказ</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium block mb-1">Твоё имя *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Как тебя зовут?"
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-1">Телефон или Telegram *</label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (999) 000-00-00 или @username"
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-1">Пожелания</label>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Особые пожелания, дополнительные детали..."
                      rows={3}
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={!name || !phone}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Отправить заявку
                  </button>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              <button
                onClick={() => setCurrentStep((s) => Math.max(1, s - 1))}
                disabled={currentStep === 1}
                className="btn-outline py-2 px-6 text-sm disabled:opacity-30"
              >
                Назад
              </button>
              {currentStep < 6 && (
                <button
                  onClick={() => setCurrentStep((s) => s + 1)}
                  disabled={!canProceed()}
                  className="btn-primary py-2 px-6 text-sm disabled:opacity-50"
                >
                  Далее
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
