import { destinations } from "@/data";
import { resolveCountrySlug } from "@/lib/country-slug";
import type { Offering, OfferingCategory } from "@/types/destination";

// Local demo boundary: replace these implementations with real Ziarra API calls later.
export function getDestinations() { return destinations; }
export function getDestinationBySlug(slug: string) { return resolveCountrySlug(slug, destinations); }
export function getAllOfferings(): Offering[] { return destinations.flatMap((item) => [...item.activities, ...item.dayTrips, ...item.packages]); }
export function getOfferingsByCountry(countrySlug: string) { const item = getDestinationBySlug(countrySlug); return item ? [...item.activities, ...item.dayTrips, ...item.packages] : []; }
export function getOfferingsByCategory(category: OfferingCategory) { return getAllOfferings().filter((item) => item.category === category); }
export function getOfferingBySlug(slug: string, category?: OfferingCategory) { return getAllOfferings().find((item) => item.slug === slug && (!category || item.category === category)); }
export function getFeaturedOfferings(category?: OfferingCategory) { return getAllOfferings().filter((item) => item.featured && (!category || item.category === category)); }
