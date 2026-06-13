import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

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
  transform: v ? "translateY(0)" : "translateY(36px)",
  transition: `opacity 0.8s ease ${d}s, transform 0.8s ease ${d}s`,
});

const PHOTO = "https://cdn.poehali.dev/projects/6b3fbfff-dfcc-4fcb-b559-369440416de5/bucket/b94399a3-970b-4694-8715-a493879d163e.jpg";
const O = "#FF5C1A";
const BG = "#0D0D0D";
const CARD = "#141414";
const LINE = "#222";
const TEXT = "#F2F0EB";
const MUTED = "rgba(242,240,235,0.45)";

const SKILLS = ["Reels-продюсер", "Контент-маркетолог", "Режиссер монтажа", "Сценарии", "Смыслы и триггеры", "Нейросети", "Работа с командой", "Видеопроизводство"];

const PROS = [
  { icon: "Zap", t: "Люблю и умею брать ответственность.", d: "Для меня это не слова." },
  { icon: "Rocket", t: "Проактивный. Обожаю свою работу и профессию.", d: "" },
  { icon: "Layers", t: "Системный креативщик.", d: "Со временем и опытом превратил свой творческий хаос в систему." },
  { icon: "Users", t: "Грамотно выстраиваю процесс работы с командой.", d: "" },
  { icon: "TrendingUp", t: "Постоянно развиваюсь.", d: "Не стою на месте - прохожу профильные курсы, изучаю тренды и тестирую новые форматы." },
  { icon: "Cpu", t: "Нейросети.", d: "Использую все топовые нейросети и слежу за трендами." },
];

const CONS = [
  { t: "Трудоголик,", d: "не умею отдыхать." },
  { t: "Быстро выгораю,", d: "если сажусь монтировать сам. Моя сильная сторона - это смыслы, сценарии и режиссура." },
  { t: "Выгораю без развития.", d: "Важен личностный и профессиональный рост на работе." },
  { t: "Демотивируюсь,", d: "если нет результата. Поэтому для меня важна работа не ради галочки и не люблю формализм." },
  { t: "Говорю прямо и честно.", d: "Не отсиживаюсь в стороне и всегда предлагаю варианты по улучшению системы. Но я гибок: мое дело сказать - а решать руководителю." },
];

const CASES = [
  {
    n: "01", title: "Священник Сергий Буряков", niche: "Религия",
    ig: "https://www.instagram.com/byriakovsergiy/reels/",
    preview: "https://cdn.poehali.dev/projects/6b3fbfff-dfcc-4fcb-b559-369440416de5/bucket/1d317b9e-6a33-4376-a6e6-7223ab1958cf.PNG",
    reels: [
      "https://rutube.ru/shorts/617a3f081e6abe3bc7e19bfb9440ad93/",
      "https://rutube.ru/shorts/02732e9d612c1d4738f43147ac447624/",
      "https://rutube.ru/shorts/ffa9f08d6923dec40e9f09d991489304/",
    ],
    stat: "227 тыс. просмотров на 1 ролик",
  },
  {
    n: "02", title: "Донской пар", niche: "Строительство",
    ig: "https://www.instagram.com/donskoy_par/",
    preview: "https://cdn.poehali.dev/projects/6b3fbfff-dfcc-4fcb-b559-369440416de5/bucket/3f0cdfc5-07c6-41d4-ac48-eefa9a8f9ae9.PNG",
    reels: [
      "https://rutube.ru/shorts/fd0edd196b670e7ae99c033aa265b894/",
      "https://rutube.ru/shorts/ebb13be1c6031fd45f7cde0a5aae3aed/",
      "https://rutube.ru/shorts/33a1c2f9542daa338093cc3889ac5f5f/",
    ],
    stat: "1,1 млн просмотров на 1 ролик",
  },
  { n: "03", title: "Массажист", niche: "Здоровье", ig: null, preview: null, reels: [], stat: null },
  { n: "04", title: "Детский остеопат", niche: "Здоровье", ig: null, preview: null, reels: [], stat: null },
  { n: "05", title: "АГРОштурман", niche: "Сельское хозяйство", ig: null, preview: null, reels: [], stat: null },
  { n: "06", title: "Владимир Сургай", niche: "Маркетинг", ig: null, preview: null, reels: [], stat: null },
];

const WORDS = ["REELS", "СМЫСЛЫ", "ТРИГГЕРЫ", "КОНТЕНТ", "ПРОДАКШН", "СЦЕНАРИЙ", "МОНТАЖ"];

export default function Index() {
  const [tick, setTick] = useState(0);
  const [activeCase, setActiveCase] = useState<number | null>(null);

  const heroRef = useInView(0.01);
  const superRef = useInView(0.1);
  const aboutRef = useInView(0.08);
  const casesRef = useInView(0.04);
  const contactRef = useInView(0.1);

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 110);
    return () => clearInterval(id);
  }, []);

  const word = WORDS[tick % WORDS.length];

  return (
    <div style={{ background: BG, color: TEXT, fontFamily: "'Inter','Helvetica Neue',sans-serif", overflowX: "hidden" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        *{box-sizing:border-box;}
        html{scroll-behavior:smooth;}
        ::-webkit-scrollbar{width:3px;}
        ::-webkit-scrollbar-thumb{background:${O};}

        @keyframes float{0%,100%{transform:translateY(0) rotate(-1deg);}50%{transform:translateY(-14px) rotate(1deg);}}
        @keyframes pring{0%{transform:scale(0.9);opacity:.7;}100%{transform:scale(1.5);opacity:0;}}
        @keyframes marquee{from{transform:translateX(0);}to{transform:translateX(-50%);}}
        @keyframes blink{0%,100%{opacity:1;}50%{opacity:0;}}
        @keyframes slidein{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);}}

        .floating{animation:float 5.5s ease-in-out infinite;}
        .pulsering{animation:pring 2.5s ease-out infinite;}
        .marquee-track{display:flex;animation:marquee 22s linear infinite;white-space:nowrap;}
        .blink{animation:blink 1s step-end infinite;}
        .nav-link{color:rgba(242,240,235,.45);text-decoration:none;font-family:'Space Mono',monospace;font-size:11px;letter-spacing:.2em;text-transform:uppercase;transition:color .2s;}
        .nav-link:hover{color:${O};}
        .contact-row{border-left:3px solid transparent;transition:background .2s,border-left-color .2s;}
        .contact-row:hover{background:#1C1C1C!important;border-left-color:${O}!important;}
        .reel-thumb{cursor:pointer;position:relative;overflow:hidden;aspect-ratio:9/16;background:#111;border:1px solid ${LINE};transition:border-color .25s;}
        .reel-thumb:hover{border-color:${O};}
        .reel-thumb img{width:100%;height:100%;object-fit:cover;transition:transform .4s;}
        .reel-thumb:hover img{transform:scale(1.04);}
        .pro-card{transition:background .2s;}
        .pro-card:hover{background:#1C1C1C!important;}

        @media(max-width:900px){
          .hero-grid{grid-template-columns:1fr!important;}
          .hero-photo{height:72vw;order:-1;}
          .super-grid{grid-template-columns:1fr!important;}
          .pros-grid{grid-template-columns:repeat(2,1fr)!important;}
          .about-split{grid-template-columns:1fr!important;}
          .cases-grid{grid-template-columns:repeat(2,1fr)!important;}
          .contact-grid{grid-template-columns:1fr!important;}
          .nav-links{display:none!important;}
          .case-reels{grid-template-columns:repeat(3,1fr)!important;}
        }
        @media(max-width:560px){
          .pros-grid{grid-template-columns:1fr!important;}
          .cases-grid{grid-template-columns:1fr!important;}
          .case-reels{grid-template-columns:repeat(3,1fr)!important;}
        }
      `}</style>

      {/* NAV */}
      <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"0 clamp(20px,5vw,72px)",height:"60px",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(13,13,13,.9)",backdropFilter:"blur(14px)",borderBottom:`1px solid ${LINE}` }}>
        <div style={{ display:"flex",alignItems:"center",gap:"10px" }}>
          <span style={{ fontFamily:"'Space Grotesk',sans-serif",fontWeight:700,fontSize:"15px",letterSpacing:"-0.02em",color:TEXT }}>Евгений Володин</span>
        </div>
        <div className="nav-links" style={{ display:"flex",gap:"36px" }}>
          {[["#super","суперсила"],["#about","обо мне"],["#cases","кейсы"],["#contact","контакт"]].map(([h,l])=>(
            <a key={h} href={h} className="nav-link">{l}</a>
          ))}
        </div>
        <a href="#contact" style={{ fontFamily:"'Space Mono',monospace",fontSize:"10px",letterSpacing:".18em",textTransform:"uppercase",color:BG,background:O,padding:"9px 22px",textDecoration:"none",transition:"opacity .2s" }}
          onMouseOver={e=>(e.currentTarget.style.opacity="0.8")}
          onMouseOut={e=>(e.currentTarget.style.opacity="1")}>
          Связаться
        </a>
      </nav>

      {/* HERO */}
      <section ref={heroRef.ref} style={{ minHeight:"100vh",paddingTop:"60px",display:"grid",gridTemplateColumns:"1fr 1fr",position:"relative",overflow:"hidden" }} className="hero-grid">
        {/* left */}
        <div style={{ display:"flex",flexDirection:"column",justifyContent:"center",padding:"clamp(36px,6vw,88px)",paddingTop:"clamp(56px,7vw,100px)",position:"relative",zIndex:1 }}>
          <div style={{ display:"flex",alignItems:"center",gap:"10px",marginBottom:"28px" }}>
            <div style={{ width:"24px",height:"2px",background:O,flexShrink:0 }}/>
            <span style={{ fontFamily:"'Space Mono',monospace",fontSize:"11px",letterSpacing:".28em",color:O }}>{word}<span className="blink">_</span></span>
          </div>

          <h1 style={{ fontFamily:"'Space Grotesk',sans-serif",fontSize:"clamp(44px,7vw,96px)",fontWeight:700,lineHeight:0.92,letterSpacing:"-0.03em",marginBottom:"14px" }}>
            Евгений<br/>
            <span style={{ WebkitTextStroke:`2px ${O}`,color:"transparent" }}>Воло</span><span style={{ color:TEXT }}>дин</span>
          </h1>

          <p style={{ fontFamily:"'Space Mono',monospace",fontSize:"clamp(9px,1vw,11px)",letterSpacing:".2em",textTransform:"uppercase",color:MUTED,marginBottom:"30px",lineHeight:1.8 }}>
            Reels-продюсер · Контент-маркетолог · Режиссер монтажа
          </p>

          <p style={{ fontFamily:"'Inter',sans-serif",fontSize:"clamp(14px,1.5vw,17px)",lineHeight:1.7,color:MUTED,maxWidth:"420px",marginBottom:"36px" }}>
            Прошел весь цикл видеопроизводства своими руками. Теперь знаю,{" "}
            <span style={{ color:TEXT,fontWeight:500 }}>почему люди досматривают до конца</span> - и это не про красивый монтаж.
          </p>

          <div style={{ overflow:"hidden",marginLeft:`calc(-1 * clamp(36px,6vw,88px))`,marginBottom:"40px" }}>
            <div className="marquee-track">
              {[...SKILLS,...SKILLS].map((s,i)=>(
                <span key={i} style={{ fontFamily:"'Space Mono',monospace",fontSize:"10px",letterSpacing:".2em",color:i%2===0?MUTED:O,padding:"0 clamp(10px,2vw,22px)",textTransform:"uppercase" }}>{s}</span>
              ))}
            </div>
          </div>

          <div style={{ display:"flex",gap:"12px",flexWrap:"wrap" }}>
            <a href="#cases" style={{ display:"inline-flex",alignItems:"center",gap:"10px",background:O,color:BG,padding:"14px 30px",fontFamily:"'Space Mono',monospace",fontSize:"10px",letterSpacing:".18em",textTransform:"uppercase",textDecoration:"none",fontWeight:700,transition:"opacity .2s" }}
              onMouseOver={e=>(e.currentTarget.style.opacity="0.85")}
              onMouseOut={e=>(e.currentTarget.style.opacity="1")}>
              Кейсы <Icon name="ArrowRight" size={13}/>
            </a>
            <a href="#contact" style={{ display:"inline-flex",alignItems:"center",gap:"10px",border:`1px solid ${LINE}`,color:MUTED,padding:"14px 30px",fontFamily:"'Space Mono',monospace",fontSize:"10px",letterSpacing:".18em",textTransform:"uppercase",textDecoration:"none",transition:"all .25s" }}
              onMouseOver={e=>{ e.currentTarget.style.borderColor=O;e.currentTarget.style.color=TEXT; }}
              onMouseOut={e=>{ e.currentTarget.style.borderColor=LINE;e.currentTarget.style.color=MUTED; }}>
              Написать
            </a>
          </div>
        </div>

        {/* right - photo */}
        <div className="hero-photo" style={{ position:"relative",overflow:"hidden" }}>
          <div className="floating" style={{ position:"absolute",top:"8%",right:"6%",width:"clamp(100px,16vw,220px)",height:"clamp(100px,16vw,220px)",borderRadius:"50%",background:`radial-gradient(circle,${O}50 0%,transparent 70%)`,zIndex:1,pointerEvents:"none" }}/>
          <div className="pulsering" style={{ position:"absolute",top:"calc(8% + clamp(20px,3vw,40px))",right:"calc(6% + clamp(20px,3vw,40px))",width:"clamp(60px,10vw,140px)",height:"clamp(60px,10vw,140px)",borderRadius:"50%",border:`1px solid ${O}80`,zIndex:1,pointerEvents:"none" }}/>

          <img src={PHOTO} alt="Евгений Володин" style={{ width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top",display:"block",filter:"contrast(1.08) brightness(0.88)" }}/>
          <div style={{ position:"absolute",inset:0,background:`linear-gradient(to right,${BG} 0%,transparent 28%)` }}/>
          <div style={{ position:"absolute",inset:0,background:`linear-gradient(to top,${BG} 0%,transparent 32%)` }}/>

          <div className="floating" style={{ position:"absolute",bottom:"clamp(28px,5vw,68px)",right:"clamp(20px,4vw,48px)",background:CARD,border:`1px solid ${O}`,padding:"16px 22px",zIndex:2 }}>
            <div style={{ fontFamily:"'Space Mono',monospace",fontSize:"8px",letterSpacing:".3em",color:O,marginBottom:"5px" }}>ОПЫТ</div>
            <div style={{ fontFamily:"'Space Grotesk',sans-serif",fontSize:"clamp(20px,3vw,30px)",fontWeight:700,color:TEXT }}>5+ лет</div>
            <div style={{ fontFamily:"'Space Mono',monospace",fontSize:"8px",color:MUTED,marginTop:"3px" }}>в контент-продакшне</div>
          </div>

          <div style={{ position:"absolute",bottom:0,left:0,right:0,display:"flex",borderTop:`1px solid rgba(255,255,255,.06)`,zIndex:2 }}>
            {[["МЧС","Начало пути"],["Видео","Полный цикл"],["Бизнес","Продюсер"]].map((s,i)=>(
              <div key={i} style={{ flex:1,padding:"12px 16px",borderRight:i<2?`1px solid rgba(255,255,255,.06)`:"none",backdropFilter:"blur(10px)",background:"rgba(13,13,13,.65)" }}>
                <div style={{ fontFamily:"'Space Grotesk',sans-serif",fontWeight:600,fontSize:"clamp(11px,1.1vw,13px)",color:TEXT }}>{s[0]}</div>
                <div style={{ fontFamily:"'Space Mono',monospace",fontSize:"7px",letterSpacing:".12em",color:MUTED,marginTop:"2px" }}>{s[1]}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position:"absolute",bottom:0,left:0,right:0,height:"2px",background:`linear-gradient(to right,${O},transparent 55%)` }}/>
      </section>

      {/* SUPERPOWER */}
      <section id="super" ref={superRef.ref} style={{ padding:"clamp(72px,10vw,140px) clamp(24px,6vw,80px)",borderBottom:`1px solid ${LINE}` }}>
        <div style={{ maxWidth:"1200px",margin:"0 auto" }}>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1.7fr",gap:"clamp(40px,6vw,100px)",alignItems:"center" }} className="super-grid">
            <div style={fade(superRef.inView)}>
              <div style={{ fontFamily:"'Space Mono',monospace",fontSize:"9px",letterSpacing:".35em",color:O,marginBottom:"20px" }}>// СУПЕРСИЛА</div>
              <h2 style={{ fontFamily:"'Space Grotesk',sans-serif",fontSize:"clamp(40px,6vw,80px)",fontWeight:700,letterSpacing:"-0.03em",lineHeight:0.9,color:TEXT }}>
                Смыслы<br/>и<br/><span style={{ color:O }}>триггеры</span>
              </h2>
            </div>
            <div style={fade(superRef.inView,0.2)}>
              <p style={{ fontFamily:"'Space Grotesk',sans-serif",fontSize:"clamp(18px,2.2vw,26px)",fontWeight:400,lineHeight:1.5,color:TEXT,marginBottom:"24px" }}>
                Я знаю, почему люди <span style={{ color:O,fontWeight:600 }}>досмотрят ролик до последней секунды</span> - и это происходит точно не из-за красивого монтажа.
              </p>
              <p style={{ fontFamily:"'Inter',sans-serif",fontSize:"clamp(14px,1.5vw,17px)",lineHeight:1.85,color:MUTED,marginBottom:"32px" }}>
                Больше 5 лет в создании и продвижении контента. Прошел путь от пресс-секретаря в МЧС до продюсера по контенту для бизнеса и экспертов. Знаю всю кухню контента изнутри. Съемки, монтаж, постпродакшн - я прошел все это руками. Есть насмотренность, техническая база и понимание, как привести проект к результату.
              </p>
              <div style={{ display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center" }}>
                {["МЧС / Пресс-секретарь","Оператор","Монтаж","Режиссер","Reels-продюсер"].map((s,i,arr)=>(
                  <span key={i} style={{ display:"inline-flex",alignItems:"center",gap:"8px" }}>
                    <span style={{ fontFamily:"'Space Mono',monospace",fontSize:"9px",letterSpacing:".18em",textTransform:"uppercase",padding:"7px 14px",border:`1px solid ${i===arr.length-1?O:LINE}`,color:i===arr.length-1?O:MUTED }}>{s}</span>
                    {i<arr.length-1&&<Icon name="ChevronRight" size={12} style={{ color:`${O}50` }}/>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ overflow:"hidden",padding:"14px 0",background:CARD,borderTop:`1px solid ${LINE}`,borderBottom:`1px solid ${LINE}` }}>
        <div className="marquee-track">
          {Array.from({length:14}).map((_,i)=>(
            <span key={i} style={{ fontFamily:"'Space Mono',monospace",fontSize:"10px",letterSpacing:".25em",color:i%2===0?MUTED:O,padding:"0 24px",textTransform:"uppercase" }}>
              {["REELS","*","СМЫСЛЫ","*","ПРОДАКШН","*","КОНТЕНТ"][i%7]}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT - плюсы и минусы на одном экране */}
      <section id="about" ref={aboutRef.ref} style={{ padding:"clamp(72px,10vw,140px) clamp(24px,6vw,80px)",borderBottom:`1px solid ${LINE}` }}>
        <div style={{ maxWidth:"1200px",margin:"0 auto" }}>
          <div style={{ display:"flex",alignItems:"center",gap:"14px",marginBottom:"56px" }}>
            <div style={{ width:"24px",height:"2px",background:O }}/>
            <span style={{ fontFamily:"'Space Mono',monospace",fontSize:"10px",letterSpacing:".32em",color:O,textTransform:"uppercase" }}>// ЧЕСТНО О СЕБЕ</span>
          </div>

          {/* split left/right */}
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1px",background:LINE }} className="about-split">

            {/* LEFT - плюсы */}
            <div style={{ background:BG,padding:"clamp(28px,4vw,48px)" }}>
              <div style={{ display:"flex",alignItems:"center",gap:"10px",marginBottom:"32px" }}>
                <div style={{ width:"8px",height:"8px",background:O,borderRadius:"50%",flexShrink:0 }}/>
                <span style={{ fontFamily:"'Space Grotesk',sans-serif",fontWeight:700,fontSize:"clamp(15px,1.6vw,19px)",color:TEXT }}>Сильные стороны</span>
              </div>
              <div style={{ display:"flex",flexDirection:"column",gap:"1px",background:LINE }} className="pros-grid">
                {PROS.map((p,i)=>(
                  <div key={i} className="pro-card" style={{ background:CARD,padding:"clamp(16px,2vw,22px)",display:"flex",gap:"14px",alignItems:"flex-start",...fade(aboutRef.inView,i*0.07) }}>
                    <div style={{ width:"34px",height:"34px",border:`1px solid ${O}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:"2px" }}>
                      <Icon name={p.icon as "Zap"} size={14} style={{ color:O }}/>
                    </div>
                    <div>
                      <div style={{ fontFamily:"'Inter',sans-serif",fontWeight:600,fontSize:"clamp(12px,1.3vw,14px)",color:TEXT,lineHeight:1.4 }}>{p.t}</div>
                      {p.d&&<div style={{ fontFamily:"'Inter',sans-serif",fontSize:"clamp(11px,1.1vw,13px)",lineHeight:1.6,color:MUTED,marginTop:"4px" }}>{p.d}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT - минусы */}
            <div style={{ background:BG,padding:"clamp(28px,4vw,48px)" }}>
              <div style={{ display:"flex",alignItems:"center",gap:"10px",marginBottom:"32px" }}>
                <div style={{ width:"8px",height:"8px",border:`2px solid ${O}`,borderRadius:"50%",flexShrink:0 }}/>
                <span style={{ fontFamily:"'Space Grotesk',sans-serif",fontWeight:700,fontSize:"clamp(15px,1.6vw,19px)",color:TEXT }}>Честные минусы</span>
              </div>
              <div style={{ display:"flex",flexDirection:"column",gap:"1px",background:LINE }}>
                {CONS.map((c,i)=>(
                  <div key={i} style={{ background:CARD,padding:"clamp(16px,2vw,22px)",borderLeft:`2px solid ${i===0?O:"transparent"}`,...fade(aboutRef.inView,i*0.07) }}>
                    <div style={{ fontFamily:"'Space Mono',monospace",fontSize:"8px",letterSpacing:".2em",color:`${O}80`,marginBottom:"6px" }}>{String(i+1).padStart(2,"0")}</div>
                    <div style={{ fontFamily:"'Inter',sans-serif",fontWeight:600,fontSize:"clamp(12px,1.3vw,14px)",color:TEXT,lineHeight:1.4,marginBottom:"4px" }}>{c.t}</div>
                    <div style={{ fontFamily:"'Inter',sans-serif",fontSize:"clamp(11px,1.1vw,13px)",lineHeight:1.6,color:MUTED }}>{c.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* relocation */}
          <div style={{ marginTop:"clamp(24px,3vw,40px)",padding:"22px 28px",background:`${O}12`,border:`1px solid ${O}35`,display:"flex",alignItems:"center",gap:"16px" }}>
            <Icon name="MapPin" size={16} style={{ color:O,flexShrink:0 }}/>
            <p style={{ fontFamily:"'Inter',sans-serif",fontSize:"clamp(13px,1.4vw,15px)",color:TEXT,lineHeight:1.5 }}>
              <strong>Готов к командировкам и переезду в другой город.</strong>{" "}
              <span style={{ color:MUTED }}>Не привязан к месту - привязан к результату.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" ref={casesRef.ref} style={{ padding:"clamp(72px,10vw,140px) clamp(24px,6vw,80px)",borderBottom:`1px solid ${LINE}` }}>
        <div style={{ maxWidth:"1200px",margin:"0 auto" }}>
          <div style={{ display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:"24px",marginBottom:"56px" }}>
            <div>
              <div style={{ fontFamily:"'Space Mono',monospace",fontSize:"10px",letterSpacing:".32em",color:O,marginBottom:"14px",textTransform:"uppercase" }}>// КЕЙСЫ</div>
              <h2 style={{ fontFamily:"'Space Grotesk',sans-serif",fontSize:"clamp(32px,5vw,64px)",fontWeight:700,letterSpacing:"-0.025em",lineHeight:0.92,color:TEXT }}>
                С кем<br/><span style={{ color:O }}>работал</span>
              </h2>
            </div>
            <p style={{ fontFamily:"'Inter',sans-serif",fontSize:"clamp(13px,1.4vw,16px)",color:MUTED,maxWidth:"300px",lineHeight:1.7 }}>
              Ниши разные - подход один: сначала смыслы, потом картинка.
            </p>
          </div>

          <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1px",background:LINE }} className="cases-grid">
            {CASES.map((c,i)=>(
              <div key={i} style={{ background:activeCase===i?"#1A1A1A":CARD,border:`1px solid ${activeCase===i?O:"transparent"}`,transition:"all .25s" }}>
                {/* header */}
                <button
                  onClick={()=>setActiveCase(activeCase===i?null:i)}
                  style={{ width:"100%",background:"none",border:"none",cursor:"pointer",padding:"clamp(22px,3vw,36px)",display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"10px",textAlign:"left" }}>
                  <div style={{ display:"flex",justifyContent:"space-between",width:"100%",alignItems:"flex-start" }}>
                    <span style={{ fontFamily:"'Space Mono',monospace",fontSize:"clamp(28px,4vw,44px)",fontWeight:700,color:`${O}25`,lineHeight:1 }}>{c.n}</span>
                    <div style={{ width:"28px",height:"28px",border:`1px solid ${activeCase===i?O:LINE}`,display:"flex",alignItems:"center",justifyContent:"center",transition:"all .25s",flexShrink:0,marginTop:"4px" }}>
                      <Icon name={activeCase===i?"Minus":"Plus"} size={12} style={{ color:activeCase===i?O:MUTED }}/>
                    </div>
                  </div>
                  <div style={{ display:"inline-flex",fontFamily:"'Space Mono',monospace",fontSize:"8px",letterSpacing:".2em",color:O,border:`1px solid ${O}40`,padding:"3px 9px",textTransform:"uppercase" }}>{c.niche}</div>
                  <h3 style={{ fontFamily:"'Space Grotesk',sans-serif",fontWeight:700,fontSize:"clamp(18px,2vw,24px)",letterSpacing:"-0.01em",color:TEXT,lineHeight:1.1 }}>{c.title}</h3>
                </button>

                {/* expanded */}
                {activeCase===i&&(
                  <div style={{ padding:"0 clamp(22px,3vw,36px) clamp(22px,3vw,36px)",animation:"slidein .35s ease" }}>
                    <div style={{ width:"100%",height:"1px",background:LINE,marginBottom:"24px" }}/>

                    {c.preview&&(
                      <div style={{ marginBottom:"20px" }}>
                        <div style={{ fontFamily:"'Space Mono',monospace",fontSize:"8px",letterSpacing:".2em",color:MUTED,textTransform:"uppercase",marginBottom:"10px" }}>Профиль</div>
                        <div style={{ position:"relative",borderRadius:"0",overflow:"hidden",border:`1px solid ${LINE}`,maxHeight:"220px" }}>
                          <img src={c.preview} alt={c.title} style={{ width:"100%",objectFit:"cover",objectPosition:"top",display:"block" }}/>
                          <div style={{ position:"absolute",inset:0,background:"linear-gradient(to top,rgba(13,13,13,.9) 0%,transparent 50%)" }}/>
                          {c.stat&&(
                            <div style={{ position:"absolute",bottom:"12px",left:"12px",background:`${O}`,padding:"4px 10px",fontFamily:"'Space Mono',monospace",fontSize:"9px",letterSpacing:".1em",color:BG,fontWeight:700 }}>
                              {c.stat}
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {c.reels.length>0&&(
                      <div>
                        <div style={{ fontFamily:"'Space Mono',monospace",fontSize:"8px",letterSpacing:".2em",color:MUTED,textTransform:"uppercase",marginBottom:"10px" }}>Примеры рилсов</div>
                        <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"6px" }} className="case-reels">
                          {c.reels.map((url,j)=>(
                            <a key={j} href={url} target="_blank" rel="noreferrer" className="reel-thumb">
                              <div style={{ position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(13,13,13,.35)",zIndex:1,transition:"background .25s" }}
                                onMouseOver={e=>(e.currentTarget.style.background="rgba(13,13,13,.15)")}
                                onMouseOut={e=>(e.currentTarget.style.background="rgba(13,13,13,.35)")}>
                                <div style={{ width:"36px",height:"36px",borderRadius:"50%",border:`1px solid ${O}`,display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(4px)",background:"rgba(13,13,13,.4)" }}>
                                  <Icon name="Play" size={14} style={{ color:O,marginLeft:"2px" }}/>
                                </div>
                              </div>
                              <div style={{ width:"100%",height:"100%",background:`linear-gradient(135deg,#1a1a1a,#0d0d0d)`,display:"flex",alignItems:"center",justifyContent:"center" }}>
                                <span style={{ fontFamily:"'Space Mono',monospace",fontSize:"9px",letterSpacing:".15em",color:MUTED }}>{String(j+1).padStart(2,"0")}</span>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {c.ig&&(
                      <a href={c.ig} target="_blank" rel="noreferrer" style={{ display:"inline-flex",alignItems:"center",gap:"8px",marginTop:"16px",fontFamily:"'Space Mono',monospace",fontSize:"9px",letterSpacing:".18em",textTransform:"uppercase",color:O,textDecoration:"none",transition:"opacity .2s" }}
                        onMouseOver={e=>(e.currentTarget.style.opacity="0.7")}
                        onMouseOut={e=>(e.currentTarget.style.opacity="1")}>
                        <Icon name="ExternalLink" size={12} style={{ color:O }}/>
                        Смотреть профиль
                      </a>
                    )}

                    {!c.preview&&!c.reels.length&&(
                      <p style={{ fontFamily:"'Inter',sans-serif",fontSize:"13px",color:MUTED,lineHeight:1.6 }}>Подробности кейса - в личном разговоре.</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" ref={contactRef.ref} style={{ padding:"clamp(72px,10vw,140px) clamp(24px,6vw,80px)" }}>
        <div style={{ maxWidth:"1200px",margin:"0 auto" }}>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(40px,6vw,80px)",alignItems:"center" }} className="contact-grid">
            <div style={fade(contactRef.inView)}>
              <div style={{ fontFamily:"'Space Mono',monospace",fontSize:"10px",letterSpacing:".32em",color:O,marginBottom:"20px",textTransform:"uppercase" }}>// КОНТАКТ</div>
              <h2 style={{ fontFamily:"'Space Grotesk',sans-serif",fontSize:"clamp(36px,5.5vw,72px)",fontWeight:700,letterSpacing:"-0.03em",lineHeight:0.92,marginBottom:"26px" }}>
                Давай<br/><span style={{ color:O }}>сделаем</span><br/>что-то<br/>крутое
              </h2>
              <p style={{ fontFamily:"'Inter',sans-serif",fontSize:"clamp(13px,1.4vw,16px)",lineHeight:1.8,color:MUTED,maxWidth:"360px" }}>
                Ищешь продюсера, который понимает смыслы и умеет доводить до результата? Пиши - разберемся.
              </p>
            </div>

            <div style={{ display:"flex",flexDirection:"column",gap:"1px",background:LINE,...fade(contactRef.inView,0.2) }}>
              {[
                { icon:"Phone",label:"+7 999 750-79-02",sub:"Позвонить",href:"tel:+79997507902" },
                { icon:"Send",label:"@volodinevgeni",sub:"Telegram",href:"https://t.me/volodinevgeni" },
                { icon:"Smartphone",label:"MAX",sub:"Мессенджер",href:"https://max.ru/u/f9LHodD0cOI1HZ6GuJWtDqzuOCB3w8GWNkqJBuJt6Sgj01nfPhsnQAQeuzk" },
                { icon:"ExternalLink",label:"vk.com/kreeator",sub:"ВКонтакте",href:"https://vk.com/kreeator" },
              ].map((c,i)=>(
                <a key={i} href={c.href} target="_blank" rel="noreferrer" className="contact-row" style={{ display:"flex",alignItems:"center",gap:"18px",padding:"clamp(18px,2.5vw,26px) clamp(18px,3vw,32px)",background:CARD,textDecoration:"none",borderLeft:"3px solid transparent" }}>
                  <div style={{ width:"38px",height:"38px",border:`1px solid ${LINE}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                    <Icon name={c.icon as "Phone"} size={15} style={{ color:O }}/>
                  </div>
                  <div>
                    <div style={{ fontFamily:"'Space Grotesk',sans-serif",fontWeight:600,fontSize:"clamp(13px,1.4vw,16px)",color:TEXT }}>{c.label}</div>
                    <div style={{ fontFamily:"'Space Mono',monospace",fontSize:"8px",letterSpacing:".18em",color:MUTED,marginTop:"3px",textTransform:"uppercase" }}>{c.sub}</div>
                  </div>
                  <Icon name="ArrowRight" size={13} style={{ color:MUTED,marginLeft:"auto" }}/>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop:`1px solid ${LINE}`,padding:"18px clamp(24px,6vw,80px)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"10px" }}>
        <span style={{ fontFamily:"'Space Mono',monospace",fontSize:"9px",letterSpacing:".15em",color:`${TEXT}18` }}>2026 Евгений Володин</span>
        <span style={{ fontFamily:"'Space Mono',monospace",fontSize:"9px",letterSpacing:".15em",color:`${TEXT}18` }}>Reels-продюсер</span>
        <span style={{ fontFamily:"'Space Mono',monospace",fontSize:"9px",letterSpacing:".15em",color:O }}>Content Producer</span>
      </footer>

    </div>
  );
}
