import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://aliwaris-labs.github.io'),
  alternates: { canonical: '/' },
  title: 'Ali Waris | Test Automation Engineer',
  description: 'API integration and performance testing projects by Ali Waris. Cucumber, Java, JMeter and Grafana.',
  openGraph: {
    title: 'Ali Waris | Test Automation Engineer',
    description: 'API integration and performance testing projects with Cucumber, Java, JMeter and Grafana.',
    url: 'https://aliwaris-labs.github.io/',
    siteName: 'Ali Waris Portfolio',
    type: 'website',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Ali Waris — Test Automation Engineer',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ali Waris | Test Automation Engineer',
    description: 'API integration and performance testing projects with Cucumber, Java, JMeter and Grafana.',
    images: ['/og-image.png'],
  },
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
