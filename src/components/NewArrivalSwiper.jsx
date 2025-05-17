import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { NewArrivalCard } from "./NewArrivalCard";

import { products } from "../data/productData";

export const NewArrivalSwiper = () => {
  return (
    <Box>
      <Heading textAlign="center" fontWeight="normal"> NEW ARRIVALS</Heading>
      <Flex gap={4} mt={4}>
        {products.map((items, index) => (
          <NewArrivalCard key={index} {...items} />
        ))}
      </Flex>
    </Box>
  );
};
