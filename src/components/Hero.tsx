import Shelf from "./Shelf";

export default function Hero() {
  return (
<section className="hero" aria-labelledby="h1"><div className="wrap">
<h1 id="h1">Every Book Deserves to Be Read.</h1>
<div className="hero-row">
<div><p className="lead">Give your book the attention it deserves. We provide independent reading and thoughtful editorial feedback to help authors better understand how readers experience their work.</p>
<div className="cta"><a className="btn" href="#contact">Get Started</a><a className="btn ghost" href="#services">Explore Our Services</a></div>
<p className="small">Straightforward pricing. $10 per 100 pages.</p></div>
</div>
<Shelf />
<div className="shelf-line"></div>
</div></section>
  );
}
