import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Templates", href: "#templates" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    resources: [
      { label: "Documentation", href: "#" },
      { label: "Tutorials", href: "#" },
      { label: "Support", href: "#" },
    ],
    social: [
      { label: "Twitter / X", href: "https://x.com" },
      { label: "Framer", href: "https://framer.com" },
    ],
  };

  return (
    <footer className="border-t border-[#1a1a1a] mt-8" id="footer">
      {/* CTA Section */}
      <div className="section-container py-20 md:py-28">
        <div className="text-center max-w-[680px] mx-auto flex flex-col items-center gap-6">
          <h2 className="text-[32px] md:text-[44px] font-bold tracking-[-0.02em] text-[#f5efe6] leading-[1.1]">
            Ready to launch your website?
          </h2>
          <p className="text-[#ababab] text-[16px] leading-[1.6]">
            Get started with a premium Framer template and go live in hours, not
            weeks.
          </p>
          <Link href="#templates" className="btn-primary mt-2" id="footer-cta">
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

      {/* Footer links */}
      <div className="border-t border-[#1a1a1a]">
        <div className="section-container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
            {/* Logo column */}
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="flex items-center gap-2.5 no-underline"
              >
                <Image
                  src="/kursor-icon.avif"
                  alt="Browser.supply"
                  width={20}
                  height={20}
                  className="object-contain opacity-70"
                />
                <span className="text-[#f5efe6] text-[15px] font-semibold">
                  Browser.supply
                </span>
              </Link>
              <p className="text-[#5e5e5e] text-[13px] leading-[1.6] max-w-[240px]">
                Premium Framer website templates designed for businesses that
                want to stand out.
              </p>
            </div>

            {/* Product links */}
            <div className="flex flex-col gap-4">
              <span className="text-[#5e5e5e] text-[11px] font-semibold uppercase tracking-[0.15em]">
                Product
              </span>
              <div className="flex flex-col gap-3">
                {footerLinks.product.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[#ababab] text-[14px] no-underline hover:text-[#f5efe6] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources links */}
            <div className="flex flex-col gap-4">
              <span className="text-[#5e5e5e] text-[11px] font-semibold uppercase tracking-[0.15em]">
                Resources
              </span>
              <div className="flex flex-col gap-3">
                {footerLinks.resources.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[#ababab] text-[14px] no-underline hover:text-[#f5efe6] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-4">
              <span className="text-[#5e5e5e] text-[11px] font-semibold uppercase tracking-[0.15em]">
                Connect
              </span>
              <div className="flex flex-col gap-3">
                {footerLinks.social.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ababab] text-[14px] no-underline hover:text-[#f5efe6] transition-colors inline-flex items-center gap-1.5"
                  >
                    {link.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-50"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-[#1a1a1a]">
        <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#5e5e5e] text-[12px]">
            © {currentYear} Browser.supply. All rights reserved.
          </p>
          <p className="text-[#5e5e5e] text-[12px]">
            Built with{" "}
            <a
              href="https://framer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ababab] no-underline hover:text-[#f5efe6] transition-colors"
            >
              Framer
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
