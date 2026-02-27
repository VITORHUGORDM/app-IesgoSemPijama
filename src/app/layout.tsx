import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Iesgo Sem Pijama",
  description:
    "Evento IESGO Sem Pijama - Uma noite intensa dedicada à inovação, tecnologia e criatividade",
  keywords: ["IESGO", "evento", "tecnologia", "inovação", "programação"],
  icons: {
    icon: "/Logo.png",
    shortcut: "/Logo.png",
    apple: "/fundo.PNG",
  },
  openGraph: {
    title: "Iesgo Sem Pijama",
    description:
      "Uma noite intensa dedicada à inovação, tecnologia e criatividade",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
