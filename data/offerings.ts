import { toCountrySlug } from "@/lib/country-slug";
import type { Offering, OfferingCategory } from "@/types/destination";

// DEVELOPMENT DUMMY DATA ONLY. Replace this module in the service layer when the real Ziarra API is connected.
type CountrySeed = { capital: string; activities: readonly string[]; dayTrips: readonly string[]; packages: readonly string[] };

export const offeringSeeds: Record<string, CountrySeed> = {
  Kenya: { capital: "Nairobi", activities: ["Nairobi National Park Safari", "Giraffe Centre Experience", "Diani Beach Snorkelling", "Maasai Cultural Experience"], dayTrips: ["Nairobi to Lake Naivasha", "Nairobi to Amboseli", "Mombasa Old Town and Fort Jesus"], packages: ["Kenya Safari and Beach Escape", "Maasai Mara Weekend Package", "Nairobi and Amboseli Discovery"] },
  Uganda: { capital: "Kampala", activities: ["Kampala City Experience", "Jinja Nile Rafting", "Bwindi Gorilla Trek", "Lake Bunyonyi Canoe Experience"], dayTrips: ["Kampala to Jinja", "Kampala to Entebbe", "Kampala to Mabamba Wetlands"], packages: ["Uganda Gorilla Adventure", "Source of the Nile Escape", "Uganda Wildlife Discovery"] },
  Tanzania: { capital: "Dodoma", activities: ["Serengeti Game Drive", "Stone Town Walking Experience", "Kilimanjaro Foothills Hike", "Zanzibar Reef Snorkelling"], dayTrips: ["Arusha to Tarangire", "Zanzibar Spice Farm Day Trip", "Dar es Salaam to Bagamoyo"], packages: ["Serengeti and Ngorongoro Journey", "Zanzibar Island Escape", "Kilimanjaro and Safari Discovery"] },
  Rwanda: { capital: "Kigali", activities: ["Kigali Cultural Walk", "Volcanoes Gorilla Trek", "Lake Kivu Kayaking", "Nyungwe Canopy Experience"], dayTrips: ["Kigali to Akagera", "Kigali Heritage Day", "Kigali to Lake Kivu"], packages: ["Rwanda Primate Journey", "Land of a Thousand Hills Escape", "Rwanda Lakes and Wildlife Tour"] },
  "South Africa": { capital: "Pretoria", activities: ["Cape Peninsula Scenic Drive", "Table Mountain Cableway Visit", "Kruger Wildlife Safari", "Stellenbosch Food Experience"], dayTrips: ["Cape Town to Cape Point", "Johannesburg to Cradle of Humankind", "Durban Midlands Day Trip"], packages: ["Cape Town and Winelands Escape", "Kruger Safari Discovery", "Garden Route Coastal Journey"] },
  Zimbabwe: { capital: "Harare", activities: ["Victoria Falls Guided Walk", "Hwange Wildlife Safari", "Great Zimbabwe Heritage Tour", "Matobo Hills Experience"], dayTrips: ["Victoria Falls Day Trip", "Harare to Domboshava", "Bulawayo Heritage Day"], packages: ["Zimbabwe Wildlife Journey", "Victoria Falls Escape", "Zimbabwe Heritage Discovery"] },
  Namibia: { capital: "Windhoek", activities: ["Sossusvlei Dune Walk", "Swakopmund Desert Adventure", "Etosha Game Drive", "Walvis Bay Kayaking"], dayTrips: ["Windhoek to Okapuka", "Swakopmund to Sandwich Harbour", "Walvis Bay Coastal Day Trip"], packages: ["Namib Desert Explorer", "Etosha Wildlife Journey", "Namibia Self-Drive Discovery"] },
  Botswana: { capital: "Gaborone", activities: ["Okavango Mokoro Experience", "Chobe River Safari", "Makgadikgadi Salt Pan Walk", "Gaborone Cultural Tour"], dayTrips: ["Kasane to Chobe", "Maun Delta Day Trip", "Gaborone Nature Reserve Visit"], packages: ["Okavango Delta Escape", "Chobe Wildlife Journey", "Botswana Wilderness Discovery"] },
  Zambia: { capital: "Lusaka", activities: ["Victoria Falls Walking Tour", "Zambezi River Cruise", "South Luangwa Safari", "Lusaka Market Experience"], dayTrips: ["Livingstone Falls Day Trip", "Lusaka to Lower Zambezi", "Kitwe Copperbelt Heritage Day"], packages: ["Victoria Falls Adventure", "Zambia Safari Circuit", "Zambezi and Wildlife Escape"] },
  Ethiopia: { capital: "Addis Ababa", activities: ["Addis Ababa Heritage Walk", "Lalibela Rock Church Tour", "Simien Mountains Hike", "Lake Tana Boat Experience"], dayTrips: ["Addis Ababa to Debre Libanos", "Bahir Dar Blue Nile Day Trip", "Addis Ababa Coffee Journey"], packages: ["Historic Ethiopia Circuit", "Northern Highlands Adventure", "Ethiopian Culture Discovery"] },
  Morocco: { capital: "Rabat", activities: ["Marrakech Medina Walk", "Atlas Mountains Hike", "Essaouira Coastal Experience", "Fes Artisan Tour"], dayTrips: ["Marrakech to Ourika Valley", "Fes to Meknes and Volubilis", "Casablanca to Rabat"], packages: ["Morocco Imperial Cities Journey", "Atlas and Sahara Escape", "Moroccan Coast Discovery"] },
  Egypt: { capital: "Cairo", activities: ["Giza Plateau Guided Visit", "Nile Felucca Experience", "Luxor Temple Tour", "Red Sea Snorkelling"], dayTrips: ["Cairo to Saqqara and Memphis", "Luxor West Bank Day Trip", "Aswan Philae Island Visit"], packages: ["Cairo and Nile Discovery", "Ancient Egypt Journey", "Nile and Red Sea Escape"] },
  India: { capital: "New Delhi", activities: ["Old Delhi Heritage Walk", "Jaipur Cultural Experience", "Kerala Backwater Cruise", "Goa Coastal Experience"], dayTrips: ["Delhi to Agra", "Jaipur Forts Day Trip", "Mumbai Heritage Day"], packages: ["Golden Triangle Journey", "Kerala Discovery", "India Culture and Coast Escape"] },
  Eswatini: { capital: "Mbabane", activities: ["Mlilwane Wildlife Experience", "Mantenga Cultural Village", "Malolotja Highlands Hike", "Mbabane Market Tour"], dayTrips: ["Mbabane to Ezulwini", "Hlane Royal National Park Day Trip", "Malkerns Valley Day Trip"], packages: ["Eswatini Cultural Journey", "Highlands and Wildlife Escape", "Eswatini Discovery"] },
  Seychelles: { capital: "Victoria", activities: ["Mahé Coastal Walk", "Praslin Nature Trail", "La Digue Cycling Experience", "Sainte Anne Marine Snorkelling"], dayTrips: ["Mahé Island Discovery", "Praslin and La Digue Day Trip", "Victoria and Botanical Gardens"], packages: ["Seychelles Island Escape", "Mahé and Praslin Discovery", "Seychelles Nature and Beach Journey"] }
};

const categories: Array<[keyof Pick<CountrySeed, "activities" | "dayTrips" | "packages">, OfferingCategory]> = [["activities", "activity"], ["dayTrips", "day-trip"], ["packages", "package"]];

export function createOfferings(country: string, countryIndex: number): Offering[] {
  const seed = offeringSeeds[country];
  const countrySlug = toCountrySlug(country);
  return categories.flatMap(([key, category]) => seed[key].map((title, index) => {
    const base = category === "activity" ? 35 : category === "day-trip" ? 95 : 520;
    const price = country === "Kenya" ? (base * 130 + countryIndex * 900 + index * 1700) : (base + countryIndex * 9 + index * (category === "package" ? 140 : 17));
    const currency = country === "Kenya" ? "KES" as const : "USD" as const;
    const imageIndex = (index % 3) + 1;
    const folder = category === "activity" ? "activities" : category === "day-trip" ? "day-trips" : "packages";
    const imagePaths = [1,2,3].map(number => `/images/${folder}/${countrySlug}-${number}.webp`);
    return {
      id: `${countrySlug}-${category}-${index + 1}`, title, slug: toCountrySlug(title), country,
      location: title.includes(" to ") ? title.split(" to ").at(-1)! : seed.capital,
      category, shortDescription: `A development preview of ${title.toLowerCase()}, designed to demonstrate future Ziarra inventory.`,
      image: `/images/${folder}/${countrySlug}-${imageIndex}.webp`,
      duration: category === "activity" ? `${3 + index} hours` : category === "day-trip" ? "Full day" : `${3 + index * 2} days`,
      price, currency, rating: Number((4.4 + ((countryIndex + index) % 5) / 10).toFixed(1)), reviewCount: 18 + countryIndex * 7 + index * 11,
      featured: index === 0
      ,groupSize: category === "package" ? "Up to 12 travellers" : "Up to 16 travellers"
      ,languages: ["English", ...(country === "Morocco" ? ["French"] : [])]
      ,meetingPoint: `${seed.capital} central meeting point (demo)`
      ,highlights: [`Explore ${title}`, `Discover ${seed.capital} and its surroundings`, "Flexible demo itinerary"]
      ,included: ["Demo itinerary planning", "Local host or guide preview", "Listed experience access"]
      ,excluded: ["Personal expenses", "Unlisted transport", "Live supplier confirmation"]
      ,itinerary: [{title:"Welcome and briefing",description:"Meet at the listed demo meeting point and review the plan.",duration:"30 minutes"},{title:"Main experience",description:`Enjoy the core ${title.toLowerCase()} itinerary.`,duration:category==="package"?"Multiple days":"Varies"},{title:"Wrap-up",description:"Conclude the experience and receive onward travel guidance.",duration:"30 minutes"}]
      ,cancellationPolicy:"Demo policy: cancellation terms will be supplied by the real provider after backend integration."
      ,importantInformation:["This is sample inventory with no live availability.","Bring identification and weather-appropriate clothing.","Final meeting instructions will come from the future provider API."]
      ,pickupAvailable:true,pickupPrice:currency==="KES"?2500:25,serviceFeeRate:0.05,images:imagePaths
      ,reviews:index===0?[{id:`${countrySlug}-${category}-review-1`,name:"Demo Traveller",country:"Kenya",rating:5,comment:"The itinerary was clear and easy to follow. This is a synthetic review for interface preview only.",date:"2026-06-12"}]:[]
    };
  }));
}
