import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../assets/Images/Hero_Section/banner_1.webp";
import banner2 from "../assets/Images/Hero_Section/banner_2.webp";
import banner3 from "../assets/Images/Hero_Section/banner_3.webp";
import banner4 from "../assets/Images/Hero_Section/banner_4.webp";
import banner5 from "../assets/Images/Hero_Section/banner_5.webp";
import banner6 from "../assets/Images/Hero_Section/banner_6.webp";
import banner7 from "../assets/Images/Hero_Section/banner_7.webp";
import banner8 from "../assets/Images/Hero_Section/banner_8.webp";
import banner9 from "../assets/Images/Hero_Section/banner_9.gif";

export const HeroSectionSwiper = () => {
  const slides = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
    banner7,
    banner8,
    banner9,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <Box
      maxW="100%"
      overflow="hidden"
      px={{ base: "5px", lg: "10px" }}
      pb="40px"
      mt={{ base: "10px", lg: "20px" }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box key={index} w="100%" px={{ base: "5px", lg: "10px" }}>
            <Image src={slide} w="100%" h="auto" objectFit="cover" />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
