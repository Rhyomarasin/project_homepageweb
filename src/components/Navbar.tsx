"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { label: "Templates", href: "#templates" },
    { label: "Live examples", href: "#live-examples" },
    { label: "Support", href: "#faq" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <>
      {/* Top gradient overlay */}
      <div className="top-gradient" />

      <nav
        className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
        id="main-navbar"
      >
        <div className="section-container flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 no-underline group"
            id="nav-logo"
          >
            <Image
              src="/kursor-icon.avif"
              alt="Browser.supply Logo"
              width={22}
              height={22}
              className="object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <span
              className="text-[#f5efe6] text-[17px] font-semibold tracking-[-0.01em]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Browser.supply
            </span>
          </Link>

          {/* Desktop nav links — centered, hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#ababab] text-[14px] font-medium no-underline hover:text-[#f5efe6] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: social icons + Bundle button (desktop) + hamburger (mobile) */}
          <div className="flex items-center gap-4">
            {/* Social Icons — hidden on mobile */}
            <div className="hidden md:flex items-center gap-3">
              {/* X (Twitter) Icon */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ababab] hover:text-[#f5efe6] transition-colors duration-200"
                aria-label="X (Twitter)"
                id="nav-social-x"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube Icon */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ababab] hover:text-[#f5efe6] transition-colors duration-200"
                aria-label="YouTube"
                id="nav-social-youtube"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            {/* Bundle Button — hidden on mobile */}
            <Link
              href="#templates"
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 bg-[#f5efe6] text-[#212121] text-[14px] font-semibold rounded-full no-underline hover:bg-[#e8e1d8] transition-all duration-200 hover:-translate-y-0.5"
              id="nav-bundle-btn"
            >
              Bundle
            </Link>

            {/* Hamburger menu button — visible on mobile only */}
            <button
              aria-label="Toggle Menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative z-[110] text-[#f5efe6] hover:text-[#ababab] transition-colors cursor-pointer bg-transparent border-none p-1"
              id="nav-menu-toggle"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {menuOpen ? (
                  <>
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="6" y1="18" x2="18" y2="6" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="8" x2="20" y2="8" />
                    <line x1="4" y1="16" x2="20" y2="16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="mobile-menu-overlay" id="mobile-menu">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="mobile-menu-link"
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#templates"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-4"
            style={{
              animationDelay: `${(navLinks.length + 1) * 100}ms`,
              opacity: 0,
              animation: "fadeInUp 0.5s ease forwards",
            }}
          >
            Bundle
          </Link>
        </div>
      )}
    </>
  );
}