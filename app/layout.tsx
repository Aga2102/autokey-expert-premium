import type { Metadata } from "next";
import "./globals.css";
import "./contact.css";

export const metadata: Metadata = {
  title: "AutoKey Expert | Klucze samochodowe i immobilizery",
  description: "Dorabianie i programowanie kluczy samochodowych, immobilizery i naprawa pilotów.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pl"><body>{children}</body></html>;
}
