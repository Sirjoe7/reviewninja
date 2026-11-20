// Central settings. Values come from .env.local (see .env.example); edit defaults here if you prefer.
export const site = {
  brand: "TheAmazonReviewer",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://theamazonreviewer.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "theamazonreviewerofficial@gmail.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "254778210955",
  address: process.env.NEXT_PUBLIC_ADDRESS || "",
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || "",
  formAccessKey: process.env.NEXT_PUBLIC_FORM_ACCESS_KEY || "",
  pricePer100: 10, // USD per 100 pages
};
export const siteHost = new URL(site.url).host;
export const whatsappMessage = "Hello, I am interested in your book review service. I would like to discuss submitting my book.";
export const whatsappUrl = site.whatsapp
  ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`
  : "";
