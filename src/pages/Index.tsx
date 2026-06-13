import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

/* ── helpers ── */
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

const fade = (v: boolean, d = 0): React.CSSProperties => ({
  opacity: v ? 1 : 0,
  transform: v ? "translateY(0)" : "translateY(40px)",
  transition: `opacity 0.85s ease ${d}s, transform 0.85s ease ${d}s`,
});

/* ── constants ── */
const PHOTO = "https://cdn.poehali.dev/projects/6b3fbfff-dfcc-4fcb-b559-369440416de5/bucket/b94399a3-970b-4694-8715-a493879d163e.jpg";

const O = "#FF5C1A";
const BG = "#0D0D0D";
const CARD = "#141414";
const LINE = "#222";
const TEXT = "#F2F0EB";
const MUTED = "rgba(242,240,235,0.45)";

const SKILLS = ["Смыслы и триггеры", "Контент-стратегия", "Сценарии", "Продюсирование", "Режиссура", "Видеопроизводство", "Нейросети", "Работа с командой"];

const PROS = [
  { icon: "Zap", t: "Беру ответственность", d: "Люблю и умею. Для меня это не слова — это рабочий режим." },
  { icon: "Rocket", t: "Проактивный", d: "Обожаю профессию. Не жду задачи — предлагаю идеи и решения сам." },
  { icon: "Layers", t: "Системный креативщик", d: "Превратил творческий хаос в воспроизводимую систему. Креатив со структурой." },
  { icon: "Users", t: "Строю команды", d: "Грамотно выстраиваю процессы, распределяю роли, держу темп." },
  { icon: "TrendingUp", t: "Постоянно расту", d: "Курсы, тренды, новые форматы. Стагнация — не про меня." },
  { icon: "Cpu", t: "Нейросети в работе", d: "Использую все топовые инструменты и слежу за новинками каждую неделю." },
];

const CONS = [
  { t: "Трудоголик", d: "Не умею отдыхать. Это честно." },
  { t: "Горю на монтаже", d: "Быстро выгораю за таймлайном. Моя сила — смыслы и режиссура, а не ручной монтаж." },
  { t: "Нужен рост", d: "Выгораю без развития. Важен личностный и профессиональный рост." },
  { t: "Нужен результат", d: "Демотивируюсь без реального итога. Формализм — не моё." },
  { t: "Говорю прямо", d: "Всегда предлагаю улучшения честно. Моё дело сказать — решать руководителю." },
];

const CASES = [
  { n: "01", title: "Священник", tag: "Личный бренд", desc: "Построение экспертного образа и контент-стратегии с нуля." },
  { n: "02", title: "Донской пар", tag: "Локальный бизнес", desc: "Контент для банного комплекса: атмосфера, эмоция, рост охватов и бронирований." },
  { n: "03", title: "Массажист", tag: "Эксперт", desc: "Упаковка личного бренда: видеоконтент, рилсы, сценарии для прогрева." },
  { n: "04", title: "Детский остеопат", tag: "Медицина", desc: "Доверие через контент. Сложная ниша — тонкие смыслы, мягкий тон, сильные триггеры." },
  { n: "05", title: "АГРОштурман", tag: "Агробизнес", desc: "Продюсирование контента для агро-сервиса. Технический продукт — понятные истории." },
  { n: "06", title: "Владимир Сургай", tag: "Бизнес-тренер", desc: "Стратегия и производство контента. Масштабирование аудитории эксперта." },
];

const WORDS = ["СМЫСЛЫ", "ТРИГГЕРЫ", "КОНТЕНТ", "СТРАТЕГИЯ", "ПРОДАКШН", "СЦЕНАРИЙ", "ПРОДЮСЕР"];

export default function Index() {
  const [tick, setTick] = useState(0);
  const [activeCase, setActiveCase] = useState<number | null>(null);

  const heroRef = useInView(0.01);
  const superRef = useInView(0.1);
  const aboutRef = useInView(0.1);
  const casesRef = useInView(0.05);
  const contactRef = useInView(0.1);

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 100);
    return () => clearInterval(id);
  }, []);

  const word = WORDS[tick % WORDS.length];

  return (
    <div style={{ background: BG, color: TEXT, fontFamily: "'Inter', 'Helvetica Neue', sans-serif", overflowX: "hidden" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: ${O}; }

        @keyframes float { 0%,100% { transform: translateY(0) rotate(-1deg); } 50% { transform: translateY(-14px) rotate(1deg); } }
        @keyframes pulse-ring { 0% { transform: scale(0.9); opacity: 0.7; } 100% { transform: scale(1.5); opacity: 0; } }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }

        .floating { animation: float 5.5s ease-in-out infinite; }
        .pulsering { animation: pulse-ring 2.5s ease-out infinite; }
        .marquee-track { display: flex; animation: marquee 20s linear infinite; white-space: nowrap; }
        .blink { animation: blink 1s step-end infinite; }
        .nav-link { color: rgba(242,240,235,0.45); text-decoration: none; font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; transition: color 0.2s; }
        .nav-link:hover { color: ${O}; }
        .case-card { cursor: pointer; transition: transform 0.3s ease, border-color 0.25s; }
        .case-card:hover { transform: translateY(-4px); }
        .contact-row { border-left: 3px solid transparent; transition: background 0.2s, border-left-color 0.2s; }
        .contact-row:hover { background: #1C1C1C !important; border-left-color: ${O} !important; }

        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo { height: 70vw; order: -1; }
          .super-grid { grid-template-columns: 1fr !important; }
          .pros-grid { grid-template-columns: repeat(2,1fr) !important; }
          .cons-grid { grid-template-columns: repeat(2,1fr) !important; }
          .cases-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .nav-links { display: none !important; }
        }
        @media (max-width: 480px) {
          .pros-grid { grid-template-columns: 1fr !important; }
          .cons-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "0 clamp(20px,5vw,72px)", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(13,13,13,0.88)", backdropFilter: "blur(14px)", borderBottom: `1px solid ${LINE}` }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px", letterSpacing: "0.18em", color: O }}>EV_STUDIO</span>
        <div className="nav-links" style={{ display: "flex", gap: "36px" }}>
          {[["#super", "суперсила"], ["#about", "обо мне"], ["#cases", "кейсы"], ["#contact", "контакт"]].map(([h, l]) => (
            <a key={h} href={h} className="nav-link">{l}</a>
          ))}
        </div>
        <a href="#contact" style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: BG, background: O, padding: "9px 22px", textDecoration: "none", transition: "opacity 0.2s" }}
          onMouseOver={e => (e.currentTarget.style.opacity = "0.8")}
          onMouseOut={e => (e.currentTarget.style.opacity = "1")}>
          Связаться
        </a>
      </nav>

      {/* ── HERO ── */}
      <section ref={heroRef.ref} style={{ minHeight: "100vh", paddingTop: "60px", display: "grid", gridTemplateColumns: "1fr 1fr", position: "relative", overflow: "hidden" }} className="hero-grid">

        {/* left text */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(36px,6vw,88px)", paddingTop: "clamp(56px,7vw,100px)", position: "relative", zIndex: 1 }}>

          {/* animated word */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
            <div style={{ width: "24px", height: "2px", background: O, flexShrink: 0 }} />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", letterSpacing: "0.28em", color: O }}>{word}<span className="blink">_</span></span>
          </div>

          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(44px,7vw,96px)", fontWeight: 700, lineHeight: 0.92, letterSpacing: "-0.03em", marginBottom: "12px" }}>
            Евгений<br />
            <span style={{ WebkitTextStroke: `2px ${O}`, color: "transparent" }}>Воло</span><span style={{ color: TEXT }}>дин</span>
          </h1>

          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(10px,1.1vw,12px)", letterSpacing: "0.22em", textTransform: "uppercase", color: MUTED, marginBottom: "28px" }}>
            Продюсер · Контент-маркетолог
          </p>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(14px,1.5vw,17px)", lineHeight: 1.7, color: MUTED, maxWidth: "420px", marginBottom: "36px" }}>
            Прошёл весь цикл видеопроизводства своими руками. Теперь знаю,{" "}
            <span style={{ color: TEXT, fontWeight: 500 }}>почему люди досматривают до конца</span> — и это не про красивый монтаж.
          </p>

          {/* scrolling skills strip */}
          <div style={{ overflow: "hidden", marginLeft: "calc(-1 * clamp(36px,6vw,88px))", marginBottom: "40px" }}>
            <div className="marquee-track">
              {[...SKILLS, ...SKILLS].map((s, i) => (
                <span key={i} style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.2em", color: i % 2 === 0 ? MUTED : O, padding: "0 clamp(10px,2vw,22px)", textTransform: "uppercase" }}>{s}</span>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="#cases" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: O, color: BG, padding: "14px 30px", fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", transition: "opacity 0.2s", fontWeight: 700 }}
              onMouseOver={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseOut={e => (e.currentTarget.style.opacity = "1")}>
              Кейсы <Icon name="ArrowRight" size={13} />
            </a>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "10px", border: `1px solid ${LINE}`, color: MUTED, padding: "14px 30px", fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.25s" }}
              onMouseOver={e => { e.currentTarget.style.borderColor = O; e.currentTarget.style.color = TEXT; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = LINE; e.currentTarget.style.color = MUTED; }}>
              Написать
            </a>
          </div>
        </div>

        {/* right photo */}
        <div className="hero-photo" style={{ position: "relative", overflow: "hidden" }}>
          {/* glow blob */}
          <div className="floating" style={{ position: "absolute", top: "8%", right: "6%", width: "clamp(100px,16vw,220px)", height: "clamp(100px,16vw,220px)", borderRadius: "50%", background: `radial-gradient(circle, ${O}50 0%, transparent 70%)`, zIndex: 1, pointerEvents: "none" }} />
          <div className="pulsering" style={{ position: "absolute", top: "8%", right: "6%", width: "clamp(60px,10vw,140px)", height: "clamp(60px,10vw,140px)", borderRadius: "50%", border: `1px solid ${O}80`, zIndex: 1, pointerEvents: "none", marginTop: "clamp(20px,3vw,40px)", marginRight: "clamp(20px,3vw,40px)" }} />

          <img src={PHOTO} alt="Евгений Володин" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block", filter: "contrast(1.08) brightness(0.88)" }} />
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${BG} 0%, transparent 28%)` }} />
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${BG} 0%, transparent 32%)` }} />

          {/* floating card */}
          <div className="floating" style={{ position: "absolute", bottom: "clamp(28px,5vw,68px)", right: "clamp(20px,4vw,48px)", background: CARD, border: `1px solid ${O}`, padding: "16px 22px", zIndex: 2 }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "8px", letterSpacing: "0.3em", color: O, marginBottom: "5px" }}>ОПЫТ</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(20px,3vw,30px)", fontWeight: 700, color: TEXT }}>5+ лет</div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "8px", color: MUTED, marginTop: "3px" }}>контент-продакшн</div>
          </div>

          {/* mini stats */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", borderTop: `1px solid rgba(255,255,255,0.06)`, zIndex: 2 }}>
            {[["МЧС", "Начало пути"], ["Видео", "Полный цикл"], ["Бизнес", "Продюсер"]].map((s, i) => (
              <div key={i} style={{ flex: 1, padding: "12px 16px", borderRight: i < 2 ? `1px solid rgba(255,255,255,0.06)` : "none", backdropFilter: "blur(10px)", background: "rgba(13,13,13,0.65)" }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "clamp(11px,1.1vw,13px)", color: TEXT }}>{s[0]}</div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "7px", letterSpacing: "0.12em", color: MUTED, marginTop: "2px" }}>{s[1]}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(to right, ${O}, transparent 55%)` }} />
      </section>

      {/* ── SUPERPOWER ── */}
      <section id="super" ref={superRef.ref} style={{ padding: "clamp(72px,10vw,140px) clamp(24px,6vw,80px)", borderBottom: `1px solid ${LINE}` }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.7fr", gap: "clamp(40px,6vw,100px)", alignItems: "center" }} className="super-grid">
            <div style={fade(superRef.inView)}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.35em", color: O, marginBottom: "20px" }}>// СУПЕРСИЛА</div>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(40px,6vw,80px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 0.9, color: TEXT }}>
                Смыслы<br />и<br /><span style={{ color: O }}>триггеры</span>
              </h2>
            </div>
            <div style={fade(superRef.inView, 0.2)}>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(18px,2.2vw,26px)", fontWeight: 400, lineHeight: 1.5, color: TEXT, marginBottom: "24px" }}>
                Я знаю, почему люди <span style={{ color: O, fontWeight: 600 }}>досмотрят ролик до последней секунды</span> — и это происходит точно не из-за красивого монтажа.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(14px,1.5vw,17px)", lineHeight: 1.85, color: MUTED, marginBottom: "32px" }}>
                Знаю всю кухню изнутри: съёмки, монтаж, постпродакшн — прошёл всё руками. Есть насмотренность, техническая база и понимание, как привести проект к результату.
              </p>
              {/* path chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                {["МЧС / Пресс-секретарь", "→", "Оператор", "→", "Монтаж", "→", "Режиссёр", "→", "Продюсер"].map((s, i) => (
                  s === "→"
                    ? <Icon key={i} name="ChevronRight" size={14} style={{ color: `${O}60` }} />
                    : <span key={i} style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", padding: "7px 14px", border: `1px solid ${s === "Продюсер" ? O : LINE}`, color: s === "Продюсер" ? O : MUTED }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE DIVIDER ── */}
      <div style={{ overflow: "hidden", padding: "14px 0", background: CARD, borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}` }}>
        <div className="marquee-track">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.25em", color: i % 2 === 0 ? MUTED : O, padding: "0 24px", textTransform: "uppercase" }}>
              {["КОНТЕНТ", "★", "СМЫСЛЫ", "★", "ПРОДАКШН", "★", "БРЕНД"][i % 7]}
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section id="about" ref={aboutRef.ref} style={{ padding: "clamp(72px,10vw,140px) clamp(24px,6vw,80px)", borderBottom: `1px solid ${LINE}` }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "56px" }}>
            <div style={{ width: "24px", height: "2px", background: O }} />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.32em", color: O, textTransform: "uppercase" }}>// ЧЕСТНО О СЕБЕ</span>
          </div>

          {/* PROS */}
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(16px,1.8vw,22px)", fontWeight: 600, color: TEXT, marginBottom: "20px" }}>
            Сильные стороны
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: LINE, marginBottom: "clamp(48px,6vw,72px)" }} className="pros-grid">
            {PROS.map((p, i) => (
              <div key={i} style={{ background: CARD, padding: "clamp(22px,3vw,34px)", ...fade(aboutRef.inView, i * 0.07), transition: `background 0.2s, opacity 0.85s ease ${i * 0.07}s, transform 0.85s ease ${i * 0.07}s` }}
                onMouseOver={e => (e.currentTarget.style.background = "#1C1C1C")}
                onMouseOut={e => (e.currentTarget.style.background = CARD)}>
                <div style={{ width: "38px", height: "38px", border: `1px solid ${O}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                  <Icon name={p.icon as "Zap"} size={15} style={{ color: O }} />
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "clamp(13px,1.4vw,16px)", color: TEXT, marginBottom: "8px" }}>{p.t}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(12px,1.2vw,14px)", lineHeight: 1.65, color: MUTED }}>{p.d}</div>
              </div>
            ))}
          </div>

          {/* CONS */}
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(16px,1.8vw,22px)", fontWeight: 600, color: TEXT, marginBottom: "8px" }}>
            Честные минусы
          </h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(12px,1.3vw,14px)", color: MUTED, marginBottom: "20px" }}>Потому что важно знать, с кем работаешь.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "1px", background: LINE }} className="cons-grid">
            {CONS.map((c, i) => (
              <div key={i} style={{ background: CARD, padding: "clamp(18px,2.5vw,26px)", borderTop: `2px solid ${i === 0 ? O : "transparent"}`, ...fade(aboutRef.inView, i * 0.07) }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "8px", letterSpacing: "0.2em", color: O, marginBottom: "10px" }}>{String(i + 1).padStart(2, "0")}</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "clamp(12px,1.3vw,14px)", color: TEXT, marginBottom: "7px" }}>{c.t}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(11px,1.1vw,12px)", lineHeight: 1.6, color: MUTED }}>{c.d}</div>
              </div>
            ))}
          </div>

          {/* relocation banner */}
          <div style={{ marginTop: "clamp(28px,4vw,48px)", padding: "24px 32px", background: `${O}12`, border: `1px solid ${O}35`, display: "flex", alignItems: "center", gap: "18px" }}>
            <Icon name="MapPin" size={18} style={{ color: O, flexShrink: 0 }} />
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(13px,1.4vw,16px)", color: TEXT, lineHeight: 1.5 }}>
              <strong>Готов к командировкам и переезду.</strong>{" "}
              <span style={{ color: MUTED }}>Не привязан к месту — привязан к результату.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── CASES ── */}
      <section id="cases" ref={casesRef.ref} style={{ padding: "clamp(72px,10vw,140px) clamp(24px,6vw,80px)", borderBottom: `1px solid ${LINE}` }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "24px", marginBottom: "56px" }}>
            <div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.32em", color: O, marginBottom: "14px", textTransform: "uppercase" }}>// КЕЙСЫ</div>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(32px,5vw,64px)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 0.92, color: TEXT }}>
                С кем<br /><span style={{ color: O }}>работал</span>
              </h2>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(13px,1.4vw,16px)", color: MUTED, maxWidth: "300px", lineHeight: 1.7 }}>
              Ниши разные — подход один: сначала смыслы, потом картинка.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: LINE }} className="cases-grid">
            {CASES.map((c, i) => (
              <div key={i} className="case-card" style={{
                background: activeCase === i ? "#1B1B1B" : CARD,
                border: `1px solid ${activeCase === i ? O : "transparent"}`,
                padding: "clamp(26px,3.5vw,42px)",
                position: "relative",
                ...fade(casesRef.inView, (i % 3) * 0.1),
              }}
              onClick={() => setActiveCase(activeCase === i ? null : i)}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(40px,5.5vw,64px)", fontWeight: 700, color: `${O}18`, lineHeight: 1, marginBottom: "14px", userSelect: "none" }}>{c.n}</div>
                <div style={{ display: "inline-flex", fontFamily: "'Space Mono', monospace", fontSize: "8px", letterSpacing: "0.2em", color: O, border: `1px solid ${O}40`, padding: "4px 10px", textTransform: "uppercase", marginBottom: "12px" }}>{c.tag}</div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(20px,2.3vw,28px)", letterSpacing: "-0.01em", color: TEXT, marginBottom: "12px" }}>{c.title}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(12px,1.3vw,14px)", lineHeight: 1.7, color: MUTED }}>{c.desc}</p>
                <div style={{ position: "absolute", top: "clamp(18px,2.5vw,28px)", right: "clamp(18px,2.5vw,28px)", width: "30px", height: "30px", border: `1px solid ${activeCase === i ? O : LINE}`, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.25s" }}>
                  <Icon name={activeCase === i ? "Minus" : "Plus"} size={13} style={{ color: activeCase === i ? O : MUTED }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" ref={contactRef.ref} style={{ padding: "clamp(72px,10vw,140px) clamp(24px,6vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }} className="contact-grid">

            <div style={fade(contactRef.inView)}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.32em", color: O, marginBottom: "20px", textTransform: "uppercase" }}>// КОНТАКТ</div>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px,5.5vw,72px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 0.92, marginBottom: "26px" }}>
                Давай<br /><span style={{ color: O }}>сделаем</span><br />что-то<br />крутое
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(13px,1.4vw,16px)", lineHeight: 1.8, color: MUTED, maxWidth: "360px" }}>
                Ищешь продюсера, который понимает смыслы и умеет доводить до результата? Пиши — разберёмся.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: LINE, ...fade(contactRef.inView, 0.2) }}>
              {[
                { icon: "Phone", label: "+7 999 750-79-02", sub: "Позвонить", href: "tel:+79997507902" },
                { icon: "Send", label: "@volodinevgeni", sub: "Telegram", href: "https://t.me/volodinevgeni" },
                { icon: "Smartphone", label: "MAX", sub: "Мессенджер", href: "https://max.ru/u/f9LHodD0cOI1HZ6GuJWtDqzuOCB3w8GWNkqJBuJt6Sgj01nfPhsnQAQeuzk" },
                { icon: "ExternalLink", label: "vk.com/kreeator", sub: "ВКонтакте", href: "https://vk.com/kreeator" },
              ].map((c, i) => (
                <a key={i} href={c.href} target="_blank" rel="noreferrer" className="contact-row" style={{ display: "flex", alignItems: "center", gap: "18px", padding: "clamp(18px,2.5vw,26px) clamp(18px,3vw,32px)", background: CARD, textDecoration: "none", borderLeft: "3px solid transparent" }}>
                  <div style={{ width: "38px", height: "38px", border: `1px solid ${LINE}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name={c.icon as "Phone"} size={15} style={{ color: O }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "clamp(13px,1.4vw,16px)", color: TEXT }}>{c.label}</div>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "8px", letterSpacing: "0.18em", color: MUTED, marginTop: "3px", textTransform: "uppercase" }}>{c.sub}</div>
                  </div>
                  <Icon name="ArrowRight" size={13} style={{ color: MUTED, marginLeft: "auto" }} />
                </a>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: `1px solid ${LINE}`, padding: "18px clamp(24px,6vw,80px)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.15em", color: `${TEXT}18` }}>© 2026 ЕВГЕНИЙ ВОЛОДИН</span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.15em", color: `${TEXT}18` }}>CONTENT PRODUCER</span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.18em", color: O }}>EV_STUDIO</span>
      </footer>

    </div>
  );
}
