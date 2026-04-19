import GoosegradeCard from "./components/GoosegradeCard";
import FootballAnalysisCard from "./components/FootballAnalysisCard";
import TandemCard from "./components/TandemCard";
import ProjectsScrollProxy from "./components/ProjectsScrollProxy";

export default function Home() {
  return (
    <>
    <ProjectsScrollProxy targetId="projects-scroll" />
    <main
      className="main-layout w-full flex flex-col md:flex-row"
      style={{
        paddingTop: 'clamp(80px, 14vh, 200px)',
        paddingLeft: 'clamp(24px, 3vw, 48px)',
        paddingRight: 0,
        paddingBottom: 0,
        gap: 'clamp(36px, 4.5vw, 72px)',
        minHeight: 'calc(100vh - 64px)',
      }}
    >
      {/* Left Panel Container */}
      <div className="left-panel relative animate-slide-in-left w-full md:flex-1 md:max-w-[50%] md:self-start" style={{ marginBottom: 'clamp(24px, 3vw, 48px)' }}>

        {/* Ambient pulsing glow behind card */}
        <div className="card-glow" aria-hidden="true"></div>

        {/* Glass Card */}
        <div
          className="flex flex-col apple-glass-card h-full relative"
          style={{ padding: 'clamp(4px, 0.5vw, 6px)' }}
        >
          {/* Inner Border Wrapper */}
          <div
             className="flex flex-col h-full border border-black/[0.08] rounded-[20px]"
             style={{ padding: 'clamp(20px, 2.5vw, 32px)' }}
          >
          {/* Intro Section - Heading & Bio */}
          <div style={{ marginBottom: 'clamp(16px, 2vw, 24px)' }}>
            <h1
              className="font-medium text-[#111] tracking-tight leading-[1.05] underline decoration-2 underline-offset-[6px] whitespace-nowrap"
              style={{ fontSize: 'clamp(26px, 5vw, 72px)', marginBottom: 'clamp(10px, 1.5vw, 20px)' }}
            >
              hi, I&apos;m calvin lee!
            </h1>

            <div className="text-[#222] leading-[1.5]">
              <div className="flex flex-wrap items-center font-medium text-[#222]" style={{ fontSize: 'clamp(18px, 1.6vw, 24px)', marginBottom: 'clamp(6px, 0.8vw, 10px)' }}>
                ✦ CS&nbsp;
                <a 
                  href="https://cs.uwaterloo.ca/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center group hover:text-[#111] transition-colors relative"
                >
                  <span>@&nbsp;</span>
                  <img src="/uw-logo.svg" alt="UWaterloo Logo" className="w-[1.1em] h-[1.1em] object-contain" />
                  <span>&nbsp;University of Waterloo</span>
                  <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#111] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
              <div className="stagger-item flex items-center gap-2 text-[#666]" style={{ paddingLeft: 'clamp(16px, 1.5vw, 24px)', fontSize: 'clamp(15px, 1.3vw, 18px)', marginBottom: 'clamp(2px, 0.2vw, 4px)', animationDelay: '500ms' }}>
                <span className="shrink-0 w-4">↳</span>
                <div className="flex items-center justify-center shrink-0 w-[18px] h-[18px]">
                  <img src="/microsoft-logo.png" alt="Microsoft" className="w-full h-full object-contain" />
                </div>
                <span>Microsoft Entrance Scholarship in Mathematics</span>
              </div>
              <div className="stagger-item flex items-center gap-2 text-[#666]" style={{ paddingLeft: 'clamp(16px, 1.5vw, 24px)', fontSize: 'clamp(15px, 1.3vw, 18px)', marginBottom: 'clamp(2px, 0.2vw, 4px)', animationDelay: '580ms' }}>
                <span className="shrink-0 w-4">↳</span>
                <div className="flex items-center justify-center shrink-0 w-[18px] h-[18px]">
                  <img src="/belairdirect-logo.png" alt="belairdirect" className="w-full h-full object-contain" />
                </div>
                <span>belairdirect Insurance Scholarship</span>
              </div>
              <div className="stagger-item flex items-center gap-2 text-[#666]" style={{ paddingLeft: 'clamp(16px, 1.5vw, 24px)', fontSize: 'clamp(15px, 1.3vw, 18px)', marginBottom: 'clamp(2px, 0.2vw, 4px)', animationDelay: '660ms' }}>
                <span className="shrink-0 w-4">↳</span>
                <div className="flex items-center justify-center shrink-0 w-[18px] h-[18px]">
                  <img src="/uwaterloo-shield.png" alt="University of Waterloo" className="w-full h-full object-contain scale-90" />
                </div>
                <span>President&apos;s Scholarship of Distinction</span>
              </div>
              <div className="stagger-item flex items-center gap-2 text-[#666]" style={{ paddingLeft: 'clamp(16px, 1.5vw, 24px)', fontSize: 'clamp(15px, 1.3vw, 18px)', animationDelay: '740ms' }}>
                <span className="shrink-0 w-4">↳</span>
                <div className="flex items-center justify-center shrink-0 w-[18px] h-[18px]">
                  <img src="/tc-energy-logo.png" alt="TC Energy" className="w-full h-full object-contain" />
                </div>
                <span>TC Energy STEM Scholarship</span>
              </div>
              <p className="font-medium" style={{ fontSize: 'clamp(18px, 1.6vw, 24px)', marginTop: 'clamp(12px, 1.5vw, 20px)', marginBottom: 'clamp(2px, 0.4vw, 6px)' }}>✦ about me</p>
              <div className="stagger-item flex items-start gap-3 text-[#666]" style={{ paddingLeft: 'clamp(16px, 1.5vw, 24px)', fontSize: 'clamp(15px, 1.3vw, 18px)', marginBottom: 'clamp(2px, 0.2vw, 4px)', animationDelay: '860ms' }}>
                <span>↳</span>
                <div className="flex flex-wrap items-center">
                  <a
                    href="https://cmcnational.com/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center group hover:text-[#111] transition-colors relative"
                  >
                    <span>National Level Violinist&nbsp;@</span>
                    <img src="/cmc-logo.png" alt="CMC Logo" className="w-[1.2em] h-[1.2em] object-contain mx-[0.1em] relative top-[1px]" />
                    <span>CMC</span>
                    <span className="absolute left-0 bottom-[-1px] w-0 h-[1px] bg-[#666] group-hover:bg-[#111] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </div>
              </div>
              <p className="stagger-item flex items-start gap-3 text-[#666]" style={{ paddingLeft: 'clamp(16px, 1.5vw, 24px)', fontSize: 'clamp(15px, 1.3vw, 18px)', animationDelay: '940ms' }}><span>↳</span> Avid Bodybuilder</p>
            </div>
          </div>

          {/* Recently section */}
          <div className="mt-auto font-sans">
            <h2
              className="text-[#222] font-semibold leading-none"
              style={{ fontSize: 'clamp(14px, 1.3vw, 18px)', marginBottom: 'clamp(10px, 1.2vw, 16px)' }}
            >
              recently:
            </h2>

            <div
              className="flex flex-col"
              style={{ gap: 'clamp(6px, 0.8vw, 12px)' }}
            >
                {/* Card: Thri5 - SWE */}
                <div
                  className="stagger-item thri5-card flex justify-between items-center border border-black/[0.12] rounded-[20px] bg-white cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                  style={{ padding: 'clamp(12px, 1.2vw, 20px) clamp(16px, 1.5vw, 24px)', animationDelay: '1080ms' }}
                >
                  <div className="thri5-banner" aria-hidden="true">
                    <div className="thri5-banner-bg"></div>
                    <img src="/thri5-banner1.png" alt="" className="thri5-banner-logo" />
                  </div>
                  <div className="thri5-content flex items-center" style={{ gap: 'clamp(12px, 1vw, 16px)' }}>
                    <div className="flex items-center justify-center shrink-0" style={{ width: 'clamp(40px, 3.5vw, 52px)', height: 'clamp(40px, 3.5vw, 52px)' }}>
                      <img src="/thri5-logo.png" alt="Thri5" className="w-full h-full object-contain rounded-[10px]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#111] font-bold leading-[1.3]" style={{ fontSize: 'clamp(13px, 1.2vw, 16px)' }}>Thri5</span>
                      <span className="thri5-role text-[#666] leading-[1.3]" style={{ fontSize: 'clamp(12px, 1.1vw, 15px)', marginTop: '2px' }}>Software Engineering</span>
                    </div>
                  </div>
                  <span className="text-[#888] whitespace-nowrap hidden sm:block font-medium" style={{ fontSize: 'clamp(12px, 1.1vw, 15px)' }}>May 2026 — Aug 2026</span>
                </div>

                {/* Card: Thri5 - Data Engineering */}
                <div
                  className="stagger-item thri5-card flex justify-between items-center border border-black/[0.12] rounded-[20px] bg-white cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                  style={{ padding: 'clamp(12px, 1.2vw, 20px) clamp(16px, 1.5vw, 24px)', animationDelay: '1160ms' }}
                >
                  <div className="thri5-banner" aria-hidden="true">
                    <div className="thri5-banner-bg"></div>
                    <img src="/thri5-banner1.png" alt="" className="thri5-banner-logo" />
                  </div>
                  <div className="thri5-content flex items-center" style={{ gap: 'clamp(12px, 1vw, 16px)' }}>
                    <div className="flex items-center justify-center shrink-0" style={{ width: 'clamp(40px, 3.5vw, 52px)', height: 'clamp(40px, 3.5vw, 52px)' }}>
                      <img src="/thri5-logo.png" alt="Thri5" className="w-full h-full object-contain rounded-[10px]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#111] font-bold leading-[1.3]" style={{ fontSize: 'clamp(13px, 1.2vw, 16px)' }}>Thri5</span>
                      <span className="thri5-role text-[#666] leading-[1.3]" style={{ fontSize: 'clamp(12px, 1.1vw, 15px)', marginTop: '2px' }}>Data Engineering</span>
                    </div>
                  </div>
                  <span className="text-[#888] whitespace-nowrap hidden sm:block font-medium" style={{ fontSize: 'clamp(12px, 1.1vw, 15px)' }}>Jun 2025 — Aug 2025</span>
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Projects */}
      <div
        className="right-panel w-full relative animate-slide-in-right md:flex-1 md:max-w-[50%] md:self-start md:sticky md:top-16 md:h-[calc(100vh-64px)]"
      >
        {/* Glass Card */}
        <div
          className="right-glass flex flex-col apple-glass-card h-full"
          style={{ padding: 'clamp(4px, 0.5vw, 6px)' }}
        >
          {/* Inner Border Wrapper */}
          <div
            id="projects-scroll"
            className="right-inner flex flex-col h-full border border-black/[0.08] projects-scroll md:overflow-y-auto"
            style={{ padding: 'clamp(20px, 2.5vw, 32px)' }}
          >
            <p
              className="font-medium text-[#222] shrink-0"
              style={{ fontSize: 'clamp(18px, 1.6vw, 24px)', marginTop: 'clamp(-6px, -0.6vw, -10px)', marginBottom: 'clamp(2px, 0.4vw, 6px)' }}
            >
              ✦ projects
            </p>

            <div
              className="flex flex-col font-sans"
              style={{ gap: 'clamp(12px, 1.5vw, 20px)', marginTop: 'clamp(12px, 1.5vw, 20px)' }}
            >
              <GoosegradeCard />
              <FootballAnalysisCard />
              <TandemCard />
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
