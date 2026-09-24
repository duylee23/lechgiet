import { inter } from '@/app/ui/fonts';
import '@/app/ui/global.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
