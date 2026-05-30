import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Book a Strategy Call",
  description:
    "Book a strategy call with Daniel Vlcek to discuss your website rebuild, business automation, internal dashboard, CRM workflow, or custom business system.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Daniel Vlcek | Book a Strategy Call",
    description:
      "Discuss premium websites, platform rebuilds, CRM workflows, business automation, and internal dashboards for companies in Austria and Europe.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
