import type { Metadata } from "next";
import { notFound } from "next/navigation";
import OfferingDetail from "@/components/destinations/OfferingDetail";
import { getOfferingBySlug, getOfferingsByCategory } from "@/lib/services/destinations";
export function generateStaticParams(){return getOfferingsByCategory("package").map(item=>({slug:item.slug}))}
export function generateMetadata({params}:{params:{slug:string}}):Metadata{const item=getOfferingBySlug(params.slug,"package");return item?{title:`${item.title} | Demo Package`,description:item.shortDescription}:{title:"Package not found"}}
export default function Page({params}:{params:{slug:string}}){const item=getOfferingBySlug(params.slug,"package");if(!item)notFound();return <OfferingDetail offering={item}/>}

