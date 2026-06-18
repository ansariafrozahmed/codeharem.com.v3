// ─────────────────────────────────────────────────────────────────────────────
// Local blog content.
//
// Posts are plain data with Markdown bodies (rendered with react-markdown).
// To add a post, append an object to the `blogs` array below.
// ─────────────────────────────────────────────────────────────────────────────

export interface BlogAuthor {
  name: string;
  avatar: string | null;
  username: string | null;
}

export interface BlogData {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string | null;
  tags: string[];
  category: string;
  views: number;
  createdAt: string;
  updatedAt: string;
  author: BlogAuthor;
}

export interface BlogListResult {
  blogs: BlogData[];
  total: number;
  page: number;
  totalPages: number;
}

const TEAM: BlogAuthor = { name: "CodeHarem", avatar: null, username: null };

export const BLOGS_PER_PAGE = 13;

export const blogs: BlogData[] = [
//   {
//     id: "b1",
//     slug: "why-we-went-fully-static",
//     title: "Why We Rebuilt CodeHarem as a Fully Static Site",
//     excerpt:
//       "No backend, no database, no auth — just fast, cacheable HTML. Here's why a static architecture is a great fit for a component gallery.",
//     category: "engineering",
//     tags: ["nextjs", "static", "performance"],
//     featuredImage: null,
//     content: `Static sites are having a moment, and for good reason. When your content
// doesn't change per-request, there is no reason to pay for a server to render it
// every time.

// ## What "static" means here

// Every page on CodeHarem is generated at build time into plain HTML, CSS, and
// JavaScript. There is **no API call** at runtime to load a component or a blog
// post — the data ships inside the page.

// ## Why it's a good fit

// - **Speed** — pages are served straight from a CDN edge, often in milliseconds.
// - **Reliability** — there is no database to fall over.
// - **Cost** — static hosting is cheap (often free) and scales effortlessly.
// - **Security** — no server means a dramatically smaller attack surface.

// ## The trade-offs

// You give up per-user features like accounts and likes that persist across
// devices. For a gallery you browse and copy from, that is a trade worth making.

// > Build once, serve everywhere.`,
//     views: 1840,
//     createdAt: "2025-05-25T10:00:00.000Z",
//     updatedAt: "2025-05-25T10:00:00.000Z",
//     author: TEAM,
//   },
//   {
//     id: "b2",
//     slug: "css-tricks-for-cleaner-ui",
//     title: "5 Modern CSS Tricks for Cleaner UI",
//     excerpt:
//       "From :has() to container queries, modern CSS removes a surprising amount of JavaScript. Here are five techniques worth adopting today.",
//     category: "css",
//     tags: ["css", "frontend", "tips"],
//     featuredImage: null,
//     content: `Modern CSS keeps quietly absorbing things we used to reach for JavaScript to
// do. Here are five favourites.

// ## 1. The \`:has()\` parent selector

// Style a card differently when it contains an image — no extra class needed:

// \`\`\`css
// .card:has(img) { padding-top: 0; }
// \`\`\`

// ## 2. \`clamp()\` for fluid type

// \`\`\`css
// h1 { font-size: clamp(1.8rem, 4vw, 3.2rem); }
// \`\`\`

// One line replaces a stack of media queries.

// ## 3. Container queries

// Components can respond to **their container** instead of the viewport, which is
// exactly what reusable UI wants.

// ## 4. \`accent-color\`

// Theme checkboxes and radios with a single property:

// \`\`\`css
// input { accent-color: #429872; }
// \`\`\`

// ## 5. \`aspect-ratio\`

// No more padding-top hacks for responsive embeds:

// \`\`\`css
// .thumb { aspect-ratio: 16 / 9; }
// \`\`\`

// Adopt these and watch your stylesheets shrink.`,
//     views: 2675,
//     createdAt: "2025-05-19T09:30:00.000Z",
//     updatedAt: "2025-05-19T09:30:00.000Z",
//     author: TEAM,
//   },
//   {
//     id: "b3",
//     slug: "anatomy-of-a-great-component",
//     title: "The Anatomy of a Great UI Component",
//     excerpt:
//       "Good components are accessible, self-contained, and easy to drop in. Here's the checklist we use when reviewing submissions.",
//     category: "design",
//     tags: ["design", "accessibility", "ux"],
//     featuredImage: null,
//     content: `A component is more than how it looks. The best ones are a pleasure to reuse.
// Here is the checklist we keep coming back to.

// ## Self-contained

// It should work when pasted into an empty file. No hidden global styles, no
// assumed reset beyond the obvious.

// ## Accessible by default

// - Real, focusable elements (\`button\`, \`input\`, \`label\`).
// - Visible focus states.
// - Sufficient colour contrast.

// ## Responsive

// It should not break at 320px or look lost at 1440px. Fluid units and sensible
// max-widths go a long way.

// ## Honest motion

// Animation should clarify, not distract. Keep it short, and respect
// \`prefers-reduced-motion\` when it matters.

// Hit these four and you have something people will actually want to use.`,
//     views: 1402,
//     createdAt: "2025-05-12T13:15:00.000Z",
//     updatedAt: "2025-05-12T13:15:00.000Z",
//     author: TEAM,
//   },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

const byNewest = (a: BlogData, b: BlogData) =>
  b.createdAt.localeCompare(a.createdAt);

export function getAllBlogs(): BlogData[] {
  return [...blogs].sort(byNewest);
}

export function getBlogSlugs(): string[] {
  return blogs.map((b) => b.slug);
}

export function getBlogBySlug(slug: string): BlogData | null {
  return blogs.find((b) => b.slug === slug) ?? null;
}

export function getBlogs(options?: {
  category?: string;
  tag?: string;
  search?: string;
  page?: number;
  limit?: number;
}): BlogListResult {
  const category = options?.category;
  const tag = options?.tag;
  const search = options?.search?.trim().toLowerCase();
  const page = Math.max(1, options?.page ?? 1);
  const limit = options?.limit ?? BLOGS_PER_PAGE;

  let list = getAllBlogs();

  if (category) list = list.filter((b) => b.category === category);
  if (tag) list = list.filter((b) => b.tags.includes(tag));
  if (search) {
    list = list.filter(
      (b) =>
        b.title.toLowerCase().includes(search) ||
        b.excerpt.toLowerCase().includes(search) ||
        b.tags.some((t) => t.toLowerCase().includes(search)),
    );
  }

  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const start = (page - 1) * limit;

  return {
    blogs: list.slice(start, start + limit),
    total,
    page,
    totalPages,
  };
}
