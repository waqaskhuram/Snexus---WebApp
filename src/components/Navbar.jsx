import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { getTheme } from "../getTheme";
// import { FaAngleDown } from "react-icons/fa";
import { BannerSmallTitle, NavbarText, GeneralTextMedium, BannerMediumTitle, GeneralTextRegularBlack, } from '../constants/FontTags';
// our services
import { ReactComponent as ProgressiveWebApplications } from "../assets/pages/home/ourServices/progressiveWebApplications.svg";
import { ReactComponent as AmbientUiAndUx } from "../assets/pages/home/ourServices/ambientUiAndUx.svg";
import { ReactComponent as DigitalMarketing } from "../assets/pages/home/ourServices/digitalMarketing.svg";
import { ReactComponent as BlockchainDevelopment } from "../assets/pages/home/ourServices/blockchainDevelopment.svg";
import { ReactComponent as DevOps } from "../assets/pages/home/ourServices/devOps.svg";
import { ReactComponent as MobileApps } from '../assets/pages/home/ourServices/mobileApps.svg';

const ourServicesSVG = { paddingLeft: "40px", width: "45%" };
const Navbar = ({ themeName, themeSelectorClicked }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = getTheme(themeName);

  return (
    <Nav>
      <NavbarText exact to="/" style={{ margin: '0px' }}>
        <Logo src={theme.logo} />
      </NavbarText>

      <ThemeSelector
        style={{ display: window.innerWidth > 600 && 'none', marginLeft: window.innerWidth < 600 && '35%' }}
        src={theme.themeSelector}
        onClick={() => {
          themeSelectorClicked(themeName)
          // setIsOpen(!isOpen)
        }}
      />
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <NavbarText exact to="/" onClick={() => setIsOpen(!isOpen)}>
          Home
        </NavbarText>
        <NavbarText to="/company" onClick={() => setIsOpen(!isOpen)}>Company</NavbarText>
        <NavbarText className={"dropdown"} to="/technologies" onClick={() => setIsOpen(!isOpen)}>
          Technologies
          {/* <FaAngleDown style={{ marginLeft: "1px", display: window.innerWidth < 600 && 'none' }} color={"#f4b702"} /> */}
          <DropDownContent className="dropdown-content" style={{ display: window.innerWidth < 600 && 'none' }}>
            <DropDownContentContainer>
              <DropDownLeftContainer>
                <BannerSmallTitle style={{ textAlign: 'left', paddingTop: '20px', color: 'black', marginLeft: '27px' }}>Discovery</BannerSmallTitle>
                <BannerMediumTitle style={{ textAlign: 'center', color: 'black' }}>Workshop</BannerMediumTitle>
                <GeneralTextRegularBlack style={{ marginLeft: '30px', marginRight: '30px', textAlign: 'left' }}>
                  Define functional scope of your project to plan project budget
                  and timeline
                </GeneralTextRegularBlack>
                <MainBannerImage />
                <Button
                  to={{
                    pathname: "/getInTouch",
                    state: { letsTalk: true }
                  }}
                  style={{ borderRadius: 23 }}>
                  <GeneralTextMedium style={{ color: 'white' }}> Let's Talk</GeneralTextMedium>
                </Button>
              </DropDownLeftContainer>
              <DropDownRightContainer>
                <DropDownServicesOuterContainer>
                  <DropDownServicesContainer>
                    <BannerSmallTitle style={{ marginBottom: '10px', color: 'black', fontSize: '14px', marginLeft: '40px' }}>
                      Progressive Web Applications
                    </BannerSmallTitle>
                    <ProgressiveWebApplications style={ourServicesSVG} />
                  </DropDownServicesContainer>
                  <DropDownServicesContainer>
                    <BannerSmallTitle style={{ marginBottom: '10px', marginTop: '20px', color: 'black', fontSize: '14px', marginLeft: '40px' }}>
                      Mobile Apps Development
                    </BannerSmallTitle>
                    <MobileApps style={ourServicesSVG} />
                  </DropDownServicesContainer>
                  <DropDownServicesContainer>
                    <BannerSmallTitle style={{ marginBottom: '10px', marginTop: '20px', color: 'black', fontSize: '14px', marginLeft: '40px' }}>
                      Digital Marketing
                    </BannerSmallTitle>
                    <DigitalMarketing style={ourServicesSVG} />
                  </DropDownServicesContainer>
                </DropDownServicesOuterContainer>
                <DropDownContentSeparator />
                <DropDownServicesOuterContainer>
                  <DropDownServicesContainer>
                    <BannerSmallTitle style={{ marginBottom: '10px', color: 'black', fontSize: '14px', marginLeft: '40px' }}>
                      Ambient UI & UX
                    </BannerSmallTitle>
                    <AmbientUiAndUx style={ourServicesSVG} />
                  </DropDownServicesContainer>
                  <DropDownServicesContainer>
                    <BannerSmallTitle style={{ marginBottom: '10px', marginTop: '20px', color: 'black', fontSize: '14px', marginLeft: '40px' }}>
                      Blockchain Development
                    </BannerSmallTitle>
                    <BlockchainDevelopment style={ourServicesSVG} />
                  </DropDownServicesContainer>
                  <DropDownServicesContainer>
                    <BannerSmallTitle style={{ marginBottom: '10px', marginTop: '20px', color: 'black', fontSize: '14px', marginLeft: '40px' }}>DevOps</BannerSmallTitle>
                    <DevOps style={ourServicesSVG} />
                  </DropDownServicesContainer>
                </DropDownServicesOuterContainer>
              </DropDownRightContainer>
            </DropDownContentContainer>
          </DropDownContent>
        </NavbarText>

        <NavbarText to="/methodology" onClick={() => setIsOpen(!isOpen)}>Methodology</NavbarText>
        <NavbarText to="/caseStudies" onClick={() => setIsOpen(!isOpen)}>Case Studies</NavbarText>
        <NavbarText exact to="careers"  onClick={() => setIsOpen(!isOpen)}>Careers</NavbarText>
        <NavbarText
          className={"get-in-touch"}
          exact
          to={{
            pathname: "/getInTouch",
            state: { letsTalk: false }
          }}
          onClick={() => setIsOpen(!isOpen)}
          style={{
            padding: "0px 5px",
            height: '46px',
            width: '121px',
            margin: window.innerWidth > 600 ? "0px 18px 0px 12px" : '1.5% 0px 1.5% 0px',
            backgroundImage:
              "linear-gradient(to right, #ea6a24, #fdb514,#fdb514)",
            borderRadius: '30px',
            color: "black",
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex'
          }}
        >
          Get in Touch
        </NavbarText>
        <ThemeSelector
          style={{ margin: window.innerWidth < 600 && '1.5%', display: window.innerWidth < 600 && 'none' }}
          src={theme.themeSelector}
          onClick={() => {
            themeSelectorClicked(themeName)
            setIsOpen(!isOpen)
          }}
        />
      </Menu>
    </Nav>
  );
};
const Nav = styled.div`
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }
`;
const Logo = styled.img`
  width: 130px;
  height: 35px;
`;
const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: ${(props) => props.theme.color};
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-bewtween;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0px")};
    transition: max-height 0.3s ease-in;
  }
`;

const ThemeSelector = styled.img`
    width: 45px;
    height: 45px;
    cursor: pointer;
    display: flex;
    padding 0.25rem 0.5rem;

    &:hover {
        opacity: 0.8;
    }
    @media (max-width: 600px) {
      width: 30px;
    height: 30px;
      
    }
`;
// dropdown
const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  width: 820px;
  height: 500px;
  top: 35px;
  right: 175px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  flex-direction: row;
  margin-top:10px;
  z-index: 100;
  &:before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    right: 417px;
    margin-top: -15px;
    border-width: 10px 0 10px 10px;
    border-style: solid;
    border-color: transparent #f0eded;
    transform: rotate(-90deg);
  }
`;
const DropDownContentContainer = styled.div`
  background-color: white;
  flex-direction: row;
  display: flex;
`;
const DropDownLeftContainer = styled.div`
  width: 220px;
  height: 509px;
  background-color: #fcb414;
`;

//temp
const MainBannerImage = styled.div`
  background-image: url(${(props) => props.theme.methodologyBanner});
  width: 200px;
  height: 150px;
  margin-left: 10px;
  margin-top: 30px;
  background-size: cover;
  display: flex;
  overflow: hidden;
`;
const Button = styled(NavLink)`
  width: 113px;
  height: 46px;
  margin-left: 55px;
  margin-top: 45px;
  color: white;
  background-color: #e14d1f;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  font-size: 0.8rem;
  font-weight: 700;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }
`;


const DropDownRightContainer = styled.div`
  width: 600px;
  height: 500px;
  padding-top: 9px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const DropDownServicesOuterContainer = styled.div`
  width: 295px;
  height: 100%;
`;
const DropDownServicesContainer = styled.div`
  width: 295px;
  height: 163px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DropDownContentSeparator = styled.div`
  width: 1px;
  height: 460px;
  background-color: #f0eded;
`;

export default Navbar;
