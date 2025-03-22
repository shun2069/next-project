import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import type {Metadata}from "next";
import Header from "./_compornents/Header";
import Footer from "./_compornents/Footer";

// app/layout.tsx 例
export const metaGAdata = {
  title: 'あなたのサイト名',
  description: 'サイトの説明',
  other: {
    'google-site-verification': 'e0IVfv1IsM9T7fpuVXEhZT5kwGS-BxQ2LzckhaaeSb8', // ←ここにコードを入れる
  }
};

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3007'),
  title: {
    template: '%s | シンプルなコーポレートサイト',
    default: 'シンプルなコーポレートサイト',
  },
  description:
    '「Next.js＋ヘッドレスCMSではじめる！ かんたん・モダンWebサイト制作入門」で作成されるサイトです。',
  openGraph: {
    title: 'シンプルなコーポレートサイト',
    description:
      '「Next.js＋ヘッドレスCMSではじめる！ かんたん・モダンWebサイト制作入門」で作成されるサイトです。',
    images: ['/ogp.png'],
  },
  alternates: {
    canonical: 'http://localhost:3007',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-25D40E0GWG" />
    </html>
  );
}
