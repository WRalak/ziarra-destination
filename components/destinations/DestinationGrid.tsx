import DestinationCard from "./DestinationCard";
import type { Destination } from "@/types/destination";

export default function DestinationGrid({ destinations }: { destinations: readonly Destination[] }) {
  return <div className="grid grid-cols-2 items-stretch gap-2 min-[400px]:gap-3 sm:gap-4 lg:grid-cols-5 xl:grid-cols-6">{destinations.map((destination) => <DestinationCard key={destination.slug} destination={destination} />)}</div>;
}
