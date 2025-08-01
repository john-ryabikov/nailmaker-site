import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import Script from "next/script";
// import YandexMetrika from "./_Metrika/YandexMetrica";

import "./globals.scss";

const manrope = Manrope({ 
  subsets: ["cyrillic", "latin"],
  preload: true,
  variable: "--manrope"
});

export const metadata: Metadata = {
  title: "Производство тротуарной плитки, гипса и строительных материалов",
  description: "Открой прибыльное мини-производство строительных материалов и зарабатывай до 400 000₽ в месяц!",
  authors: [{ name: 'Just-Site.ru' }],
  keywords: "домашний вибростол, вибростол, вибростолы формы, плитка, станок",
  robots: "noyaca",
  generator: 'Next.js',
  formatDetection: {
    telephone: false,
  },
  verification: {
    yandex: ""
  },
  icons: {
    icon: [
      { url: '/favicon.png' },
      // new URL('/favicon.png'),
    ]
  },
  openGraph: {
    images: {
      url: ""
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable}`}>
        {/* <YandexMetrika id={102673454}/> */}
        {children}
        <Script src="js/configs.js"/>
      </body>
    </html>
  );
}
