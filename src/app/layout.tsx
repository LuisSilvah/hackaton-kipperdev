import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
// import { Header } from "./components";
import { FooterComponent } from "../components/component/footer-component";
import "./styles/globals.css";
import { Header } from "./components";

const roboto = Roboto({
  weight: ["400", "100", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const poppins = Poppins({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Hackaton Kipper Dev",
  description:
    "Tecnologia Contra Crises Climáticas: Soluções para Cidades Resilientes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${poppins.variable} bg-[#CBDFD1]`}
        // cz-shortcut-listen="true"
      >
        <Header />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
