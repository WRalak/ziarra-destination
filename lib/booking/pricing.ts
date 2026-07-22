import type { Offering } from "@/types/destination";
export const DEMO_SERVICE_FEE_RATE = 0.05;
export function calculateBookingPrice(offering: Offering, adults: number, children: number, pickup: boolean) {
  const billableTravellers = Math.max(1, adults + children);
  const subtotal = offering.price * billableTravellers;
  const serviceFee = Math.round(subtotal * (offering.serviceFeeRate ?? DEMO_SERVICE_FEE_RATE));
  const pickupFee = pickup ? (offering.pickupPrice ?? 0) : 0;
  return { billableTravellers, subtotal, serviceFee, pickupFee, total: subtotal + serviceFee + pickupFee };
}
export function formatCurrency(amount:number,currency:"KES"|"USD"){return new Intl.NumberFormat(currency==="KES"?"en-KE":"en-US",{style:"currency",currency,maximumFractionDigits:0}).format(amount)}

