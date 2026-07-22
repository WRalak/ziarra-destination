import DestinationCard from "./DestinationCard";
import type { Destination } from "@/types/destination";

export default function DestinationGrid({ destinations }: { destinations: readonly Destination[] }) {
  return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{destinations.map((destination) => <DestinationCard key={destination.slug} destination={destination} />)}</div>;
}
