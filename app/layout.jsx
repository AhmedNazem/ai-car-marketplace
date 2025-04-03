import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
export const metadata = {
  title: "Ai Car marketplace",
  description: "A marketplace for buying and selling cars using AI",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={` ${inter.className} antialiased`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto text-center px-4 text-gray-600">
              <p>Made with ☕ by Ahmed</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
