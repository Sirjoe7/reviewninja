import Link from "next/link";
import { site } from "@/config/site";

const whatsappDisplay = site.whatsapp
  ? site.whatsapp.startsWith("254") && site.whatsapp.length === 12
    ? `+254 ${site.whatsapp.slice(3, 6)} ${site.whatsapp.slice(6, 9)} ${site.whatsapp.slice(9)}`
    : `+${site.whatsapp}`
  : "+000 000 000 000";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fg">
          <div>
            <Link className="logo" href="/">{site.brand}</Link>
            <p className="mute" style={{ maxWidth: "36ch", marginTop: 12 }}>Independent book reading and review services for authors and publishers worldwide.</p>
          </div>
          <nav aria-label="Footer">
            <ul>
              <li><Link href="/#services">Our Services</Link></li>
              <li><Link href="/#pricing">Pricing</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </nav>
          <div>
            <ul>
              <li>Email: <a href={`mailto:${site.email}`}>{site.email}</a></li>
              
            </ul>
          </div>
        </div>
        <div className="legal">
          <span className="mute">© {new Date().getFullYear()} {site.brand}. Not affiliated with or endorsed by Amazon.</span>
          <span style={{ display: "flex", gap: 24 }}>
            <Link href="/privacy" style={{ fontSize: 14 }}>Privacy Policy</Link>
            <Link href="/terms" style={{ fontSize: 14 }}>Terms of Service</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
