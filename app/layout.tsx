import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Providers from "./Providers";
import NavBar from "./components/NavBar";
import SearchBox from "./components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMDB Clone",
  description: "This is a IMDB clone website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <NavBar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
