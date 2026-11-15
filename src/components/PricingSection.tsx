"use client";
import { useState } from "react";
import { site } from "@/config/site";
import { calcPrice } from "@/lib/pricing";

const examples = [100, 200, 300, 400, 500];

export default function PricingSection() {
  const [value, setValue] = useState("250");
  const pages = parseFloat(value);
  const goToForm = () => {
    if (pages > 0) window.dispatchEvent(new CustomEvent("prefill-pages", { detail: value }));
  };
  return (
    <section className="price" id="pricing" aria-labelledby="h-price">
      <div className="wrap">
        <h2 id="h-price">Simple, Transparent Pricing.</h2>
        <p className="mute" style={{ maxWidth: "52ch", marginTop: 16 }}>No complicated packages or hidden charges. Our pricing is based on the length of your book.</p>
        <div className="price-grid">
          <div>
            <div className="big" aria-label={`${site.pricePer100} dollars`}>${site.pricePer100}</div>
            <p style={{ font: "500 1.6rem var(--serif)", marginTop: 16 }}>Per 100 pages.</p>
            <table>
              <thead><tr><th scope="col">Book Length</th><th scope="col">Price</th></tr></thead>
              <tbody>
                {examples.map((n) => <tr key={n}><td>{n} pages</td><td>${(n / 100) * site.pricePer100}</td></tr>)}
              </tbody>
            </table>
          </div>
          <div className="calc">
            <h3>Estimate your price</h3>
            <label htmlFor="pg" style={{ marginTop: 20 }}>Enter your book’s page count</label>
            <input id="pg" type="number" min={1} step={1} inputMode="numeric" value={value} onChange={(e) => setValue(e.target.value)} />
            <div className="out" aria-live="polite">${calcPrice(pages)}</div>
            <p className="small">Estimated price, in USD, at ${site.pricePer100} per 100 pages.</p>
            <a className="btn" href="#contact" onClick={goToForm} style={{ margin: "12px 0 20px" }}>Get Started</a>
            <p className="small" style={{ margin: 0 }}>Final pricing is confirmed based on the submitted book and agreed scope of work.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
