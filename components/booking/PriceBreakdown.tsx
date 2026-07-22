import { formatCurrency } from "@/lib/booking/pricing";

type Props = { currency: "KES" | "USD"; subtotal: number; serviceFee: number; pickupFee: number; total: number };

function Row({ label, value, total = false }: { label: string; value: string; total?: boolean }) {
  return <div className={`flex min-w-0 items-start justify-between gap-4 ${total ? "border-t border-line pt-3 text-base font-semibold sm:text-lg" : ""}`}><dt className="min-w-0">{label}</dt><dd className="shrink-0 text-right">{value}</dd></div>;
}

export default function PriceBreakdown({ currency, subtotal, serviceFee, pickupFee, total }: Props) {
  return <dl className="space-y-3 text-sm"><Row label="Subtotal" value={formatCurrency(subtotal, currency)} /><Row label="Development service fee" value={formatCurrency(serviceFee, currency)} />{pickupFee ? <Row label="Demo pickup" value={formatCurrency(pickupFee, currency)} /> : null}<Row label="Total" value={formatCurrency(total, currency)} total /></dl>;
}
