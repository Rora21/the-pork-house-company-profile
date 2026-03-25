import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cream text-black">
        <Navbar />
        {children}
      </body>
      <footer />
    </html>
  );
}