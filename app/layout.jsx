import Footer from "./Components/Footer";
import MyNavbar from "./Components/MyNavbar";

export const metadata = {
  title: "Next.js with Bootstrap Navbar",
  description: "Responsive navbar with Bootstrap in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MyNavbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
