import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import { getTheme } from "../getTheme";
import { GeneralTextRegular, BannerMediumTitle, YellowTitle, BigSemiTitle, } from '../constants/FontTags';

const Testimonials = ({ theme }) => {
 
  return (
    <FullWidthContainer>
      {/* testimonials */}
      <TestimonialsFullWidthContainer>
        <TestimonialsContainer>
          <BannerInnerContainer>
            <Carousel style={{ flexDirection: 'column', alignItems: window.innerWidth > 600 ? 'flex-start' : 'center' }} itemsToShow={1} showArrows={false} enableAutoPlay={true} autoPlaySpeed={10000}>
              <view style={{ marginBottom: window.innerWidth < 600 && '10%' }}>
                <YellowTitle >
                  Testimonials
                </YellowTitle>
                <BigSemiTitle
                  style={{
                    marginTop: window.innerWidth < 600 && '1%',
                    marginBottom: window.innerWidth > 600 ? "40px" : '5%',
                    fontSize: window.innerWidth > 600 && '34px',
                    textAlign: window.innerWidth > 600 && 'left'
                  }}
                >
                  Your Words Motivate Us to be Better!
                </BigSemiTitle>
                <TestimonialsLogoContainer>
                  <CaseStudiesLogo
                    src={theme.avatar1}
                  />
                  <view>
                    <BannerMediumTitle style={{ fontSize: '16px', textAlign: window.innerWidth < 600 && 'center', margin: window.innerWidth < 600 && '5% 30px 0px 30px' }}>
                    - Paul Christopher 
                    </BannerMediumTitle>
                    <GeneralTextRegular style={{ marginLeft: window.innerWidth > 600 && '12px', textAlign: window.innerWidth < 600 && 'center', marginBottom: window.innerWidth < 600 && '5%' }}>CEO & Founder, Affax</GeneralTextRegular>
                  </view>
                </TestimonialsLogoContainer>
                <GeneralTextRegular style={{ marginTop: "2%" }}>
                  Snexus is a fantastic development hub. They are reliable, responsive, prompt,
                  and most importantly, exceptional communicators. They specialize in expanding
                  concepts into detailed designs. They asked real questions to develop and design
                  the app. They are quick to execute solutions to challenges as they arrive and give
                  their best to every client.
                </GeneralTextRegular>
              </view>
              <view>
                <YellowTitle >
                  Testimonials
                </YellowTitle>
                <BigSemiTitle
                  style={{

                    marginTop: window.innerWidth < 600 && '1%',
                    marginBottom: window.innerWidth > 600 ? "40px" : '5%',
                    fontSize: window.innerWidth > 600 && '34px',
                    textAlign: window.innerWidth > 600 && 'left'

                  }}>
                  Your Words Motivate Us to be Better!
                </BigSemiTitle>
                <TestimonialsLogoContainer>
                  <CaseStudiesLogo

                    src={theme.avatar2}
                  />
                  <view>
                    <BannerMediumTitle style={{ fontSize: '16px', textAlign: window.innerWidth < 600 && 'center', margin: window.innerWidth < 600 && '5% 30px 0px 30px' }} >
                       - Jeffery Bronze  
                    </BannerMediumTitle>
                    <GeneralTextRegular style={{ marginLeft: window.innerWidth > 600 && '12px', textAlign: window.innerWidth < 600 && 'center', marginBottom: window.innerWidth < 600 && '5%' }}>CEO, Coinflex</GeneralTextRegular>
                  </view>
                </TestimonialsLogoContainer>
                <GeneralTextRegular style={{ marginTop: "2%", width: "85%" }}>
                  I am really impressed by the quality of services I received from Snexus.
                  The process of buildingthe app was handled with complete professionalism and went
                  smoothly. The project was finished on time and on budget and allowed us to begin
                  launch activities earlier than planned. Although I was pretty rigid in counting on
                  any software company to outsource the project, I feel glad that I did!
                </GeneralTextRegular>
              </view>
              <view>
                <YellowTitle>
                  Testimonials
                </YellowTitle>
                <BigSemiTitle
                  style={{
                    marginTop: window.innerWidth < 600 && '1%',
                    marginBottom: window.innerWidth > 600 ? "40px" : '5%',
                    fontSize: window.innerWidth > 600 && '34px',
                    textAlign: window.innerWidth > 600 && 'left'

                  }}>
                  Your Words Motivate Us to be Better!
                </BigSemiTitle>
                <TestimonialsLogoContainer>
                  <CaseStudiesLogo
                    src={theme.avatar3}
                  />
                  <view>
                    <BannerMediumTitle style={{ fontSize: '16px', textAlign: window.innerWidth < 600 && 'center', margin: window.innerWidth < 600 && '5% 30px 0px 30px' }}>
                      - Maria khan    
                    </BannerMediumTitle>
                    <GeneralTextRegular style={{ marginLeft: window.innerWidth > 600 && '12px', textAlign: window.innerWidth < 600 && 'center', marginBottom: window.innerWidth < 600 && '5%' }}>CO Founder, Swap Shop</GeneralTextRegular>
                  </view>
                </TestimonialsLogoContainer>
                <GeneralTextRegular style={{ marginTop: "2%", width: "85%" }}>
                  Snexus’s team is excellent, knowledgeable, and particular to business attributes
                  when it comes to branding the company. They are excellent at explaining the relevance
                  of some very technical aspects of their role. Additionally, we see a rapid increase
                  in our traffic. Highly Recommended
                </GeneralTextRegular>
              </view>
            </Carousel>
          </BannerInnerContainer>
          <BannerInnerContainer style={{ alignItems: "center" }}>
            <CaseStudiesImage src={theme.testimonialsBanner} />
          </BannerInnerContainer>
        </TestimonialsContainer>
      </TestimonialsFullWidthContainer>
    </FullWidthContainer>
  );
};

//HTML
const FullWidthContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
// testimonials
const TestimonialsFullWidthContainer = styled.div`
  background-color: ${(props) => props.theme.testimonialsBackground};
  padding: 4% 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
	padding:0px;
		
	}
`;
const TestimonialsContainer = styled.div`
  max-width: 1170px;
  width: 100%;
  display: flex;
  @media (max-width: 600px) {
		display:block;
		width:100%;
		text-align:center;
		
	}
`;
const TestimonialsLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  @media (max-width: 600px) {
    display:block;
    width:100%;
    justify-content:center;
    align-items:center;
    align-self:center;

	}
`;
const BannerInnerContainer = styled.div`
  width: 50%;
  height: 100%;
  align-items: flex-start;
  justify-content: middle;
  flex-direction: column;
  display: flex;
  @media (max-width: 600px) {
		width:100%;
    margin:5% 0px;
	}
`;

const CaseStudiesLogo = styled.img`
  width: 70px;
  cursor: pointer;
  display: flex;
  margin-bottom: 2%;
  margin-right:2%;
  overflow: hidden;
  @media (max-width: 600px) {
      display:inline-flex;
	}

`;

const CaseStudiesImage = styled.img`
  overflow: hidden;
  @media (max-width: 600px) {
		width:70%;
    margin:5% 0;
    
	}
`;
export default Testimonials;
