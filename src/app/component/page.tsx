import { Suspense } from "react";
import type { Metadata } from "next";
import ComponentsBrowser from "./ComponentsBrowser";
import { buildMetadata, pagesSeo } from "@/config/seo";

export const metadata: Metadata = buildMetadata({
  title: pagesSeo.components.title,
  description: pagesSeo.components.description,
  path: "/component",
});

export default function ComponentPage() {
  return (
    <Suspense>
      <ComponentsBrowser />
    </Suspense>
  );
}
