import type { WPPage, WPPost, WPMenuItem } from "@/types/wordpress";

const WP_API = process.env.NEXT_PUBLIC_WP_API_URL || "https://cms.mccaa.agilexplus.dev/index.php/wp-json/wp/v2";
const WP_MENUS = process.env.NEXT_PUBLIC_WP_API_URL
  ? process.env.NEXT_PUBLIC_WP_API_URL.replace("wp/v2", "menus/v1")
  : "https://cms.mccaa.agilexplus.dev/wp-json/menus/v1";

async function wpFetch<T>(path: string, revalidate = 60): Promise<T> {
  const url = `${WP_API}${path}`;
  const res = await fetch(url, {
    next: { revalidate },
    headers: { Accept: "application/json" },
  });
  if (!res.ok) {
    // Return empty data for missing content during setup
    return (Array.isArray([] as unknown as T) ? [] : null) as T;
  }
  return res.json();
}

export async function getPages(): Promise<WPPage[]> {
  return wpFetch<WPPage[]>("/pages?per_page=50&_embed");
}

export async function getPage(slug: string): Promise<WPPage | null> {
  const pages = await wpFetch<WPPage[]>(`/pages?slug=${slug}&_embed`);
  return pages[0] || null;
}

export async function getPosts(perPage = 6): Promise<WPPost[]> {
  return wpFetch<WPPost[]>(`/posts?per_page=${perPage}&_embed`);
}

export async function getPost(slug: string): Promise<WPPost | null> {
  const posts = await wpFetch<WPPost[]>(`/posts?slug=${slug}&_embed`);
  return posts[0] || null;
}

export async function getMenu(location: string): Promise<WPMenuItem[]> {
  try {
    const res = await fetch(`${WP_MENUS}/menus/${location}`, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.items || [];
  } catch {
    return [];
  }
}

export function getMediaUrl(
  post: WPPage | WPPost,
  size: "medium" | "large" | "full" = "large"
): string | null {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  if (!media) return null;
  if (size === "full") return media.source_url;
  return media.media_details?.sizes?.[size]?.source_url || media.source_url;
}