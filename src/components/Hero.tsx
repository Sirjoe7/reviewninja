import Shelf from "./Shelf";

export default function Hero() {
  return (
<section className="hero" aria-labelledby="h1"><div className="wrap">
<h1 id="h1">Struggling To Get Good Reviews ?</h1>
<div className="hero-row">
<div><p className="lead">Give your book the attention it deserves. We provide independent book review services to help authors with sales and visibility on Amazon, Kindle and Goodreads.</p>
<div className="cta"><a className="btn" href="#contact">Get Started</a><a className="btn ghost" href="#services">Explore Our Services</a></div>
<p className="small">Straightforward pricing. $10 per 100 pages.</p></div>
</div>
<Shelf />
<div className="shelf-line"></div>
</div></section>
  );
}
