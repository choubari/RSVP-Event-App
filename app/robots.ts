import { MetadataRoute } from "next";

const home = process.env.NEXT_PUBLIC_APP_URL;

export default function robots(): MetadataRoute.Robots {
  // Find all unpublished events.
  //   const disallowedEvents = [""];

  //   const disallowedPaths = [...disallowedEvents, "/api/contact"];
  const disallowedPaths = ["/api/events", "/api/categories"];

  return {
    sitemap: `${home}/sitemap.xml`,
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: disallowedPaths,
    },
  };
}
