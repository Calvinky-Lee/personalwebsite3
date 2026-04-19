import type { Metadata } from "next";
import "./globals.css";
import IntroOverlay from "./components/IntroOverlay";

export const metadata: Metadata = {
  title: "Calvin Lee",
  description: "Personal website of Calvin Lee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col items-center" suppressHydrationWarning>
        {/* Fixed Top Header bar */}
        <header className="fixed top-0 left-0 right-0 h-16 w-full z-50 bg-[#f3f4f6]/90 backdrop-blur-md border-b border-black/[0.03] animate-slide-in-top">
          <div className="w-full max-w-[1400px] mx-auto px-6 h-full flex justify-between items-center">
          {/* CS Webring Nav - Prev / Ring / Next */}
          <div className="flex items-center text-sm font-medium font-sans" style={{ gap: '4px', marginLeft: 'clamp(32px, 4vw, 72px)' }}>
            <a href="https://cs.uwatering.com/#calvin-lee.ca?nav=prev" aria-label="Previous site on CS Webring" className="opacity-60 hover:opacity-100 transition-opacity">
              <svg className="w-[18px] h-[18px] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
            </a>
            <a href="https://cs.uwatering.com/#calvin-lee.ca" target="_blank" rel="noopener noreferrer" aria-label="CS Webring" className="opacity-60 hover:opacity-100 transition-opacity">
              <svg className="w-[26px] h-[26px] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.739-8z"/></svg>
            </a>
            <a href="https://cs.uwatering.com/#calvin-lee.ca?nav=next" aria-label="Next site on CS Webring" className="opacity-60 hover:opacity-100 transition-opacity">
              <svg className="w-[18px] h-[18px] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
            </a>
          </div>
          <div className="flex items-center text-sm font-medium font-sans">

            {/* Social Icons Group */}
            <div className="flex items-center gap-6">
            <a href="mailto:calvin.ky.lee@gmail.com" aria-label="Email" className="opacity-60 hover:opacity-100 transition-opacity">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
            </a>
            <a href="https://x.com/calviniscooked" aria-label="X" className="opacity-60 hover:opacity-100 transition-opacity">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/calvinlee33/" aria-label="LinkedIn" className="opacity-60 hover:opacity-100 transition-opacity">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://github.com/Calvinky-Lee" aria-label="GitHub" className="opacity-60 hover:opacity-100 transition-opacity">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            
            <a href="/resume.pdf" target="_blank" className="opacity-80 hover:opacity-100 transition-opacity ml-4 mr-2">
              resume
            </a>

          </div>
          </div>
        </div>
        </header>
        
        {/* Liquid Glass Background Blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#fafafa]">
          {/* Top-left */}
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-300/[0.18] blur-[110px] animate-blob-1"></div>
          {/* Top-right (Vibrancy balanced) */}
          <div className="absolute top-[0%] right-[-10%] w-[40%] h-[40%] rounded-full bg-rose-400/[0.20] blur-[110px] animate-blob-2"></div>
          {/* Bottom-left */}
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-orange-400/[0.17] blur-[110px] animate-blob-3"></div>
          {/* Bottom-right */}
          <div className="absolute bottom-[5%] right-[-5%] w-[30%] h-[30%] rounded-full bg-pink-400/[0.18] blur-[110px] animate-blob-4"></div>

          {/* Intro white center — blends with signature video, fades out with it */}
          <div className="intro-white-center absolute inset-0 flex items-center justify-center">
            <div className="w-[60vw] h-[70vh] rounded-full bg-white blur-[120px]"></div>
          </div>
        </div>

        <div className="flex-grow w-full pt-16">
          {children}
        </div>

        <IntroOverlay />
      </body>
    </html>
  );
}
