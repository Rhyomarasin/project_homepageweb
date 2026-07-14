import Image from "next/image";
import Link from "next/link";
import type { Template } from "@/src/types";

interface TemplateCardProps {
  template: Template;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Link
      href={template.href}
      className="template-card group flex flex-col gap-4 no-underline"
      id={`template-${template.id}`}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-[#141414] border border-[#242424]">
        <Image
          src={template.image}
          alt={template.name}
          fill
          className="object-cover template-card-image"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Tag badge */}
        {template.tag && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className={`tag ${template.tag === "new" ? "tag-new" : "tag-free"}`}
            >
              {template.tag === "new" ? "New" : "Free"}
            </span>
          </div>
        )}
      </div>

      {/* Info row */}
      <div className="flex items-start justify-between gap-4 px-0.5">
        <div className="flex flex-col gap-0.5">
          <h3 className="text-[#f5efe6] text-[16px] font-medium leading-snug">
            {template.name}
          </h3>
          <p className="text-[#5e5e5e] text-[13px] font-medium">
            {template.category}
          </p>
        </div>
        <span className="text-[#ababab] text-[15px] font-medium whitespace-nowrap">
          {template.price === 0 ? "Free" : `$${template.price}`}
          {template.price > 0 && (
            <span className="text-[#5e5e5e] text-[12px] ml-1">
              {template.currency}
            </span>
          )}
        </span>
      </div>
    </Link>
  );
}