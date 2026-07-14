import Link from "next/link";
import type { PricingTier } from "@/src/types";

interface PricingSectionProps {
  pricing: PricingTier[];
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#33d478] flex-shrink-0 mt-0.5"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function PricingSection({ pricing }: PricingSectionProps) {
  return (
    <section className="section-container py-16 md:py-24" id="pricing">
      {/* Section header */}
      <div className="text-center max-w-[640px] mx-auto mb-12 md:mb-16 flex flex-col gap-4">
        <span className="text-[#5e5e5e] text-[12px] font-semibold uppercase tracking-[0.15em]">
          Pricing
        </span>
        <h2 className="text-[32px] md:text-[44px] font-bold tracking-[-0.02em] text-[#f5efe6] leading-[1.1]">
          Simple, transparent pricing
        </h2>
        <p className="text-[#ababab] text-[16px] leading-[1.6]">
          One-time payment. No subscriptions. Lifetime updates included.
        </p>
      </div>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[860px] mx-auto">
        {pricing.map((tier) => (
          <div
            key={tier.id}
            className={`pricing-card flex flex-col gap-8 ${
              tier.highlighted ? "pricing-card-highlighted" : ""
            }`}
            id={`pricing-${tier.id}`}
          >
            {/* Badge */}
            {tier.badge && (
              <div className="absolute -top-px -right-px">
                <span className="tag tag-best-value rounded-bl-lg rounded-tr-[var(--radius-xl)] px-3 py-1.5 text-[11px]">
                  {tier.badge}
                </span>
              </div>
            )}

            {/* Header */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[20px] font-semibold text-[#f5efe6]">
                {tier.title}
              </h3>
              <p className="text-[#5e5e5e] text-[14px]">{tier.subtitle}</p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-[48px] font-bold tracking-[-0.03em] text-[#f5efe6] leading-none">
                ${tier.price}
              </span>
              {tier.originalPrice && (
                <span className="text-[#5e5e5e] text-[18px] line-through">
                  ${tier.originalPrice}
                </span>
              )}
            </div>

            {/* Features */}
            <div className="flex flex-col gap-3.5">
              {tier.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[#ababab] text-[14px] leading-[1.5]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="#"
              className={`mt-auto text-center ${
                tier.highlighted ? "btn-primary" : "btn-secondary"
              }`}
              id={`pricing-cta-${tier.id}`}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
