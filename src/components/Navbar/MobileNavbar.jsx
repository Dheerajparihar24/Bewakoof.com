import { Box, Flex, Icon, Image } from "@chakra-ui/react";

import mobileLogo from "../../assets/mobileLogo.svg";
import cartIcon from "../../assets/cartLogo.svg";
import { CiHeart } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

export const MobileNavbar = () => {
  return (
    <Flex
      as="header"
      width="100%"
      bg="white"
      position="sticky"
      top="0"
      zIndex="1000"
      px={{ base: "6", md: "10" }}
      justify="space-between"
      background="#FFD232"
    >
      <Box display="flex" alignItems="center" gap={{ base: "2", md: "4" }}>
        <Icon as={CiMenuBurger} boxSize={6} color="black" />
        <Image src={mobileLogo} width="50px" />
      </Box>

      <Flex as="ul" alignItems="center" gap={{ base: "2", md: "4" }}>
        <li>
          <Icon as={CiSearch} boxSize={8} color="black" />
        </li>
        <li>
          <Icon as={CiHeart} boxSize={8} color="black" />
        </li>

        <li>
          <Image src={cartIcon} boxSize={6} />
        </li>
      </Flex>
    </Flex>
  );
};
