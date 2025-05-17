import { HeroSectionSwiper } from "../components/HeroSectionSwiper";
import { NewArrivalSwiper } from "../components/NewArrivalSwiper";
import { MainLayout } from "../layout/MainLayout";

export const Home = () => {
  return (
    <>
      <MainLayout>
        <HeroSectionSwiper />
        <NewArrivalSwiper />
      </MainLayout>
    </>
  );
};
