import type { Metadata } from "next";
import { notFound } from "next/navigation";
import OfferingDetail from "@/components/destinations/OfferingDetail";
import { getOfferingBySlug, getOfferingsByCategory } from "@/lib/services/destinations";
export function generateStaticParams(){return getOfferingsByCategory("activity").map(item=>({slug:item.slug}))}
export function generateMetadata({params}:{params:{slug:string}}):Metadata{const item=getOfferingBySlug(params.slug,"activity");return item?{title:`${item.title} | Demo Activity`,description:item.shortDescription}:{title:"Activity not found"}}
export default function Page({params}:{params:{slug:string}}){const item=getOfferingBySlug(params.slug,"activity");if(!item)notFound();return <OfferingDetail offering={item}/>}

