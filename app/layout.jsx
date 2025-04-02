import Footer from "./Components/Footer";
import MyNavbar from "./Components/MyNavbar";

export const metadata = {
  title: "Ramanujan Academic Institute",
  description: "Educational Institute",
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
