import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Tell Me What You Want to Improve",
  description:
    "Contact Daniel Vlcek to discuss a website, platform, business automation, internal dashboard, CRM workflow, or system remake.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Daniel Vlcek | Websites, Platforms & Automation",
    description:
      "Discuss websites, platform rebuilds, CRM workflows, business automation, and internal dashboards for companies in Austria and Europe.",
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
