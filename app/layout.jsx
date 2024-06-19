import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/common/Header";
import PageTransition from "../components/common/PageTransition";
import StairTransition from "../components/common/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: "--font-jetbrainsMono"
});

// const inter = Inter({
//   subsets: ['latin'],
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   variable: "--font-inter"
// });

export const metadata = {
  title: "Ryu Alvano",
  description: "Providing you with satisfying result",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
};
