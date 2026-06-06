import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Business Systems, Websites & Automation",
  description:
    "Case studies of websites, business platforms, automation systems, internal dashboards, CRM workflows, and platform remakes built by Daniel Vlcek.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work | Daniel Vlcek",
    description:
      "Explore websites, platform builds, automation systems, dashboards, and CRM workflows built around real business problems.",
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
