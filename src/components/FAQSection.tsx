"use client";

import { useState } from "react";
import type { FAQ } from "@/src/types";

interface FAQSectionProps {
  faqs: FAQ[];
}

function FAQItem({ faq }: { faq: FAQ }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item" id={`faq-${faq.id}`}>
      <button
        className="faq-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{faq.question}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`faq-icon ${isOpen ? "faq-icon-open" : ""}`}
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
      <div
        className="faq-content"
        style={{
          maxHeight: isOpen ? "300px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="text-[#ababab] text-[15px] leading-[1.7] pb-6">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="section-container py-16 md:py-24" id="faq">
      {/* Section header */}
      <div className="text-center max-w-[640px] mx-auto mb-12 md:mb-16 flex flex-col gap-4">
        <span className="text-[#5e5e5e] text-[12px] font-semibold uppercase tracking-[0.15em]">
          FAQ
        </span>
        <h2 className="text-[32px] md:text-[44px] font-bold tracking-[-0.02em] text-[#f5efe6] leading-[1.1]">
          Frequently asked questions
        </h2>
      </div>

      {/* FAQ items */}
      <div className="max-w-[720px] mx-auto border-t border-[#242424]">
        {faqs.map((faq) => (
          <FAQItem key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
}
