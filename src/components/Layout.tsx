import FooterTwoRows from "./FooterTwoRows";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <FooterTwoRows />
    </>
  );
}
