import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Sidebar from "@/Components/Sidebare/Sidebar";
import Theme from "@/Components/Sidebare/theme/theme";
import Navbar from "@/Components/Navbat/Navbar";

const roboto_init = Roboto({
  subsets: ["latin"],
  weight: "300",
});
export const metadata: Metadata = {
  title: "Abdelrhman Ammar",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" dark:bg-black bg-blue-400 ">
        <Theme>
          <div className="grid grid-cols-12 gap-6 px-5 my-20 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 ">
            <div className="h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
              <Sidebar />
            </div>
            <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:shadow-custom-dark rounded-2xl lg:col-span-9 dark:bg-dark-500">
              <Navbar />
              {children}
            </div>
          </div>
        </Theme>
      </body>
    </html>
  );
}
