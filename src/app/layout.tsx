import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reels 4 Kids",
  description:
    "Reels 4 Kids é um app que reproduz o efeito de reels do Instagram. Criado com o propósito de proporcionar entretenimento às crianças, destaca-se por oferecer uma experiência cativante sem expor os pequenos a conteúdos inadequados.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
