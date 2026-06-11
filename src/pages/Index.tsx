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

export default function Index() {
  const [form, setForm] = useState({ name: "", contact: "", note: "" });
  const [sent, setSent] = useState(false);
  const [tick, setTick] = useState(0);

  const heroRef = useInView(0.01);
  const aboutRef = useInView(0.1);
  const packageRef = useInView(0.1);
  const contactRef = useInView(0.1);

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 80);
    return () => clearInterval(id);
  }, []);

  const chars = "РЕЖИССЁР КИНО СВАДЬБА СЦЕНАРИЙ ДРАМА МОНТАЖ".split(" ");
  const scramble = chars[tick % chars.length];

  return (
    <div style={{ background: "#080808", color: "#F0EDE6", fontFamily: "'Cormorant Garamond', serif", overflowX: "hidden" }}>

      {/* ── HERO ── */}
      <section
        ref={heroRef.ref}
        style={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          position: "relative",
          overflow: "hidden",
        }}
        className="hero-grid"
      >
        {/* Left — text */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "clamp(32px,6vw,80px)",
          paddingBottom: "clamp(40px,7vw,96px)",
          position: "relative",
          zIndex: 2,
        }}>
          {/* top label */}
          <div style={{
            position: "absolute",
            top: "clamp(20px,3vw,36px)",
            left: "clamp(32px,6vw,80px)",
            fontFamily: "'Oswald', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.35em",
            color: "#B8973E",
          }}>
            ЕВГЕНИЙ ВОЛОДИН
          </div>

          {/* tape number */}
          <div style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "clamp(11px,1vw,13px)",
            color: "rgba(255,255,255,0.15)",
            letterSpacing: "0.2em",
            marginBottom: "24px",
          }}>
            FILM_001 · 35MM · {scramble}
          </div>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(52px,8.5vw,120px)",
            fontWeight: 300,
            lineHeight: 0.88,
            margin: 0,
            marginBottom: "32px",
          }}>
            Режиссёр<br />
            <em style={{ color: "#B8973E", fontStyle: "normal" }}>вашего</em><br />
            свадебного<br />
            кино
          </h1>

          <p style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 200,
            fontSize: "clamp(12px,1.4vw,15px)",
            letterSpacing: "0.18em",
            color: "rgba(240,237,230,0.45)",
            maxWidth: "380px",
            lineHeight: 1.8,
            marginBottom: "48px",
            textTransform: "uppercase",
          }}>
            Липецк · Воронеж · Москва
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="#контакт"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#B8973E",
                color: "#080808",
                padding: "16px 32px",
                fontFamily: "'Oswald', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background 0.3s",
              }}
              onMouseOver={e => (e.currentTarget.style.background = "#D4AF6A")}
              onMouseOut={e => (e.currentTarget.style.background = "#B8973E")}
            >
              Обсудить фильм
              <Icon name="ArrowRight" size={13} />
            </a>
            <a
              href="#обо-мне"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(240,237,230,0.5)",
                padding: "16px 32px",
                fontFamily: "'Oswald', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(184,151,62,0.5)"; e.currentTarget.style.color = "#F0EDE6"; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(240,237,230,0.5)"; }}
            >
              Обо мне
            </a>
          </div>
        </div>

        {/* Right — photo */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={PHOTO}
            alt="Евгений Володин"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              filter: "grayscale(15%) contrast(1.05)",
              display: "block",
            }}
          />
          {/* gradient overlay left */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, #080808 0%, transparent 30%)",
          }} />
          {/* gradient overlay bottom */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, #080808 0%, transparent 40%)",
          }} />

          {/* floating tag */}
          <div style={{
            position: "absolute",
            bottom: "clamp(24px,4vw,56px)",
            right: "clamp(24px,4vw,56px)",
            border: "1px solid rgba(184,151,62,0.4)",
            padding: "16px 24px",
            backdropFilter: "blur(8px)",
            background: "rgba(8,8,8,0.5)",
          }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "9px", letterSpacing: "0.3em", color: "#B8973E", marginBottom: "6px" }}>DIRECTOR</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 300, color: "#F0EDE6" }}>5 лет в кино</div>
          </div>
        </div>

        {/* bottom letterbox line */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(to right, #B8973E, transparent 60%)" }} />
      </section>

      {/* ── ABOUT ── */}
      <section
        id="обо-мне"
        ref={aboutRef.ref}
        style={{
          padding: "clamp(64px,10vw,140px) clamp(24px,6vw,80px)",
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "clamp(40px,6vw,100px)",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* big quote number */}
        <div style={{ position: "relative" }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(120px,18vw,240px)",
            fontWeight: 300,
            color: "rgba(184,151,62,0.07)",
            lineHeight: 1,
            position: "absolute",
            top: "-40px",
            left: "-20px",
            userSelect: "none",
            pointerEvents: "none",
          }}>
            5
          </div>
          <div style={{
            position: "relative",
            zIndex: 1,
            opacity: aboutRef.inView ? 1 : 0,
            transform: aboutRef.inView ? "translateY(0)" : "translateY(40px)",
            transition: "all 1s ease",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
              <div style={{ width: "32px", height: "1px", background: "#B8973E" }} />
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", letterSpacing: "0.35em", color: "#B8973E" }}>ОБО МНЕ</span>
            </div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px,4vw,54px)",
              fontWeight: 300,
              lineHeight: 1.1,
              marginBottom: "32px",
              color: "#F0EDE6",
            }}>
              Евгений Володин
            </h2>
            <div style={{ width: "48px", height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "32px" }} />
            <p style={{
              fontSize: "clamp(17px,1.8vw,22px)",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "rgba(240,237,230,0.65)",
              fontStyle: "italic",
            }}>
              "За 5 лет я прошел весь цикл видеопроизводства - от технического оператора до режиссера. Я понял одну вещь. Зрителя не цепляет просто красивая картинка, ему нужен смысл."
            </p>
          </div>
        </div>

        <div style={{
          opacity: aboutRef.inView ? 1 : 0,
          transform: aboutRef.inView ? "translateY(0)" : "translateY(40px)",
          transition: "all 1s ease 0.25s",
        }}>
          <p style={{
            fontSize: "clamp(16px,1.6vw,19px)",
            fontWeight: 300,
            lineHeight: 1.9,
            color: "rgba(240,237,230,0.55)",
            marginBottom: "40px",
          }}>
            На моих съёмках вы не позируете для шаблонных кадров - вы попадаете в настоящее кино. Я создаю атмосферу, где вы чувствуете себя главными героями масштабного фильма.
          </p>
          <p style={{
            fontSize: "clamp(16px,1.6vw,19px)",
            fontWeight: 300,
            lineHeight: 1.9,
            color: "rgba(240,237,230,0.55)",
            marginBottom: "48px",
          }}>
            Вы просто проживаете этот день, а я выстраиваю вокруг вас драматургию и сюжет. Моя задача - сделать так, чтобы вы кайфанули от процесса, а на выходе получили глубокое и стильное кино про себя.
          </p>

          {/* stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: "#2A2A2A" }}>
            {[
              { n: "5+", l: "лет в кино" },
              { n: "60+", l: "фильмов" },
              { n: "3", l: "города" },
            ].map((s, i) => (
              <div key={i} style={{ background: "#080808", padding: "24px 20px" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 300, color: "#B8973E", lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "9px", letterSpacing: "0.2em", color: "rgba(255,255,255,0.25)", marginTop: "8px", textTransform: "uppercase" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL INCLUSIVE ── */}
      <section
        id="под-ключ"
        ref={packageRef.ref}
        style={{
          borderTop: "1px solid #1A1A1A",
          borderBottom: "1px solid #1A1A1A",
          background: "#0C0C0C",
          padding: "clamp(64px,10vw,120px) clamp(24px,6vw,80px)",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "64px" }}>
            <div style={{ width: "32px", height: "1px", background: "#B8973E" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", letterSpacing: "0.35em", color: "#B8973E" }}>ВСЁ ПОД КЛЮЧ</span>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px,6vw,80px)",
            alignItems: "center",
            marginBottom: "64px",
          }}
          className="package-grid"
          >
            <div style={{
              opacity: packageRef.inView ? 1 : 0,
              transform: packageRef.inView ? "translateY(0)" : "translateY(40px)",
              transition: "all 1s ease",
            }}>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(36px,5.5vw,72px)",
                fontWeight: 300,
                lineHeight: 1.0,
                color: "#F0EDE6",
                marginBottom: "24px",
              }}>
                Пара побывает<br />
                <em style={{ color: "#B8973E", fontStyle: "normal" }}>в настоящем кино</em>
              </h2>
              <p style={{
                fontSize: "clamp(16px,1.6vw,19px)",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "rgba(240,237,230,0.5)",
                maxWidth: "440px",
              }}>
                Не просто съёмка. Полноценный кинопроцесс - от идеи до финального фильма. Вы ничего не придумываете сами. Я веду вас от первой встречи до монтажа.
              </p>
            </div>

            <div style={{
              opacity: packageRef.inView ? 1 : 0,
              transform: packageRef.inView ? "translateY(0)" : "translateY(40px)",
              transition: "all 1s ease 0.2s",
            }}>
              {[
                { icon: "MessageCircle", step: "01", title: "Знакомство", text: "Разговариваем. Я узнаю вашу историю - из неё родится сценарий." },
                { icon: "FileText", step: "02", title: "Сценарий", text: "Я пишу структуру фильма до съёмки. Сцены, эмоциональные точки, логика монтажа." },
                { icon: "Film", step: "03", title: "Съёмка", text: "Вы живёте день. Я работаю режиссёром - выстраиваю кадры, управляю атмосферой." },
                { icon: "Scissors", step: "04", title: "Кино готово", text: "Получаете фильм с настоящей драматургией. Не нарезку - полноценное кино." },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "20px",
                    padding: "20px 0",
                    borderBottom: i < 3 ? "1px solid #1A1A1A" : "none",
                  }}
                >
                  <div style={{
                    width: "40px",
                    height: "40px",
                    border: "1px solid rgba(184,151,62,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Icon name={item.icon as "Film"} size={15} style={{ color: "#B8973E" }} />
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "9px", color: "rgba(184,151,62,0.5)", letterSpacing: "0.2em" }}>{item.step}</span>
                      <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F0EDE6" }}>{item.title}</span>
                    </div>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "15px", color: "rgba(240,237,230,0.4)", lineHeight: 1.6, margin: 0 }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Wide promo strip */}
          <div style={{
            border: "1px solid rgba(184,151,62,0.2)",
            padding: "clamp(28px,4vw,48px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
            background: "rgba(184,151,62,0.03)",
            opacity: packageRef.inView ? 1 : 0,
            transition: "opacity 1s ease 0.4s",
          }}>
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px,3vw,34px)", fontWeight: 300, color: "#F0EDE6", marginBottom: "8px" }}>
                Вы ничего не организуете сами
              </div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "rgba(184,151,62,0.7)", textTransform: "uppercase" }}>
                Полное ведение · Предпродакшн включён · Без доп. оплат
              </div>
            </div>
            <a
              href="#контакт"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#B8973E",
                color: "#080808",
                padding: "16px 32px",
                fontFamily: "'Oswald', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                textDecoration: "none",
                flexShrink: 0,
                transition: "background 0.3s",
              }}
              onMouseOver={e => (e.currentTarget.style.background = "#D4AF6A")}
              onMouseOut={e => (e.currentTarget.style.background = "#B8973E")}
            >
              Начать
              <Icon name="ArrowRight" size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="контакт"
        ref={contactRef.ref}
        style={{
          padding: "clamp(64px,10vw,120px) clamp(24px,6vw,80px)",
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px,6vw,100px)",
          alignItems: "start",
        }}
        className="contact-grid"
      >
        <div style={{
          opacity: contactRef.inView ? 1 : 0,
          transform: contactRef.inView ? "translateY(0)" : "translateY(40px)",
          transition: "all 1s ease",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
            <div style={{ width: "32px", height: "1px", background: "#B8973E" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", letterSpacing: "0.35em", color: "#B8973E" }}>КОНТАКТ</span>
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(36px,5vw,64px)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "#F0EDE6",
            marginBottom: "24px",
          }}>
            Обсудим<br />
            <em style={{ color: "rgba(240,237,230,0.35)", fontStyle: "normal" }}>сценарий вашего кино</em>
          </h2>
          <p style={{
            fontSize: "clamp(15px,1.5vw,18px)",
            fontWeight: 300,
            lineHeight: 1.85,
            color: "rgba(240,237,230,0.4)",
            maxWidth: "360px",
            marginBottom: "48px",
          }}>
            Расскажите, кто вы. Дата свадьбы. Город. Я отвечаю лично - без менеджеров.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              { icon: "Phone", label: "+7 999 750-79-02", href: "tel:+79997507902" },
              { icon: "Send", label: "@volodinevgeni", href: "https://t.me/volodinevgeni" },
              { icon: "ExternalLink", label: "vk.com/kreeator", href: "https://vk.com/kreeator" },
            ].map((c, i) => (
              <a key={i} href={c.href} target="_blank" rel="noreferrer" style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                textDecoration: "none",
                color: "rgba(240,237,230,0.4)",
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "12px",
                letterSpacing: "0.12em",
                transition: "color 0.3s",
              }}
              onMouseOver={e => (e.currentTarget.style.color = "#B8973E")}
              onMouseOut={e => (e.currentTarget.style.color = "rgba(240,237,230,0.4)")}
              >
                <Icon name={c.icon as "Phone"} size={14} style={{ color: "#B8973E", flexShrink: 0 }} />
                {c.label}
              </a>
            ))}
            <div style={{
              marginTop: "4px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              color: "rgba(240,237,230,0.4)",
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "12px",
              letterSpacing: "0.12em",
            }}>
              <Icon name="Smartphone" size={14} style={{ color: "#B8973E", flexShrink: 0 }} />
              MAX по номеру телефона
            </div>
          </div>
        </div>

        {/* Form */}
        <div style={{
          opacity: contactRef.inView ? 1 : 0,
          transform: contactRef.inView ? "translateY(0)" : "translateY(40px)",
          transition: "all 1s ease 0.25s",
        }}>
          {sent ? (
            <div style={{ border: "1px solid rgba(184,151,62,0.3)", padding: "56px 40px", textAlign: "center" }}>
              <div style={{
                width: "52px", height: "52px", border: "1px solid #B8973E",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 24px",
              }}>
                <Icon name="Check" size={20} style={{ color: "#B8973E" }} />
              </div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 300, color: "#F0EDE6", marginBottom: "12px" }}>Заявка получена</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "16px", color: "rgba(240,237,230,0.35)" }}>Свяжусь в течение 24 часов.</div>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { label: "Имя", key: "name", placeholder: "Как вас зовут?", type: "text" },
                { label: "Телефон или Telegram", key: "contact", placeholder: "+7 или @username", type: "text" },
              ].map((f) => (
                <div key={f.key}>
                  <label style={{ display: "block", fontFamily: "'IBM Plex Mono', monospace", fontSize: "9px", letterSpacing: "0.35em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: "10px" }}>
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    value={form[f.key as keyof typeof form]}
                    onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                    placeholder={f.placeholder}
                    required
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      borderBottom: "1px solid #2A2A2A",
                      padding: "14px 0",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "18px",
                      color: "#F0EDE6",
                      outline: "none",
                      transition: "border-color 0.3s",
                      boxSizing: "border-box",
                    }}
                    onFocus={e => (e.target.style.borderColor = "rgba(184,151,62,0.5)")}
                    onBlur={e => (e.target.style.borderColor = "#2A2A2A")}
                  />
                </div>
              ))}
              <div>
                <label style={{ display: "block", fontFamily: "'IBM Plex Mono', monospace", fontSize: "9px", letterSpacing: "0.35em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: "10px" }}>
                  Дата и город свадьбы
                </label>
                <textarea
                  value={form.note}
                  onChange={e => setForm({ ...form, note: e.target.value })}
                  placeholder="Когда. Где. Что важно..."
                  rows={3}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid #2A2A2A",
                    padding: "14px 0",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "18px",
                    color: "#F0EDE6",
                    outline: "none",
                    resize: "none",
                    transition: "border-color 0.3s",
                    boxSizing: "border-box",
                  }}
                  onFocus={e => (e.target.style.borderColor = "rgba(184,151,62,0.5)")}
                  onBlur={e => (e.target.style.borderColor = "#2A2A2A")}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  background: "#B8973E",
                  color: "#080808",
                  border: "none",
                  padding: "20px",
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  transition: "background 0.3s",
                  marginTop: "8px",
                }}
                onMouseOver={e => (e.currentTarget.style.background = "#D4AF6A")}
                onMouseOut={e => (e.currentTarget.style.background = "#B8973E")}
              >
                Отправить заявку
                <Icon name="ArrowRight" size={13} />
              </button>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "9px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.15)", textAlign: "center", textTransform: "uppercase" }}>
                Отвечаю лично · Без менеджеров
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: "1px solid #1A1A1A",
        padding: "24px clamp(24px,6vw,80px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "12px",
      }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "9px", letterSpacing: "0.2em", color: "rgba(255,255,255,0.15)", textTransform: "uppercase" }}>
          © 2024 Евгений Володин
        </span>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "9px", letterSpacing: "0.2em", color: "rgba(255,255,255,0.15)", textTransform: "uppercase" }}>
          Липецк · Воронеж · Москва
        </span>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "13px", fontStyle: "italic", color: "rgba(255,255,255,0.1)" }}>
          "Кино - это правда 24 кадра в секунду"
        </span>
      </footer>

      {/* responsive fix */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:first-child { padding-top: 100px !important; min-height: 60vh; }
          .hero-grid > div:last-child { height: 60vw; }
          .about-grid { grid-template-columns: 1fr !important; }
          .package-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
