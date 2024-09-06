import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts.ts';
import {lusitana} from '@/app/ui/fonts.ts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
