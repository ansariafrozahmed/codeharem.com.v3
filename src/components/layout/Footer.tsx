import Link from "next/link";
import { BROWSE_CATEGORIES } from "@/constants/navigation";

const RESOURCE_LINKS = [
  { label: "All Components", href: "/component" },
  { label: "Code Playground", href: "/playground" },
  { label: "Component Sandbox", href: "/create" },
  { label: "Blog", href: "/blog" },
];

export default function Footer() {
  const year = 2026;

  return (
    <footer className="mt-20 border-t border-[#222] bg-[#141414]">
      <div className="mainContainer py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="text-lg font-semibold text-white"
              aria-label="CodeHarem home"
            >
              Code<span className="text-accent">Harem</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-500">
              Free, copy-paste HTML and CSS UI components with live preview —
              buttons, cards, loaders and more for any project.
            </p>
          </div>

          {/* Browse by category */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Browse Components
            </h2>
            <ul className="space-y-2">
              {BROWSE_CATEGORIES.slice(0, 6).map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-gray-400 transition-colors hover:text-accent"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More categories */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
              More Categories
            </h2>
            <ul className="space-y-2">
              {BROWSE_CATEGORIES.slice(6).map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-gray-400 transition-colors hover:text-accent"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Resources
            </h2>
            <ul className="space-y-2">
              {RESOURCE_LINKS.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="text-sm text-gray-400 transition-colors hover:text-accent"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[#222] pt-6 sm:flex-row">
          <p className="text-xs text-gray-500">
            © {year} CodeHarem. Free copy-paste UI components for developers.
          </p>
          <p className="text-xs text-gray-600">
            Built with HTML, CSS &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
