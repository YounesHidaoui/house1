import { Metadata } from "next";
import "../../styles/globals.css";

import { Inter } from 'next/font/google';
// import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '../components/header';
import Footer from '../components/Footer';

import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang='en'>
//       <body className={inter.className}>
//         <ClerkProvider>
//           <Header />
//           {children}
//           <Footer/>
//         </ClerkProvider>
//       </body>
//     </html>
//   );
// }



let title = "House Design";
let description = "Générez la chambre de vos rêves en quelques secondes.";
let ogimage = "https://roomgpt-demo.vercel.app/og-image.png";
let sitename = "HouseDesign.ma";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: "https://roomgpt-demo.vercel.app",
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
 
      <body className="">
        <ClerkProvider>
        <Header/> 
        {children}
        <Analytics />
        <Footer/>
        </ClerkProvider>
        
      </body>
    </html>
  );
}
