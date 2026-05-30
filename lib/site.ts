export const publicSiteConfig = {
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/0000000000",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@example.com",
};

export function getSiteUrl() {
  return (process.env.SITE_URL ?? "https://example.com").replace(/\/$/, "");
}
