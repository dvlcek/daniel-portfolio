import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Daniel Vlcek — Software Developer & Automation Architect",
  description:
    "Automation systems, modern web builds (Next.js), and full redesigns for companies that want speed and scalability.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="noise">

        {children}
      </body>
    </html>
  );
}