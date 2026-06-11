import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const FILMS = [
  {
    id: 1,
    title: "Анна и Михаил",
    subtitle: "История двух молчаний",
    year: "2024",
    location: "Флоренция",
    duration: "18 мин",
    img: "https://cdn.poehali.dev/projects/6b3fbfff-dfcc-4fcb-b559-369440416de5/files/03fe78ec-eb87-47df-a119-c38440bc39b5.jpg",
    tag: "DRAMA",
  },
  {
    id: 2,
    title: "Катя и Роман",
    subtitle: "Без слов",
    year: "2024",
    location: "Сочи",
    duration: "22 мин",
    img: "https://cdn.poehali.dev/projects/6b3fbfff-dfcc-4fcb-b559-369440416de5/files/459a2edb-4aa0-4538-abb3-951df4b3637c.jpg",
    tag: "ROMANCE",
  },
  {
    id: 3,
    title: "Вера и Дмитрий",
    subtitle: "Точка невозврата",
    year: "2023",
    location: "Москва",
    duration: "31 мин",
    img: "https://cdn.poehali.dev/projects/6b3fbfff-dfcc-4fcb-b559-369440416de5/files/94524046-8cd7-4dd3-a6c8-e8ca6a314b65.jpg",
    tag: "PORTRAIT",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Встреча",
    text: "Разговариваем. Не о декоре и цветах - о вас. Кто вы друг для друга. Что важно. Что страшно. Из этого растёт сценарий.",
  },
  {
    num: "02",
    title: "Сценарий",
    text: "Я пишу структуру фильма до съёмки. Ключевые сцены, эмоциональные точки, последовательность. Никакого экспромта на площадке.",
  },
  {
    num: "03",
    title: "Съёмка",
    text: "Работаю как режиссёр, а не оператор. Выстраиваю мизансцены, работаю с людьми в кадре, управляю ритмом дня.",
  },
  {
    num: "04",
    title: "Монтаж",
    text: "Собираю фильм по законам драматургии. Арка, кульминация, финал. Не нарезка под музыку - полноценное кино.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", story: "" });
  const [sent, setSent] = useState(false);
  const [activeFilm, setActiveFilm] = useState<number | null>(null);

  const approachRef = useInView();
  const stepsRef = useInView(0.05);
  const filmsRef = useInView(0.1);
  const statsRef = useInView(0.2);
  const contactRef = useInView(0.1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between">
        <div className="bg-[#0A0A0A]/60 backdrop-blur-sm absolute inset-0 pointer-events-none" />
        <span className="font-oswald text-[11px] tracking-[0.35em] text-[#B8973E] uppercase relative z-10">
          АРТЁМ СОКОЛОВ
        </span>
        <div className="hidden md:flex gap-10 relative z-10">
          {["Подход", "Портфолио", "Контакт"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-[10px] tracking-[0.2em] text-white/40 hover:text-[#B8973E] transition-colors duration-300 uppercase"
            >
              {item}
            </a>
          ))}
        </div>
        <button
          className="md:hidden relative z-10 text-white/60 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={20} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md flex flex-col items-center justify-center gap-10">
          {["Подход", "Портфолио", "Контакт"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-cormorant text-4xl font-light text-white/80 hover:text-[#B8973E] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0A0A]">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url(https://cdn.poehali.dev/projects/6b3fbfff-dfcc-4fcb-b559-369440416de5/files/03fe78ec-eb87-47df-a119-c38440bc39b5.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "grayscale(40%) contrast(1.1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />
        </div>

        {/* Letterbox lines */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B8973E]/20" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#B8973E]/20" />

        <div className="relative z-10 px-6 md:px-16 pb-20 md:pb-28 max-w-5xl">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-12 bg-[#B8973E]" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#B8973E] uppercase">
              Свадебный режиссер · Москва
            </span>
          </div>
          <h1 className="font-cormorant font-light leading-[0.92] text-[clamp(52px,10vw,130px)] text-white mb-8">
            Твоя свадьба -<br />
            <em className="text-[#B8973E] not-italic">настоящее кино</em>
          </h1>
          <p className="font-oswald font-light text-[clamp(13px,1.8vw,17px)] tracking-[0.12em] text-white/50 max-w-xl uppercase leading-relaxed">
            Я не снимаю события.<br className="hidden md:block" />
            Я выстраиваю сюжет - с началом, кульминацией и финалом.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
            <a
              href="#контакт"
              className="group inline-flex items-center gap-3 bg-[#B8973E] text-[#0A0A0A] px-8 py-4 font-oswald text-[11px] tracking-[0.25em] uppercase hover:bg-[#D4AF6A] transition-colors duration-300"
            >
              Обсудить сценарий
              <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#портфолио"
              className="inline-flex items-center gap-3 border border-white/20 text-white/60 px-8 py-4 font-oswald text-[11px] tracking-[0.25em] uppercase hover:border-[#B8973E]/50 hover:text-white/80 transition-all duration-300"
            >
              Смотреть фильмы
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-3 opacity-30">
          <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </section>

      {/* STATS */}
      <section id="подход" ref={statsRef.ref}>
        <div className="border-y border-[#2A2A2A] grid grid-cols-2 md:grid-cols-4">
          {[
            { num: "5+", label: "лет в кино" },
            { num: "60+", label: "свадебных фильмов" },
            { num: "100%", label: "предпродакшн" },
            { num: "4K", label: "RAW съёмка" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`px-8 py-10 border-[#2A2A2A] ${i < 3 ? "border-r" : ""} ${statsRef.inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.15}s`, animationFillMode: "forwards" }}
            >
              <div className="font-cormorant text-[clamp(36px,5vw,56px)] font-light text-[#B8973E] leading-none">
                {stat.num}
              </div>
              <div className="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section
        id="approach"
        ref={approachRef.ref}
        className="px-6 md:px-16 py-28 md:py-40 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24"
      >
        <div className={approachRef.inView ? "animate-fade-in-up" : "opacity-0"} style={{ animationFillMode: "forwards" }}>
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-8 bg-[#B8973E]" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#B8973E] uppercase">Подход</span>
          </div>
          <h2 className="font-cormorant font-light text-[clamp(36px,5vw,64px)] leading-[1.05] text-white mb-8">
            Я снимаю свадьбы<br />
            <em className="text-white/50 not-italic">как режиссёр-постановщик</em>
          </h2>
          <div className="h-px bg-[#2A2A2A] my-8" />
          <p className="font-cormorant text-[clamp(17px,1.8vw,21px)] text-white/60 leading-relaxed font-light">
            Пять лет на съёмочных площадках. Путь от оператора до режиссёра. За это время я понял одно - техника вторична. Главное - это идея, психология людей в кадре и умение выстраивать сюжет.
          </p>
        </div>
        <div className={`space-y-8 ${approachRef.inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
          {[
            {
              icon: "FileText",
              title: "Сценарная работа",
              text: "До съёмки мы встречаемся и разговариваем. Я выясняю, что за история стоит за вашим браком. Строю структуру фильма. У каждой свадьбы есть своя тема - я её нахожу.",
            },
            {
              icon: "Users",
              title: "Работа с парой",
              text: "Я не прошу вас \"быть собой\". Я создаю условия, в которых вы не можете быть никем другим. Это режиссёрская работа, а не оператора.",
            },
            {
              icon: "Layers",
              title: "Драматургия",
              text: "Каждый фильм имеет арку. Напряжение нарастает, разрядка случается в нужный момент. Зрители вашего фильма проживают его - не просто смотрят.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-6 group">
              <div className="w-10 h-10 border border-[#B8973E]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[#B8973E] transition-colors mt-1">
                <Icon name={item.icon as "FileText"} size={16} className="text-[#B8973E]" />
              </div>
              <div>
                <h3 className="font-oswald text-[13px] tracking-[0.15em] uppercase text-white mb-2">{item.title}</h3>
                <p className="font-cormorant text-[16px] text-white/50 leading-relaxed font-light">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section
        ref={stepsRef.ref}
        className="border-t border-[#2A2A2A] px-6 md:px-16 py-28 bg-[#0D0D0D]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex items-center gap-4">
            <div className="h-px w-8 bg-[#B8973E]" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#B8973E] uppercase">Процесс</span>
          </div>
          <h2 className="font-cormorant font-light text-[clamp(32px,4vw,52px)] text-white mb-16 max-w-2xl leading-tight">
            Как делается кино -<br />
            <em className="text-white/40 not-italic">шаг за шагом</em>
          </h2>
          <div className="grid md:grid-cols-4 gap-0 border border-[#2A2A2A]">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className={`p-8 border-[#2A2A2A] ${i < 3 ? "md:border-r" : ""} ${i > 0 ? "border-t md:border-t-0" : ""} hover:bg-[#161616] transition-colors duration-300 ${stepsRef.inView ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.15}s`, animationFillMode: "forwards" }}
              >
                <div className="font-mono text-[clamp(28px,3vw,44px)] text-[#B8973E]/20 font-light mb-6">{step.num}</div>
                <h3 className="font-oswald text-[14px] tracking-[0.15em] uppercase text-white mb-4">{step.title}</h3>
                <p className="font-cormorant text-[15px] text-white/40 leading-relaxed font-light">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="портфолио" ref={filmsRef.ref} className="px-6 md:px-16 py-28 md:py-40 max-w-7xl mx-auto">
        <div className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-[#B8973E]" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#B8973E] uppercase">Портфолио</span>
          </div>
          <span className="font-mono text-[10px] tracking-[0.2em] text-white/20 uppercase hidden md:block">
            Избранные работы · 2023-2024
          </span>
        </div>

        <h2 className="font-cormorant font-light text-[clamp(32px,4vw,52px)] text-white mb-16 leading-tight">
          Свадебные фильмы
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {FILMS.map((film, i) => (
            <div
              key={film.id}
              className={`group cursor-pointer ${filmsRef.inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.2}s`, animationFillMode: "forwards" }}
              onMouseEnter={() => setActiveFilm(film.id)}
              onMouseLeave={() => setActiveFilm(null)}
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={film.img}
                  alt={film.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: "grayscale(20%) contrast(1.05)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 border border-[#B8973E] rounded-full flex items-center justify-center backdrop-blur-sm bg-black/20">
                    <Icon name="Play" size={20} className="text-[#B8973E] ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-[9px] tracking-[0.3em] bg-[#B8973E] text-[#0A0A0A] px-3 py-1">
                    {film.tag}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-mono text-[10px] tracking-[0.2em] text-[#B8973E] uppercase mb-2">
                    {film.year} · {film.location}
                  </p>
                  <h3 className="font-cormorant text-2xl font-light text-white leading-tight">{film.title}</h3>
                  <p className="font-cormorant text-[15px] text-white/50 italic mt-1">{film.subtitle}</p>
                </div>
              </div>
              <div className="border border-[#2A2A2A] border-t-0 px-6 py-4 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/30">{film.duration}</span>
                <span className={`font-mono text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${activeFilm === film.id ? "text-[#B8973E]" : "text-white/20"}`}>
                  Смотреть фильм
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="контакт" ref={contactRef.ref} className="border-t border-[#2A2A2A] bg-[#0D0D0D] px-6 md:px-16 py-28 md:py-40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className={contactRef.inView ? "animate-fade-in-up" : "opacity-0"} style={{ animationFillMode: "forwards" }}>
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px w-8 bg-[#B8973E]" />
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#B8973E] uppercase">Контакт</span>
            </div>
            <h2 className="font-cormorant font-light text-[clamp(36px,5vw,64px)] leading-[1.05] text-white mb-8">
              Обсудим сценарий<br />
              <em className="text-white/40 not-italic">вашего фильма</em>
            </h2>
            <p className="font-cormorant text-[clamp(16px,1.6vw,19px)] text-white/40 leading-relaxed font-light max-w-sm">
              Расскажите, кто вы. Откуда. Что за история привела вас к браку. Мне важно понять - смогу ли я снять именно ваше кино.
            </p>
            <div className="mt-12 space-y-4">
              <a href="tel:+79991234567" className="flex items-center gap-4 group">
                <Icon name="Phone" size={14} className="text-[#B8973E]" />
                <span className="font-mono text-[12px] tracking-[0.15em] text-white/40 group-hover:text-white/70 transition-colors">
                  +7 999 123-45-67
                </span>
              </a>
              <a href="https://t.me/artem" className="flex items-center gap-4 group">
                <Icon name="Send" size={14} className="text-[#B8973E]" />
                <span className="font-mono text-[12px] tracking-[0.15em] text-white/40 group-hover:text-white/70 transition-colors">
                  @artem_sokolov_film
                </span>
              </a>
            </div>
          </div>

          <div className={contactRef.inView ? "animate-fade-in-up" : "opacity-0"} style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            {sent ? (
              <div className="border border-[#B8973E]/30 p-12 text-center">
                <div className="w-14 h-14 border border-[#B8973E] flex items-center justify-center mx-auto mb-6">
                  <Icon name="Check" size={20} className="text-[#B8973E]" />
                </div>
                <h3 className="font-cormorant text-3xl font-light text-white mb-3">Заявка получена</h3>
                <p className="font-cormorant text-[16px] text-white/40 font-light">
                  Свяжусь в течение 24 часов.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase mb-3">
                    Имя
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Как вас зовут?"
                    className="w-full bg-transparent border border-[#2A2A2A] focus:border-[#B8973E]/60 px-5 py-4 font-cormorant text-[17px] text-white placeholder-white/20 outline-none transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase mb-3">
                    Телефон или Telegram
                  </label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 или @username"
                    className="w-full bg-transparent border border-[#2A2A2A] focus:border-[#B8973E]/60 px-5 py-4 font-cormorant text-[17px] text-white placeholder-white/20 outline-none transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase mb-3">
                    Расскажите о себе
                  </label>
                  <textarea
                    value={formData.story}
                    onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                    placeholder="Кто вы. Дата свадьбы. Что важно для вас в фильме..."
                    rows={5}
                    className="w-full bg-transparent border border-[#2A2A2A] focus:border-[#B8973E]/60 px-5 py-4 font-cormorant text-[17px] text-white placeholder-white/20 outline-none transition-colors duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#B8973E] hover:bg-[#D4AF6A] text-[#0A0A0A] py-5 font-oswald text-[11px] tracking-[0.3em] uppercase transition-colors duration-300 flex items-center justify-center gap-3 group"
                >
                  Отправить заявку
                  <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="font-mono text-[9px] tracking-[0.15em] text-white/20 text-center uppercase">
                  Отвечаю лично. Без менеджеров.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#2A2A2A] px-6 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-[10px] tracking-[0.2em] text-white/20 uppercase">
          © 2024 Артём Соколов
        </span>
        <span className="font-mono text-[10px] tracking-[0.2em] text-white/20 uppercase">
          Свадебный режиссер · Москва
        </span>
        <span className="font-cormorant text-[13px] italic text-white/15">
          "Кино - это правда 24 кадра в секунду"
        </span>
      </footer>
    </div>
  );
}
