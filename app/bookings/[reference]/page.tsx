import Header from "@/components/layout/Header"; import Footer from "@/components/layout/Footer"; import BookingConfirmation from "@/components/booking/BookingConfirmation";
export default function ConfirmationPage({params}:{params:{reference:string}}){return <div className="min-h-screen bg-ink text-cream"><Header/><main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8"><BookingConfirmation reference={params.reference}/></main><Footer/></div>}

