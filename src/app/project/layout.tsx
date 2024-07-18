import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider"
import { NavigationMenuDemo } from "@/components/ui/navbar/navbar";
import Footer from "@/components/ui/footer.tsx/footer";
import BackToTop from "@/components/ui/back-to-top";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " %s | Matt Teixeira | Product, Craftsmanship, and Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} dark:bg-gray-950 bg-white font-normal min-w-screen min-h-screen max-w-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationMenuDemo />
          {children}
          <BackToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html >
  );
}
