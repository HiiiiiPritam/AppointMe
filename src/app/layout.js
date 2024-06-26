import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={inter.className}>
          {children}
          <script src="https://cdn.lordicon.com/lordicon.js"></script>
        </body>
      </SessionProvider>
    </html>
  );
}
