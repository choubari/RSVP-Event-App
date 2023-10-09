import { Event } from "@/types";
import { getEvents } from "@/utils/helpers";

const home = process.env.NEXT_PUBLIC_APP_URL;

export default async function sitemap() {
  const res = await getEvents();
  const events = await res.json();

  const dynamicRoutes = events.map((event: Event) => ({
    url: `${home}/events/${event.id}`,
    lastModified: new Date().toISOString(),
  }));

  const staticRoutes = [
    "",
    "about",
    "privacy-policy",
    "terms",
    "categories",
    "events",
  ].map((route) => ({
    url: `${home}/${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...dynamicRoutes, ...staticRoutes];
}
