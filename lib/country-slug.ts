import type { Destination } from "@/types/destination";

export function toCountrySlug(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function resolveCountrySlug(
  slug: string,
  destinations: readonly Destination[]
): Destination | undefined {
  const normalized = toCountrySlug(slug);
  return destinations.find((destination) => destination.slug === normalized);
}

