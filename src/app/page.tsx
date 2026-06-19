import Link from "next/link";
import HomeHero from "@/components/home/hero";
import ComponentCard from "@/components/component/ComponentCard";
import { getFeaturedComponents, getBrowseCategories } from "@/content/components";
import { getFaqJsonLd } from "@/config/seo";

const HOME_FAQ = [
  {
    question: "What is CodeHarem?",
    answer:
      "CodeHarem is a free library of copy-paste HTML and CSS UI components — buttons, cards, loaders, forms and more — each with a live preview and one-click copy.",
  },
  {
    question: "Are the UI components free to use?",
    answer:
      "Yes. Every component is free to copy and use in both personal and commercial projects.",
  },
  {
    question: "Do I need React or any framework to use them?",
    answer:
      "No. The components are plain HTML and CSS, so they work in any project — static sites, React, Vue, WordPress, or anything that renders HTML.",
  },
  {
    question: "Can I build and preview my own components?",
    answer:
      "Yes. The CodeHarem sandbox is a live HTML, CSS and JavaScript editor with an instant preview, and you can download your work as a standalone HTML file.",
  },
];

export default function Home() {
  const featured = getFeaturedComponents(8);
  const browse = getBrowseCategories();

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqJsonLd(HOME_FAQ)) }}
      />
      <div className="lg:bg-[radial-gradient(circle_at_center,var(--dark-accent),transparent,transparent)]">
        <HomeHero />

        {/* Popular components */}
        <div className="mainContainer py-10 md:py-14">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-medium text-white md:text-3xl">
                Popular Components
              </h2>
              <p className="mt-1 text-sm text-gray-400">
                Hand-built UI you can copy and use anywhere.
              </p>
            </div>
            <Link
              href="/component"
              className="hidden shrink-0 items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-accent sm:flex"
            >
              View all
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featured.map((component) => (
              <ComponentCard key={component.id} component={component} />
            ))}
          </div>

          <div className="mt-8 flex justify-center sm:hidden">
            <Link
              href="/component"
              className="rounded-lg border border-[#333] px-6 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:bg-[#2a2a2a] hover:text-white"
            >
              View all components
            </Link>
          </div>
        </div>
      </div>

      {/* Browse by category — keyword-targeted internal links */}
      <section className="mainContainer py-10 md:py-14">
        <h2 className="text-2xl font-medium text-white md:text-3xl">
          Browse by Category
        </h2>
        <p className="mt-1 text-sm text-gray-400">
          Free copy-paste CSS components, organised by what you need.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {browse.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group flex items-center justify-between rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-3.5 text-sm font-medium text-gray-300 transition-all hover:-translate-y-0.5 hover:border-accent/30 hover:text-white"
            >
              {c.label}
              <svg
                className="h-4 w-4 text-gray-600 transition-colors group-hover:text-accent"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          ))}
        </div>
      </section>

      {/* SEO intro / value proposition */}
      <section className="mainContainer pb-4">
        <div className="rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-6 md:p-10">
          <h2 className="text-xl font-semibold text-white md:text-2xl">
            Free copy-paste HTML &amp; CSS components
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-relaxed text-gray-400">
            <p>
              CodeHarem is a free, open library of UI components built with plain
              HTML, CSS and Tailwind CSS. Every snippet works without a
              framework — copy the code, paste it into your project, and ship.
              Browse <Link href="/component/category/buttons" className="text-accent hover:underline">CSS buttons</Link>,{" "}
              <Link href="/component/category/card" className="text-accent hover:underline">cards</Link>,{" "}
              <Link href="/component/category/spinner" className="text-accent hover:underline">loaders and spinners</Link>,{" "}
              <Link href="/component/category/input" className="text-accent hover:underline">inputs</Link>{" "}
              and more, each with a live preview.
            </p>
            <p>
              Prefer to build from scratch? The{" "}
              <Link href="/create" className="text-accent hover:underline">component sandbox</Link>{" "}
              gives you a live HTML, CSS and JavaScript editor with instant
              preview and one-click download. Want to learn more? Read the{" "}
              <Link href="/blog" className="text-accent hover:underline">CodeHarem blog</Link>{" "}
              for practical frontend and CSS guides.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ — matches FAQPage structured data above */}
      <section className="mainContainer py-10 md:py-14">
        <h2 className="text-2xl font-medium text-white md:text-3xl">
          Frequently asked questions
        </h2>
        <div className="mt-6 divide-y divide-[#222] border-y border-[#222]">
          {HOME_FAQ.map((item) => (
            <div key={item.question} className="py-5">
              <h3 className="text-base font-semibold text-white">
                {item.question}
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-400">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
