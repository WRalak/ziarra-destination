import type { OfferingCategory } from "./destination";
export type DemoPaymentMethod = "M-Pesa" | "Card" | "Paystack";
export interface DemoBooking {
  reference: string; offeringId: string; offeringSlug: string; offeringTitle: string; category: OfferingCategory;
  country: string; date: string; adults: number; children: number; childAges: number[]; rooms: number;
  pickup: boolean; notes: string; firstName: string; lastName: string; email: string; phone: string;
  residence: string; specialRequests: string; currency: "KES" | "USD"; unitPrice: number;
  subtotal: number; serviceFee: number; pickupFee: number; total: number; paymentMethod: DemoPaymentMethod;
  status: "Confirmed" | "Pending" | "Cancelled"; createdAt: string;
}

