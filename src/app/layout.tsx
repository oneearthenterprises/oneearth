import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'One Earth Enterprises | IT Solutions, E-Commerce & Ayurvedic Wellness, Real Estate',
  description:
    'One Earth Enterprises is a premier business group driving growth across core IT sectors, real estate, global e-commerce, and premium Ayurvedic herbal infusion wellness.',
  metadataBase: new URL('https://www.theoneearthenterprises.com'),
  alternates: {
    canonical: 'https://www.theoneearthenterprises.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  keywords: [
    'One Earth Enterprises',
    'IT solutions',
    'e-commerce',
    'real estate',
    'Ayurvedic wellness',
    'herbal infusion',
    'business group',
    'digital transformation',
    'sustainable growth',
  ],
  verification: {
    google: 'fviheKb8q1MeaBHGSuQtwO2ZAeKFedjQ-CaCu97lUFE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Google Ads / gtag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17948940606"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17948940606');
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1647589452988787');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

