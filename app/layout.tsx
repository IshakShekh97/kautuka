import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const recursive = Recursive({
  subsets: ["latin"],
  weight: ["300", "400", "700", "500", "600", "800", "900"],
});

export const metadata: Metadata = {
  title: "Kautuka",
  description: "The authentic Shop for all your clothing needs",
  icons: [
    {
      rel: "icon",
      href: "/logo.png",
      url: "/logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${recursive.className} antialiased`}>
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster richColors closeButton />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
