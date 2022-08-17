import FooterTwoRows from "./FooterTwoRows";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      {children}
      <FooterTwoRows />
    </>
  );
}
