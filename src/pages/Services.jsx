import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import { NavLink } from "react-router-dom";
import { getTheme } from "../getTheme";
import { GeneralTextMedium, BannerBigTitle, BannerMediumTitle, IconsText, BulletPointsText, ButtonText } from '../constants/FontTags';

import HTML from "../constants/StyledComponents";

//our services marquee icons
import { ReactComponent as MobileApplications } from "../assets/pages/home/ourServices/mobileApps.svg";
import { ReactComponent as ProgressiveWebApplications } from "../assets/pages/home/ourServices/progressiveWebApplications.svg";
import { ReactComponent as AmbientUiAndUx } from "../assets/pages/home/ourServices/ambientUiAndUx.svg";
import { ReactComponent as DigitalMarketing } from "../assets/pages/home/ourServices/digitalMarketing.svg";
import { ReactComponent as BlockchainDevelopment } from "../assets/pages/home/ourServices/blockchainDevelopment.svg";
import { ReactComponent as DevOps } from "../assets/pages/home/ourServices/devOps.svg";
//services icons
import { ReactComponent as IOS } from "../assets/pages/home/technologies/iOS.svg";
import { ReactComponent as Android } from "../assets/pages/home/technologies/android.svg";
import { ReactComponent as Flutter } from "../assets/pages/home/technologies/flutter.svg";
import { ReactComponent as ReactNative } from "../assets/pages/home/technologies/reactNative.svg";
import { ReactComponent as Xamarim } from "../assets/pages/home/technologies/xamarin.svg";
import { ReactComponent as Titanium } from "../assets/pages/home/technologies/titanium.svg";
import { ReactComponent as ASP } from "../assets/pages/services/aspNet.svg";
import { ReactComponent as AngularJs } from "../assets/pages/home/technologies/angularJs.svg";
import { ReactComponent as Laravel } from "../assets/pages/services/laravel.svg";
import { ReactComponent as Node } from "../assets/pages/services/nodeJs.svg";
import { ReactComponent as AdobeAfterEffects } from "../assets/pages/services/adobeAfterEffects.svg";
import { ReactComponent as AdobeIllustrator } from "../assets/pages/services/adobeIllustrator.svg";
import { ReactComponent as AdobeLightroom } from "../assets/pages/services/adobeLightroom.svg";
import { ReactComponent as AdobePhotoshop } from "../assets/pages/services/adobePhotoshop.svg";
import { ReactComponent as AdobeXD } from "../assets/pages/services/adobeXD.svg";
import { ReactComponent as Rails } from "../assets/pages/home/technologies/rails.svg";
import { ReactComponent as FramerX } from "../assets/pages/services/framerX.svg";
import { ReactComponent as Ethereum } from "../assets/pages/services/ethereum.svg";
import { ReactComponent as BinanceSmartChain } from "../assets/pages/services/binanceSmartChain.svg";
import { ReactComponent as InternetComputer } from "../assets/pages/services/internetComputer.svg";
import { ReactComponent as PolkadotNetwork } from "../assets/pages/services/polkadotNetwork.svg";
import { ReactComponent as PolygonMatic } from "../assets/pages/services/polygonMatic.svg";
import { ReactComponent as TerraLuna } from "../assets/pages/services/terraLuna.svg";
import { ReactComponent as SEO } from "../assets/pages/services/SEO.svg";
import { ReactComponent as GMB } from "../assets/pages/services/GMB.svg";
import { ReactComponent as PPC } from "../assets/pages/services/PPC.svg";
import { ReactComponent as Facebook } from "../assets/pages/services/facebook.svg";
import { ReactComponent as Instagram } from "../assets/pages/services/instagram.svg";
import { ReactComponent as Youtube } from "../assets/pages/services/youtube.svg";
import { ReactComponent as Appium } from "../assets/pages/home/technologies/appium.svg";
import { ReactComponent as AWS } from "../assets/pages/home/technologies/AWS.svg";
import { ReactComponent as GoogleCloud } from "../assets/pages/home/technologies/googleCloud.svg";
import { ReactComponent as Gradle } from "../assets/pages/home/technologies/gradle.svg";
import { ReactComponent as Jenkins } from "../assets/pages/home/technologies/jenkins.svg";
import { ReactComponent as Selenium } from "../assets/pages/home/technologies/selenium.svg";

// testimonials
import Testimonials from "../components/Testimonials";

const Services = ({ themeName }) => {
  const theme = getTheme(themeName);


  return (
    <HTML.FullWidthContainer>
      {/* main banner */}
      <BannerContainer>
        <MainBanner>
          <MainBannerInnerContainer>
            <BannerBigTitle>
              Web and Mobile
              <br style={{ display: window.innerWidth < 600 && 'none' }} />
              Software Development{' '}
              <br style={{ display: window.innerWidth < 600 && 'none' }} />
              Services
            </BannerBigTitle>
            <GeneralTextMedium style={{ marginTop: window.innerWidth < 600 && '5%' }}>
              A successful offshore software application development{' '}
              <br style={{ display: window.innerWidth < 600 && 'none' }} />
              company since 1997,providing a full range of website and
              <br style={{ display: window.innerWidth < 600 && 'none' }} />
              mobile app development,games development, IOT,AR-VR and
              <br style={{ display: window.innerWidth < 600 && 'none' }} />
              other IT services and solutions globally.

            </GeneralTextMedium>
            <Button
             	 to={{pathname:"/getInTouch",
                state:{letsTalk:true}
                }} 
              style={{ borderRadius: 23, marginTop: window.innerWidth < 600 ? '0px' : '30px' }}
            >
              <ButtonText>Let's Talk</ButtonText>
            </Button>
          </MainBannerInnerContainer>
          <MainBannerInnerContainer style={{ marginTop: window.innerWidth < 600 && '5%' }}>
            <MainBannerImage />
          </MainBannerInnerContainer>
        </MainBanner>
      </BannerContainer>
      {/* services */}
      <ServicesContainer>
        {/* 1 */}
        <ServicesInnerContainer style={{
          display: window.innerWidth < 600 && 'inline-flex',
          flexDirection: window.innerWidth < 600 && 'column-reverse',
        }}>
          <ServicesImageBannerContainer style={{ backgroundColor: '#c6d2fa' }}>
            <MobileApplications
              style={{ position: "relative", right: window.innerWidth > 600 ? "-25px" : '0px' }}
            />
          </ServicesImageBannerContainer>
          <ServicesDetailsBannerContainer>
            <BannerMediumTitle>Mobile Apps Development</BannerMediumTitle>
            <GeneralTextMedium style={{ paddingBottom: "30px", marginTop: window.innerWidth > 600 && '10px' }}>
              With agile processes and a proactive approach, your investment is optimized
              with every step of development until the product’s delivery. We offer
              tailor-built design and development from ideation to launch, till
              integrating the product into your system. Optimization and further
              scale-up are offered if demanded. With next-generation technologies
              and algorithms, it will exceed your expectations.
            </GeneralTextMedium>

            {/* This is only for mobiles */}
            <Carousel style={{ marginBottom: '5%', display: window.innerWidth > 600 && 'none', flexDirection: 'column', alignItems: window.innerWidth > 600 ? 'flex-start' : 'center' }} itemsToShow={1} showArrows={false} enableAutoPlay={true} autoPlaySpeed={5000} >
              <view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0px 30px 5% 30px' }}>

                <TechnologyContainerForMobile >
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#fcb512" }}
                  >
                    <IOS style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    iOS
                  </IconsText>
                </TechnologyContainerForMobile>

                <TechnologyContainerForMobile>
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#ee5121" }}
                  >
                    <Android style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    Android
                  </IconsText>
                </TechnologyContainerForMobile>

                <TechnologyContainerForMobile >
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#4643aa" }}
                  >
                    <ReactNative style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    React
                  </IconsText>
                </TechnologyContainerForMobile>
              </view>

              <view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px' }}>

                <TechnologyContainerForMobile >
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#5EAAE2" }}
                  >
                    <Titanium style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    Titanium
                  </IconsText>
                </TechnologyContainerForMobile>

                <TechnologyContainerForMobile>
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#579B34" }}
                  >
                    <Flutter style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    Flutter
                  </IconsText>
                </TechnologyContainerForMobile>
                <TechnologyContainerForMobile>
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#972A74" }}
                  >
                    <Xamarim style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    Xamrim
                  </IconsText>
                </TechnologyContainerForMobile>
              </view>


            </Carousel>

            {/* This is only for laptops and desktop */}
            <TechnologiesIconsInner style={{ display: window.innerWidth < 600 && 'none' }}>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#fcb512" }}
                >
                  <IOS style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  iOS
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#ee5121" }}
                >
                  <Android style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  Android
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#4643aa" }}
                >
                  <ReactNative style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  React
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#972A74" }}
                >
                  <Xamarim style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  Xamrim
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#5EAAE2" }}
                >
                  <Titanium style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  Titanium
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#579B34" }}
                >
                  <Flutter style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  Flutter
                </IconsText>
              </TechnologyContainer>

            </TechnologiesIconsInner>
            <ListItemContainer>
              <ListItemInnerContainer>
                {theme.servicesList1a.map((point) => (
                  <ListItem key={Math.random()}>
                    {/* <ListItemImage src={theme.listItemImage} /> */}
                    <BulletPoints style={{ width: '14px', height: '10px', marginTop: '11px', backgroundColor: point.color, borderRadius: 20 }} />
                    <BulletPointsText
                      style={{
                        width: "445px",
                        fontWeight: "bold",
                        maxLines: 1,
                        marginTop: '11px',
                        marginLeft: '8px',
                      }}
                    >
                      {point.text}
                    </BulletPointsText>
                  </ListItem>
                ))}
              </ListItemInnerContainer>
              <ListItemInnerContainer>
                {theme.servicesList1b.map((point) => (
                  <ListItem key={Math.random()}>
                    {/* <ListItemImage src={theme.listItemImage} /> */}
                    <BulletPoints style={{ width: '14px', height: '10px', marginTop: '11px', backgroundColor: point.color, borderRadius: 20 }} />
                    <BulletPointsText
                      style={{
                        width: "445px",
                        fontWeight: "bold",
                        maxLines: 1,
                        marginTop: '11px',
                        marginLeft: '8px',
                      }}
                    >
                      {point.text}
                    </BulletPointsText>
                  </ListItem>
                ))}
              </ListItemInnerContainer>
            </ListItemContainer>
            <Button
            	 to={{pathname:"/getInTouch",
               state:{letsTalk:true}
               }} 
              style={{ borderRadius: 23, marginTop: window.innerWidth < 600 ? '5%' : '60px' }}
            >
              <ButtonText>Let's Talk</ButtonText>
            </Button>
          </ServicesDetailsBannerContainer>

        </ServicesInnerContainer>
        {/* 2 */}
        <ServicesInnerContainer>

          <ServicesDetailsBannerContainer>
            <BannerMediumTitle>Progresive Web Applications</BannerMediumTitle>
            <GeneralTextMedium style={{ paddingBottom: "30px", marginTop: window.innerWidth > 600 && '10px' }}>
              With native-like capability and installation, progressive web applications
              are destined to reach anyone, on any device with a single codebase.
              It is the future of the emerging tech trends by extracting the best
              out of contemporary technology to deliver a seamless user experience
              for end-user. They can operate at a blazing fast speed across a range
              of browsers and devices.
            </GeneralTextMedium>

            {/* This is only for mobiles */}
            <Carousel style={{ marginBottom: '5%', display: window.innerWidth > 600 && 'none', flexDirection: 'column', alignItems: window.innerWidth > 600 ? 'flex-start' : 'center' }} itemsToShow={1} showArrows={false}>
              <view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', marginBottom: '5%' }}>

                <TechnologyContainerForMobile >
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#EF7517" }}
                  >
                    <AngularJs style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    AngularJs
                  </IconsText>
                </TechnologyContainerForMobile>

                <TechnologyContainerForMobile>
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#589A33" }}
                  >
                    <ASP style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    ASP.NET
                  </IconsText>
                </TechnologyContainerForMobile>

                <TechnologyContainerForMobile >
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#E73B1A" }}
                  >
                    <Rails style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    ROR
                  </IconsText>
                </TechnologyContainerForMobile>
              </view>

              <view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px' }}>

                <TechnologyContainerForMobile >
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#60AAE3" }}
                  >
                    <Node style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    NodeJs
                  </IconsText>
                </TechnologyContainerForMobile>

                <TechnologyContainerForMobile>
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#FAA712" }}
                  >
                    <Laravel style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    Laravel
                  </IconsText>
                </TechnologyContainerForMobile>
                <TechnologyContainerForMobile>
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#362E99" }}
                  >
                    <ReactNative style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    ReactJs
                  </IconsText>
                </TechnologyContainerForMobile>
              </view>


            </Carousel>

            {/* This is just for laptops and desktop */}
            <TechnologiesIconsInner style={{ display: window.innerWidth < 600 && 'none' }}>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#EF7517" }}
                >
                  <AngularJs style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  AngularJs
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#589A33" }}
                >
                  <ASP style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  ASP.NET
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#E73B1A" }}
                >
                  <Rails style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  ROR
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#60AAE3" }}
                >
                  <Node style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  NodeJs
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#FAA712" }}
                >
                  <Laravel style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  Laravel
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#362E99" }}
                >
                  <ReactNative style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  ReactJs
                </IconsText>
              </TechnologyContainer>
            </TechnologiesIconsInner>
            <ListItemContainer>
              <ListItemInnerContainer>
                {theme.servicesList2a.map((point) => (
                  <ListItem key={Math.random()}>
                    {/* <ListItemImage src={theme.listItemImage} /> */}
                    <BulletPoints style={{ width: '14px', height: '10px', marginTop: '11px', backgroundColor: point.color, borderRadius: 20 }} />
                    <BulletPointsText
                      style={{
                        width: "445px",
                        fontWeight: "bold",
                        maxLines: 1,
                        marginTop: '11px',
                        marginLeft: '8px',
                      }}
                    >
                      {point.text}
                    </BulletPointsText>
                  </ListItem>
                ))}
              </ListItemInnerContainer>
              <ListItemInnerContainer>
                {theme.servicesList2b.map((point) => (
                  <ListItem key={Math.random()}>
                    {/* <ListItemImage src={theme.listItemImage} /> */}
                    <BulletPoints style={{ width: '14px', height: '10px', marginTop: '11px', backgroundColor: point.color, borderRadius: 20 }} />
                    <BulletPointsText
                      style={{
                        width: "445px",
                        fontWeight: "bold",
                        maxLines: 1,
                        marginTop: '11px',
                        marginLeft: '8px',
                      }}
                    >
                      {point.text}
                    </BulletPointsText>
                  </ListItem>
                ))}
              </ListItemInnerContainer>
            </ListItemContainer>
            <Button
            	 to={{pathname:"/getInTouch",
               state:{letsTalk:true}
               }} 
              style={{ borderRadius: 23, marginTop: window.innerWidth < 600 ? '5%' : '60px' }}
            >
              <ButtonText>Let's Talk</ButtonText>
            </Button>
          </ServicesDetailsBannerContainer>
          <ServicesImageBannerContainer style={{ backgroundColor: "#fff4cc" }}>
            <ProgressiveWebApplications
              style={{ position: "relative", left: window.innerWidth > 600 ? "-25px" : '0px' }}
            />
          </ServicesImageBannerContainer>
        </ServicesInnerContainer>
        {/* 3 */}
        <ServicesInnerContainer style={{
          display: window.innerWidth < 600 && 'inline-flex',
          flexDirection: window.innerWidth < 600 && 'column-reverse',
        }}>
          <ServicesImageBannerContainer style={{ backgroundColor: "#ffd8de" }}>
            <AmbientUiAndUx style={{ position: "relative", right: window.innerWidth > 600 ? "-25px" : '0px' }} />
          </ServicesImageBannerContainer>
          <ServicesDetailsBannerContainer>
            <BannerMediumTitle>Ambient UI & UX</BannerMediumTitle>
            <GeneralTextMedium style={{ paddingBottom: "30px", marginTop: window.innerWidth > 600 && '10px' }}>
            An impeccable UI and UX design can turn your ideas into a reality.
             They enrich the user experience and enhance your product’s appeal to
              ensure that your web visitors turn into potential buyers. We ensure the 
              interface is not overloaded and must be intuitive enough to permit natural
               interaction. A highly responsive site with unique visual elements has much 
               higher chances of converting leads into clients. 

            </GeneralTextMedium>

            {/* This is only for mobiles */}
            <Carousel style={{ marginBottom: '5%', display: window.innerWidth > 600 && 'none', flexDirection: 'column', alignItems: window.innerWidth > 600 ? 'flex-start' : 'center' }} itemsToShow={1} showArrows={false}>
              <view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px' }}>

                <TechnologyContainerForMobile >
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#5D56E2" }}
                  >
                    <AdobeAfterEffects style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    Adobe <br/>AfterEffects
                  </IconsText>
                </TechnologyContainerForMobile>

                <TechnologyContainerForMobile>
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#DE7707" }}
                  >
                    <AdobeIllustrator style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    Adobe <br />Illustrator
                  </IconsText>
                </TechnologyContainerForMobile>

                <TechnologyContainerForMobile >
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#0B417B" }}
                  >
                    <AdobeLightroom style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    Adobe<br/> LightRoom
                  </IconsText>
                </TechnologyContainerForMobile>
              </view>

              <view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px' }}>

                <TechnologyContainerForMobile >
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#1B73C8" }}
                  >
                    <AdobePhotoshop style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    Adobe <br/>PhotoShop
                  </IconsText>
                </TechnologyContainerForMobile>

                <TechnologyContainerForMobile>
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#9C0093" }}
                  >
                    <AdobeXD style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    Adobe<br />XD
                  </IconsText>
                </TechnologyContainerForMobile>
                <TechnologyContainerForMobile>
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#589A33" }}
                  >
                    <FramerX style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    Framer<br />X
                  </IconsText>
                </TechnologyContainerForMobile>
              </view>


            </Carousel>

            {/* This is just for laptops and desktop */}
            <TechnologiesIconsInner style={{ display: window.innerWidth < 600 && 'none' }}>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#5D56E2" }}
                >
                  <AdobeAfterEffects style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  Adobe <br />AfterEffects
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#DE7707" }}
                >
                  <AdobeIllustrator style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  Adobe<br /> Illustrator
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#0B417B" }}
                >
                  <AdobeLightroom style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  Adobe <br />LightRoom
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#1B73C8" }}
                >
                  <AdobePhotoshop style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  Adobe <br />PhotoShop
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#9C0093" }}
                >
                  <AdobeXD style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  Adobe<br />XD
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#589A33" }}
                >
                  <FramerX style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  Framer<br />X
                </IconsText>
              </TechnologyContainer>
            </TechnologiesIconsInner>
            <ListItemContainer>
              <ListItemInnerContainer>
                {theme.servicesList3a.map((point) => (
                  <ListItem key={Math.random()}>
                    {/* <ListItemImage src={theme.listItemImage} /> */}
                    <BulletPoints style={{ width: '14px', height: '10px', marginTop: '11px', backgroundColor: point.color, borderRadius: 20 }} />
                    <BulletPointsText
                      style={{
                        width: "445px",
                        fontWeight: "bold",
                        maxLines: 1,
                        marginTop: '11px',
                        marginLeft: '8px',
                      }}
                    >
                      {point.text}
                    </BulletPointsText>
                  </ListItem>
                ))}
              </ListItemInnerContainer>
              <ListItemInnerContainer>
                {theme.servicesList3b.map((point) => (
                  <ListItem key={Math.random()}>
                    {/* <ListItemImage src={theme.listItemImage} /> */}
                    <BulletPoints style={{ width: '14px', height: '10px', marginTop: '11px', backgroundColor: point.color, borderRadius: 20 }} />
                    <BulletPointsText
                      style={{
                        width: "445px",
                        fontWeight: "bold",
                        maxLines: 1,
                        marginTop: '11px',
                        marginLeft: '8px',
                      }}
                    >
                      {point.text}
                    </BulletPointsText>
                  </ListItem>
                ))}
              </ListItemInnerContainer>
            </ListItemContainer>
            <Button
              	 to={{pathname:"/getInTouch",
                 state:{letsTalk:true}
                 }} 
              style={{ borderRadius: 23, marginTop: window.innerWidth < 600 ? '5%' : '60px' }}
            >
              <ButtonText>Let's Talk</ButtonText>
            </Button>
          </ServicesDetailsBannerContainer>

        </ServicesInnerContainer>
        {/* 4 */}
        <ServicesInnerContainer>

          <ServicesDetailsBannerContainer>
            <BannerMediumTitle>Blockchain Development</BannerMediumTitle>
            <GeneralTextMedium style={{ paddingBottom: "30px", marginTop: window.innerWidth > 600 && '10px' }}>
            Blockchain is becoming a revolutionary force for the fintech industry and supply chain 
            management. A blockchain development service augments development teams for cryptocurrency 
            exchange and wallet development. It provides the best alternate solution for digital
             security. It’s reshaping the methods of transactions all over the world with highly
              secure and top-quality blockchain development services. 

            </GeneralTextMedium>

            {/* This is only for mobiles */}
            <Carousel style={{ marginBottom: '5%', display: window.innerWidth > 600 && 'none', flexDirection: 'column', alignItems: window.innerWidth > 600 ? 'flex-start' : 'center' }} itemsToShow={1} showArrows={false}>
              <view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px' }}>

                <TechnologyContainerForMobile >
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#60AAE3" }}
                  >
                    <Ethereum style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    Ethereum
                  </IconsText>
                </TechnologyContainerForMobile>

                <TechnologyContainerForMobile>
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#EF7517" }}
                  >
                    <BinanceSmartChain style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    Binance <br/>SmartChain
                  </IconsText>
                </TechnologyContainerForMobile>

                <TechnologyContainerForMobile >
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#589A33" }}
                  >
                    <InternetComputer style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    Internet<br/> Computer
                  </IconsText>
                </TechnologyContainerForMobile>
              </view>

              <view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px' }}>

                <TechnologyContainerForMobile >
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#FA0049" }}
                  >
                    <PolkadotNetwork style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    Polkadot <br/>Network
                  </IconsText>
                </TechnologyContainerForMobile>

                <TechnologyContainerForMobile>
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#FAA712" }}
                  >
                    <PolygonMatic style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    Polygon <br/>Matic
                  </IconsText>
                </TechnologyContainerForMobile>
                <TechnologyContainerForMobile>
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#0A277B" }}
                  >
                    <TerraLuna style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    Terra Luna
                  </IconsText>
                </TechnologyContainerForMobile>
              </view>


            </Carousel>

            {/* This is just for laptops and desktop */}
            <TechnologiesIconsInner style={{ display: window.innerWidth < 600 && 'none' }}>
              <TechnologyContainer style={{ alignSelf: "start" }}>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#60AAE3" }}
                >
                  <Ethereum style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  Ethereum
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#EF7517" }}
                >
                  <BinanceSmartChain style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  Binance <br />SmartChain
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#589A33" }}
                >
                  <InternetComputer style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  Internet<br /> Computer
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#FA0049" }}
                >
                  <PolkadotNetwork style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  Polkadot<br /> Network
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#FAA712" }}
                >
                  <PolygonMatic style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  Polygon<br /> Matic
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer style={{ alignSelf: "start" }}>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#0A277B" }}
                >
                  <TerraLuna style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  Terra Luna
                </IconsText>
              </TechnologyContainer>
            </TechnologiesIconsInner>
            <ListItemContainer>
              <ListItemInnerContainer>
                {theme.servicesList4a.map((point) => (
                  <ListItem key={Math.random()}>
                    {/* <ListItemImage src={theme.listItemImage} /> */}
                    <BulletPoints style={{ width: '14px', height: '10px', marginTop: '11px', backgroundColor: point.color, borderRadius: 20 }} />
                    <BulletPointsText
                      style={{
                        width: "445px",
                        fontWeight: "bold",
                        maxLines: 1,
                        marginTop: '11px',
                        marginLeft: '8px',
                      }}
                    >
                      {point.text}
                    </BulletPointsText>
                  </ListItem>
                ))}
              </ListItemInnerContainer>
              <ListItemInnerContainer>
                {theme.servicesList4b.map((point) => (
                  <ListItem key={Math.random()}>
                    {/* <ListItemImage src={theme.listItemImage} /> */}
                    <BulletPoints style={{ width: '14px', height: '10px', marginTop: '11px', backgroundColor: point.color, borderRadius: 20 }} />
                    <BulletPointsText
                      style={{
                        width: "445px",
                        fontWeight: "bold",
                        maxLines: 1,
                        marginTop: '11px',
                        marginLeft: '8px',
                      }}
                    >
                      {point.text}
                    </BulletPointsText>
                  </ListItem>
                ))}
              </ListItemInnerContainer>
            </ListItemContainer>
            <Button
              	 to={{pathname:"/getInTouch",
                 state:{letsTalk:true}
                 }} 
              style={{ borderRadius: 23, marginTop: window.innerWidth < 600 ? '5%' : '60px' }}
            >
              <ButtonText>Let's Talk</ButtonText>
            </Button>
          </ServicesDetailsBannerContainer>
          <ServicesImageBannerContainer style={{ backgroundColor: "#f2dcca" }}>
            <BlockchainDevelopment
              style={{ position: "relative", left: window.innerWidth > 600 ? "-25px" : '0px' }}
            />
          </ServicesImageBannerContainer>
        </ServicesInnerContainer>
        {/* 5 */}
        <ServicesInnerContainer style={{
          display: window.innerWidth < 600 && 'inline-flex',
          flexDirection: window.innerWidth < 600 && 'column-reverse',
        }}>
          <ServicesImageBannerContainer style={{ backgroundColor: "#e6e2fb" }}>
            <DigitalMarketing style={{ position: "relative", right: window.innerWidth > 600 ? "-25px" : '0px' }} />
          </ServicesImageBannerContainer>
          <ServicesDetailsBannerContainer>
            <BannerMediumTitle>Digital Merketing</BannerMediumTitle>
            <GeneralTextMedium style={{ paddingBottom: "30px", marginTop: window.innerWidth > 600 && '10px' }}>
            Digital transformation is a prelude to success in the coming age with digital 
            marketing as it’s an essential component. With digital solutions, you are always 
            informed of what your competitors are doing and therefore have more laser-focused 
            control over your marketing strategies and how or where to spend your money. You have 
            a more targeted audience in reference to their demographics, age, gender, or consumer 
            behaviors. 

            </GeneralTextMedium>

            {/* This is only for mobiles */}
            <Carousel style={{ marginBottom: '5%', display: window.innerWidth > 600 && 'none', flexDirection: 'column', alignItems: window.innerWidth > 600 ? 'flex-start' : 'center' }} itemsToShow={1} showArrows={false}>
              <view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px' }}>

                <TechnologyContainerForMobile >
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#362E99" }}
                  >
                    <SEO style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    SEO
                  </IconsText>
                </TechnologyContainerForMobile>

                <TechnologyContainerForMobile>
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#E73B1A" }}
                  >
                    <GMB style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    GMB
                  </IconsText>
                </TechnologyContainerForMobile>

                <TechnologyContainerForMobile >
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#FAA712" }}
                  >
                    <PPC style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    PPC
                  </IconsText>
                </TechnologyContainerForMobile>
              </view>

              <view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px' }}>

                <TechnologyContainerForMobile >
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#352D97" }}
                  >
                    <Facebook style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    Facebook
                  </IconsText>
                </TechnologyContainerForMobile>

                <TechnologyContainerForMobile>
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#589A33" }}
                  >
                    <Instagram style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    Instagram
                  </IconsText>
                </TechnologyContainerForMobile>
                <TechnologyContainerForMobile>
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#EA2332" }}
                  >
                    <Youtube style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    Youtube
                  </IconsText>
                </TechnologyContainerForMobile>
              </view>


            </Carousel>

            {/* This is just for laptops and desktop */}
            <TechnologiesIconsInner style={{ display: window.innerWidth < 600 && 'none' }}>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#362E99" }}
                >
                  <SEO style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  SEO
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#E73B1A" }}
                >
                  <GMB style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  GMB
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#FAA712" }}
                >
                  <PPC style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  PPC
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#352D97" }}
                >
                  <Facebook style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  Facebook
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#589A33" }}
                >
                  <Instagram style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  Instagram
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#EA2332" }}
                >
                  <Youtube style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  Youtube
                </IconsText>
              </TechnologyContainer>
            </TechnologiesIconsInner>
            <ListItemContainer>
              <ListItemInnerContainer>
                {theme.servicesList5a.map((point) => (
                  <ListItem key={Math.random()}>
                    {/* <ListItemImage src={theme.listItemImage} /> */}
                    <BulletPoints style={{ width: '14px', height: '10px', marginTop: '11px', backgroundColor: point.color, borderRadius: 20 }} />
                    <BulletPointsText
                      style={{
                        width: "445px",
                        fontWeight: "bold",
                        maxLines: 1,
                        marginTop: '11px',
                        marginLeft: '8px',
                      }}
                    >
                      {point.text}
                    </BulletPointsText>
                  </ListItem>
                ))}
              </ListItemInnerContainer>
              <ListItemInnerContainer>
                {theme.servicesList5b.map((point) => (
                  <ListItem key={Math.random()}>
                    {/* <ListItemImage src={theme.listItemImage} /> */}
                    <BulletPoints style={{ width: '14px', height: '10px', marginTop: '11px', backgroundColor: point.color, borderRadius: 20 }} />
                    <BulletPointsText
                      style={{
                        width: "445px",
                        fontWeight: "bold",
                        maxLines: 1,
                        marginTop: '11px',
                        marginLeft: '8px',
                      }}
                    >
                      {point.text}
                    </BulletPointsText>
                  </ListItem>
                ))}
              </ListItemInnerContainer>
            </ListItemContainer>
            <Button
             	 to={{pathname:"/getInTouch",
                state:{letsTalk:true}
                }} 
              style={{ borderRadius: 23, marginTop: window.innerWidth < 600 ? '5%' : '60px' }}
            >
              <ButtonText>Let's Talk</ButtonText>
            </Button>
          </ServicesDetailsBannerContainer>

        </ServicesInnerContainer>
        {/* 6 */}
        <ServicesInnerContainer>

          <ServicesDetailsBannerContainer>
            <BannerMediumTitle>DevOps</BannerMediumTitle>
            <GeneralTextMedium style={{ paddingBottom: "30px", marginTop: window.innerWidth > 600 && '10px' }}>
            As the name suggests, DevOps break the traditional barrier between development 
            and operation teams to deliver much faster and optimized results. It’s basically
             a philosophy that ensures that every phase of the app’s lifecycle relates with 
             each other by bridging the gap between teams that used to work in siloes. Features 
             are added quickly, bugs are removed promptly and the entire process functions 
             a lot faster. 

            </GeneralTextMedium>

            {/* This is only for mobiles */}
            <Carousel style={{ marginBottom: '5%', display: window.innerWidth > 600 && 'none', flexDirection: 'column', alignItems: window.innerWidth > 600 ? 'flex-start' : 'center' }} itemsToShow={1} showArrows={false}>
              <view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px' }}>

                <TechnologyContainerForMobile >
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#FAA712" }}
                  >
                    <AWS style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    AWS
                  </IconsText>
                </TechnologyContainerForMobile>

                <TechnologyContainerForMobile>
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#579A32" }}
                  >
                    <Appium style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    Appium
                  </IconsText>
                </TechnologyContainerForMobile>

                <TechnologyContainerForMobile >
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#E73B1A" }}
                  >
                    <GoogleCloud style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    GoogleCloud
                  </IconsText>
                </TechnologyContainerForMobile>
              </view>

              <view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px' }}>

                <TechnologyContainerForMobile >
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#362E99" }}
                  >
                    <Gradle style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    Gradle
                  </IconsText>
                </TechnologyContainerForMobile>

                <TechnologyContainerForMobile>
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#60AAE3" }}
                  >
                    <Jenkins style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    Jenkins
                  </IconsText>
                </TechnologyContainerForMobile>
                <TechnologyContainerForMobile>
                  <TechnologyIconImageContainer
                    style={{ backgroundColor: "#EF7618" }}
                  >
                    <Selenium style={{ height: "50px", width: "50px" }} />
                  </TechnologyIconImageContainer>
                  <IconsText style={{ textAlign: "center" }}>
                    Selenium
                  </IconsText>
                </TechnologyContainerForMobile>
              </view>


            </Carousel>

            {/* This is just for laptops and desktop */}
            <TechnologiesIconsInner style={{ display: window.innerWidth < 600 && 'none' }}>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#FAA712" }}
                >
                  <AWS style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  AWS
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#579A32" }}
                >
                  <Appium style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  Appium
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#E73B1A" }}
                >
                  <GoogleCloud style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  GoogleCloud
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#362E99" }}
                >
                  <Gradle style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  Gradle
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#60AAE3" }}
                >
                  <Jenkins style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  Jenkins
                </IconsText>
              </TechnologyContainer>
              <TechnologyContainer>
                <TechnologyIconImageContainer
                  style={{ backgroundColor: "#EF7618" }}
                >
                  <Selenium style={{ height: "50px", width: "50px" }} />
                </TechnologyIconImageContainer>
                <IconsText style={{ textAlign: "center" }}>
                  Selenium
                </IconsText>
              </TechnologyContainer>
            </TechnologiesIconsInner>
            <ListItemContainer>
              <ListItemInnerContainer>
                {theme.servicesList6a.map((point) => (
                  <ListItem key={Math.random()}>
                    {/* <ListItemImage src={theme.listItemImage} /> */}
                    <BulletPoints style={{ width: '14px', height: '10px', marginTop: '11px', backgroundColor: point.color, borderRadius: 20 }} />
                    <BulletPointsText
                      style={{
                        width: "445px",
                        fontWeight: "bold",
                        maxLines: 1,
                        marginTop: '11px',
                        marginLeft: '8px',
                      }}
                    >
                      {point.text}
                    </BulletPointsText>
                  </ListItem>
                ))}
              </ListItemInnerContainer>
              <ListItemInnerContainer>
                {theme.servicesList6b.map((point) => (
                  <ListItem key={Math.random()}>
                    {/* <ListItemImage src={theme.listItemImage} /> */}
                    <BulletPoints style={{ width: '14px', height: '10px', marginTop: '11px', backgroundColor: point.color, borderRadius: 20 }} />
                    <BulletPointsText
                      style={{
                        width: "445px",
                        fontWeight: "bold",
                        maxLines: 1,
                        marginTop: '11px',
                        marginLeft: '8px',
                      }}
                    >
                      {point.text}
                    </BulletPointsText>
                  </ListItem>
                ))}
              </ListItemInnerContainer>
            </ListItemContainer>
            <Button
              	 to={{pathname:"/getInTouch",
                 state:{letsTalk:true}
                 }} 
              style={{ borderRadius: 23, marginTop: window.innerWidth < 600 ? '5%' : '60px' }}
            >
              <ButtonText>Let's Talk</ButtonText>
            </Button>
          </ServicesDetailsBannerContainer>
          <ServicesImageBannerContainer style={{ backgroundColor: "#cbecdb" }}>
            <DevOps style={{ position: "relative", left: window.innerWidth > 600 ? "-25px" : '0px' }} />
          </ServicesImageBannerContainer>
        </ServicesInnerContainer>
      </ServicesContainer>
      <view style={{ marginTop: window.innerWidth > 600 && "70px" }} />
      {/* TESTAMONIALS */}
      <Testimonials theme={theme}/>
    </HTML.FullWidthContainer>
  );
};
//HTML
const BannerContainer = styled.div`
  background-image: url(${(props) => props.theme.bannerBackground});
  width: 100%;
  background-size: cover;
  background-position-x: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;

  
`;
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
    align-items:center;
  }
`;


const Button = styled(NavLink)`
  
  color: white;
  background-color: #e14d1f;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  font-size: 0.8rem;
  font-weight: 700;
  align-items: center;
  width:113px;
	height:46px;
	justify-content:center;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 600px) {
   display:inline-flex;
   }

`;
const MainBannerImage = styled.div`
  position: relative;
  background-image: url(${(props) => props.theme.servicesBanner});
  width: 661px;
  height: 463px;
  background-size: cover;
  background-position-x: 0;
  background-repeat: no-repeat;
  z-index: 0;
  left: -70px;

  @media (max-width: 600px) {
   width:100%;
   height:100%;
   padding:35% 0;
   background-position-x: 100%;
   background-size: contain;
   left:0;
   margin-top:5%;
  }

`;
// services
const ServicesContainer = styled.div`
  max-width: 1170px;
  width: 100%;
  height: 100%;
`;
const ServicesInnerContainer = styled.div`
  max-width: 1170px;
  width: 1170px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 70px;

  @media (max-width: 600px) {
    display:block;
    width:100%;
    margin-top:5%;
  }

`;
const ServicesDetailsBannerContainer = styled.div`
  width: 585px;
  height: 675px;

  @media (max-width: 600px) {
    width:100%;
    height:100%;
    text-align:center;
  }
`;
const ServicesImageBannerContainer = styled.div`
  width: 520px;
  height: 675px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    width:100%;
    height:100%;
    margin:5% 0;
  }
`;


const TechnologiesIconsInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 50px;
`;
const TechnologyIconImageContainer = styled.div`
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10%;
  border-radius: 10px;
  
`;
const TechnologyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //   margin: 0 58px;
  margin-right: 25px;
`;

const TechnologyContainerForMobile = styled.div`
  width:50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  
  
`;

const ListItem = styled("li")`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ListItemContainer = styled.div`
  display: flex;
  @media (max-width: 600px) {
   display:block;
  }
`;
const ListItemInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 600px) {
    width:100%;
    text-align:left;
   
  }

`;

const BulletPoints = styled.div`

	width:10px;
	height:10px;
	margin-top:11px;
	border-radius:20px;

  @media (max-width: 600px) {
	margin-left:30px;
  }
`;




export default Services;
