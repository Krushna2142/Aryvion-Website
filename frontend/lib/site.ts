// Single source of truth for company details. Fill these in with REAL values.
// Anything left empty is simply not rendered (no fake data on the site).
export const site = {
  name: "Aryvion",
  legalName: "Aryvion Technologies Pvt. Ltd.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  location: "Pune, India", // edit or clear
  socials: [
    // { label: "LinkedIn", href: "https://linkedin.com/company/..." },
    // { label: "GitHub", href: "https://github.com/..." },
    // { label: "Instagram", href: "https://instagram.com/..." },
  ] as { label: string; href: string }[],
};

export const nav = [
  { label: "About", href: "about" },
  { label: "Services", href: "services" },
  { label: "Products", href: "products" },
  { label: "Students", href: "students" },
  { label: "Businesses", href: "startups" },
];
