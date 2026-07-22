export interface Destination {
  id: string;
  name: string;
  slug: string;
  code: string;
  flag: string;
  region: string;
  capital: string;
  tagline: string;
  description: string;
  heroImage: string;
  cardImage: string;
  activities: Offering[];
  dayTrips: Offering[];
  packages: Offering[];
}

export type OfferingCategory = "activity" | "day-trip" | "package";

export interface Offering {
  id: string;
  title: string;
  slug: string;
  country: string;
  location: string;
  category: OfferingCategory;
  shortDescription: string;
  image: string;
  duration: string;
  price: number;
  currency: "KES" | "USD";
  rating: number;
  reviewCount: number;
  featured: boolean;
  groupSize?: string;
  languages?: string[];
  meetingPoint?: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: ItineraryItem[];
  cancellationPolicy: string;
  importantInformation: string[];
  pickupAvailable: boolean;
  pickupPrice?: number;
  serviceFeeRate?: number;
  images: string[];
  reviews?: Review[];
}

export interface ItineraryItem { title: string; description: string; duration?: string; }
export interface Review { id: string; name: string; country: string; rating: number; comment: string; date: string; }
