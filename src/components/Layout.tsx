import FooterTwoRows from "./FooterTwoRows";
import { Box } from "@chakra-ui/react";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

export default function Layout({ children }) {
  return (
    <>
      <DarkModeSwitch />
      {children}
      <FooterTwoRows />
    </>
  );
}
