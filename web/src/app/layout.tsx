import type { Metadata } from "next";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "Workout Recommendation System",
  description: "AI-powered workout recommendations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>
          <div className="app">
            <header className="header">
              <div className="container">
                <h1 className="title">💪 Workout Recommendations</h1>
                <p className="subtitle">AI-powered personalized fitness</p>
              </div>
            </header>
            <main className="main">
              <div className="container">{children}</div>
            </main>
            <footer className="footer">
              <div className="container">
                <p>&copy; 2025 Workout Recommendation System</p>
              </div>
            </footer>
          </div>
        </ApolloWrapper>
      </body>
    </html>
  );
}
