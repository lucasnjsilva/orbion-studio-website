import type { Metadata } from "next";
import { Righteous, Inter } from "next/font/google";
import "./globals.css";

const righteous = Righteous({
  variable: "--font-righteous",
  weight: ["400"],
  subsets: ["latin"],
}); 

const inter = Inter({ 
  variable: "--font-inter",
  subsets: ["latin"],
});

export const fonts = {
  righteous,
  inter,
}

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
