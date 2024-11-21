import type { Metadata } from 'next';

import Layout from './components/Layout';
import './globals.css';
import '../styles/globals.scss';

export const metadata: Metadata = {
  title: 'DevJourney',
  description: 'Ewelina Konieczkowska | Frontend Developer',
  openGraph: {
    title: "DevJourney",
    description: 'Ewelina Konieczkowska | Frontend Developer',
    url: 'https://www.dev-journey.pl/',
    type: 'website',
    images: [
      {
        url: 'https://www.dev-journey.pl/images/logo_white.png',
        width: 800,                // Zalecana szerokość
        height: 600, 
        type: 'image/png',
        alt: 'Ewelina Konieczkowska Portfolio Image',
        secureUrl: 'https://www.dev-journey.pl/_next/image?url=%2Fimages%2Flogo_white.png&w=256&q=75',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lexend+Deca&family=Sacramento&family=Unbounded&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
