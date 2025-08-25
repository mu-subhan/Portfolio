import NavbarWrapper from "./NavbarWrapper";
import './globals.css';


export const metadata = {
  title: 'Muhammad Subhan | Portfolio',
  description: 'Professional software engineer portfolio',
};


    export default function RootLayout({ children }: { children: React.ReactNode }) {
      return (
        <html lang="en">
          <body className="min-h-screen ">
            <NavbarWrapper />
            {children}
          </body>
        </html>
      );
    }
