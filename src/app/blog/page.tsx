import { Suspense } from "react";
import type { Metadata } from "next";
import BlogBrowser from "./BlogBrowser";
import { buildMetadata, pagesSeo } from "@/config/seo";

export const metadata: Metadata = buildMetadata({
  title: pagesSeo.blog.title,
  description: pagesSeo.blog.description,
  path: "/blog",
});

export default function BlogPage() {
  return (
    <Suspense>
      <BlogBrowser />
    </Suspense>
  );
}
