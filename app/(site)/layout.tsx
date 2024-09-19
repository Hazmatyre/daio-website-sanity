import "../globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import {
  VisualEditing,
  toPlainText,
  type PortableTextBlock,
} from "next-sanity";
import { Inter } from "next/font/google";
import { EB_Garamond } from "next/font/google";
import { Montserrat } from "next/font/google";
import { draftMode } from "next/headers";
import { Suspense } from "react";

import AlertBanner from "./alert-banner";
import PortableText from "./portable-text";

import type { SettingsQueryResult } from "@/sanity.types";
import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import { Button } from "@/components/ui/button";
import { Footer3 } from "@/components/blocks/footer3";
import { Toaster } from "@/components/ui/sonner";
import { Navbar3 } from "@/components/blocks/navbar3";

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFDF5' },
    { media: '(prefers-color-scheme: dark)', color: '#FFFDF5' },
  ],
}

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch<SettingsQueryResult>({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  });
  // const title = settings?.title || demo.title;
  const title = "DAIO International"
  const description = settings?.description || demo.description;
  

  // const ogImage = resolveOpenGraphImage(settings?.ogImage);
  let metadataBase: URL | undefined = undefined;
  // try {
  //   metadataBase = settings?.ogImage?.metadataBase
  //     ? new URL(settings.ogImage.metadataBase)
  //     : undefined;
  // } catch {
  //   // ignore
  // }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    // description: toPlainText(description),
    openGraph: {
      // images: ogImage ? [ogImage] : [],
    },
  };
}

const eb_garamond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${eb_garamond.variable} bg-white text-black scroll-smooth`}>
      <body className="bg-background">
        <section className="min-h-screen font-sans">
          {draftMode().isEnabled && <AlertBanner />}
          <Suspense>
            <Navbar3 />
          </Suspense>
          <main>{children}</main>
          <Suspense>
            <Footer3 />
          </Suspense>
        </section>
        {draftMode().isEnabled && <VisualEditing zIndex={1000} />}
        <SpeedInsights />
        <Toaster
          toastOptions={{
            unstyled: false,
            classNames: {
              // toast: 'bg-blue-400',
              // title: 'text-red-400',
              // description: 'text-red-400',
              // actionButton: 'bg-zinc-400',
              // cancelButton: 'bg-background !bg-black border-foreground text-foreground',
              closeButton: 'bg-primary border-secondary text-primary-foreground border-foreground hover:!bg-primary hover:!border-foreground hover:opacity-80 duration-100',
            },
          }} />
      </body>
    </html>
  );
}
