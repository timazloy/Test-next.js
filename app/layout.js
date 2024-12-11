import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import {Roboto} from "next/font/google";

const inter = Roboto({subsets: ['latin'], weight: ['400']})

export const metadata = {
  title: "NextJS_test",
  description: "Главная страница",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
          <Header/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
