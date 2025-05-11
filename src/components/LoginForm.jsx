import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  Link,
  Text,
} from "@chakra-ui/react";
import indiaFlag from "../assets/Images/india-flag-round-1639566913.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";

export const LoginForm = () => {
  const [mobile, setMobile] = useState("");
  return (
    <Box
      width={{ base: "100%", lg: "55%" }}
      py={{ base: "10px", lg: "20px" }}
      margin={1}
    >
      <Box width="90%" m="auto">
        <Box>
          <Heading fontSize={{ base: "18px", lg: "20px" }}>Login / Signup</Heading>
          <Text color="gray.500" fontSize={{ base: "14px", lg: "18px" }}>
            Join us now to be a part of Bewakoof® family.
          </Text>
        </Box>

        <Box display="flex" flexDir="column" gap={6} my={6}>
          <InputGroup
            shadow="sm"
            p="0 10px"
            alignItems="center"
            borderRadius="md"
            startElement={
              <Flex align="center" gap="5px" marginRight={5}>
                <Image src={indiaFlag} width="20px" />
                <Text fontSize="sm" fontWeight="bold" color="gray.700">
                  +91
                </Text>
              </Flex>
            }
          >
            <Input
              outline="none"
              border="none"
              placeholder="Enter Mobile Number"
              ml="20px"
              size={{ base: "lg", lg: "2xl" }}
              type="number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </InputGroup>
          <Button
            size={{ base: "md", lg: "lg" }}
            variant="subtle"
            width="100%"
            bg={mobile.length === 10 ? "#FFD232" : "gray.200"}
          >
            CONTINUE
          </Button>
        </Box>

        <Flex align="center" width="100%">
          <Box flex="1" height="1px" bg="gray.400"></Box>
          <Text mx={2} fontSize="14px">
            OR
          </Text>
          <Box flex="1" height="1px" bg="gray.400"></Box>
        </Flex>

        <Flex gap={4} direction={{ base: "column", md: "row" }} my={6}>
          <Button
            flex={1}
            colorScheme="red"
            variant="outline"
            shadow="md"
            p={2}
            size={{ base: "md", lg: "xl" }}
            color="gray.500"
          >
            <FcGoogle />
            Google
          </Button>

          <Button
            flex={1}
            variant="outline"
            colorScheme="blue"
            p={2}
            shadow="md"
            size={{ base: "md", lg: "xl" }}
            color="gray.500"
          >
            <FaFacebook />
            Facebook
          </Button>
        </Flex>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          gap={4}
        >
          <Checkbox.Root variant="outline">
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>
              Fetch my address for blazing fast checkout
            </Checkbox.Label>
          </Checkbox.Root>

          <Text fontSize={{ base: "14px", lg: "16px" }}>
            By creating an account or logging in, you agree with Bewakoof's T&C
            and Privacy Policy and Shiprocket's T&C and{" "}
            <Link color="blue">Privacy Policy</Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
