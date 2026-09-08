import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://aliwaris-labs.github.io'),
  alternates: { canonical: '/' },
  title: 'Ali Waris | Test Automation Engineer',
  description: 'API integration and performance testing projects by Ali Waris. Cucumber, Java, JMeter and Grafana.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
