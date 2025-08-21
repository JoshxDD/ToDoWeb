import "./globals.css";               // ← this line is required
import { Inter } from "next/font/google";

export const metadata = { title: "Todos", description: "Next.js + TS + localStorage" };

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-dvh bg-gray-100 text-gray-800 antialiased`}>
        <div className="mx-auto my-8 w-full max-w-xl sm:max-w-2xl px-4 py-6 bg-white shadow-md rounded-lg">
          {children}
        </div>
      </body>
    </html>
  );
}
