import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import CartDrawer from "@/components/CartDrawer";
import IntroAnimation from "@/components/IntroAnimation";

export const metadata = {
  title: "KENKIE | Home of the Future Gadgets",
  description:
    "KENKIE - Smart gadgets and everyday essentials for every home. Shop electronics, kitchen, storage and furniture.",
  icons: {
    icon: "/assets/brand/logo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <IntroAnimation />
        <Providers>
          <Header />
          <main className="site-main">{children}</main>
          <NewsletterSection />
          <Footer />
          <CartDrawer />
        </Providers>
      </body>
    </html>
  );
}
