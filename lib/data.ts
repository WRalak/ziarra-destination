import { Country, Destination } from "./types";

export const countries: Country[] = [
  {
    slug: "kenya",
    name: "Kenya",
    flag: "🇰🇪",
    status: "live",
    tagline: "Safaris, coast, highlands",
    overview:
      "Kenya is home to the Great Migration, the Big Five, and vibrant cultural traditions that make it a must-visit for adventurous travelers.",
    heroImage:
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=900&q=70",
    attractions: ["Maasai Mara", "Lake Naivasha", "Malindi coastline", "Lake Victoria, Kisumu"],
    tips: [
      "Visit June to October or December to March for the driest, clearest game viewing.",
      "Book Mara lodges early during the July to September migration season.",
      "Carry cash in Kenyan shillings for local markets and small vendors."
    ]
  },
  {
    slug: "uganda",
    name: "Uganda",
    flag: "🇺🇬",
    status: "live",
    tagline: "Rainforest, Pearl of Africa",
    overview:
      "Uganda, the Pearl of Africa, is a bustling country in the heart of East Africa. From cities beaming with rich cultural sites to national parks filled with wildlife, Uganda has a wide array of activities for every traveler.",
    heroImage:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=70",
    attractions: ["Bwindi gorilla trekking", "Jinja white water rafting", "Lake Victoria shoreline"],
    tips: [
      "Gorilla trekking permits sell out months ahead — book early.",
      "Pack for both rainforest humidity and cooler highland evenings.",
      "Jinja is the country's adventure-sports hub, an easy trip from Entebbe."
    ]
  },
  {
    slug: "tanzania",
    name: "Tanzania",
    flag: "🇹🇿",
    status: "coming-soon",
    tagline: "Serengeti, Kilimanjaro, Zanzibar",
    overview: "Destinations for Tanzania are being added — check back soon.",
    heroImage:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=70",
    attractions: [],
    tips: []
  },
  {
    slug: "rwanda",
    name: "Rwanda",
    flag: "🇷🇼",
    status: "coming-soon",
    tagline: "Land of a thousand hills",
    overview: "Destinations for Rwanda are being added — check back soon.",
    heroImage:
      "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=900&q=70",
    attractions: [],
    tips: []
  },
  {
    slug: "south-africa",
    name: "South Africa",
    flag: "🇿🇦",
    status: "coming-soon",
    tagline: "Cape coastlines, winelands, safari",
    overview: "Destinations for South Africa are being added — check back soon.",
    heroImage:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=900&q=70",
    attractions: [],
    tips: []
  },
  {
    slug: "namibia",
    name: "Namibia",
    flag: "🇳🇦",
    status: "coming-soon",
    tagline: "Desert dunes and dark skies",
    overview: "Destinations for Namibia are being added — check back soon.",
    heroImage:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=900&q=70",
    attractions: [],
    tips: []
  },
  {
    slug: "botswana",
    name: "Botswana",
    flag: "🇧🇼",
    status: "coming-soon",
    tagline: "Okavango Delta wilderness",
    overview: "Destinations for Botswana are being added — check back soon.",
    heroImage:
      "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=900&q=70",
    attractions: [],
    tips: []
  },
  {
    slug: "zambia",
    name: "Zambia",
    flag: "🇿🇲",
    status: "coming-soon",
    tagline: "Victoria Falls and river safaris",
    overview: "Destinations for Zambia are being added — check back soon.",
    heroImage:
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=900&q=70",
    attractions: [],
    tips: []
  },
  {
    slug: "ethiopia",
    name: "Ethiopia",
    flag: "🇪🇹",
    status: "coming-soon",
    tagline: "Highlands and ancient history",
    overview: "Destinations for Ethiopia are being added — check back soon.",
    heroImage:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=70",
    attractions: [],
    tips: []
  },
  {
    slug: "morocco",
    name: "Morocco",
    flag: "🇲🇦",
    status: "coming-soon",
    tagline: "Medinas, coast, and the Sahara",
    overview: "Destinations for Morocco are being added — check back soon.",
    heroImage:
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=900&q=70",
    attractions: [],
    tips: []
  },
  {
    slug: "egypt",
    name: "Egypt",
    flag: "🇪🇬",
    status: "coming-soon",
    tagline: "Nile history and Red Sea coast",
    overview: "Destinations for Egypt are being added — check back soon.",
    heroImage:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=900&q=70",
    attractions: [],
    tips: []
  },
  {
    slug: "seychelles",
    name: "Seychelles",
    flag: "🇸🇨",
    status: "coming-soon",
    tagline: "Island beaches and reefs",
    overview: "Destinations for Seychelles are being added — check back soon.",
    heroImage:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=70",
    attractions: [],
    tips: []
  }
];

export const destinations: Destination[] = [
  {
    slug: "maasai-mara",
    countrySlug: "kenya",
    name: "Maasai Mara",
    location: "Sekenani, Kenya",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=70",
    tags: ["Wildlife", "Culture"],
    rating: 4.9,
    reviews: 312,
    description:
      "Africa's most storied savanna — home to the Great Migration and the Big Five.",
    longDescription: [
      "Step into the heart of Africa's most breathtaking wilderness. Famous for its endless golden plains, rich wildlife, and authentic cultural experiences, the Maasai Mara is a bucket-list destination for travelers seeking an unforgettable adventure.",
      "Between July and September, millions of wildebeest, zebras, and gazelles cross the Mara River in one of nature's great spectacles. Outside migration season, the Mara still delivers reliable Big Five sightings, hot air balloon safaris at sunrise, and visits to traditional Maasai villages."
    ]
  },
  {
    slug: "naivasha",
    countrySlug: "kenya",
    name: "Naivasha",
    location: "Naivasha, Kenya",
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=900&q=70",
    tags: ["Nature", "Lakes"],
    rating: 4.7,
    reviews: 188,
    description:
      "A picturesque lakeside town in the Rift Valley — flamingos, hippos, and quiet mornings.",
    longDescription: [
      "Naivasha, a town in Kenya's Great Rift Valley, is a haven for nature lovers and weekend travelers. Around 90 kilometers from Nairobi, it's an easy 1.5 to 2 hour drive along the Nairobi–Nakuru highway.",
      "Highlights include boat rides on Lake Naivasha to spot hippos and fish eagles, walking safaris among giraffes and zebras on Crescent Island, and hiking the crater rim of Mount Longonot for panoramic Rift Valley views."
    ]
  },
  {
    slug: "malindi",
    countrySlug: "kenya",
    name: "Malindi",
    location: "Malindi, Kenya",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=70",
    tags: ["Beach", "Heritage"],
    rating: 4.8,
    reviews: 241,
    description:
      "Where culture, history, and paradise meet on Kenya's sun-kissed coastline.",
    longDescription: [
      "Nestled along Kenya's coast, Malindi blends pristine beaches, Swahili culture, and centuries of maritime history. The Vasco da Gama Pillar, erected in 1498, still stands as a landmark of the town's role in global trade routes.",
      "Beyond the beach, visitors can snorkel the coral reefs of Malindi Marine National Park, explore the 13th-century ruins at Gedi, and wander the old town's Swahili architecture and spice markets."
    ]
  },
  {
    slug: "kisumu",
    countrySlug: "kenya",
    name: "Kisumu",
    location: "Kisumu, Kenya",
    image:
      "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=900&q=70",
    tags: ["Lakes", "Culture"],
    rating: 4.6,
    reviews: 97,
    description:
      "Kenya's lakeside jewel on Lake Victoria — culture, wildlife, and sunset cruises.",
    longDescription: [
      "Nestled along the shores of Lake Victoria, Kisumu is a dynamic city rich in Luo culture and natural beauty. Sunset boat cruises and traditional canoe rides are the best way to take in Africa's largest freshwater lake.",
      "Nearby, Kisumu Impala Sanctuary offers walking trails past zebras and giraffes, while Kit Mikayi — a towering rock formation steeped in Luo folklore — draws hikers and photographers alike."
    ]
  }
];

export function getCountry(slug: string) {
  return countries.find((c) => c.slug === slug);
}

export function getDestinationsForCountry(slug: string) {
  return destinations.filter((d) => d.countrySlug === slug);
}

export function getDestination(countrySlug: string, destinationSlug: string) {
  return destinations.find(
    (d) => d.countrySlug === countrySlug && d.slug === destinationSlug
  );
}
