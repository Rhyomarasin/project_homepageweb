interface LogoMarqueeProps {
  logos: string[];
}

export default function LogoMarquee({ logos }: LogoMarqueeProps) {
  // Double the logos for seamless infinite scroll
  const doubledLogos = [...logos, ...logos];

  return (
    <section className="py-16 md:py-20" id="integrations">
      <div className="section-container mb-8">
        <p className="text-center text-[#5e5e5e] text-[12px] font-semibold uppercase tracking-[0.15em]">
          Works with your favorite tools
        </p>
      </div>

      <div className="marquee-container w-full">
        <div className="flex items-center gap-16 md:gap-24 animate-marquee w-max">
          {doubledLogos.map((logo, index) => (
            <span
              key={`${logo}-${index}`}
              className="text-[#5e5e5e] text-[18px] md:text-[20px] font-semibold tracking-wide whitespace-nowrap select-none"
              style={{
                opacity: 0.5,
                filter: "grayscale(100%)",
              }}
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
