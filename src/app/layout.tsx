import type { Metadata } from "next";
import "./globals.css";
import { inter, righteous } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Orbion Studio",
  description: "A Orbion Studio é especializada em desenvolvimento de software sob demanda e web design. Criamos soluções inovadoras e escaláveis para suas necessidades. Vamos conversar sobre como podemos ajudar seu negócio a crescer. Entre em contato!",
  authors: [
    { name: "Orbion Studio", url: "https://orbion.studio" },
    { name: "Lucas Nathan", url: "https://www.linkedin.com/in/lucasnjsilva/" },
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${righteous.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
