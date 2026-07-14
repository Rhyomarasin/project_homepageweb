import type { Testimonial } from "@/src/types";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

function StarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="star-filled"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="section-container py-16 md:py-24" id="testimonials">
      {/* Section header */}
      <div className="text-center max-w-[640px] mx-auto mb-12 md:mb-16 flex flex-col gap-4">
        <span className="text-[#5e5e5e] text-[12px] font-semibold uppercase tracking-[0.15em]">
          Testimonials
        </span>
        <h2 className="text-[32px] md:text-[44px] font-bold tracking-[-0.02em] text-[#f5efe6] leading-[1.1]">
          Loved by 2,000+ customers
        </h2>
      </div>

      {/* Testimonials grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[960px] mx-auto">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="testimonial-card flex flex-col gap-5"
            id={`testimonial-${testimonial.id}`}
          >
            {/* Stars */}
            <div className="flex items-center gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>

            {/* Quote */}
            <p className="text-[#f5efe6] text-[15px] leading-[1.6] font-normal">
              &ldquo;{testimonial.review}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 mt-auto pt-2">
              <div
                className="w-9 h-9 rounded-full bg-[#242424] flex items-center justify-center text-[#5e5e5e] text-[13px] font-semibold"
              >
                {testimonial.name.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="text-[#f5efe6] text-[14px] font-medium">
                  {testimonial.name}
                </span>
                <span className="text-[#5e5e5e] text-[12px]">
                  {testimonial.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
