"use client";
import { useState } from "react";
export default function DemoBookingButton(){const [message,setMessage]=useState(false);return <div><button type="button" onClick={()=>setMessage(true)} className="w-full rounded-xl bg-gold px-5 py-3.5 font-semibold text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-cream">Request this demo trip</button>{message?<p role="status" className="mt-3 rounded-lg bg-gold/10 p-3 text-sm leading-6 text-gold">Demo mode: real booking will be available after backend integration.</p>:null}</div>}
