import './globals.scss';
import { Providers } from "@/redux/provider";
import {Poppins} from 'next/font/google';
import localFont from "next/font/local";

export const metadata = {
  title: 'Chhayaa Education',
  description: 'Spacial learning Project',
}

const poppins = Poppins({
  weight: ["400",'500','600','700','800'],
  subsets: ["latin"],
  variable: "--font-primary",
});

const spartan = localFont({
  src: [
    {
      path: "../../public/assets/fonts/spartan-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/spartan-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/spartan-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/spartan-semiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/spartan-light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-secondary",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="favicon.ico" sizes="any" />
      </head>
      <body className={`${poppins.variable} ${spartan.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
