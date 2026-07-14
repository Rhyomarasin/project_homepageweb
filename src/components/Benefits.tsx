import type { BenefitComparison } from "@/src/types";

interface BenefitsProps {
  comparison: BenefitComparison[];
}

export default function Benefits({ comparison }: BenefitsProps) {
  return (
    <section className="section-container py-16 md:py-24" id="benefits">
      {/* Section header */}
      <div className="text-center max-w-[640px] mx-auto mb-12 md:mb-16 flex flex-col gap-4">
        <h2 className="text-[32px] md:text-[44px] font-bold tracking-[-0.02em] text-[#f5efe6] leading-[1.1]">
          Professional website,{" "}
          <br className="hidden sm:block" />
          live before the weekend
        </h2>
        <p className="text-[#ababab] text-[16px] md:text-[17px] leading-[1.6]">
          Go live with a website that&apos;s premium just like your business. No
          code, no budget, just a few hours.
        </p>
      </div>

      {/* Comparison cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[960px] mx-auto">
        {comparison.map((item) => (
          <div
            key={item.id}
            className={`comparison-card flex flex-col justify-between gap-8 ${
              item.highlighted ? "comparison-card-highlighted" : ""
            }`}
            id={`comparison-${item.id}`}
          >
            <div className="flex flex-col gap-3">
              <span
                className={`text-[11px] font-semibold uppercase tracking-[0.15em] ${
                  item.highlighted ? "text-[#f5efe6]" : "text-[#5e5e5e]"
                }`}
              >
                {item.label}
              </span>
              <h3 className="text-[20px] font-semibold text-[#f5efe6]">
                {item.title}
              </h3>
              <p className="text-[#ababab] text-[14px] leading-[1.6]">
                {item.description}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              {item.priceNote && (
                <span className="text-[#5e5e5e] text-[12px] font-medium">
                  {item.priceNote}
                </span>
              )}
              <span
                className={`text-[32px] md:text-[36px] font-bold tracking-[-0.02em] ${
                  item.highlighted ? "text-[#f5efe6]" : "text-[#5e5e5e]"
                }`}
              >
                {item.priceRange}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}