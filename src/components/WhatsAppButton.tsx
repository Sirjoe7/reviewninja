import Link from "next/link";
import { whatsappUrl } from "@/config/site";

export default function WhatsAppButton() {
  if (!whatsappUrl) return <Link className="wa" href="/#contact">Contact us</Link>;
  return <a className="wa" href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>;
}
