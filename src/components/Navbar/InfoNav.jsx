import { Box, Flex, Text } from "@chakra-ui/react";

export const InfoNav = () => {
  return (
    <Box p={1} bg="gray.100" fontSize="10px">
      <Flex width="95%" margin="auto" justifyContent="space-between">
        <Flex gap={4}>
          <Text>Offer</Text>
          <Text>Facebook</Text>
          <Text>Download App</Text>
          <Text>Find a store near me</Text>
        </Flex>

        <Flex gap={4}>
          <Text>Contact us</Text>
          <Text>Track Order</Text>
        </Flex>
      </Flex>
    </Box>
  );
};
