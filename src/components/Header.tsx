"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/config/site";

const links: [string, string][] = [
  ["Home", "/"], ["Our Services", "/#services"], ["How It Works", "/#how"],
  ["Pricing", "/#pricing"], ["FAQ", "/#faq"], ["Contact", "/#contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 10);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const close = () => setOpen(false);
  return (
    <header id="top" className={scrolled ? "s" : ""}>
      <div className="wrap">
        <nav aria-label="Main">
          <Link className="logo" href="/">{site.brand}</Link>
          <button className="burger" aria-expanded={open} aria-controls="links" onClick={() => setOpen(!open)}>Menu</button>
          <div className={"links" + (open ? " open" : "")} id="links">
            {links.map(([label, href]) => <Link key={href} href={href} onClick={close}>{label}</Link>)}
            <Link className="btn" href="/#contact" onClick={close}>Get Started</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
