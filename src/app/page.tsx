import Link from "next/link";
import HomeHero from "@/components/home/hero";
import ComponentCard from "@/components/component/ComponentCard";
import { getFeaturedComponents } from "@/content/components";

export default function Home() {
  const featured = getFeaturedComponents(8);

  return (
    <div>
      <div className="lg:bg-[radial-gradient(circle_at_center,var(--dark-accent),transparent,transparent)]">
        <HomeHero />
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
    </div>
  );
}
