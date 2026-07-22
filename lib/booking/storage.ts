import type { DemoBooking } from "@/types/booking";
const BOOKINGS_KEY="ziarra-demo-bookings"; const SAVED_KEY="ziarra-demo-saved";
export function getDemoBookings():DemoBooking[]{if(typeof window==="undefined")return [];try{return JSON.parse(localStorage.getItem(BOOKINGS_KEY)??"[]")}catch{return []}}
export function saveDemoBooking(booking:DemoBooking){localStorage.setItem(BOOKINGS_KEY,JSON.stringify([booking,...getDemoBookings().filter(item=>item.reference!==booking.reference)]))}
export function getSavedOfferingIds():string[]{if(typeof window==="undefined")return [];try{return JSON.parse(localStorage.getItem(SAVED_KEY)??"[]")}catch{return []}}
export function toggleSavedOffering(id:string){const current=getSavedOfferingIds();const next=current.includes(id)?current.filter(item=>item!==id):[...current,id];localStorage.setItem(SAVED_KEY,JSON.stringify(next));window.dispatchEvent(new Event("ziarra-saved-change"));return next.includes(id)}
export function createDemoReference(){const date=new Date();const stamp=`${date.getFullYear()}${String(date.getMonth()+1).padStart(2,"0")}${String(date.getDate()).padStart(2,"0")}`;return `ZRA-DEMO-${stamp}-${Math.floor(1000+Math.random()*9000)}`}
