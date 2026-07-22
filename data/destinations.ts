import type { Destination } from "@/types/destination";
import { toCountrySlug } from "@/lib/country-slug";
import { createOfferings, offeringSeeds } from "./offerings";

const destinationDetails = [
  ["Uganda", "UG", "\u{1F1FA}\u{1F1EC}", "Lakes, forests and highlands", "Discover equatorial forests, the Lake Victoria basin and the source region of the Nile."],
  ["Kenya", "KE", "\u{1F1F0}\u{1F1EA}", "Savannahs, highlands and coast", "Explore varied landscapes, wildlife areas, cultural heritage and the Indian Ocean coast."],
  ["South Africa", "ZA", "\u{1F1FF}\u{1F1E6}", "Cities, coastlines and reserves", "Experience diverse cities, long coastlines, mountain landscapes and wildlife reserves."],
  ["Zimbabwe", "ZW", "\u{1F1FF}\u{1F1FC}", "Falls, highlands and wildlife", "Explore Victoria Falls, dramatic landscapes, cultural heritage and renowned wildlife areas."],
  ["Tanzania", "TZ", "\u{1F1F9}\u{1F1FF}", "Wildlife, mountains and islands", "Travel between expansive wildlife areas, Mount Kilimanjaro and the islands of Zanzibar."],
  ["Egypt", "EG", "\u{1F1EA}\u{1F1EC}", "Nile heritage and desert landscapes", "Explore the Nile Valley, ancient cultural sites, desert scenery and Red Sea coast."],
  ["Morocco", "MA", "\u{1F1F2}\u{1F1E6}", "Medinas, mountains and desert", "Travel through historic cities, coastlines, mountains and desert regions."],
  ["Rwanda", "RW", "\u{1F1F7}\u{1F1FC}", "Green hills and forest landscapes", "Explore a compact country known for its highland scenery, lakes and protected forests."],
  ["India", "IN", "\u{1F1EE}\u{1F1F3}", "Cities, heritage and diverse landscapes", "Discover historic cities, cultural landmarks, coastlines and varied regional traditions."],
  ["Zambia", "ZM", "\u{1F1FF}\u{1F1F2}", "Rivers, falls and national parks", "Discover major river systems, Victoria Falls and a range of protected natural areas."],
  ["Botswana", "BW", "\u{1F1E7}\u{1F1FC}", "Wetlands and wilderness", "Explore the Okavango Delta, seasonal waterways and protected wildlife landscapes."],
  ["Namibia", "NA", "\u{1F1F3}\u{1F1E6}", "Desert landscapes and open skies", "Discover Atlantic coastline, desert environments and wide, sparsely populated landscapes."],
  ["Eswatini", "SZ", "\u{1F1F8}\u{1F1FF}", "Mountains, valleys and culture", "Experience mountain scenery, protected reserves and the living cultural heritage of Eswatini."]
] as const;

export const destinationNames = destinationDetails.map(([name]) => name);
export const destinations: readonly Destination[] = destinationDetails.map(([name, code, flag, tagline, description], index) => {
  const slug = toCountrySlug(name);
  const all = createOfferings(name, index);
  return {
    id: code, name, slug, code, flag, region: name === "India" ? "Asia" : "Africa",
    capital: offeringSeeds[name].capital, tagline, description,
    heroImage: `/images/destinations/${slug}-hero.webp`, cardImage: `/images/destinations/${slug}-card.webp`,
    activities: all.filter(item => item.category === "activity"),
    dayTrips: all.filter(item => item.category === "day-trip"),
    packages: all.filter(item => item.category === "package")
  };
});
