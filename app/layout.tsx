import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

import { connection } from "next/server";
import { Suspense } from "react";

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

async function UTSSR() {
  await connection();
  return <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />;
}

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
            <Suspense>
              <UTSSR />
            </Suspense>
            {children}
            <Toaster richColors closeButton />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
