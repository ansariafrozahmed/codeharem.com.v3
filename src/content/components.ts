// ─────────────────────────────────────────────────────────────────────────────
// Local component content.
//
// CodeHarem is a fully static site — there is no backend or database. Every
// component shown on the site lives here as plain data. To add a component,
// append an object to the `components` array below (newest first is fine; the
// helpers sort by `createdAt`).
// ─────────────────────────────────────────────────────────────────────────────

import { categoryBrowseLabel } from "@/constants/navigation";

export interface ComponentAuthor {
  name: string;
  avatar: string | null;
}

export interface ComponentData {
  id: string;
  slug: string;
  title: string;
  category: string;
  styling: "css" | "tailwind";
  htmlCode: string;
  cssCode: string;
  jsCode: string;
  headContent: string;
  externalCss: string[];
  externalJs: string[];
  views: number;
  likes: number;
  createdAt: string;
  updatedAt: string;
  author: ComponentAuthor;
}

export interface ComponentListResult {
  components: ComponentData[];
  total: number;
  page: number;
  totalPages: number;
}

const AFROZ: ComponentAuthor = { name: "Ansari Afroz", avatar: null };
const TEAM: ComponentAuthor = { name: "CodeHarem", avatar: null };

// Default number of cards per page on the listing.
export const COMPONENTS_PER_PAGE = 18;

export const components: ComponentData[] = [
  {
    id: "c1",
    slug: "glowing-gradient-button",
    title: "Glowing Gradient Button",
    category: "buttons",
    styling: "css",
    htmlCode: `<button class="glow-btn">Get Started</button>`,
    cssCode: `.glow-btn {
  position: relative;
  padding: 16px 38px;
  border: none;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(90deg, #143f39, #429872);
  box-shadow: 0 0 0 rgba(66, 152, 114, 0);
  transition: box-shadow .3s ease, transform .15s ease;
}
.glow-btn:hover {
  box-shadow: 0 0 28px rgba(66, 152, 114, .55);
  transform: translateY(-2px);
}
.glow-btn:active { transform: translateY(0); }`,
    jsCode: "",
    headContent: "",
    externalCss: [],
    externalJs: [],
    views: 1284,
    likes: 96,
    createdAt: "2025-05-02T10:00:00.000Z",
    updatedAt: "2025-05-02T10:00:00.000Z",
    author: AFROZ,
  },
  {
    id: "c2",
    slug: "pure-css-spinner",
    title: "Dual Ring Spinner",
    category: "spinner",
    styling: "css",
    htmlCode: `<div class="ring"></div>`,
    cssCode: `.ring {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 5px solid rgba(66,152,114,.2);
  border-top-color: #429872;
  animation: spin 0.9s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }`,
    jsCode: "",
    headContent: "",
    externalCss: [],
    externalJs: [],
    views: 842,
    likes: 51,
    createdAt: "2025-05-04T12:30:00.000Z",
    updatedAt: "2025-05-04T12:30:00.000Z",
    author: AFROZ,
  },
  {
    id: "c3",
    slug: "glassmorphism-pricing-card",
    title: "Glassmorphism Pricing Card",
    category: "card",
    styling: "css",
    htmlCode: `<div class="card">
  <p class="tier">Pro</p>
  <h2 class="price">$12<span>/mo</span></h2>
  <ul class="feat">
    <li>Unlimited components</li>
    <li>Private collections</li>
    <li>Priority support</li>
  </ul>
  <button class="cta">Choose plan</button>
</div>`,
    cssCode: `.card {
  width: 260px;
  padding: 28px;
  border-radius: 20px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.12);
  backdrop-filter: blur(14px);
  color: #fff;
  font-family: system-ui, sans-serif;
}
.tier { margin: 0 0 6px; color: #5bbf93; text-transform: uppercase; letter-spacing: 2px; font-size: 12px; }
.price { margin: 0 0 18px; font-size: 40px; }
.price span { font-size: 15px; color: #9aa0a6; }
.feat { list-style: none; padding: 0; margin: 0 0 22px; }
.feat li { padding: 7px 0; border-bottom: 1px solid rgba(255,255,255,.08); font-size: 14px; }
.cta {
  width: 100%; padding: 12px; border: none; border-radius: 12px; cursor: pointer;
  background: linear-gradient(90deg,#143f39,#429872); color: #fff; font-weight: 600;
}`,
    jsCode: "",
    headContent: "",
    externalCss: [],
    externalJs: [],
    views: 2103,
    likes: 174,
    createdAt: "2025-05-08T09:15:00.000Z",
    updatedAt: "2025-05-08T09:15:00.000Z",
    author: TEAM,
  },
  {
    id: "c4",
    slug: "animated-toggle-switch",
    title: "Animated Toggle Switch",
    category: "switch",
    styling: "css",
    htmlCode: `<label class="switch">
  <input type="checkbox" checked />
  <span class="slider"></span>
</label>`,
    cssCode: `.switch { display: inline-block; position: relative; width: 64px; height: 34px; }
.switch input { display: none; }
.slider {
  position: absolute; inset: 0; cursor: pointer; border-radius: 34px;
  background: #3a3a3a; transition: background .3s;
}
.slider::before {
  content: ""; position: absolute; height: 26px; width: 26px; left: 4px; top: 4px;
  border-radius: 50%; background: #fff; transition: transform .3s;
}
input:checked + .slider { background: #429872; }
input:checked + .slider::before { transform: translateX(30px); }`,
    jsCode: "",
    headContent: "",
    externalCss: [],
    externalJs: [],
    views: 967,
    likes: 63,
    createdAt: "2025-05-11T16:45:00.000Z",
    updatedAt: "2025-05-11T16:45:00.000Z",
    author: AFROZ,
  },
  {
    id: "c5",
    slug: "tailwind-feature-card",
    title: "Tailwind Feature Card",
    category: "card",
    styling: "tailwind",
    htmlCode: `<div class="max-w-xs rounded-2xl border border-white/10 bg-neutral-900 p-6 text-white shadow-xl">
  <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  </div>
  <h3 class="text-lg font-semibold">Lightning fast</h3>
  <p class="mt-1 text-sm text-neutral-400">Ship static pages that load instantly, anywhere in the world.</p>
</div>`,
    cssCode: "",
    jsCode: "",
    headContent: "",
    externalCss: [],
    externalJs: [],
    views: 1556,
    likes: 121,
    createdAt: "2025-05-14T11:20:00.000Z",
    updatedAt: "2025-05-14T11:20:00.000Z",
    author: TEAM,
  },
  {
    id: "c6",
    slug: "floating-label-input",
    title: "Floating Label Input",
    category: "input",
    styling: "css",
    htmlCode: `<div class="field">
  <input id="email" type="text" placeholder=" " />
  <label for="email">Email address</label>
</div>`,
    cssCode: `.field { position: relative; width: 260px; font-family: system-ui, sans-serif; }
.field input {
  width: 100%; padding: 18px 14px 6px; border-radius: 10px; outline: none;
  border: 1px solid #3a3a3a; background: #1b1b1b; color: #fff; font-size: 15px;
}
.field input:focus { border-color: #429872; }
.field label {
  position: absolute; left: 14px; top: 14px; color: #8a8f98; font-size: 15px;
  pointer-events: none; transition: all .15s ease;
}
.field input:focus + label,
.field input:not(:placeholder-shown) + label {
  top: 5px; font-size: 11px; color: #5bbf93;
}`,
    jsCode: "",
    headContent: "",
    externalCss: [],
    externalJs: [],
    views: 731,
    likes: 44,
    createdAt: "2025-05-17T08:05:00.000Z",
    updatedAt: "2025-05-17T08:05:00.000Z",
    author: AFROZ,
  },
  {
    id: "c7",
    slug: "accessible-accordion",
    title: "Accessible Accordion",
    category: "accordion",
    styling: "css",
    htmlCode: `<div class="acc">
  <button class="acc-head">What is CodeHarem? <span>+</span></button>
  <div class="acc-body"><p>A static gallery of hand-built UI components you can copy and use anywhere.</p></div>
</div>`,
    cssCode: `.acc { width: 300px; border: 1px solid #2a2a2a; border-radius: 12px; overflow: hidden; font-family: system-ui, sans-serif; }
.acc-head {
  width: 100%; padding: 16px; display: flex; justify-content: space-between; align-items: center;
  background: #1b1b1b; color: #fff; border: none; cursor: pointer; font-size: 15px;
}
.acc-head span { color: #429872; font-size: 20px; transition: transform .2s; }
.acc.open .acc-head span { transform: rotate(45deg); }
.acc-body { max-height: 0; overflow: hidden; transition: max-height .3s ease; background: #141414; }
.acc.open .acc-body { max-height: 160px; }
.acc-body p { margin: 0; padding: 16px; color: #9aa0a6; font-size: 14px; }`,
    jsCode: `document.querySelector('.acc-head').addEventListener('click', function () {
  this.parentElement.classList.toggle('open');
});`,
    headContent: "",
    externalCss: [],
    externalJs: [],
    views: 1190,
    likes: 88,
    createdAt: "2025-05-20T14:00:00.000Z",
    updatedAt: "2025-05-20T14:00:00.000Z",
    author: TEAM,
  },
  {
    id: "c8",
    slug: "toast-notification",
    title: "Slide-in Toast Notification",
    category: "toast",
    styling: "css",
    htmlCode: `<div class="toast">
  <span class="dot"></span>
  <div>
    <p class="t-title">Saved successfully</p>
    <p class="t-sub">Your component is ready to share.</p>
  </div>
</div>`,
    cssCode: `.toast {
  display: flex; gap: 12px; align-items: center; width: 280px; padding: 14px 16px;
  border-radius: 12px; background: #1b1b1b; border: 1px solid #2a2a2a; color: #fff;
  font-family: system-ui, sans-serif; box-shadow: 0 12px 30px rgba(0,0,0,.4);
  animation: slide .5s ease;
}
.dot { width: 10px; height: 10px; border-radius: 50%; background: #429872; box-shadow: 0 0 10px #429872; }
.t-title { margin: 0; font-size: 14px; font-weight: 600; }
.t-sub { margin: 2px 0 0; font-size: 12px; color: #9aa0a6; }
@keyframes slide { from { transform: translateX(120%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`,
    jsCode: "",
    headContent: "",
    externalCss: [],
    externalJs: [],
    views: 654,
    likes: 39,
    createdAt: "2025-05-23T18:30:00.000Z",
    updatedAt: "2025-05-23T18:30:00.000Z",
    author: AFROZ,
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

const byNewest = (a: ComponentData, b: ComponentData) =>
  b.createdAt.localeCompare(a.createdAt);

export function getAllComponents(): ComponentData[] {
  return [...components].sort(byNewest);
}

export function getComponentSlugs(): string[] {
  return components.map((c) => c.slug);
}

export function getComponentBySlug(slug: string): ComponentData | null {
  return components.find((c) => c.slug === slug) ?? null;
}

export function getFeaturedComponents(limit = 4): ComponentData[] {
  return [...components].sort((a, b) => b.likes - a.likes).slice(0, limit);
}

export function getComponentCountByCategory(category: string): number {
  return components.filter((c) => c.category === category).length;
}

// Categories that currently have at least one component — used to avoid
// indexing/linking empty (thin) category pages.
export function getNonEmptyCategories(): string[] {
  return [...new Set(components.map((c) => c.category))];
}

// Browse links for the homepage + footer, limited to categories with content.
export function getBrowseCategories(): { label: string; href: string }[] {
  return getNonEmptyCategories()
    .sort((a, b) => getComponentCountByCategory(b) - getComponentCountByCategory(a))
    .map((c) => ({
      label: categoryBrowseLabel(c),
      href: `/component/category/${c}`,
    }));
}

// Components related to the given one: same category first, then most popular
// others — used for internal linking on the detail page.
export function getRelatedComponents(slug: string, limit = 3): ComponentData[] {
  const current = getComponentBySlug(slug);
  if (!current) return [];
  const sameCategory = components
    .filter((c) => c.slug !== slug && c.category === current.category)
    .sort((a, b) => b.likes - a.likes);
  const others = components
    .filter((c) => c.slug !== slug && c.category !== current.category)
    .sort((a, b) => b.likes - a.likes);
  return [...sameCategory, ...others].slice(0, limit);
}

export function getComponents(options?: {
  category?: string;
  search?: string;
  page?: number;
  limit?: number;
}): ComponentListResult {
  const category = options?.category;
  const search = options?.search?.trim().toLowerCase();
  const page = Math.max(1, options?.page ?? 1);
  const limit = options?.limit ?? COMPONENTS_PER_PAGE;

  let list = getAllComponents();

  if (category) list = list.filter((c) => c.category === category);
  if (search) {
    list = list.filter(
      (c) =>
        c.title.toLowerCase().includes(search) ||
        c.category.toLowerCase().includes(search) ||
        c.author.name.toLowerCase().includes(search),
    );
  }

  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const start = (page - 1) * limit;

  return {
    components: list.slice(start, start + limit),
    total,
    page,
    totalPages,
  };
}
