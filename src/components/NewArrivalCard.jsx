import { Badge, Box, Flex, Icon, Image, Text } from "@chakra-ui/react";

import { FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

export const NewArrivalCard = ({
  image,
  badgeText,
  brand,
  title,
  price,
  originalPrice,
  discount,
  rating,
}) => {
  return (
    <Box
      maxW="300px"
      borderWidth="1px"
      overflow="hidden"
      boxShadow="md"
      position="relative"
      bg="white"
      cursor="pointer"
    >
      {/* Offer badge */}
      <Badge
        position="absolute"
        top="0"
        left="0"
        zIndex="1000"
        variant="solid"
        colorPalette="green"
        borderRadius="none"
        padding="1px"
      >
        {badgeText}
      </Badge>

      {/* Product Image */}
      <Box overflow="hidden">
        <Image
          src={image}
          alt={title}
          width="100%"
          // height="300px"
          objectFit="cover"
          transition="transform 0.3s ease"
          _hover={{ transform: "scale(1.02)" }}
        />
      </Box>

      {/* Rating */}
      <Flex
        align="center"
        bg="white"
        px="2"
        py="1"
        position="absolute"
        bottom="100px"
        left="2"
        borderRadius="full"
        boxShadow="sm"
      >
        <FaStar />
        <Text ml="1" fontSize="xs" fontWeight="bold">
          {rating}
        </Text>
      </Flex>

      {/* Product Info */}

      <Box w="100%" px="2" py="1">
        <Text ontSize="sm">{brand}</Text>
        <Text fontSize="xs" color="gray.600" noOfLines={1}>
          {title}
        </Text>

        {/* Price row */}
        <Flex mt="1" align="center" gap="2">
          <Text fontWeight="bold">₹{price}</Text>
          <Text fontSize="xs" color="gray.600" textDecoration="line-through">
            {originalPrice}
          </Text>
          <Text fontSize="xs" color="green.500" fontWeight="bold">
            {discount}
          </Text>
        </Flex>
      </Box>

      {/* Heart icon */}
      <Icon
        as={CiHeart}
        position="absolute"
        bottom="100px"
        right="2"
        boxSize={5}
        color="gray.600"
        cursor="pointer"
      />
    </Box>
  );
};
