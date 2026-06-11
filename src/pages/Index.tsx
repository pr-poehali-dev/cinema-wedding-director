import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

const PHOTO = "https://cdn.poehali.dev/projects/6b3fbfff-dfcc-4fcb-b559-369440416de5/bucket/b94399a3-970b-4694-8715-a493879d163e.jpg";

const VIDEOS = [
  { id: "b98d5b17049ca8449a7b5c2ea6919968", title: "Свадебный фильм", tag: "FILM" },
  { id: "15be864e7a895886ed1765642d5e3663", title: "Свадебный фильм", tag: "FILM" },
  { id: "c6bda24f8ff0c1d1af68a9e3ad0347fa", title: "Свадебный фильм", tag: "FILM" },
  { id: "67ebf36518132c8f418ebfc84afa4db2", title: "Свадебный фильм", tag: "FILM" },
  { id: "6afb96ff5faaced9ee01e0a217d67443", title: "Love-story", tag: "LOVE" },
  { id: "a49ffbcd2925a1707868fab742da9c69", title: "Свадебный клип", tag: "CLIP" },
  { id: "dc0e706536b69becb835a8695fc81031", title: "Свадебный фильм", tag: "FILM" },
];

const REVIEWS = [
  {
    name: "Дмитрий Кудинов",
    role: "В главной роли",
    rating: "9.8",
    quote: "Видео хочется пересматривать снова и снова",
    text: "Мы рады, что остановили свой выбор именно на Жене, очень порадовало качество работы и процесс сотрудничества. Видео хочется неоднократно пересматривать и показать всем знакомым. Огромная благодарность за такую классную работу. Очень рекомендую Женю, не пожалеете.",
  },
  {
    name: "Анна Константа",
    role: "В главной роли",
    rating: "10.0",
    quote: "Пробежали мурашки и слёзы счастья",
    text: "Обратились к Евгению по рекомендациям знакомых и ни разу не пожалели. Понял наши желания буквально с полуслова, а когда мы увидели итоговую работу - пробежали мурашки и на глазах были искренние слёзы счастья. Безумно тонко чувствует людей, составляет интересные сценарии. Мы ехали к нему из другого города и это стоило того.",
  },
  {
    name: "Максим Циклинский",
    role: "В главной роли",
    rating: "9.7",
    quote: "Получилось прям как в кино",
    text: "Огромное спасибо за классный свадебный фильм, особенно за клип - просто пушка. Отдельное спасибо за терпение Евгения. Всем советую. Получилось прям как в кино.",
  },
  {
    name: "Александра Милохина",
    role: "В главной роли",
    rating: "9.9",
    quote: "Он воссоздал нашу историю знакомства",
    text: "Огромное спасибо за свадебный фильм. Мы хотели что-то нестандартное и Евгений помог нам это реализовать. Он воссоздал нашу историю знакомства и отразил нашу любовь и юмор в полной мере. Было комфортно и весело, а главное - мы получили огромное удовольствие от съёмок и от итога. Все остались в восторге.",
  },
];

const TARIFFS = [
  {
    name: "Стандарт",
    tag: "STANDARD",
    price: "70 000 ₽",
    desc: "Классический съёмочный день — все главные моменты свадьбы",
    items: [
      "Утро, ЗАГС, прогулка, банкет",
      "Время работы — до 7 часов",
      "Команда — оператор и рилсмейкер",
      "Фильм — до 30 минут",
      "Тизер — до 1 минуты",
      "2-3 готовых рилса для соцсетей",
      "Исходники — по запросу",
    ],
    highlight: false,
  },
  {
    name: "Режиссёрский",
    tag: "DIRECTOR",
    price: "по запросу",
    desc: "Настоящее кино — сюжет, смыслы и работа со зрителем",
    items: [
      "Время работы — без жёстких лимитов",
      "Команда — 2 оператора и рилсмейкер",
      "Съёмка с разных ракурсов — киношный объём",
      "Глубокий фильм — до 30 минут",
      "Динамичный клип — до 5 минут",
      "2-3 готовых рилса для соцсетей",
      "Исходники — по запросу",
      "Love-story в подарок 🎁",
    ],
    highlight: true,
  },
  {
    name: "Кинопроект",
    tag: "MAXIMUM",
    price: "по запросу",
    desc: "Уровень полноценного кинопроизводства с максимальным продакшеном",
    items: [
      "Предпродакшн + сценарий + Love-story отдельным днём",
      "Время работы — без ограничений, любое кол-во смен",
      "Команда — режиссёр, 2 оператора, рилсмейкер, гафер",
      "Киношный свет на банкете",
      "Большой авторский фильм — от 40 минут",
      "Клип — 3-5 минут",
      "SDE-ролик — премьера прямо на банкете",
      "5-7 рилсов для соцсетей",
      "Ускоренная сдача · все исходники на диске",
    ],
    highlight: false,
  },
];

const CAMEO = {
  name: "Камерный",
  hours: "4 часа",
  desc: "Формат для небольших событий. Снимаем самое начало истории без суеты.",
  items: [
    "Утро, регистрация в ЗАГСе, прогулка",
    "Банкет не снимаем",
    "Время работы — 4 часа",
    "Команда — 1 оператор",
    "Красивый мини-фильм первой половины дня",
  ],
};

export default function Index() {
  const [tick, setTick] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const heroRef = useInView(0.01);
  const aboutRef = useInView(0.1);
  const portfolioRef = useInView(0.05);
  const reviewsRef = useInView(0.05);
  const uspRef = useInView(0.1);
  const tariffsRef = useInView(0.05);
  const loveRef = useInView(0.1);
  const contactRef = useInView(0.1);

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 90);
    return () => clearInterval(id);
  }, []);

  const chars = "РЕЖИССЁР КИНО СВАДЬБА СЦЕНАРИЙ ДРАМА МОНТАЖ".split(" ");
  const scramble = chars[tick % chars.length];

  const fade = (inView: boolean, delay = 0): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(36px)",
    transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
  });

  return (
    <div style={{ background: "#080808", color: "#F0EDE6", fontFamily: "'Cormorant Garamond', serif", overflowX: "hidden" }}>

      {/* ── HERO ── */}
      <section ref={heroRef.ref} style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", position: "relative", overflow: "hidden" }} className="hero-grid">
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "clamp(32px,6vw,80px)", paddingBottom: "clamp(40px,7vw,96px)", position: "relative", zIndex: 2 }}>
          <div style={{ position: "absolute", top: "clamp(20px,3vw,36px)", left: "clamp(32px,6vw,80px)", fontFamily: "'Oswald', sans-serif", fontSize: "10px", letterSpacing: "0.35em", color: "#B8973E" }}>
            ЕВГЕНИЙ ВОЛОДИН
          </div>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "clamp(11px,1vw,13px)", color: "rgba(255,255,255,0.15)", letterSpacing: "0.2em", marginBottom: "24px" }}>
            FILM_001 · 35MM · {scramble}
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(52px,8.5vw,120px)", fontWeight: 300, lineHeight: 0.88, margin: 0, marginBottom: "32px" }}>
            Режиссёр<br />
            <em style={{ color: "#B8973E", fontStyle: "normal" }}>вашего</em><br />
            свадебного<br />
            кино
          </h1>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 200, fontSize: "clamp(12px,1.4vw,15px)", letterSpacing: "0.18em", color: "rgba(240,237,230,0.45)", maxWidth: "380px", lineHeight: 1.8, marginBottom: "48px", textTransform: "uppercase" }}>
            Липецк · Воронеж · Москва
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="#контакт" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#B8973E", color: "#080808", padding: "16px 32px", fontFamily: "'Oswald', sans-serif", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", textDecoration: "none", transition: "background 0.3s" }}
              onMouseOver={e => (e.currentTarget.style.background = "#D4AF6A")}
              onMouseOut={e => (e.currentTarget.style.background = "#B8973E")}>
              Обсудить фильм <Icon name="ArrowRight" size={13} />
            </a>
            <a href="#портфолио" style={{ display: "inline-flex", alignItems: "center", gap: "10px", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(240,237,230,0.5)", padding: "16px 32px", fontFamily: "'Oswald', sans-serif", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.3s" }}
              onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(184,151,62,0.5)"; e.currentTarget.style.color = "#F0EDE6"; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(240,237,230,0.5)"; }}>
              Смотреть работы
            </a>
          </div>
        </div>

        <div style={{ position: "relative", overflow: "hidden" }}>
          <img src={PHOTO} alt="Евгений Володин" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: "grayscale(15%) contrast(1.05)", display: "block" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #080808 0%, transparent 30%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #080808 0%, transparent 40%)" }} />
          <div style={{ position: "absolute", bottom: "clamp(24px,4vw,56px)", right: "clamp(24px,4vw,56px)", border: "1px solid rgba(184,151,62,0.4)", padding: "16px 24px", backdropFilter: "blur(8px)", background: "rgba(8,8,8,0.5)" }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "9px", letterSpacing: "0.3em", color: "#B8973E", marginBottom: "6px" }}>DIRECTOR</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 300, color: "#F0EDE6" }}>5+ лет опыта</div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(to right, #B8973E, transparent 60%)" }} />
      </section>

      {/* ── STATS ── */}
      <div style={{ borderTop: "1px solid #1A1A1A", borderBottom: "1px solid #1A1A1A", display: "grid", gridTemplateColumns: "repeat(3,1fr)" }} className="stats-grid">
        {[
          { n: "5+", l: "лет опыта" },
          { n: "20+", l: "счастливых пар" },
          { n: "400+", l: "часов видео" },
        ].map((s, i) => (
          <div key={i} style={{ padding: "clamp(20px,3vw,40px) clamp(16px,3vw,40px)", borderRight: i < 2 ? "1px solid #1A1A1A" : "none" }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,5vw,60px)", fontWeight: 300, color: "#B8973E", lineHeight: 1 }}>{s.n}</div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "9px", letterSpacing: "0.2em", color: "rgba(255,255,255,0.25)", marginTop: "8px", textTransform: "uppercase" }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* ── ABOUT ── */}
      <section id="обо-мне" ref={aboutRef.ref} style={{ padding: "clamp(64px,10vw,140px) clamp(24px,6vw,80px)", maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "clamp(40px,6vw,100px)", alignItems: "center" }} className="about-grid">
        <div style={{ position: "relative" }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(120px,18vw,240px)", fontWeight: 300, color: "rgba(184,151,62,0.07)", lineHeight: 1, position: "absolute", top: "-40px", left: "-20px", userSelect: "none", pointerEvents: "none" }}>5</div>
          <div style={{ position: "relative", zIndex: 1, ...fade(aboutRef.inView) }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
              <div style={{ width: "32px", height: "1px", background: "#B8973E" }} />
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", letterSpacing: "0.35em", color: "#B8973E" }}>ОБО МНЕ</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4vw,54px)", fontWeight: 300, lineHeight: 1.1, marginBottom: "32px", color: "#F0EDE6" }}>
              Евгений Володин
            </h2>
            <div style={{ width: "48px", height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "32px" }} />
            <p style={{ fontSize: "clamp(17px,1.8vw,22px)", fontWeight: 300, lineHeight: 1.75, color: "rgba(240,237,230,0.65)", fontStyle: "italic" }}>
              "За 5 лет я прошел весь цикл видеопроизводства - от технического оператора до режиссера. Зрителя не цепляет просто красивая картинка. Ему нужен смысл."
            </p>
          </div>
        </div>
        <div style={fade(aboutRef.inView, 0.25)}>
          <p style={{ fontSize: "clamp(16px,1.6vw,19px)", fontWeight: 300, lineHeight: 1.9, color: "rgba(240,237,230,0.55)", marginBottom: "28px" }}>
            На моих съёмках вы не позируете для шаблонных кадров - вы попадаете в настоящее кино. Я создаю атмосферу, где вы чувствуете себя главными героями масштабного фильма.
          </p>
          <p style={{ fontSize: "clamp(16px,1.6vw,19px)", fontWeight: 300, lineHeight: 1.9, color: "rgba(240,237,230,0.55)", marginBottom: "40px" }}>
            Вы просто проживаете этот день, а я выстраиваю вокруг вас драматургию и сюжет. Задача - чтобы вы кайфанули от процесса, а на выходе получили глубокое и стильное кино про себя.
          </p>
          <p style={{ fontSize: "clamp(15px,1.5vw,18px)", fontWeight: 300, lineHeight: 1.85, color: "rgba(240,237,230,0.4)", borderLeft: "2px solid #B8973E", paddingLeft: "20px", fontStyle: "italic" }}>
            Мы снимаем не только в день свадьбы. Я приезжаю столько раз, сколько нужно для полноценного фильма - в зависимости от выбранного формата.
          </p>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="портфолио" ref={portfolioRef.ref} style={{ borderTop: "1px solid #1A1A1A", background: "#0C0C0C", padding: "clamp(64px,10vw,120px) clamp(24px,6vw,80px)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
            <div style={{ width: "32px", height: "1px", background: "#B8973E" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", letterSpacing: "0.35em", color: "#B8973E" }}>ПОРТФОЛИО</span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,5vw,64px)", fontWeight: 300, lineHeight: 1.05, color: "#F0EDE6", marginBottom: "56px" }}>
            Мои фильмы<br />
            <em style={{ color: "rgba(240,237,230,0.3)", fontStyle: "normal" }}>смотрите прямо здесь</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "clamp(16px,2vw,28px)" }} className="portfolio-grid">
            {VIDEOS.map((v, i) => (
              <div key={v.id} style={{ ...fade(portfolioRef.inView, (i % 2) * 0.12) }}>
                <div style={{ position: "relative", aspectRatio: "16 / 9", background: "#000", border: "1px solid #1A1A1A", overflow: "hidden" }}>
                  {activeVideo === v.id ? (
                    <iframe
                      src={`https://rutube.ru/play/embed/${v.id}`}
                      title={v.title}
                      allow="clipboard-write; autoplay"
                      allowFullScreen
                      style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                    />
                  ) : (
                    <button
                      onClick={() => setActiveVideo(v.id)}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", cursor: "pointer", padding: 0, background: "#000", overflow: "hidden" }}
                    >
                      <img
                        src={`https://rutube.ru/api/video/${v.id}/thumbnail/?redirect=1`}
                        alt={v.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(25%) contrast(1.05) brightness(0.85)", transition: "transform 0.6s, filter 0.4s" }}
                        onMouseOver={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)"; (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0%) contrast(1.05) brightness(1)"; }}
                        onMouseOut={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; (e.currentTarget as HTMLImageElement).style.filter = "grayscale(25%) contrast(1.05) brightness(0.85)"; }}
                      />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,0.85) 0%, transparent 50%)", pointerEvents: "none" }} />
                      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "64px", height: "64px", borderRadius: "50%", border: "1px solid #B8973E", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)", background: "rgba(8,8,8,0.3)", pointerEvents: "none" }}>
                        <Icon name="Play" size={22} style={{ color: "#B8973E", marginLeft: "3px" }} />
                      </div>
                      <div style={{ position: "absolute", bottom: "16px", left: "20px", right: "20px", textAlign: "left", pointerEvents: "none" }}>
                        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "clamp(11px,1.2vw,14px)", letterSpacing: "0.25em", color: "#B8973E" }}>{`FILM_${String(i + 1).padStart(3, "0")}`}</div>
                      </div>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOVE-STORY LEAD MAGNET ── */}
      <section ref={loveRef.ref} style={{ margin: "0 clamp(24px,6vw,80px) clamp(48px,8vw,100px)", position: "relative", overflow: "hidden" }}>
        <div style={{
          background: "linear-gradient(135deg, #1a1200 0%, #0C0C0C 40%, #1a1200 100%)",
          border: "1px solid rgba(184,151,62,0.4)",
          padding: "clamp(40px,6vw,72px)",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "40px",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          ...fade(loveRef.inView),
        }} className="love-grid">
          <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "radial-gradient(circle, rgba(184,151,62,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(184,151,62,0.15)", border: "1px solid rgba(184,151,62,0.3)", padding: "6px 14px", marginBottom: "24px" }}>
              <span style={{ fontSize: "14px" }}>🎁</span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "9px", letterSpacing: "0.3em", color: "#B8973E", textTransform: "uppercase" }}>Подарок каждой паре</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4.5vw,60px)", fontWeight: 300, lineHeight: 1.05, color: "#F0EDE6", marginBottom: "20px" }}>
              Love-story<br />
              <em style={{ color: "#B8973E", fontStyle: "normal" }}>в подарок</em>
            </h2>
            <p style={{ fontSize: "clamp(15px,1.6vw,18px)", fontWeight: 300, lineHeight: 1.85, color: "rgba(240,237,230,0.55)", maxWidth: "520px" }}>
              К каждому тарифу «Режиссёрский» и «Кинопроект» я снимаю отдельный love-story - короткий атмосферный фильм о вас двоих. Не свадьба, а история любви. Ваш личный короткий метр.
            </p>
          </div>
          <div style={{ textAlign: "center", flexShrink: 0 }} className="love-cta">
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(52px,8vw,96px)", fontWeight: 300, color: "rgba(184,151,62,0.15)", lineHeight: 1 }}>♥</div>
            <a href="#контакт" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#B8973E", color: "#080808", padding: "16px 28px", fontFamily: "'Oswald', sans-serif", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", textDecoration: "none", transition: "background 0.3s", marginTop: "16px" }}
              onMouseOver={e => (e.currentTarget.style.background = "#D4AF6A")}
              onMouseOut={e => (e.currentTarget.style.background = "#B8973E")}>
              Хочу такой же
            </a>
          </div>
        </div>
      </section>

      {/* ── USP ── */}
      <section ref={uspRef.ref} style={{ borderTop: "1px solid #1A1A1A", borderBottom: "1px solid #1A1A1A", background: "#0C0C0C", padding: "clamp(48px,8vw,100px) clamp(24px,6vw,80px)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "56px" }}>
            <div style={{ width: "32px", height: "1px", background: "#B8973E" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", letterSpacing: "0.35em", color: "#B8973E" }}>ПОЧЕМУ Я</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "#1A1A1A" }} className="usp-grid">
            {[
              { icon: "FileCheck", title: "Работаю по договору", text: "Все условия фиксируются официально. Все риски на мне - клиент полностью защищён.", gold: true },
              { icon: "Clock", title: "Сдача до 30 дней", text: "Готовый фильм через месяц после свадьбы. Никаких «скоро», «жду вдохновения» и бесконечных ожиданий.", gold: false },
              { icon: "Users", title: "Команда профессионалов", text: "Над вашим фильмом работает команда - операторы, рилсмейкер, гафер. Всё под ключ. Вы ничего не организуете сами.", gold: false },
            ].map((u, i) => (
              <div key={i} style={{ background: "#080808", padding: "clamp(28px,3vw,48px)", ...fade(uspRef.inView, i * 0.15) }}>
                <div style={{ width: "44px", height: "44px", border: `1px solid ${u.gold ? "#B8973E" : "rgba(184,151,62,0.25)"}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                  <Icon name={u.icon as "Clock"} size={18} style={{ color: "#B8973E" }} />
                </div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(14px,1.4vw,17px)", letterSpacing: "0.1em", textTransform: "uppercase", color: u.gold ? "#B8973E" : "#F0EDE6", marginBottom: "14px" }}>{u.title}</h3>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(15px,1.4vw,17px)", color: "rgba(240,237,230,0.4)", lineHeight: 1.75, fontWeight: 300 }}>{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TARIFFS ── */}
      <section id="тарифы" ref={tariffsRef.ref} style={{ padding: "clamp(64px,10vw,120px) clamp(24px,6vw,80px)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
            <div style={{ width: "32px", height: "1px", background: "#B8973E" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", letterSpacing: "0.35em", color: "#B8973E" }}>ТАРИФЫ</span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,5vw,64px)", fontWeight: 300, lineHeight: 1.05, color: "#F0EDE6", marginBottom: "56px" }}>
            Выберите свой формат<br />
            <em style={{ color: "rgba(240,237,230,0.3)", fontStyle: "normal" }}>всё под ключ</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "#1A1A1A" }} className="tariff-grid">
            {TARIFFS.map((t, i) => (
              <div key={i} style={{
                background: t.highlight ? "#111000" : "#080808",
                padding: "clamp(28px,3vw,48px)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                border: t.highlight ? "1px solid rgba(184,151,62,0.4)" : "none",
                marginTop: t.highlight ? "-1px" : "0",
                marginBottom: t.highlight ? "-1px" : "0",
                ...fade(tariffsRef.inView, i * 0.15),
              }}>
                {t.highlight && (
                  <div style={{ position: "absolute", top: "-1px", left: "50%", transform: "translateX(-50%)", background: "#B8973E", padding: "4px 16px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "8px", letterSpacing: "0.3em", color: "#080808", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                    Популярный
                  </div>
                )}
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "9px", letterSpacing: "0.3em", color: "rgba(184,151,62,0.6)", marginBottom: "12px", textTransform: "uppercase" }}>{t.tag}</div>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(16px,1.6vw,20px)", letterSpacing: "0.1em", textTransform: "uppercase", color: "#F0EDE6", marginBottom: "8px" }}>{t.name}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 300, color: t.highlight ? "#B8973E" : "#F0EDE6", lineHeight: 1, marginBottom: "12px" }}>{t.price}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "14px", color: "rgba(240,237,230,0.35)", marginBottom: "28px", fontStyle: "italic" }}>{t.desc}</div>
                <div style={{ width: "100%", height: "1px", background: "#1A1A1A", marginBottom: "28px" }} />
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                  {t.items.map((item, j) => (
                    <li key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span style={{ color: "#B8973E", flexShrink: 0, marginTop: "2px", fontSize: "12px" }}>—</span>
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(14px,1.3vw,16px)", color: "rgba(240,237,230,0.6)", fontWeight: 300, lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#контакт" style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  marginTop: "32px",
                  background: t.highlight ? "#B8973E" : "transparent",
                  border: t.highlight ? "none" : "1px solid rgba(255,255,255,0.12)",
                  color: t.highlight ? "#080808" : "rgba(240,237,230,0.5)",
                  padding: "14px 24px",
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
                onMouseOver={e => { e.currentTarget.style.background = t.highlight ? "#D4AF6A" : "rgba(184,151,62,0.1)"; e.currentTarget.style.color = t.highlight ? "#080808" : "#B8973E"; e.currentTarget.style.borderColor = "rgba(184,151,62,0.4)"; }}
                onMouseOut={e => { e.currentTarget.style.background = t.highlight ? "#B8973E" : "transparent"; e.currentTarget.style.color = t.highlight ? "#080808" : "rgba(240,237,230,0.5)"; e.currentTarget.style.borderColor = t.highlight ? "none" : "rgba(255,255,255,0.12)"; }}>
                  Выбрать <Icon name="ArrowRight" size={12} />
                </a>
              </div>
            ))}
          </div>

          {/* CAMEO — minimal day-only tariff */}
          <div style={{
            marginTop: "clamp(16px,2vw,24px)",
            border: "1px dashed rgba(184,151,62,0.3)",
            background: "#0A0A0A",
            padding: "clamp(28px,3.5vw,44px)",
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            gap: "clamp(24px,4vw,56px)",
            alignItems: "center",
            ...fade(tariffsRef.inView, 0.5),
          }} className="cameo-grid">
            <div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "9px", letterSpacing: "0.3em", color: "rgba(184,151,62,0.6)", textTransform: "uppercase", marginBottom: "10px" }}>CAMEO</div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(18px,2vw,24px)", letterSpacing: "0.08em", textTransform: "uppercase", color: "#F0EDE6", marginBottom: "4px" }}>{CAMEO.name}</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 300, color: "#B8973E", lineHeight: 1 }}>{CAMEO.hours}</div>
            </div>
            <div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(15px,1.5vw,18px)", color: "rgba(240,237,230,0.45)", fontStyle: "italic", marginBottom: "18px", lineHeight: 1.5 }}>{CAMEO.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px" }}>
                {CAMEO.items.map((item, j) => (
                  <span key={j} style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(13px,1.3vw,15px)", color: "rgba(240,237,230,0.55)", fontWeight: 300 }}>
                    <span style={{ color: "#B8973E", fontSize: "11px" }}>—</span>{item}
                  </span>
                ))}
              </div>
            </div>
            <a href="#контакт" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", border: "1px solid rgba(184,151,62,0.4)", color: "#B8973E", padding: "14px 28px", fontFamily: "'Oswald', sans-serif", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.3s", whiteSpace: "nowrap" }}
              onMouseOver={e => { e.currentTarget.style.background = "#B8973E"; e.currentTarget.style.color = "#080808"; }}
              onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#B8973E"; }}>
              Узнать цену <Icon name="ArrowRight" size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section ref={reviewsRef.ref} style={{ borderTop: "1px solid #1A1A1A", background: "#0C0C0C", padding: "clamp(64px,10vw,120px) clamp(24px,6vw,80px)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
            <div style={{ width: "32px", height: "1px", background: "#B8973E" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", letterSpacing: "0.35em", color: "#B8973E" }}>ОТЗЫВЫ</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "24px", marginBottom: "56px" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,5vw,64px)", fontWeight: 300, lineHeight: 1.05, color: "#F0EDE6", margin: 0 }}>
              Отзывы с премьер<br />
              <em style={{ color: "rgba(240,237,230,0.3)", fontStyle: "normal" }}>главных героев</em>
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(44px,6vw,72px)", fontWeight: 300, color: "#B8973E", lineHeight: 1 }}>9.8</div>
              <div>
                <div style={{ color: "#B8973E", fontSize: "13px", letterSpacing: "2px" }}>★★★★★</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "9px", letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginTop: "4px" }}>средний рейтинг · 20+ пар</div>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "clamp(16px,2vw,24px)" }} className="reviews-grid">
            {REVIEWS.map((r, i) => (
              <div key={i} style={{
                background: "linear-gradient(160deg, #111000 0%, #0A0A0A 60%)",
                border: "1px solid #1A1A1A",
                position: "relative",
                overflow: "hidden",
                ...fade(reviewsRef.inView, (i % 2) * 0.12),
              }}
              onMouseOver={e => (e.currentTarget.style.borderColor = "rgba(184,151,62,0.4)")}
              onMouseOut={e => (e.currentTarget.style.borderColor = "#1A1A1A")}
              >
                {/* film perforation strip */}
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "22px", background: "#060606", borderRight: "1px solid #1A1A1A", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", paddingTop: "12px", paddingBottom: "12px" }}>
                  {Array.from({ length: 7 }).map((_, k) => (
                    <div key={k} style={{ width: "8px", height: "10px", borderRadius: "2px", background: "#161616" }} />
                  ))}
                </div>

                <div style={{ padding: "clamp(28px,3.5vw,44px)", paddingLeft: "clamp(44px,5vw,64px)" }}>
                  {/* header: rating + take */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4vw,46px)", fontWeight: 300, color: "#B8973E", lineHeight: 1 }}>{r.rating}</span>
                      <span style={{ color: "#B8973E", fontSize: "12px", letterSpacing: "2px" }}>★★★★★</span>
                    </div>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "9px", letterSpacing: "0.2em", color: "rgba(255,255,255,0.2)", textTransform: "uppercase" }}>{`TAKE_${String(i + 1).padStart(2, "0")}`}</span>
                  </div>

                  {/* pull quote */}
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px,2.4vw,30px)", fontWeight: 300, lineHeight: 1.2, color: "#F0EDE6", marginBottom: "20px", fontStyle: "italic" }}>
                    «{r.quote}»
                  </p>

                  {/* full text */}
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(14px,1.4vw,16px)", fontWeight: 300, lineHeight: 1.7, color: "rgba(240,237,230,0.4)", marginBottom: "28px" }}>
                    {r.text}
                  </p>

                  {/* footer: name as credits */}
                  <div style={{ borderTop: "1px solid #1A1A1A", paddingTop: "20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                    <div>
                      <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(13px,1.3vw,15px)", letterSpacing: "0.1em", textTransform: "uppercase", color: "#F0EDE6" }}>{r.name}</div>
                      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "9px", letterSpacing: "0.25em", color: "rgba(184,151,62,0.6)", textTransform: "uppercase", marginTop: "4px" }}>{r.role}</div>
                    </div>
                    <Icon name="BadgeCheck" size={18} style={{ color: "rgba(184,151,62,0.5)", flexShrink: 0 }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="контакт" ref={contactRef.ref} style={{ borderTop: "1px solid #1A1A1A", background: "#080808", padding: "clamp(64px,10vw,120px) clamp(24px,6vw,80px)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "40px" }}>
            <div style={{ width: "32px", height: "1px", background: "#B8973E" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", letterSpacing: "0.35em", color: "#B8973E" }}>КОНТАКТ</span>
            <div style={{ width: "32px", height: "1px", background: "#B8973E" }} />
          </div>
          <h2 style={{ ...fade(contactRef.inView), fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px,6vw,80px)", fontWeight: 300, lineHeight: 1.0, color: "#F0EDE6", marginBottom: "24px" }}>
            Обсудим<br />
            <em style={{ color: "#B8973E", fontStyle: "normal" }}>ваш фильм</em>
          </h2>
          <p style={{ ...fade(contactRef.inView, 0.2), fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(16px,1.8vw,20px)", fontWeight: 300, lineHeight: 1.85, color: "rgba(240,237,230,0.4)", marginBottom: "56px" }}>
            Напишите или позвоните - отвечаю лично, без менеджеров.
          </p>

          <div style={{ ...fade(contactRef.inView, 0.3), display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1px", background: "#1A1A1A", marginBottom: "1px" }} className="contacts-grid">
            {[
              { icon: "Phone", label: "+7 999 750-79-02", sub: "Позвонить", href: "tel:+79997507902" },
              { icon: "Send", label: "@volodinevgeni", sub: "Telegram", href: "https://t.me/volodinevgeni" },
            ].map((c, i) => (
              <a key={i} href={c.href} target="_blank" rel="noreferrer" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px", padding: "clamp(28px,4vw,48px)", background: "#080808", textDecoration: "none", transition: "background 0.3s" }}
                onMouseOver={e => (e.currentTarget.style.background = "#0F0F0F")}
                onMouseOut={e => (e.currentTarget.style.background = "#080808")}>
                <Icon name={c.icon as "Phone"} size={20} style={{ color: "#B8973E" }} />
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(18px,2vw,24px)", fontWeight: 300, color: "#F0EDE6" }}>{c.label}</span>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "9px", letterSpacing: "0.3em", color: "rgba(184,151,62,0.6)", textTransform: "uppercase" }}>{c.sub}</span>
              </a>
            ))}
          </div>
          <div style={{ ...fade(contactRef.inView, 0.3), display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1px", background: "#1A1A1A" }} className="contacts-grid">
            {[
              { icon: "Smartphone", label: "MAX", sub: "Мессенджер", href: "https://max.ru/u/f9LHodD0cOI1HZ6GuJWtDqzuOCB3w8GWNkqJBuJt6Sgj01nfPhsnQAQeuzk" },
              { icon: "ExternalLink", label: "vk.com/kreeator", sub: "ВКонтакте", href: "https://vk.com/kreeator" },
            ].map((c, i) => (
              <a key={i} href={c.href} target="_blank" rel="noreferrer" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px", padding: "clamp(28px,4vw,48px)", background: "#080808", textDecoration: "none", transition: "background 0.3s" }}
                onMouseOver={e => (e.currentTarget.style.background = "#0F0F0F")}
                onMouseOut={e => (e.currentTarget.style.background = "#080808")}>
                <Icon name={c.icon as "Phone"} size={20} style={{ color: "#B8973E" }} />
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(18px,2vw,24px)", fontWeight: 300, color: "#F0EDE6" }}>{c.label}</span>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "9px", letterSpacing: "0.3em", color: "rgba(184,151,62,0.6)", textTransform: "uppercase" }}>{c.sub}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid #1A1A1A", padding: "24px clamp(24px,6vw,80px)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "9px", letterSpacing: "0.2em", color: "rgba(255,255,255,0.15)", textTransform: "uppercase" }}>© 2026 Евгений Володин</span>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "9px", letterSpacing: "0.2em", color: "rgba(255,255,255,0.15)", textTransform: "uppercase" }}>Липецк · Воронеж · Москва</span>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "13px", fontStyle: "italic", color: "rgba(255,255,255,0.1)" }}>Кино - это правда 24 кадра в секунду</span>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:first-child { padding-top: 100px !important; min-height: 60vh; }
          .hero-grid > div:last-child { height: 70vw; }
          .about-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr !important; }
          .usp-grid { grid-template-columns: 1fr !important; }
          .tariff-grid { grid-template-columns: 1fr !important; }
          .cameo-grid { grid-template-columns: 1fr !important; text-align: left; }
          .portfolio-grid { grid-template-columns: 1fr !important; }
          .reviews-grid { grid-template-columns: 1fr !important; }
          .contacts-grid { grid-template-columns: 1fr !important; }
          .love-grid { grid-template-columns: 1fr !important; }
          .love-cta { display: none !important; }
        }
      `}</style>
    </div>
  );
}