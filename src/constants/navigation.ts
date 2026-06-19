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

// Friendly plural nouns per category, used to build keyword-aligned labels
// ("CSS Buttons", "CSS Spinners & Loaders") for headings and browse links.
export const CATEGORY_NOUN: Record<string, string> = {
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

export function categoryBrowseLabel(category: string): string {
  if (category === "other") return "Other Components";
  return `CSS ${CATEGORY_NOUN[category] ?? category}`;
}
