import { Inter } from "next/font/google";
import "./globals.css";

// components
import NavBar from "./components/NavBar";
import { ThemeProvider } from "./components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mark Slorach Sanity Next.js Blog",
  description: "A blog to practice using Sanity.io with Next.js 14.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <main className="max-w-2xl mx-auto px-4 lg:px-0">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
