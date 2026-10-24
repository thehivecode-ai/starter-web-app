import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My hive app",
  description: "Say what your app does and who it is for.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
        {children}
      </body>
    </html>
  );
}
