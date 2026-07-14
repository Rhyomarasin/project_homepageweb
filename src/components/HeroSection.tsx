import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center text-center pt-36 md:pt-44 pb-20 px-6"
      id="hero"
    >
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-[860px]">
        {/* Badge */}
        <div
          className="opacity-0"
          style={{
            animation: "fadeInUp 0.8s ease forwards",
          }}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-semibold tracking-[0.08em] uppercase border border-[#2a2a2a] text-[#ababab] bg-[#141414]/60 backdrop-blur-sm"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            Framer Templates
          </span>
        </div>

        {/* Main heading — serif style like browser.supply */}
        <h1
          className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[84px] font-normal leading-[1.05] tracking-[-0.02em] text-[#f5efe6]"
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            animation: "fadeInUp 0.8s ease 0.1s forwards",
            opacity: 0,
          }}
        >
          <span className="italic">W</span>ebsite templates{" "}
          <br className="hidden sm:block" />
          designed to <span className="italic">c</span>onvert
        </h1>

        {/* Subheading */}
        <p
          className="text-[#ababab] text-[16px] md:text-[18px] leading-[1.6] max-w-[540px] opacity-0"
          style={{
            animation: "fadeInUp 0.8s ease 0.25s forwards",
          }}
        >
          Launch your online business today using an easy-to-customize Framer
          website template without writing a single line of code.
        </p>

        {/* CTA Button */}
        <div
          className="mt-4 opacity-0"
          style={{
            animation: "fadeInUp 0.8s ease 0.4s forwards",
          }}
        >
          <Link href="#templates" className="btn-primary" id="hero-cta">
            Browse templates
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
