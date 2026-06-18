// ─────────────────────────────────────────────────────────────────────────────
// Local blog content.
//
// Posts are plain data with Markdown bodies (rendered with react-markdown).
// Add an optional `faq` array to a post to emit FAQPage structured data
// (the questions/answers should also appear in the Markdown body so the
// visible content matches the schema, per Google's guidelines).
// ─────────────────────────────────────────────────────────────────────────────

export interface BlogAuthor {
  name: string;
  avatar: string | null;
  username: string | null;
}

export interface BlogFaqItem {
  question: string;
  answer: string;
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
  faq?: BlogFaqItem[];
}

export interface BlogListResult {
  blogs: BlogData[];
  total: number;
  page: number;
  totalPages: number;
}

const TEAM: BlogAuthor = { name: "CodeHarem", avatar: null, username: null };

export const BLOGS_PER_PAGE = 13;

const COPY_PASTE_FAQ: BlogFaqItem[] = [
  {
    question: "Are the components on CodeHarem free to use?",
    answer:
      "Yes. Every HTML and CSS component on CodeHarem is free to copy, paste, and use in both personal and commercial projects.",
  },
  {
    question: "Do I need React or any framework to use them?",
    answer:
      "No. The components are plain HTML and CSS, so they work in any project — static sites, React, Vue, WordPress, or anything that renders HTML.",
  },
  {
    question: "What is the difference between the CSS and Tailwind versions?",
    answer:
      "Vanilla CSS components keep their styles in a stylesheet, while Tailwind CSS components use utility classes directly in the markup. Use whichever matches your project.",
  },
  {
    question: "Can I edit a component before using it?",
    answer:
      "Yes. Open the CodeHarem sandbox to edit the HTML, CSS, and JavaScript live with an instant preview, then copy or download the standalone result.",
  },
];

export const blogs: BlogData[] = [
  {
    id: "copy-paste-html-css-components",
    slug: "copy-paste-html-css-components",
    title:
      "Copy-Paste HTML & CSS Components: Build UI Faster Without a Framework",
    excerpt:
      "A practical guide to free, copy-paste HTML and CSS components — buttons, cards, loaders, and form controls — for shipping clean UI faster, with no framework and no build step.",
    category: "guides",
    tags: [
      "css",
      "ui-components",
      "html",
      "tailwind-css",
      "frontend",
      "copy-paste",
    ],
    featuredImage: "https://cdn.codeharem.com/blogs/copy-paste-html-css-components.webp",
    faq: COPY_PASTE_FAQ,
    content: `Every frontend developer rebuilds the same things: a button with a tidy hover
state, a loading spinner, a pricing card, a toggle. **Copy-paste HTML and CSS
components** let you skip that busywork — grab a working snippet, drop it into
any page, and move on.

This guide covers what copy-paste UI components are, when to reach for plain CSS
versus Tailwind CSS, and how to use the free component library on CodeHarem to
build interfaces faster.

## What is a copy-paste UI component?

A copy-paste UI component is a small, self-contained block of HTML and CSS — and
sometimes a few lines of JavaScript — that renders a single piece of interface:
a button, card, accordion, input, and so on. There is no install step, no
package to add, and no framework to learn. You copy the markup, paste it into
your project, and adjust the colours or spacing to match your design.

Because every component on CodeHarem is plain **HTML and CSS**, it works in any
stack — a static site, a React or Vue app, a WordPress theme, or a landing
page. If a browser can render HTML, the component works.

## Plain CSS vs Tailwind CSS components

You will see two flavours of components in the wild, and CodeHarem supports
both:

- **Vanilla CSS components** keep all styling in a stylesheet or a \`<style>\`
  block. They are framework-free and easy to read — ideal when you are not
  already using a utility framework. The
  [Dual Ring Spinner](/component/pure-css-spinner) and the
  [Glowing Gradient Button](/component/glowing-gradient-button) are pure-CSS
  examples.
- **Tailwind CSS components** style elements with utility classes directly in
  the markup. They are quick to adapt if your project already uses Tailwind —
  see the [Tailwind Feature Card](/component/tailwind-feature-card).

Neither is objectively better. Pick the one that matches your project so you
paste less and ship sooner.

## The CSS components developers reach for most

A handful of UI elements show up in almost every project. These are the ones
worth bookmarking:

- **Buttons** — the most reused element on the web. A solid set of
  [CSS buttons](/component?category=buttons) with proper hover and active
  states saves time on every single page.
- **Loaders and spinners** — a
  [pure-CSS loading spinner](/component/pure-css-spinner) gives users instant
  feedback without shipping a JavaScript animation library.
- **Cards** — pricing tables, feature blocks, and product tiles. The
  [Glassmorphism Pricing Card](/component/glassmorphism-pricing-card) is a
  copy-paste starting point.
- **Form controls** — a
  [floating-label input](/component/floating-label-input) and an
  [animated toggle switch](/component/animated-toggle-switch) that look modern
  out of the box.
- **Accordions and toasts** — an
  [accessible accordion](/component/accessible-accordion) and a
  [slide-in toast notification](/component/toast-notification) cover two of the
  most common interactive patterns.

Browse the full set on the [components page](/component) and filter by category.

## How to use a component from CodeHarem

1. Open any component and switch to the **Preview** tab to see it running live.
2. Copy the **HTML**, **CSS**, and — if present — **JavaScript** from the code
   tabs.
3. Paste the markup into your page and the CSS into your stylesheet, or keep
   them together in a single file.
4. Adjust the colours, border radius, and spacing to fit your brand. Every
   snippet is standard CSS, so there is nothing new to learn.

Prefer to build from scratch? The [CodeHarem sandbox](/create) is a live
HTML, CSS, and JavaScript editor with an instant preview, and you can download
your work as a standalone HTML file.

## Why copy-paste components are good for performance

Framework component libraries often pull in megabytes of JavaScript you never
use. A plain HTML and CSS snippet ships only the markup and styles you actually
paste — which means smaller pages, faster loads, and better Core Web Vitals.
For a static site or a marketing page, that difference is real and measurable.

## FAQ

### Are the components on CodeHarem free to use?

Yes. Every HTML and CSS component on CodeHarem is free to copy, paste, and use
in both personal and commercial projects.

### Do I need React or any framework to use them?

No. The components are plain HTML and CSS, so they work in any project — static
sites, React, Vue, WordPress, or anything that renders HTML.

### What is the difference between the CSS and Tailwind versions?

Vanilla CSS components keep their styles in a stylesheet, while Tailwind CSS
components use utility classes directly in the markup. Use whichever matches
your project.

### Can I edit a component before using it?

Yes. Open the [sandbox](/create) to edit the HTML, CSS, and JavaScript live with
an instant preview, then copy or download the standalone result.`,
    views: 0,
    createdAt: "2026-06-18T10:00:00.000Z",
    updatedAt: "2026-06-18T10:00:00.000Z",
    author: TEAM,
  },
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
