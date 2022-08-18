import React from "react";
import { Box } from "@chakra-ui/react";
import { CloseIcon, MinusIcon } from "@chakra-ui/icons";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const MenuToggle = ({ toggle, isOpen }) => {
    return (
      <Box display={{ base: "block", md: "none" }} onClick={toggle}>
        {isOpen ? <CloseIcon /> : <MinusIcon />}
      </Box>
    );
  };
};
