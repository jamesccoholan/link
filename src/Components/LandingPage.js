import React, { useEffect } from "react";
import { Container } from "@mui/material";
import Header from "./Header";
import LogoDisplay from "./LogoDisplay";
import Features from "./Features";
import Footer from "./Footer";
import GoogleSignUpButton from "./GoogleSignUpButton";
import { MainContainer } from "./landingStyles";
import backgroundImage from "../Assets/10.png";
import AISolutionOverview from "./AISolutionOverview";
import UseCases from "./UseCases";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AOS from "aos";
import "aos/dist/aos.css";

function LandingPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <MainContainer backgroundImage={backgroundImage} isMobile={isMobile}>
      <div data-aos="fade-in">
        <Header />
      </div>

      <div data-aos="fade-up">
        <LogoDisplay />
        <GoogleSignUpButton />
      </div>
      <br></br>

      <div data-aos="fade-zoom-in" data-aos-offset="300">
        <Features />
      </div>

      <div data-aos="fade-in" data-aos-duration="2000">
        <AISolutionOverview />
      </div>

      <div data-aos="fade-up" data-aos-duration="1000">
        <UseCases />
      </div>

      <div>
        <Footer />
      </div>
    </MainContainer>
  );
}

export default LandingPage;
