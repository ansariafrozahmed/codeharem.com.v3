import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { CATEGORIES } from "@/constants";
import { getComponents } from "@/content/components";
import ComponentGrid from "../../ComponentGrid";
import { buildMetadata, getBreadcrumbJsonLd } from "@/config/seo";

interface PageProps {
  params: Promise<{ category: string }>;
}

// Friendly plural labels for headings/titles (keyword-aligned with search terms).
const CATEGORY_LABEL: Record<string, string> = {
  buttons: "Buttons",
  accordion: "Accordions",
  dropdown: "Dropdowns",
  form: "Forms",
  modal: "Modals",
  tooltip: "Tooltips",
  card: "Cards",
  tabs: "Tabs",
  pagination: "Pagination",
  input: "Inputs",
  slider: "Sliders",
  switch: "Switches",
  checkbox: "Checkboxes",
  radio: "Radio Buttons",
  toast: "Toasts",
  alert: "Alerts",
  spinner: "Spinners & Loaders",
  other: "Other",
};

function labelFor(category: string) {
  return CATEGORY_LABEL[category] ?? category;
}

function isOther(category: string) {
  return category === "other";
}

function headingFor(category: string) {
  return isOther(category) ? "Other UI Components" : `CSS ${labelFor(category)}`;
}

function titleFor(category: string) {
  return isOther(category)
    ? "Other UI Components — Free Copy-Paste HTML & CSS"
    : `CSS ${labelFor(category)} — Free Copy-Paste Components`;
}

function descriptionFor(category: string) {
  const l = labelFor(category).toLowerCase();
  return isOther(category)
    ? "Browse free, copy-paste UI components with live preview — grab the HTML and CSS and drop them into any project."
    : `Free, copy-paste CSS ${l} with live preview. Grab the HTML and CSS for ${l} and drop them straight into any project — no framework required.`;
}

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;
  if (!CATEGORIES.includes(category as (typeof CATEGORIES)[number])) {
    return { title: "Category Not Found" };
  }
  return buildMetadata({
    title: titleFor(category),
    description: descriptionFor(category),
    path: `/component/category/${category}`,
  });
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;

  if (!CATEGORIES.includes(category as (typeof CATEGORIES)[number])) {
    notFound();
  }

  const { components, total } = getComponents({ category, limit: 100 });
  const heading = headingFor(category);

  const breadcrumb = getBreadcrumbJsonLd([
    { name: "Components", path: "/component" },
    { name: heading, path: `/component/category/${category}` },
  ]);

  return (
    <div className="mainContainer py-10 md:py-12 lg:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/component" className="transition-colors hover:text-white">
          Components
        </Link>
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        <span className="text-gray-300">{heading}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-medium text-white md:text-4xl">{heading}</h1>
        <p className="mt-2 max-w-2xl text-gray-400">{descriptionFor(category)}</p>
      </div>

      <div className="flex gap-8">
        {/* Sidebar: internal links to every category */}
        <aside className="hidden w-56 shrink-0 lg:block">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Categories
          </h2>
          <nav className="flex flex-col gap-0.5">
            <Link
              href="/component"
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-400 transition-colors hover:bg-[#242424] hover:text-white"
            >
              All Components
            </Link>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={`/component/category/${cat}`}
                className={`rounded-lg px-3 py-2 text-sm font-medium capitalize transition-colors ${
                  cat === category
                    ? "bg-accent/10 text-accent"
                    : "text-gray-400 hover:bg-[#242424] hover:text-white"
                }`}
              >
                {cat}
              </Link>
            ))}
          </nav>
        </aside>

        <div className="min-w-0 flex-1">
          {/* Mobile category pills */}
          <div className="mb-6 flex flex-wrap gap-2 lg:hidden">
            <Link
              href="/component"
              className="rounded-full border border-[#333] px-3 py-1.5 text-xs font-medium text-gray-400 transition-colors hover:border-accent/40 hover:text-white"
            >
              All
            </Link>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={`/component/category/${cat}`}
                className={`rounded-full px-3 py-1.5 text-xs font-medium capitalize transition-colors ${
                  cat === category
                    ? "bg-accent text-white"
                    : "border border-[#333] text-gray-400 hover:border-accent/40 hover:text-white"
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>

          {components.length > 0 ? (
            <>
              <p className="mb-5 text-sm text-gray-500">
                {total} {total === 1 ? "component" : "components"}
              </p>
              <ComponentGrid components={components} />
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <h3 className="text-lg font-semibold text-white">
                No {labelFor(category).toLowerCase()} yet
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Check back soon, or browse all components.
              </p>
              <Link
                href="/component"
                className="mt-6 rounded-lg bg-gradient-to-r from-dark-accent to-accent px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                All Components
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
