import Link from "next/link";
import type { Template } from "@/src/types";
import TemplateCard from "./TemplateCard";

interface TemplatesSectionProps {
  templates: Template[];
}

export default function TemplatesSection({ templates }: TemplatesSectionProps) {
  return (
    <section className="section-container py-16 md:py-24" id="templates">
      {/* Section header */}
      <div className="flex items-end justify-between mb-10 md:mb-14">
        <div className="flex flex-col gap-3">
          <span className="text-[#5e5e5e] text-[12px] font-semibold uppercase tracking-[0.15em]">
            Templates
          </span>
          <h2 className="text-[28px] md:text-[36px] font-bold tracking-[-0.02em] text-[#f5efe6] leading-[1.15]">
            Premium templates built{" "}
            <br className="hidden md:block" />
            to drive results
          </h2>
        </div>
        <Link
          href="#templates"
          className="hidden md:inline-flex items-center gap-1.5 text-[#ababab] text-[14px] font-medium no-underline hover:text-[#f5efe6] transition-colors"
          id="view-all-templates"
        >
          View all
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Templates grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {templates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </section>
  );
}
