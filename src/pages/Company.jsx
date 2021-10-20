import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import { NavLink } from "react-router-dom";
import { getTheme } from '../getTheme';
import { useEffect } from 'react';

import { GeneralTextMedium, BannerBigTitle, BannerMediumTitle, YellowTitle, BigSemiTitle, IconsText, IconsBoldTitle, ButtonText, GeneralTextRegular } from '../constants/FontTags';

//industry
//technologies icons
import { ReactComponent as EdTech } from "../assets/pages/company/industry/edTech.svg";
import { ReactComponent as Fintech } from "../assets/pages/company/industry/fintech.svg";
import { ReactComponent as HealthCare } from "../assets/pages/company/industry/healthCare.svg";
import { ReactComponent as Entertainment } from "../assets/pages/company/industry/entertainment.svg";
import { ReactComponent as Telecom } from "../assets/pages/company/industry/telecom.svg";
import { ReactComponent as FMCG } from "../assets/pages/company/industry/FMCG.svg";
import { ReactComponent as Social } from "../assets/pages/company/industry/social.svg";
import { ReactComponent as ETicketing } from "../assets/pages/company/industry/eTicketing.svg";
import { ReactComponent as ECommerce } from "../assets/pages/company/industry/eCommerce.svg";
import { ReactComponent as EnergyIndustry } from "../assets/pages/company/industry/energyIndustry.svg";
import { ReactComponent as RealEstate } from "../assets/pages/company/industry/realEstate.svg";
import { ReactComponent as SupplyChain } from "../assets/pages/company/industry/supplyChain.svg";
// testimonials
import Testimonials from "../components/Testimonials";

import HTML from "../constants/StyledComponents";

//core values
import { ReactComponent as BeHuman } from "../assets/pages/company/coreValues/beHuman.svg";
import { ReactComponent as Dependability } from "../assets/pages/company/coreValues/dependability.svg";
import { ReactComponent as Community } from "../assets/pages/company/coreValues/community.svg";
import { ReactComponent as Excellence } from "../assets/pages/company/coreValues/excellence.svg";

const Company = (props) => {
  
  // useEffect(() => {
	// 	console.log("useeffect ")
	// 		window.scrollTo({
	// 			top: 0,
	// 			behavior: "smooth"
	// 		  });

	//   }, [])

  const theme = getTheme(props.themeName);
  return (
    <HTML.FullWidthContainer>
      {/* main banner */}
      <MainBanner>
        <MainBannerInnerContainer>
          <BannerBigTitle>
            {/* We Help our{' '}
            <br style={{ display: window.innerWidth < 600 && 'none' }} />
            Partners to Achieve{' '}
            <br style={{ display: window.innerWidth < 600 && 'none' }} />
            their Goals! */}
            We Bridge The
            <br style={{ display: window.innerWidth < 600 && 'none' }} />
            Gap Between Our Clients And Their Goals
          </BannerBigTitle>
          <GeneralTextMedium>
            Allow your business to grow through innovation and excellence with us!
          </GeneralTextMedium>
          <Button
            to={{
              pathname: "/getInTouch",
              state: { letsTalk: true }
            }}
            style={{ borderRadius: 23, marginTop: window.innerWidth < 600 && '0' }}>
            <ButtonText>Let's Talk</ButtonText>
          </Button>
        </MainBannerInnerContainer>
        <MainBannerInnerContainer>
          <TechnologyBackground />
        </MainBannerInnerContainer>
      </MainBanner>
      {/* transforming */}
      <FullWidthContainerTransforming>
        <TransformingContainer>
          <BannerMediumTitle style={{ textAlign: 'center', marginTop: '30px' }}>

            Implementing Agility And Smart Work To Accelerate And TransformYour Business
          </BannerMediumTitle>
          <GeneralTextMedium style={{ textAlign: window.innerWidth > 600 && "center", margin: window.innerWidth > 600 && "15px 0" }}>
            Software development and digital transformation have the capability of taking any
            business to the next level. Snexus offers industry-wide
            <br style={{ display: window.innerWidth < 600 && 'none' }} />
            services to help transform
            business-relevant ideas into time-sensitive solutions. We have the skill of collaboration
            needed to overcome business challenges. Be our partner to see your business upgrade with
            software & app development supported by advanced frameworks, processes, automation, and expertise.
          </GeneralTextMedium>
          <Button
           	 to={{pathname:"/getInTouch",
              state:{letsTalk:true}
              }} 
            style={{ borderRadius: 23, margin: window.innerWidth < 600 ? "0px" : "30px 0" }}
          >
            <ButtonText>Let's Talk</ButtonText>
          </Button>
        </TransformingContainer>
      </FullWidthContainerTransforming>
      {/* Industry */}
      <IndustryContainer style={{ paddingTop: "3%" }}>
        <YellowTitle>Industry Verticals</YellowTitle>

        <BigSemiTitle style={{ marginTop: '1%', fontSize: window.innerWidth > 600 && '34px', textAlign: window.innerWidth > 600 ? "start" : 'center' }}>
          Diversity in Inclusion <text style={{ display: window.innerWidth < 600 && 'none', fontSize: '34px', fontWeight: 600 }}>:</text>
          <br />
          Serving Multiple Industries
        </BigSemiTitle>

        <GeneralTextMedium style={{ marginTop: "20px" }}>
          With the next-gen software development capabilities, we have helped
          various industries
          <br style={{ display: window.innerWidth < 600 && 'none' }} />
          optimizetheir businesses and boost user loyalty.
        </GeneralTextMedium>

        {/* just for mobile view */}
        <Carousel style={{ margin: '5% 0', display: window.innerWidth > 600 && 'none', flexDirection: 'column', alignItems: window.innerWidth > 600 ? 'flex-start' : 'center' }} itemsToShow={1} showArrows={false}>
          <view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0px 30px 5% 30px', justifyContent: 'space-between' }}>
            <TechnologyContainer>
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#fcb512" }}
              >
                <EdTech style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center" }}>
                Edtech
              </IconsText>
            </TechnologyContainer>

            <TechnologyContainer>
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#ee5121" }}
              >
                <Fintech style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center" }}>
                Fintech
              </IconsText>
            </TechnologyContainer>

            <TechnologyContainer>
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#4643aa" }}
              >
                <HealthCare style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center" }}>
                Healthcare
              </IconsText>
            </TechnologyContainer>

          </view>

          <view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'space-between' }}>
            <TechnologyContainer>
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#71b9e9" }}
              >
                <Entertainment style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center" }}>
                Entertainment
              </IconsText>
            </TechnologyContainer>

            <TechnologyContainer>
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#69a741" }}
              >
                <Telecom style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center" }}>
                Telecom
              </IconsText>
            </TechnologyContainer>

            <TechnologyContainer>
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#f4891e" }}
              >
                <FMCG style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center" }}>
                FMCG
              </IconsText>
            </TechnologyContainer>

          </view>

          <view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'space-between' }}>
            <TechnologyContainer>
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#bb4792" }}
              >
                <Social style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center" }}>
                Social
              </IconsText>
            </TechnologyContainer>

            <TechnologyContainer>
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#db9070" }}
              >
                <ETicketing style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center" }}>
                e-ticketing
              </IconsText>
            </TechnologyContainer>

            <TechnologyContainer>
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#8778f3" }}
              >
                <ECommerce style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center", fontSize: "0.74rem" }}>
                E-commerce
              </IconsText>
            </TechnologyContainer>



          </view>

          <view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'space-between' }}>
            <TechnologyContainer>
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#984728" }}
              >
                <EnergyIndustry style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center" }}>
                EnergyIndustry
              </IconsText>
            </TechnologyContainer>

            <TechnologyContainer>
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#B4A563" }}
              >
                <RealEstate style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center" }}>
                RealEstate
              </IconsText>
            </TechnologyContainer>

            <TechnologyContainer>
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#41CFAD" }}
              >
                <SupplyChain style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center" }}>
                SupplyChain
              </IconsText>
            </TechnologyContainer>
          </view>


        </Carousel>





        {/* just for laptops and desktops*/}
        <TechnologiesIconsContainer style={{ display: window.innerWidth < 600 && 'none' }}>
          <TechnologiesIconsInner>
            <TechnologyContainer>
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#fcb512" }}
              >
                <EdTech style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center" }}>
                Edtech
              </IconsText>
            </TechnologyContainer>
            <TechnologyContainer>
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#ee5121" }}
              >
                <Fintech style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center" }}>
                Fintech
              </IconsText>
            </TechnologyContainer>
            <TechnologyContainer>
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#4643aa" }}
              >
                <HealthCare style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center" }}>
                Healthcare
              </IconsText>
            </TechnologyContainer>
            <TechnologyContainer>
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#71b9e9" }}
              >
                <Entertainment style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center" }}>
                Entertainment
              </IconsText>
            </TechnologyContainer>
            <TechnologyContainer>
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#69a741" }}
              >
                <Telecom style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center" }}>
                Telecom
              </IconsText>
            </TechnologyContainer>
            <TechnologyContainer>
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#f4891e" }}
              >
                <FMCG style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center" }}>
                FMCG
              </IconsText>
            </TechnologyContainer>
          </TechnologiesIconsInner>
          <TechnologiesIconsInner>
            <TechnologyContainer style={{ marginLeft: '10px' }}>
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#bb4792" }}
              >
                <Social style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center" }}>
                Social
              </IconsText>
            </TechnologyContainer>
            <TechnologyContainer>
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#db9070" }}
              >
                <ETicketing style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center" }}>
                e-ticketing
              </IconsText>
            </TechnologyContainer>
            <TechnologyContainer>
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#8778f3" }}
              >
                <ECommerce style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center", }}>
                E-commerce
              </IconsText>
            </TechnologyContainer>

            <TechnologyContainer>
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#984728" }}
              >
                <EnergyIndustry style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center" }}>
                EnergyIndustry
              </IconsText>
            </TechnologyContainer>
            <TechnologyContainer>
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#B4A563" }}
              >
                <RealEstate style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center" }}>
                RealEstate
              </IconsText>
            </TechnologyContainer>
            <TechnologyContainer>
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#41CFAD" }}
              >
                <SupplyChain style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center" }}>
                SupplyChain
              </IconsText>
            </TechnologyContainer>

          </TechnologiesIconsInner>
        </TechnologiesIconsContainer>
      </IndustryContainer>
      {/* ideation */}
      <IdeationFullWidthContainerOuter>

        {/* This is for mobile */}
        <IdeationContainer style={{ display: window.innerWidth > 600 && 'none' }}>
          <IndustryVerticalsText>
            From Ideation to execution
          </IndustryVerticalsText>
          <BigSemiTitle style={{ textAlign: window.innerWidth < 600 ? 'center' : "start" }}>
            We Don't Just Shoot for Stars, We Carefully Set {' '}
            <br style={{ display: window.innerWidth < 600 && 'none' }} />
            the Galaxy to Make the Project Sirius!
          </BigSemiTitle>
        </IdeationContainer>
        {/* this is for laptops */}
        <IdeationFullWidthContainer >
          <IdeationContainer style={{ display: window.innerWidth < 600 && 'none' }}>
            <YellowTitle>
              From Ideation to execution
            </YellowTitle>
            <BigSemiTitle style={{ textAlign: "start", fontSize: '34px', marginTop: '0px' }}>
              We Don't Just Shoot for Stars, We Carefully Set
              <br />
              the Galaxy to Make the Project Sirius!
            </BigSemiTitle>
          </IdeationContainer>
        </IdeationFullWidthContainer>


      </IdeationFullWidthContainerOuter>





      <CoreValuesContainer >
        <YellowTitle>Our Core Values</YellowTitle>
        <BigSemiTitle style={{ fontSize: '34px' }}>
          Deliver Reliable & Quality Software Development Services
        </BigSemiTitle>
        <GeneralTextMedium style={{ marginTop: "10px" }}>
          We Have Been Building Great Software Products For Our Clients.
        </GeneralTextMedium>

        {/* core values for mobile view*/}
        <Carousel style={{ margin: '5% 0', display: window.innerWidth > 600 && 'none', flexDirection: 'column', alignItems: window.innerWidth > 600 ? 'flex-start' : 'center' }} itemsToShow={1} showArrows={false}  >
          <view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'center' }}>
            <TechnologyContainer
              style={{
                marginRight: 0,
                marginBottom: 0,
              }}
            >
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#fcb512", marginBottom: "7px" }}
              >
                <Excellence style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center" }}>
                Excellence
              </IconsText>
              <GeneralTextRegular style={{ textAlign: "center", marginTop: "15px" }}>
                We know how to achieve the
                desired results by paying attention
                to details.
              </GeneralTextRegular>
            </TechnologyContainer>

          </view>

          <view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'center' }}>
            <TechnologyContainer
              style={{
                marginRight: 0,
                marginBottom: 0,
              }}
            >
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#ee5121", marginBottom: "7px" }}
              >
                <Dependability style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center" }}>
                Satisfaction
              </IconsText>
              <GeneralTextRegular style={{ textAlign: "center", marginTop: "15px" }}>
                By following a collaborative
                approach, we focus on attaining
                long-term business outcomes.
              </GeneralTextRegular>
            </TechnologyContainer>

          </view>

          <view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'center' }}>

            <TechnologyContainer
              style={{
                marginRight: 0,
                marginBottom: 0,
              }}
            >
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#4643aa", marginBottom: "7px" }}
              >
                <Community style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center" }}>
                Reliability
              </IconsText>
              <GeneralTextRegular style={{ textAlign: "center", marginTop: "15px" }}>
                Our proactive attitude and
                quality-driven development process
                make businesses strategically
              </GeneralTextRegular>
            </TechnologyContainer>
          </view>

          <view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'center' }}>
            <TechnologyContainer
              style={{
                marginRight: 0,
                marginBottom: 0,
              }}
            >
              <TechnologyIconImageContainer
                style={{ backgroundColor: "#69a741", marginBottom: "7px" }}
              >
                <BeHuman style={{ height: "50px", width: "50px" }} />
              </TechnologyIconImageContainer>
              <IconsText style={{ textAlign: "center" }}>
                Transparency
              </IconsText>
              <GeneralTextRegular style={{ textAlign: "center", marginTop: "15px" }}>
                Open conversations and
                consistency make Snexus a hub
                for businesses to grow.
              </GeneralTextRegular>
            </TechnologyContainer>

          </view>


        </Carousel>



        {/* core values for laptops and desktops*/}
        <ValuesContainer style={{ display: window.innerWidth < 600 && 'none' }}>
          <TechnologyContainer
            style={{
              marginRight: 0,
              marginBottom: 0,
            }}
          >
            <TechnologyIconImageContainer
              style={{ backgroundColor: "#fcb512", marginBottom: "7px" }}
            >
              <Excellence style={{ height: "50px", width: "50px" }} />
            </TechnologyIconImageContainer>
            <IconsBoldTitle style={{ textAlign: "center" }}>
              Excellence
            </IconsBoldTitle>
            <GeneralTextRegular style={{ textAlign: "center", marginTop: "15px" }}>
              We know how to achieve the {' '}<br />
              desired results by paying attention{' '}<br />
              to details.
            </GeneralTextRegular>
          </TechnologyContainer>
          <TechnologyContainer
            style={{
              marginRight: 0,
              marginBottom: 0,
            }}
          >
            <TechnologyIconImageContainer
              style={{ backgroundColor: "#ee5121", marginBottom: "7px" }}
            >
              <Dependability style={{ height: "50px", width: "50px" }} />
            </TechnologyIconImageContainer>
            <IconsBoldTitle style={{ textAlign: "center" }}>
              Satisfaction
            </IconsBoldTitle>
            <GeneralTextRegular style={{ textAlign: "center", marginTop: "15px" }}>
              By following a collaborative <br />
              approach, we focus on attaining<br />
              long-term business outcomes.
            </GeneralTextRegular>
          </TechnologyContainer>
          <TechnologyContainer
            style={{
              marginRight: 0,
              marginBottom: 0,
            }}
          >
            <TechnologyIconImageContainer
              style={{ backgroundColor: "#4643aa", marginBottom: "7px" }}
            >
              <Community style={{ height: "50px", width: "50px" }} />
            </TechnologyIconImageContainer>
            <IconsBoldTitle style={{ textAlign: "center" }}>
              Reliability
            </IconsBoldTitle>
            <GeneralTextRegular style={{ textAlign: "center", marginTop: "15px" }}>
              Our proactive attitude and <br />
              quality-driven development process<br />
              make businesses strategically
            </GeneralTextRegular>
          </TechnologyContainer>
          <TechnologyContainer
            style={{
              marginRight: 0,
              marginBottom: 0,
            }}
          >
            <TechnologyIconImageContainer
              style={{ backgroundColor: "#69a741", marginBottom: "7px" }}
            >
              <BeHuman style={{ height: "50px", width: "50px" }} />
            </TechnologyIconImageContainer>
            <IconsBoldTitle style={{ textAlign: "center" }}>
              Transparency
            </IconsBoldTitle>
            <GeneralTextRegular style={{ textAlign: "center", marginTop: "15px" }}>
              Open conversations and<br />
              consistency make Snexus a hub<br />
              for businesses to grow.
            </GeneralTextRegular>
          </TechnologyContainer>
        </ValuesContainer>
      </CoreValuesContainer>
      {/* testimonials */}
      <Testimonials theme={theme}/>
    </HTML.FullWidthContainer>
  );
};

//HTML
const MainBanner = styled.div`
  max-width: 1170px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 4% 0;
  @media (max-width: 600px) {
    display:block;
    }
`;
const MainBannerInnerContainer = styled.div`
  width: 50%;
  height: 100%;
  align-items: flex-start;
  justify-content: middle;
  flex-direction: column;
  display: flex;
  @media (max-width: 600px) {
    width:100%;
    text-align:center;
    justify-content:center;
    align-items:center;
    margin:5% 0px;
    }
`;

const Button = styled(NavLink)`
  margin: 30px 0;
  color: white;
  background-color: #e14d1f;
  cursor: pointer;
  text-decoration: none;
  display: flex;
 
  
  font-weight: 700;
  align-items: center;
  width:113px;
  height:46px;
  justify-content:center;

  &:hover {
    opacity: 0.8;
  }
  @media (max-width:600px){
    maargin:0px 0px;
  }
`;
// transformaing challenges
const FullWidthContainerTransforming = styled.div`
  padding: 3% 0;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.caseStudiesBackground};
`;
const TransformingContainer = styled.div`
  max-width: 1170px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    width:100%;
   
    }
  
`;

// indurstry
const IndustryContainer = styled.div`
  max-width: 1170px;
  width: 100%;
  @media (max-width: 600px) {
      width:100%;
    }
`;
const IndustryVerticalsText = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #fcb818;
  @media(max-width:600px){
    text-align:center;
    align-self:center;
  }
`;
const TechnologiesIconsContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 72px;
  text-align: center;
  flex-direction: column;
`;
const TechnologiesIconsInner = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
`;
const TechnologyIconImageContainer = styled.div`
  height: 75px;
  width: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10%;
  border-radius: 10px;
 
`;
const TechnologyContainer = styled.div`
  display: flex;
  width:100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 100px;
  margin-bottom: 72px;
  @media (max-width: 600px) {
    margin-right: 0px;
    margin-bottom: 0px;
  }

`;

const TechnologyBackground = styled.div`
  background-image: url(${(props) => props.theme.mainBanner});
  width: 576px;
  height: 479px;
  background-size: cover;
  display: flex;
  overflow: hidden;
  @media (max-width: 600px) {
    width:100%;
    height:100%;
    padding:41% 0;  
    background-size: contain;
    background-repeat:no-repeat;
   
    }

`;
const IdeationFullWidthContainerOuter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${(props) => props.theme.caseStudiesBackground};
  @media (max-width:600px){
    display:block;
    width:100%;
  }
`;
const IdeationFullWidthContainer = styled.div`
  background-image: url(${(props) => props.theme.ideationBanner});
  width: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding-bottom: 52%;
  display: flex;
  justify-content: center;
  height: 100px;
  @media (max-width:600px){
    height:10px;
  }
  
`;
const IdeationContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  margin-top: 100px;
  @media (max-width:600px){
    margin:5% 0%;
    width:100%;
    height:100%;
    text-align:center;
  }
`;
// core values
const CoreValuesContainer = styled.div`
  width: 100%;
  max-width: 1170px;
  flex-direction: column;
  align-items: center;
  display: flex;
  padding: 4% 0;
`;
const ValuesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 75px;
`;

export default Company;
