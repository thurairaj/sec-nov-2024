import './globals.css';
import Home from '@/app/page';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Home></Home>
      </body>
    </html>
  );
}
