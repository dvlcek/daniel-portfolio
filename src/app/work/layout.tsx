import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Websites, Automation & Business Systems",
  description:
    "Case studies of premium websites, business operating systems, automation workflows, internal dashboards, CRM flows, and platform rebuilds built by Daniel Vlcek.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Case Studies | Daniel Vlcek",
    description:
      "Explore websites, platform rebuilds, automation systems, dashboards, and CRM workflows built around business outcomes.",
    url: "/work",
    type: "website",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
