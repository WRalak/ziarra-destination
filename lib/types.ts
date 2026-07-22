export type Tag = "Wildlife" | "Beach" | "Culture" | "Nature" | "Lakes" | "Heritage";

export interface Country {
  slug: string;
  name: string;
  flag: string;
  status: "live" | "coming-soon";
  tagline: string;
  overview: string;
  heroImage: string;
  attractions: string[];
  tips: string[];
}

export interface Destination {
  slug: string;
  countrySlug: string;
  name: string;
  location: string;
  image: string;
  tags: Tag[];
  rating: number;
  reviews: number;
  description: string;
  longDescription: string[];
}
