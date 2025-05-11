import {
  Box,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";

import logo from "../../assets/logo.svg";

import cartIcon from "../../assets/cartLogo.svg";

//React Icons
import { LuSearch } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box
      as="header"
      width="100%"
      bg="white"
      position="sticky"
      top="0"
      zIndex="1000"
      borderBottom="1px solid gray"
    >
      <Box>
        <Flex width="78%" margin="auto" p={4} justifyContent="space-between">
          <Flex className="left-header-container" gap={10} alignItems="center">
            <Box>
              <Image src={logo} width="150px" />
            </Box>

            <Box
              as="ul"
              listStyle="none"
              display="flex"
              gap={4}
              letterSpacing={1}
              fontSize="14px"
            >
              <li>
                <Link to="/men">MEN</Link>
              </li>
              <li>
                <Link to="/women">WOMEN</Link>
              </li>
              <li>
                <Link>MOBILE COVER</Link>
              </li>
            </Box>
          </Flex>

          <Flex
            as="ul"
            className="right-header-item"
            alignItems="center"
            gap={4}
          >
            <li>
              <InputGroup
                startElement={<LuSearch size={20} />}
                bg="gray.100"
                borderRadius="none"
                padding="0 8px"
                width={{ base: "250px", lg: "300px" }}
              >
                <Input
                  placeholder="Search for products"
                  outline="none"
                  size="md"
                  border="none"
                />
              </InputGroup>
            </li>
            <li>|</li>
            <li>
              <Text fontSize="12px" fontWeight="semibold">
                <Link to="/login">LOGIN</Link>
              </Text>
            </li>
            <li>
              <Icon as={CiHeart} boxSize={6} color="black" />
            </li>

            <li>
              <Image src={cartIcon} />
            </li>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
