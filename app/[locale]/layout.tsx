import type { Metadata } from "next";
import { Montserrat, Source_Sans_3, Noto_Sans_Kannada } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from "next/navigation";
import "../globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const notoSansKannada = Noto_Sans_Kannada({
  variable: "--font-noto-kannada",
  subsets: ["kannada"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Best Cab Service Gauribidanur | Reliable Taxi at ₹12/km | 24/7 Available",
  description: "Book premium cab service in Gauribidanur at ₹12 per km. 5-seater & 7-seater vehicles available 24/7 for local and outstation travel. Call 9019416460 now!",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

const locales = ['en', 'kn'];

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}>) {
  const { locale = 'en' } = await params;

  // Validate locale
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${sourceSans.variable} ${notoSansKannada.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
