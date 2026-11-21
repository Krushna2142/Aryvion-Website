import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 pb-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-lg font-semibold tracking-tight">{site.name}</p>
            <p className="mt-3 max-w-sm text-sm text-white/60 leading-relaxed">
              AI, software and cloud engineering for startups, businesses and students.
            </p>
            {site.socials.length > 0 && (
              <ul className="mt-6 flex gap-3">
                {site.socials.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 items-center rounded-lg glass hairline px-3 text-xs text-white/70 hover:text-white"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <h4 className="text-sm font-medium text-white/50">Explore</h4>
            <ul className="mt-4 space-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link href={`/#${l.href}`} className="text-sm text-white/75 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white/50">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li><Link href="/contact" className="hover:text-white">Start a project</Link></li>
              {site.email && (
                <li><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
              )}
              {site.location && <li>{site.location}</li>}
            </ul>
          </div>
        </div>

        <p className="border-t border-white/10 pt-8 text-xs text-white/50">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
