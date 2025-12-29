import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "QuizBeat - Turn Any Textbook Into an Interactive Quiz",
  description: "Upload your study materials, let AI create quizzes, and compete with friends in real-time. Learning has never been this fun with QuizBeat's AI-powered quiz generation.",
  keywords: ["quiz", "AI", "education", "study", "learning", "textbook", "flashcards", "multiplayer", "kahoot"],
  authors: [{ name: "QuizBeat" }],
  openGraph: {
    title: "QuizBeat - AI-Powered Study Quizzes",
    description: "Transform your textbooks into interactive quizzes with AI. Compete with friends in real-time!",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuizBeat - Turn Any Textbook Into an Interactive Quiz",
    description: "Upload your study materials, let AI create quizzes, and compete with friends in real-time.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased animated-gradient min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
