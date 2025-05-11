import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar/Navbar";

export const LoginLayout = ({ children }) => {
  const showNav = useBreakpointValue({ base: false, lg: true });
  return (
    <Box>
      {showNav && <Navbar />}
      {children}
    </Box>
  );
};
