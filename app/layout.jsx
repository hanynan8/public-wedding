// app/layout.jsx

import "./globals.css";

export const metadata = {
  title: "Wedding Invitation — Ziad & Jana",
  description:
    "You are cordially invited to celebrate the wedding of Ziad and Jana. Join us for an evening of love, laughter, and cherished memories in Alexandria, Egypt.",

  keywords: [
    "wedding invitation",
    "electronic invitation",
    "Ziad Jana wedding",
    "دعوة إلكترونية",
    "دعوة زفاف",
    "حفل زفاف",
    "اسكندرية",
  ].join(", "),

  authors: [{ name: "Ziad & Jana" }],
  creator: "Wedding Invitation",

  robots: {
    index: false,
    follow: false,
  },

  openGraph: {
    type: "website",
    locale: "ar_EG",
    alternateLocale: ["en_US"],
    siteName: "Wedding Invitation",
    title: "You're Invited — Ziad & Jana",
    description:
      "Join us as we celebrate the beginning of our new life together. An evening of love, laughter, and cherished memories at Paradise Hotel, El Maamoura, Alexandria.",
    images: [
      {
        url: "/1.jpeg",
        width: 1200,
        height: 630,
        alt: "Ziad & Jana Wedding Invitation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "You're Invited — Ziad & Jana",
    description:
      "Join us for an evening of love, laughter, and cherished memories in Alexandria.",
    images: [
      "/1.jpeg",
    ],
  },

  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Ziad & Jana",
    "mobile-web-app-capable": "yes",
    "theme-color": "#7a1a1a",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 💍 Emoji Favicon */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💍</text></svg>"
        />
        {/* Apple Touch Icon */}
        <link
          rel="apple-touch-icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%237a1a1a'/><text y='.9em' font-size='80' x='10'>💍</text></svg>"
        />
        <meta name="theme-color" content="#7a1a1a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Wedding of Ziad & Jana",
              description:
                "You are cordially invited to celebrate the wedding of Ziad and Jana.",
              startDate: "2026-08-21T19:00:00",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
              location: {
                "@type": "Place",
                name: "Paradise in hotel on the beach",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "El Maamoura",
                  addressLocality: "Alexandria",
                  addressCountry: "EG",
                },
              },
              organizer: {
                "@type": "Person",
                name: "Ziad & Jana",
              },
            }),
          }}
        />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#FFF1F0" }}>
        {children}
      </body>
    </html>
  );
}