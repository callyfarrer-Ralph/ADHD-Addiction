import type { Metadata } from "next";
import "@farrer/shared-ui/styles.css";
import "./globals.css";
import { SiteShell } from "@farrer/shared-ui";
import { brand, contact, navItems } from "./site";

export const metadata: Metadata = {
  title: "Online ADHD & Addiction Therapy | Cally Farrer",
  description:
    "Specialist neuro-affirming online therapy for adults with ADHD, addiction, compulsive behaviours and co-occurring emotional difficulties across the UK."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteShell brand={brand} contact={contact} navItems={navItems} theme="adhd">
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
