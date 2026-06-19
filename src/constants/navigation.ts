export const NAV_LINKS = [
  { label: "Components", href: "/component" },
  { label: "Playground🎲", href: "/playground" },
  { label: "Blog", href: "/blog" },
] as const;

export const FOOTER_QUICK_LINKS = [
  { label: "Components", href: "/component" },
  { label: "Playground", href: "/playground" },
  { label: "Blog", href: "/blog" },
] as const;

export const FOOTER_RESOURCES = [
  { label: "Sandbox", href: "/create" },
] as const;

export const CATEGORIES = [
  "buttons",
  "accordion",
  "dropdown",
  "form",
  "modal",
  "tooltip",
  "card",
  "tabs",
  "pagination",
  "input",
  "slider",
  "switch",
  "checkbox",
  "radio",
  "toast",
  "alert",
  "spinner",
  "other",
] as const;

// Curated, keyword-friendly labels pointing at the static category landing
// pages. Used for the homepage "Browse by category" grid and the footer so
// every page links to the high-intent category pages.
export const BROWSE_CATEGORIES = [
  { label: "CSS Buttons", href: "/component/category/buttons" },
  { label: "CSS Cards", href: "/component/category/card" },
  { label: "CSS Loaders & Spinners", href: "/component/category/spinner" },
  { label: "CSS Inputs", href: "/component/category/input" },
  { label: "CSS Forms", href: "/component/category/form" },
  { label: "CSS Toasts", href: "/component/category/toast" },
  { label: "CSS Dropdowns", href: "/component/category/dropdown" },
  { label: "CSS Modals", href: "/component/category/modal" },
  { label: "CSS Accordions", href: "/component/category/accordion" },
  { label: "CSS Tooltips", href: "/component/category/tooltip" },
  { label: "CSS Switches", href: "/component/category/switch" },
  { label: "CSS Tabs", href: "/component/category/tabs" },
] as const;
