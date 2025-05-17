import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer";
import { InfoNav } from "../components/Navbar/InfoNav";
import { MobileNavbar } from "../components/Navbar/MobileNavbar";
import { useBreakpointValue } from "@chakra-ui/react";
import { SecondaryNavbar } from "../components/Navbar/SecondaryNavbar";

export const MainLayout = ({ children }) => {
  const showMobileNav = useBreakpointValue({ base: true, lg: false });

  return (
    <>
      {showMobileNav ? null : <InfoNav />}
      {showMobileNav ? <MobileNavbar /> : <Navbar />}
      <SecondaryNavbar />

      {children}
      {/* <Footer /> */}
    </>
  );
};
