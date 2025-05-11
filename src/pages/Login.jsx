import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import { LoginLayout } from "../layout/LoginLayout";

import { LoginForm } from "../components/LoginForm";

export const Login = () => {
  return (
    <LoginLayout>
      <Box
        bg="#FBFBFB"
        alignItems="center"
        display={{ base: "block", lg: "flex" }}
      >
        <Box width={{ base: "100%", lg: "45%" }}>
          <Image src="https://images.bewakoof.com/web/rm-login-desk-v2.jpg" />
        </Box>
        <LoginForm />
      </Box>
    </LoginLayout>
  );
};
