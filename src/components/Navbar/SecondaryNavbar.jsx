import { Box, Flex } from "@chakra-ui/react";

export const SecondaryNavbar = () => {
  const categoryList = [
    "Men",
    "Women",
    "Live Now",
    "Shop Now",
    "Plus Size",
    "Accessories",
    "Official March",
    "Sneakers",
    "Bewakoof Air",
    "Heavy Duty",
    "Customization",
    "Winterwear",
  ];

  return (
    <Box
      overflowX="auto"
      whiteSpace="nowrap"
      py="10px"
      px="15px"
      css={{
        /* Hide scrollbar for Webkit (Chrome, Safari) */
        "&::-webkit-scrollbar": {
          display: "none",
        },
        /* Hide scrollbar for Firefox */
        scrollbarWidth: "none",
        /* Hide scrollbar for IE/Edge */
        msOverflowStyle: "none",
      }}
    >
      <Flex
        as="ul"
        gap={{ base: 7, lg: 16 }}
        fontSize={{ base: "13px", lg: "17px" }}
        textTransform="uppercase"
      >
        {categoryList.map((item, i) => (
          <Box as="li" key={i} listStyleType="none" minW="fit-content">
            {item}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
