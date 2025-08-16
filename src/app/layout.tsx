import Navbar from '../component/Navbar';
import './globals.css';


export const metadata = {
  title: 'Muhammad Subhan | Portfolio',
  description: 'Professional software engineer portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen ">
        <Navbar />
        {children}
      </body>
    </html>
  );
}