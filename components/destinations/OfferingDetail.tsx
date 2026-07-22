import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingCard from "@/components/booking/BookingCard";
import ReviewCard from "@/components/reviews/ReviewCard";
import { formatCurrency } from "@/lib/booking/pricing";
import type { Offering } from "@/types/destination";

const categoryNames = { activity: "Experience", "day-trip": "Day trip", package: "Package" } as const;
const categoryPaths = { activity: "activities", "day-trip": "day-trips", package: "packages" } as const;

export default function OfferingDetail({ offering }: { offering: Offering }) {
  const label = categoryNames[offering.category];
  const availableDate = "Dec 1 – Dec 3, 2026";
  const price = formatCurrency(offering.price, offering.currency);

  return (
    <div className="ziarra-package min-h-screen bg-ink pb-24 text-cream lg:pb-0">
      <Header />
      <main>
        <div className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
            <Link href={`/${categoryPaths[offering.category]}`} className="inline-flex items-center gap-2 text-sm font-semibold text-sand transition hover:text-gold">← Back</Link>
            <nav aria-label="Breadcrumb" className="mt-4 text-sm text-sandDim">
              <Link href={`/${categoryPaths[offering.category]}`}>{categoryNames[offering.category]}s</Link> / <span className="text-cream">{offering.title}</span>
            </nav>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-gold">{label}</p>
            <h1 className="mt-2 max-w-4xl font-display text-4xl font-semibold sm:text-5xl">{offering.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-sand">
              <span>{offering.country}</span><span>★ {offering.rating} ({offering.reviewCount})</span><span>{offering.duration}</span>
            </div>
          </div>
        </div>

        <section className="mx-auto grid max-w-7xl gap-3 px-4 py-8 sm:grid-cols-[2fr_1fr] sm:px-6 lg:px-8">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl sm:row-span-2"><Image src={offering.images[0]} alt={`${offering.title} main image`} fill priority className="object-cover" sizes="(min-width:640px) 67vw,100vw"/><span className="absolute bottom-3 right-3 rounded-full bg-ink/80 px-3 py-1 text-xs">1 / {offering.images.length}</span></div>
          {offering.images.slice(1,3).map((image,index)=><div key={image} className="relative hidden aspect-[16/10] overflow-hidden rounded-2xl sm:block"><Image src={image} alt={`${offering.title} thumbnail ${index+1}`} fill className="object-cover" sizes="33vw"/></div>)}
        </section>

        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8">
          <div>
            <nav className="sticky top-16 z-20 flex gap-7 overflow-x-auto border-b border-line bg-ink py-4 text-sm font-semibold" aria-label="Page sections">
              <a href="#overview">Overview</a><a href="#itinerary">Itinerary</a><a href="#details">Details</a><a href="#reviews">Reviews</a>
            </nav>

            <Section id="overview" title="Description"><p>{offering.shortDescription}</p></Section>

            <Section id="availability" title="Available dates">
              <div className="rounded-2xl border border-lineStrong bg-surface p-5">
                <div className="flex flex-wrap items-start justify-between gap-4"><div><p className="font-semibold text-cream">{availableDate}</p><p className="mt-1 text-sm">{offering.duration}</p></div><div className="text-right"><p className="text-xl font-semibold text-cream">{price} <span className="text-sm font-normal text-sand">/adult</span></p><span className="mt-2 inline-block rounded-full bg-green-500/15 px-3 py-1 text-xs font-semibold text-green-300">Available</span></div></div>
                <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[520px] text-left text-sm"><thead className="border-y border-line text-sandDim"><tr><th className="py-3">Category</th><th>Residents (KE)</th><th>Non-residents</th></tr></thead><tbody><tr className="border-b border-line"><td className="py-3">Adult</td><td>{price}</td><td>{price}</td></tr><tr><td className="py-3">Child</td><td>Contact us</td><td>Contact us</td></tr></tbody></table></div>
              </div>
            </Section>

            <Section id="itinerary" title="Itinerary"><div className="space-y-5">{offering.itinerary.map((item,index)=><div key={item.title} className="flex gap-4"><span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-gold font-bold text-ink">{index+1}</span><div><h3 className="font-semibold text-cream">{item.title}</h3><p className="mt-1 text-sm">{item.description}</p>{item.duration?<p className="mt-1 text-xs text-gold">{item.duration}</p>:null}</div></div>)}</div></Section>

            <Section id="details" title={`${label} details`}><dl className="grid gap-5 rounded-2xl border border-line bg-surface p-6 sm:grid-cols-2"><Detail label="Location" value={`${offering.location}, ${offering.country}`}/><Detail label="Validity period" value="Dec 1, 2026 – Dec 3, 2026"/><Detail label="Languages" value={offering.languages?.join(", ") || "English"}/><Detail label="Price" value={`${price} per adult`}/><Detail label="Group size" value={offering.groupSize || "Contact us"}/><Detail label="Meeting point" value={offering.meetingPoint || offering.location}/></dl></Section>

            <div className="grid gap-8 sm:grid-cols-2"><Section title="Highlights"><List items={offering.highlights}/></Section><Section title="Included"><List items={offering.included}/></Section></div>
            <Section title="Important information"><List items={offering.importantInformation}/><p className="mt-5">{offering.cancellationPolicy}</p></Section>
            <Section id="reviews" title="Reviews">{offering.reviews?.length?<div className="space-y-4">{offering.reviews.map(review=><ReviewCard key={review.id} review={review}/>)}</div>:<p>No reviews yet for this {label.toLowerCase()}.</p>}</Section>
          </div>
          <BookingCard offering={offering}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Section({id,title,children}:{id?:string;title:string;children:React.ReactNode}){return <section id={id} className="scroll-mt-32 border-b border-line py-9"><h2 className="font-display text-2xl font-semibold">{title}</h2><div className="mt-5 leading-7 text-sand">{children}</div></section>}
function Detail({label,value}:{label:string;value:string}){return <div><dt className="text-xs uppercase tracking-wider text-sandDim">{label}</dt><dd className="mt-1 font-medium text-cream">{value}</dd></div>}
function List({items}:{items:string[]}){return <ul className="space-y-2">{items.map(item=><li key={item} className="flex gap-3"><span className="text-gold">✓</span>{item}</li>)}</ul>}
