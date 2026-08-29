import type { Metadata } from "next";
import { HomeRedesign } from "@/components/sections/HomeRedesign";

export const metadata: Metadata = {
  title: "Software Developer & Automation Architect",
  description:
    "Daniel Vlcek designs and builds custom software, automation and applied AI systems that reduce manual work and make companies easier to run.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Daniel Vlcek | Software Developer & Automation Architect",
    description:
      "Custom software, automation and applied AI systems built around how your business actually works.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return <HomeRedesign />;
}
