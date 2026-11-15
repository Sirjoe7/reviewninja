"use client";
import { useEffect, useRef, useState } from "react";
import { site, whatsappUrl } from "@/config/site";
import { calcPrice } from "@/lib/pricing";

type Field = "name" | "email" | "country" | "title" | "pages";
type Errors = Partial<Record<Field, string>>;

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [pages, setPages] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const h = (e: Event) => setPages((e as CustomEvent<string>).detail);
    window.addEventListener("prefill-pages", h);
    return () => window.removeEventListener("prefill-pages", h);
  }, []);

  const n = parseFloat(pages);
  const estimate = n > 0 ? `$${calcPrice(n)} USD (final price confirmed after review)` : "enter your page count";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const er: Errors = {};
    if (!d.name?.trim()) er.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email ?? "")) er.email = "Please enter a valid email address, such as name@example.com.";
    if (!d.country?.trim()) er.country = "Please enter your country.";
    if (!d.title?.trim()) er.title = "Please enter your book title.";
    if (!(parseFloat(d.pages) > 0)) er.pages = "Please enter a page count of 1 or more.";
    setErrors(er);
    const first = Object.keys(er)[0];
    if (first) { (formRef.current?.elements.namedItem(first) as HTMLElement | null)?.focus(); return; }

    d.estimate = `$${calcPrice(parseFloat(d.pages))}`;
    if (site.formEndpoint) {
      setBusy(true); setStatus("Sending…");
      try {
        const payload = site.formAccessKey ? { ...d, access_key: site.formAccessKey, subject: `Book reading enquiry: ${d.title}` } : d;
        const r = await fetch(site.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload) });
        if (!r.ok) throw new Error("bad response");
        setStatus(`Thank you. Your enquiry has been sent. We will reply to ${d.email}.`);
        formRef.current?.reset(); setPages("");
      } catch {
        setStatus(`Your enquiry could not be sent. Please try again, or email us at ${site.email}.`);
      } finally { setBusy(false); }
      return;
    }
    const body = `Name: ${d.name}\nEmail: ${d.email}\nCountry: ${d.country}\nBook title: ${d.title}\nGenre: ${d.genre}\nPages: ${d.pages}\nPlatform: ${d.platform}\nEstimated price: ${d.estimate}\n\n${d.msg}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Book reading enquiry: " + d.title)}&body=${encodeURIComponent(body)}`;
    setStatus(`Your email app should open with the enquiry filled in. Press send there to complete it. If nothing opens, email ${site.email} directly.`);
  }

  const err = (k: Field) => <div className="err" id={`e-${k}`}>{errors[k]}</div>;
  const inv = (k: Field) => ({ "aria-invalid": errors[k] ? true : undefined, "aria-describedby": `e-${k}` });

  return (
    <section id="contact" aria-labelledby="h-contact">
      <div className="wrap contact">
        <div>
          <h2 id="h-contact">Tell us about your book.</h2>
          <p className="mute" style={{ marginTop: 20 }}>No account needed. Share the basics and we will explain the next steps.</p>
          <p>Email: <a href={`mailto:${site.email}`}>{site.email}</a></p>
          <p>{whatsappUrl ? <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a> : "WhatsApp number coming soon."}</p>
        </div>
        <div>
          <form ref={formRef} onSubmit={onSubmit} noValidate>
            <div className="f"><label htmlFor="name">Full name</label><input id="name" name="name" autoComplete="name" required {...inv("name")} />{err("name")}</div>
            <div className="f"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" required {...inv("email")} />{err("email")}</div>
            <div className="f"><label htmlFor="country">Country</label><input id="country" name="country" autoComplete="country-name" required {...inv("country")} />{err("country")}</div>
            <div className="f"><label htmlFor="title">Book title</label><input id="title" name="title" required {...inv("title")} />{err("title")}</div>
            <div className="f"><label htmlFor="genre">Book genre</label><input id="genre" name="genre" placeholder="e.g. Fantasy, Memoir, Business" /></div>
            <div className="f"><label htmlFor="pages">Number of pages</label><input id="pages" name="pages" type="number" min={1} step={1} inputMode="numeric" required value={pages} onChange={(e) => setPages(e.target.value)} {...inv("pages")} />{err("pages")}</div>
            <div className="f full"><label htmlFor="platform">Publishing platform</label><input id="platform" name="platform" placeholder="e.g. Amazon KDP, other" /></div>
            <div className="f full"><label htmlFor="msg">Additional message</label><textarea id="msg" name="msg" rows={4} /></div>
            <div className="full est" aria-live="polite">Estimated price: <strong>{estimate}</strong></div>
            <div className="full"><button className="btn" type="submit" disabled={busy}>Send enquiry</button></div>
            {status && <div className="full" id="status" role="status" style={{ display: "block" }}>{status}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
