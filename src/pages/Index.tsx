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

const PHOTO = "https://cdn.poehali.dev/projects/6b3fbfff-dfcc-4fcb-b559-369440416de5/bucket/b0d5ba91-a5cc-4682-866b-c4c040ce8a2a.jpg";
const O = "#FF5C1A";
const BG = "#0D0D0D";
const CARD = "#141414";
const LINE = "#222";
const TEXT = "#F2F0EB";
const MUTED = "rgba(242,240,235,0.45)";

const SKILLS = ["Reels-продюсер", "Контент-маркетолог", "Режиссер монтажа", "Сценарии", "Смыслы и триггеры", "Нейросети", "Работа с командой", "Видеопроизводство"];

const PROS = [
  { icon: "Zap", t: "Люблю и умею брать ответственность." },
  { icon: "Sparkles", t: "Проактивный и креативный." },
  { icon: "Heart", t: "Обожаю свою работу и профессию." },
  { icon: "Users", t: "Грамотно выстраиваю процесс работы с командой." },
  { icon: "TrendingUp", t: "Постоянно развиваюсь. Не стою на месте - прохожу профильные курсы, изучаю тренды и тестирую новые форматы." },
  { icon: "Camera", t: "Знаю все тонкости съемки, монтажа и работы на площадке." },
  { icon: "Cpu", t: "Использую все топовые нейросети и слежу за трендами." },
  { icon: "Layers", t: "Обожаю работать в режиме многозадачности." },
];

const CONS = [
  { icon: "Clock", t: "Трудоголик, не умею отдыхать." },
  { icon: "Flame", t: "Быстро выгораю, если сажусь монтировать сам. Моя сильная сторона - это смыслы, сценарии и режиссура." },
  { icon: "TrendingUp", t: "Выгораю без развития. Важен личностный и профессиональный рост на работе." },
  { icon: "Target", t: "Демотивируюсь, если нет результата. Поэтому для меня важна работа не ради галочки и не люблю формализм." },
  { icon: "MessageSquare", t: "Говорю прямо и честно. Не отсиживаюсь в стороне и всегда предлагаю варианты по улучшению системы. Но я гибок: мое дело сказать - а решать руководителю." },
];

const CASES = [
  {
    n: "01", title: "Священник Сергий Буряков", niche: "Религия",
    ig: "https://www.instagram.com/byriakovsergiy/reels/",
    preview: "https://cdn.poehali.dev/projects/6b3fbfff-dfcc-4fcb-b559-369440416de5/bucket/1d317b9e-6a33-4376-a6e6-7223ab1958cf.PNG",
    reelIds: ["617a3f081e6abe3bc7e19bfb9440ad93", "02732e9d612c1d4738f43147ac447624", "ffa9f08d6923dec40e9f09d991489304"],
  },
  {
    n: "02", title: "Донской пар", niche: "Строительство",
    ig: "https://www.instagram.com/donskoy_par/",
    preview: "https://cdn.poehali.dev/projects/6b3fbfff-dfcc-4fcb-b559-369440416de5/bucket/3f0cdfc5-07c6-41d4-ac48-eefa9a8f9ae9.PNG",
    reelIds: ["fd0edd196b670e7ae99c033aa265b894", "ebb13be1c6031fd45f7cde0a5aae3aed", "33a1c2f9542daa338093cc3889ac5f5f"],
  },
  { n: "03", title: "Массажист", niche: "Здоровье", ig: null, preview: null, reelIds: [] },
  { n: "04", title: "Детский остеопат", niche: "Здоровье", ig: null, preview: null, reelIds: [] },
  { n: "05", title: "АГРОштурман", niche: "Сельское хозяйство", ig: null, preview: null, reelIds: [] },
  { n: "06", title: "Владимир Сургай", niche: "Маркетинг", ig: null, preview: null, reelIds: [] },
];

const WORDS = ["REELS", "СМЫСЛЫ", "ТРИГГЕРЫ", "КОНТЕНТ", "ПРОДАКШН", "СЦЕНАРИЙ", "МОНТАЖ"];

export default function Index() {
  const [tick, setTick] = useState(0);

  const heroRef = useInView(0.01);
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

        .floating{animation:float 5.5s ease-in-out infinite;}
        .pulsering{animation:pring 2.5s ease-out infinite;}
        .marquee-track{display:flex;animation:marquee 22s linear infinite;white-space:nowrap;}
        .blink{animation:blink 1s step-end infinite;}
        .nav-link{color:rgba(242,240,235,.45);text-decoration:none;font-family:'Space Mono',monospace;font-size:11px;letter-spacing:.2em;text-transform:uppercase;transition:color .2s;}
        .nav-link:hover{color:${O};}
        .contact-row{border-left:3px solid transparent;transition:background .2s,border-left-color .2s;}
        .contact-row:hover{background:#1C1C1C!important;border-left-color:${O}!important;}
        .trait-card{transition:background .2s;}
        .trait-card:hover{background:#1C1C1C!important;}
        .case-block{transition:border-color .25s;}
        .reels-scroll::-webkit-scrollbar{height:3px;}
        .reels-scroll::-webkit-scrollbar-track{background:${LINE};}
        .reels-scroll::-webkit-scrollbar-thumb{background:${O};border-radius:2px;}
        .reels-scroll{scrollbar-width:thin;scrollbar-color:${O} ${LINE};}

        @media(max-width:768px){
          .hero-text{max-width:100%!important;padding:80px 24px 60px!important;}
          .hero-photo-bg{width:100%!important;height:50vh!important;position:relative!important;top:auto!important;right:auto!important;}
          .about-split{grid-template-columns:1fr!important;}
          .cases-col{grid-template-columns:1fr!important;}
          .contact-grid{grid-template-columns:1fr!important;}
          .nav-links{display:none!important;}
          .reels-row{grid-template-columns:repeat(3,1fr)!important;}
          .case-content{grid-template-columns:1fr!important;}
        }
        @media(max-width:560px){
          .reels-row{grid-template-columns:repeat(3,1fr)!important;}
        }
      `}</style>

      {/* NAV */}
      <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"0 clamp(20px,5vw,72px)",height:"60px",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(13,13,13,.9)",backdropFilter:"blur(14px)",borderBottom:`1px solid ${LINE}` }}>
        <span style={{ fontFamily:"'Space Grotesk',sans-serif",fontWeight:700,fontSize:"15px",letterSpacing:"-0.02em",color:TEXT }}>Евгений Володин</span>
        <div className="nav-links" style={{ display:"flex",gap:"36px" }}>
          {[["#about","обо мне"],["#cases","кейсы"],["#contact","контакт"]].map(([h,l])=>(
            <a key={h} href={h} className="nav-link">{l}</a>
          ))}
        </div>
        <a href="#contact" style={{ fontFamily:"'Space Mono',monospace",fontSize:"10px",letterSpacing:".18em",textTransform:"uppercase",color:BG,background:O,padding:"9px 22px",textDecoration:"none",transition:"opacity .2s" }}
          onMouseOver={e=>(e.currentTarget.style.opacity="0.8")}
          onMouseOut={e=>(e.currentTarget.style.opacity="1")}>
          Связаться
        </a>
      </nav>

      {/* HERO — фото абсолютное на весь экран, текст поверх слева */}
      <section ref={heroRef.ref} style={{ position:"relative", minHeight:"100vh", overflow:"hidden" }}>

        {/* ФОТО — сдвинуто ниже чтобы не обрезать волосы */}
        <div style={{
          position: "absolute",
          top: "40px", right: 0,
          width: "52%",
          height: "calc(100% - 40px)",
          backgroundImage: `url(${PHOTO})`,
          backgroundSize: "cover",
          backgroundPosition: "center 10%",
          zIndex: 0,
        }}/>

        {/* Размытие левого края фото — плавно вливается в фон */}
        <div style={{
          position: "absolute",
          top: 0, left: 0,
          width: "68%",
          height: "100%",
          background: `linear-gradient(to right, ${BG} 50%, rgba(13,13,13,0.85) 70%, transparent 100%)`,
          zIndex: 1,
          pointerEvents: "none",
        }}/>

        {/* Размытие верхнего края фото */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "18%",
          background: `linear-gradient(to bottom, ${BG} 0%, transparent 100%)`,
          zIndex: 1,
          pointerEvents: "none",
        }}/>

        {/* Размытие нижнего края */}
        <div style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: "28%",
          background: `linear-gradient(to top, ${BG} 0%, transparent 100%)`,
          zIndex: 1,
          pointerEvents: "none",
        }}/>

        {/* Размытие правого края */}
        <div style={{
          position: "absolute",
          top: 0, right: 0,
          width: "12%",
          height: "100%",
          background: `linear-gradient(to left, ${BG} 0%, transparent 100%)`,
          zIndex: 1,
          pointerEvents: "none",
        }}/>

        {/* ТЕКСТ — поверх всего, слева */}
        <div style={{ position:"relative", zIndex:3, minHeight:"100vh", paddingTop:"60px", display:"flex", flexDirection:"column", justifyContent:"center", padding:"clamp(36px,6vw,88px)", paddingTop:"clamp(100px,12vw,140px)", maxWidth:"55%" }}>
          <div style={{ display:"flex",alignItems:"center",gap:"10px",marginBottom:"28px" }}>
            <div style={{ width:"24px",height:"2px",background:O,flexShrink:0 }}/>
            <span style={{ fontFamily:"'Space Mono',monospace",fontSize:"11px",letterSpacing:".28em",color:O }}>{word}<span className="blink">_</span></span>
          </div>

          <div style={{ position:"relative", display:"inline-block", marginBottom:"14px" }}>
            <h1 style={{ fontFamily:"'Space Grotesk',sans-serif",fontSize:"clamp(44px,6vw,88px)",fontWeight:700,lineHeight:0.92,letterSpacing:"-0.03em",margin:0 }}>
              Евгений<br/>
              <span style={{ WebkitTextStroke:`2px ${O}`,color:"transparent" }}>Воло</span><span style={{ color:TEXT }}>дин</span>
            </h1>
            {/* пульсирующая точка рядом с именем */}
            <div style={{ position:"absolute", top:"-6px", right:"-20px" }}>
              <div style={{ width:"10px",height:"10px",borderRadius:"50%",background:O,position:"relative" }}>
                <div className="pulsering" style={{ position:"absolute",top:"-5px",left:"-5px",width:"20px",height:"20px",borderRadius:"50%",border:`1.5px solid ${O}` }}/>
                <div className="pulsering" style={{ position:"absolute",top:"-10px",left:"-10px",width:"30px",height:"30px",borderRadius:"50%",border:`1px solid ${O}60`, animationDelay:"0.8s" }}/>
              </div>
            </div>
          </div>

          <p style={{ fontFamily:"'Space Mono',monospace",fontSize:"clamp(9px,1vw,11px)",letterSpacing:".2em",textTransform:"uppercase",color:MUTED,marginBottom:"28px",lineHeight:1.9 }}>
            Reels-продюсер · Контент-маркетолог · Режиссер монтажа
          </p>

          <p style={{ fontFamily:"'Inter',sans-serif",fontSize:"clamp(14px,1.4vw,16px)",lineHeight:1.75,color:MUTED,maxWidth:"420px",marginBottom:"40px" }}>
            Больше 5 лет в создании и продвижении контента. Прошел путь от пресс-секретаря в МЧС до продюсера по контенту для бизнеса и экспертов. Знаю всю кухню изнутри - есть насмотренность, техническая база и понимание,{" "}
            <span style={{ color:TEXT,fontWeight:500 }}>как привести проект к результату.</span>
          </p>

          <div style={{ display:"flex",gap:"12px",flexWrap:"wrap",marginBottom:"48px" }}>
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

          {/* floating card */}
          <div className="floating" style={{ display:"inline-flex",flexDirection:"column",background:CARD,border:`1px solid ${O}`,padding:"16px 22px",alignSelf:"flex-start" }}>
            <div style={{ fontFamily:"'Space Mono',monospace",fontSize:"8px",letterSpacing:".3em",color:O,marginBottom:"5px" }}>ОПЫТ</div>
            <div style={{ fontFamily:"'Space Grotesk',sans-serif",fontSize:"28px",fontWeight:700,color:TEXT,lineHeight:1 }}>5+ лет</div>
            <div style={{ fontFamily:"'Space Mono',monospace",fontSize:"8px",color:MUTED,marginTop:"4px" }}>в контент-продакшне</div>
          </div>
        </div>

        <div style={{ position:"absolute",bottom:0,left:0,right:0,height:"2px",background:`linear-gradient(to right,${O},transparent 60%)`,zIndex:4 }}/>
      </section>

      {/* ABOUT - плюсы и минусы */}
      <section id="about" ref={aboutRef.ref} style={{ padding:"clamp(72px,10vw,140px) clamp(24px,6vw,80px)",borderBottom:`1px solid ${LINE}` }}>
        <div style={{ maxWidth:"1200px",margin:"0 auto" }}>
          <div style={{ display:"flex",alignItems:"center",gap:"14px",marginBottom:"56px" }}>
            <div style={{ width:"24px",height:"2px",background:O }}/>
            <span style={{ fontFamily:"'Space Mono',monospace",fontSize:"10px",letterSpacing:".32em",color:O,textTransform:"uppercase" }}>// ЧЕСТНО О СЕБЕ</span>
          </div>

          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1px",background:LINE }} className="about-split">

            {/* ПЛЮСЫ */}
            <div style={{ background:BG,padding:"clamp(28px,4vw,48px)" }}>
              <div style={{ display:"flex",alignItems:"center",gap:"10px",marginBottom:"28px" }}>
                <div style={{ width:"8px",height:"8px",background:O,borderRadius:"50%",flexShrink:0 }}/>
                <span style={{ fontFamily:"'Space Grotesk',sans-serif",fontWeight:700,fontSize:"clamp(15px,1.6vw,18px)",color:TEXT }}>Честно о плюсах</span>
              </div>
              <div style={{ display:"flex",flexDirection:"column",gap:"1px",background:LINE }}>
                {PROS.map((p,i)=>(
                  <div key={i} className="trait-card" style={{ background:CARD,padding:"clamp(14px,1.8vw,20px)",display:"flex",gap:"12px",alignItems:"flex-start",...fade(aboutRef.inView,i*0.06) }}>
                    <div style={{ width:"32px",height:"32px",border:`1px solid ${O}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:"1px" }}>
                      <Icon name={p.icon as "Zap"} size={13} style={{ color:O }}/>
                    </div>
                    <p style={{ fontFamily:"'Inter',sans-serif",fontSize:"clamp(12px,1.25vw,14px)",color:TEXT,lineHeight:1.55 }}>{p.t}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* МИНУСЫ */}
            <div style={{ background:BG,padding:"clamp(28px,4vw,48px)" }}>
              <div style={{ display:"flex",alignItems:"center",gap:"10px",marginBottom:"28px" }}>
                <div style={{ width:"8px",height:"8px",border:`2px solid ${O}`,borderRadius:"50%",flexShrink:0 }}/>
                <span style={{ fontFamily:"'Space Grotesk',sans-serif",fontWeight:700,fontSize:"clamp(15px,1.6vw,18px)",color:TEXT }}>Честно о минусах</span>
              </div>
              <div style={{ display:"flex",flexDirection:"column",gap:"1px",background:LINE }}>
                {CONS.map((c,i)=>(
                  <div key={i} className="trait-card" style={{ background:CARD,padding:"clamp(14px,1.8vw,20px)",display:"flex",gap:"12px",alignItems:"flex-start",...fade(aboutRef.inView,i*0.06) }}>
                    <div style={{ width:"32px",height:"32px",border:`1px solid ${LINE}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:"1px" }}>
                      <Icon name={c.icon as "Zap"} size={13} style={{ color:MUTED }}/>
                    </div>
                    <p style={{ fontFamily:"'Inter',sans-serif",fontSize:"clamp(12px,1.25vw,14px)",color:TEXT,lineHeight:1.55 }}>{c.t}</p>
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

          <div style={{ display:"flex",alignItems:"center",gap:"14px",marginBottom:"56px" }}>
            <div style={{ width:"24px",height:"2px",background:O }}/>
            <span style={{ fontFamily:"'Space Mono',monospace",fontSize:"10px",letterSpacing:".32em",color:O,textTransform:"uppercase" }}>// КЕЙСЫ</span>
          </div>

          <div style={{ display:"flex",flexDirection:"column",gap:"1px",background:LINE }}>
            {CASES.map((c,i)=>(
              <div key={i} className="case-block" style={{ background:CARD,border:"1px solid transparent",...fade(casesRef.inView,i*0.07) }}>
                {/* header always visible */}
                <div style={{ display:"flex",alignItems:"center",gap:"clamp(16px,3vw,36px)",padding:"clamp(20px,3vw,32px)" }}>
                  <span style={{ fontFamily:"'Space Mono',monospace",fontSize:"clamp(28px,4vw,44px)",fontWeight:700,color:`${O}25`,lineHeight:1,flexShrink:0 }}>{c.n}</span>
                  <div style={{ display:"flex",flexDirection:"column",gap:"6px",flex:1 }}>
                    <span style={{ display:"inline-flex",fontFamily:"'Space Mono',monospace",fontSize:"8px",letterSpacing:".2em",color:O,border:`1px solid ${O}40`,padding:"3px 9px",textTransform:"uppercase",alignSelf:"flex-start" }}>{c.niche}</span>
                    <h3 style={{ fontFamily:"'Space Grotesk',sans-serif",fontWeight:700,fontSize:"clamp(18px,2.2vw,26px)",letterSpacing:"-0.01em",color:TEXT,lineHeight:1.1 }}>{c.title}</h3>
                  </div>
                  {!c.preview&&c.ig&&(
                    <a href={c.ig} target="_blank" rel="noreferrer" style={{ display:"inline-flex",alignItems:"center",gap:"6px",fontFamily:"'Space Mono',monospace",fontSize:"9px",letterSpacing:".15em",textTransform:"uppercase",color:O,textDecoration:"none",flexShrink:0,transition:"opacity .2s" }}
                      onMouseOver={e=>(e.currentTarget.style.opacity="0.7")}
                      onMouseOut={e=>(e.currentTarget.style.opacity="1")}>
                      <Icon name="ExternalLink" size={12} style={{ color:O }}/> Instagram
                    </a>
                  )}
                </div>

                {/* expanded content - always open */}
                {(c.preview||c.reelIds.length>0)&&(
                  <div style={{ borderTop:`1px solid ${LINE}` }}>

                    {/* screenshot — компактный, как мобильный скрин */}
                    {c.preview&&(
                      <div style={{ background:CARD,padding:"clamp(16px,2.5vw,28px)",borderBottom:`1px solid ${LINE}`,display:"flex",gap:"clamp(16px,2vw,24px)",alignItems:"flex-start",flexWrap:"wrap" }}>
                        <div style={{ flexShrink:0 }}>
                          <div style={{ fontFamily:"'Space Mono',monospace",fontSize:"8px",letterSpacing:".2em",color:MUTED,textTransform:"uppercase",marginBottom:"10px" }}>Профиль в Instagram</div>
                          <div style={{ width:"clamp(160px,22vw,260px)",border:`1px solid ${LINE}`,overflow:"hidden",borderRadius:"0" }}>
                            <img src={c.preview} alt={c.title} style={{ width:"100%",display:"block" }}/>
                          </div>
                        </div>
                        {c.ig&&(
                          <div style={{ paddingTop:"28px" }}>
                            <a href={c.ig} target="_blank" rel="noreferrer" style={{ display:"inline-flex",alignItems:"center",gap:"8px",fontFamily:"'Space Mono',monospace",fontSize:"9px",letterSpacing:".18em",textTransform:"uppercase",color:O,textDecoration:"none",border:`1px solid ${O}40`,padding:"10px 18px",transition:"all .2s" }}
                              onMouseOver={e=>{ e.currentTarget.style.background=`${O}15`; }}
                              onMouseOut={e=>{ e.currentTarget.style.background="transparent"; }}>
                              <Icon name="ExternalLink" size={12} style={{ color:O }}/>
                              Смотреть профиль
                            </a>
                          </div>
                        )}
                      </div>
                    )}

                    {/* reels - horizontal scroll */}
                    {c.reelIds.length>0&&(
                      <div style={{ background:CARD,padding:"clamp(16px,2.5vw,28px)" }}>
                        <div style={{ fontFamily:"'Space Mono',monospace",fontSize:"8px",letterSpacing:".2em",color:MUTED,textTransform:"uppercase",marginBottom:"16px" }}>
                          Примеры рилсов <span style={{ color:`${O}60` }}>— листайте</span>
                        </div>
                        <div style={{ display:"flex",gap:"clamp(10px,1.5vw,16px)",overflowX:"auto",paddingBottom:"12px",scrollSnapType:"x mandatory",WebkitOverflowScrolling:"touch" }}
                          className="reels-scroll">
                          {c.reelIds.map((id,j)=>(
                            <div key={j} style={{ position:"relative",flexShrink:0,width:"clamp(200px,28vw,320px)",aspectRatio:"9/16",background:"#000",overflow:"hidden",border:`1px solid ${LINE}`,scrollSnapAlign:"start" }}>
                              <iframe
                                src={`https://rutube.ru/play/embed/${id}?autoplay=0`}
                                allow="clipboard-write"
                                allowFullScreen
                                style={{ position:"absolute",inset:0,width:"100%",height:"100%",border:"none" }}
                                title={`Reel ${j+1}`}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* no content */}
                {!c.preview&&c.reelIds.length===0&&(
                  <div style={{ borderTop:`1px solid ${LINE}`,padding:"clamp(16px,2.5vw,28px)" }}>
                    <p style={{ fontFamily:"'Inter',sans-serif",fontSize:"13px",color:MUTED,lineHeight:1.6 }}>Подробности кейса - в личном разговоре.</p>
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
              ].map((ct,i)=>(
                <a key={i} href={ct.href} target="_blank" rel="noreferrer" className="contact-row" style={{ display:"flex",alignItems:"center",gap:"18px",padding:"clamp(18px,2.5vw,26px) clamp(18px,3vw,32px)",background:CARD,textDecoration:"none",borderLeft:"3px solid transparent" }}>
                  <div style={{ width:"38px",height:"38px",border:`1px solid ${LINE}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                    <Icon name={ct.icon as "Phone"} size={15} style={{ color:O }}/>
                  </div>
                  <div>
                    <div style={{ fontFamily:"'Space Grotesk',sans-serif",fontWeight:600,fontSize:"clamp(13px,1.4vw,16px)",color:TEXT }}>{ct.label}</div>
                    <div style={{ fontFamily:"'Space Mono',monospace",fontSize:"8px",letterSpacing:".18em",color:MUTED,marginTop:"3px",textTransform:"uppercase" }}>{ct.sub}</div>
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
        <span style={{ fontFamily:"'Space Mono',monospace",fontSize:"9px",letterSpacing:".15em",color:`${TEXT}25` }}>2026 Евгений Володин</span>
        <span style={{ fontFamily:"'Space Mono',monospace",fontSize:"9px",letterSpacing:".15em",color:`${TEXT}25` }}>Reels-продюсер</span>
        <span style={{ fontFamily:"'Space Mono',monospace",fontSize:"9px",letterSpacing:".15em",color:O }}>Content Producer</span>
      </footer>

    </div>
  );
}