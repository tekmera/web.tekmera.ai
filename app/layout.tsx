import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tekmera | Translate Expertise Into Products and Systems",
    template: "%s | Tekmera",
  },
  description:
    "Tekmera helps founders and organizations turn deep expertise into working products and systems. Translate, shape, and ship the right first version.",
  metadataBase: new URL("https://tekmera.ai"),
  openGraph: {
    type: "website",
    title: "Tekmera | Translate Expertise Into Products and Systems",
    description:
      "Tekmera helps founders and organizations turn deep expertise into working products and systems. Translate, shape, and ship the right first version.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b4c0b72d-da6b-4b71-bbeb-e280df4b03dc/id-preview-5d83d5f6--3ddec6cf-5315-407d-b22a-8302a91a4870.lovable.app-1771430233883.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tekmera | Translate Expertise Into Products and Systems",
    description:
      "Tekmera helps founders and organizations turn deep expertise into working products and systems. Translate, shape, and ship the right first version.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b4c0b72d-da6b-4b71-bbeb-e280df4b03dc/id-preview-5d83d5f6--3ddec6cf-5315-407d-b22a-8302a91a4870.lovable.app-1771430233883.png",
    ],
  },
  authors: [{ name: "Tekmera" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Tekmera",
  url: "https://tekmera.ai",
  description:
    "Tekmera helps founders and organizations turn deep expertise into working products and systems. Translate, shape, and ship the right first version.",
  areaServed: "North America",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fredericton",
    addressRegion: "NB",
    addressCountry: "CA",
  },
  knowsAbout: [
    "Product Development",
    "AI Strategy",
    "Systems Architecture",
    "Domain Expertise Translation",
    "Enterprise Systems",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9SNWZVMYF1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9SNWZVMYF1');
            `,
          }}
        />
      </head>
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
