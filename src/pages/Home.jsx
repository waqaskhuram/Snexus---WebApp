import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Carousel from "react-elastic-carousel";
import { NavLink, withRouter } from 'react-router-dom';

import { getTheme } from '../getTheme';

import HTML from '../constants/StyledComponents';
// testimonials
import Testimonials from '../components/Testimonials';
//strings imports
import strings from '../constants/Strings';

import { GeneralTextRegular, GeneralTextMedium, BannerBigTitle, BannerMediumTitle, YellowTitle, SmallSemiTitleBlack, GeneralTextRegularBlack, BigSemiTitle, SmallSemiTitle, ButtonText, TechnologiesTabsTextForMobile, IconsText } from '../constants/FontTags';

//overview sctions vector icons svg
import { ReactComponent as SmallBusinessesIcon } from '../assets/pages/home/overviewSection/smallBusinesses.svg';
import { ReactComponent as LargeEnterpriseIcon } from '../assets/pages/home/overviewSection/largeEnterprises.svg';
import { ReactComponent as ResellersIcon } from '../assets/pages/home/overviewSection/resellers.svg';
//our services marquee icons
import { ReactComponent as ProgressiveWebApplications } from '../assets/pages/home/ourServices/progressiveWebApplications.svg';
import { ReactComponent as AmbientUiAndUx } from '../assets/pages/home/ourServices/ambientUiAndUx.svg';
import { ReactComponent as DigitalMarketing } from '../assets/pages/home/ourServices/digitalMarketing.svg';
import { ReactComponent as BlockchainDevelopment } from '../assets/pages/home/ourServices/blockchainDevelopment.svg';
import { ReactComponent as DevOps } from '../assets/pages/home/ourServices/devOps.svg';
import { ReactComponent as MobileApps } from '../assets/pages/home/ourServices/mobileApps.svg';
//technologies icons
import { ReactComponent as IOS } from '../assets/pages/home/technologies/iOS.svg';
import { ReactComponent as Android } from '../assets/pages/home/technologies/android.svg';
import { ReactComponent as Swift } from '../assets/pages/home/technologies/swift.svg';
import { ReactComponent as Flutter } from '../assets/pages/home/technologies/flutter.svg';
import { ReactComponent as Ionic } from '../assets/pages/home/technologies/ionic.svg';
import { ReactComponent as ReactNative } from '../assets/pages/home/technologies/reactNative.svg';
import { ReactComponent as Xamarim } from '../assets/pages/home/technologies/xamarin.svg';
import { ReactComponent as Titanium } from '../assets/pages/home/technologies/titanium.svg';
import { ReactComponent as ObjectiveC } from '../assets/pages/home/technologies/objectiveC.svg';
import { ReactComponent as Kotlin } from '../assets/pages/home/technologies/kotlin.svg';
import { ReactComponent as AngularJs } from '../assets/pages/home/technologies/angularJs.svg';
import { ReactComponent as ReactJs } from '../assets/pages/home/technologies/reactJs.svg';
import { ReactComponent as TypeScript } from '../assets/pages/home/technologies/typeScript.svg';
import { ReactComponent as Vue } from '../assets/pages/home/technologies/vue.svg';
import { ReactComponent as WPF } from '../assets/pages/home/technologies/WPF.svg';
import { ReactComponent as HTML5 } from '../assets/pages/home/technologies/HTML5.svg';
import { ReactComponent as NodeJs } from '../assets/pages/home/technologies/nodeJs.svg';
import { ReactComponent as PHP } from '../assets/pages/home/technologies/PHP.svg';
import { ReactComponent as Python } from '../assets/pages/home/technologies/python.svg';
import { ReactComponent as Rails } from '../assets/pages/home/technologies/rails.svg';
import { ReactComponent as Java } from '../assets/pages/home/technologies/java.svg';
import { ReactComponent as NET } from '../assets/pages/home/technologies/NET.svg';
import { ReactComponent as Drupal } from '../assets/pages/home/technologies/drupal.svg';
import { ReactComponent as Joomla } from '../assets/pages/home/technologies/joomla.svg';
import { ReactComponent as Magento } from '../assets/pages/home/technologies/magento.svg';
import { ReactComponent as Shopify } from '../assets/pages/home/technologies/shopify.svg';
import { ReactComponent as WordPress } from '../assets/pages/home/technologies/wordPress.svg';
import { ReactComponent as DynamoDB } from '../assets/pages/home/technologies/dynamoDb.svg';
import { ReactComponent as FireBase } from '../assets/pages/home/technologies/firebase.svg';
import { ReactComponent as MongoDB } from '../assets/pages/home/technologies/mongoDb.svg';
import { ReactComponent as MsSQL } from '../assets/pages/home/technologies/MsSQL.svg';
import { ReactComponent as MySQL } from '../assets/pages/home/technologies/mySQL.svg';
import { ReactComponent as Oracle } from '../assets/pages/home/technologies/oracle.svg';
import { ReactComponent as PostgreSQL } from '../assets/pages/home/technologies/postgreSQL.svg';
import { ReactComponent as Realm } from '../assets/pages/home/technologies/realm.svg';
import { ReactComponent as Redis } from '../assets/pages/home/technologies/redis.svg';
import { ReactComponent as Appium } from '../assets/pages/home/technologies/appium.svg';
import { ReactComponent as AWS } from '../assets/pages/home/technologies/AWS.svg';
import { ReactComponent as GoogleCloud } from '../assets/pages/home/technologies/googleCloud.svg';
import { ReactComponent as Gradle } from '../assets/pages/home/technologies/gradle.svg';
import { ReactComponent as Jenkins } from '../assets/pages/home/technologies/jenkins.svg';
import { ReactComponent as Selenium } from '../assets/pages/home/technologies/selenium.svg';

const scrolling = keyframes`
 0% { transform: translateX(0); }
 100% { transform: translateX(-80vw); }
`;

const scrollingMobile = keyframes`
 0% { transform: translateX(0); }
 100% { transform: translateX(-400vw); }
`;
const ourServicesScrolling = keyframes`
 0% { transform: translateX(0); }
 100% { transform: translateX(-975px); }
`;


const ourServicesSVG = { height: '200px', width: '230px' };
const Home = (props) => {
	const [isHover, setIsHover] = useState('false');
	const [technology, setTechnology] = useState('mobile');
	//const [index,setIndex]=useState(2);
	const theme = getTheme(props.themeName);

	
	 

	// let letsTalk = () => {
	// 	console.log("letstalk")
	// 	props.history.push(`/getInTouch/${1}`)
	// }

	return (
		<HTML.FullWidthContainer>
			{/* about section */}
			<Container>
				<BannerContainer>
					<BannerInnerContainer style={{ marginTop: window.innerWidth > 600 && '140px' }}>
						<BannerBigTitle>
							We Engineer <br style={{ display: window.innerWidth < 600 && 'none', lineHeight: '1' }} /> Software Solutions.
						</BannerBigTitle>
						<GeneralTextMedium>
							From architecting your ideas to implementing final products, build ground-breaking technology assets for your business with Snexus.Establish data-driven strategy based on
							client’s key business requirements by using cutting-edge technology measuring effectiveness
							to deliver accurate results for our clients to improve performance, reduce risks, and plan for
							what’s next.
						</GeneralTextMedium>
						<Button
							to={{
								pathname: "/getInTouch",
								state: { letsTalk: true }
							}}
							style={{ borderRadius: 23 }}>
							<ButtonText>Let's Talk</ButtonText>
						</Button>
					</BannerInnerContainer>

					<BannerInnerContainer style={{ marginTop: window.innerWidth > 600 ? '70px' : '5%', marginBottom: window.innerWidth < 600 && '5%' }}>
						<BannerImage src={theme.bannerImage} />
					</BannerInnerContainer>
				</BannerContainer>
			</Container>
			{/* marquee section */}
			<MarqueeFullWidthContainer>
				<MarqueeOuterContainer>
					<MarqueeInnerContainer >


						<MarqueeItem>
							<MarqueeImage src={theme.marqueeImage1} />
						</MarqueeItem>
						<MarqueeItem>
							<MarqueeImage src={theme.marqueeImage2} />
						</MarqueeItem>
						<MarqueeItem>
							<MarqueeImage src={theme.marqueeImage3} />
						</MarqueeItem>
						<MarqueeItem>
							<MarqueeImage src={theme.marqueeImage4} />
						</MarqueeItem>
						{/* <MarqueeItem>
							<MarqueeImage src={theme.marqueeImage5} />
						</MarqueeItem> */}
						<MarqueeItem>
							<MarqueeImage src={theme.marqueeImage6} />
						</MarqueeItem>
						{/* <MarqueeItem>
							<MarqueeImage src={theme.marqueeImage7} />
						</MarqueeItem> */}
						<MarqueeItem>
							<MarqueeImage src={theme.marqueeImage8} />
						</MarqueeItem>
						<MarqueeItem >
							<MarqueeImage src={theme.marqueeImage9} />
						</MarqueeItem>
						<MarqueeItem>
							<MarqueeImage src={theme.marqueeImage10} />
						</MarqueeItem>





						<MarqueeItem>
							<MarqueeImage src={theme.marqueeImage1} />
						</MarqueeItem>
						<MarqueeItem>
							<MarqueeImage src={theme.marqueeImage2} />
						</MarqueeItem>
						<MarqueeItem>
							<MarqueeImage src={theme.marqueeImage3} />
						</MarqueeItem>
						<MarqueeItem>
							<MarqueeImage src={theme.marqueeImage4} />
						</MarqueeItem>
						{/* <MarqueeItem>
							<MarqueeImage src={theme.marqueeImage5} />
						</MarqueeItem> */}
						<MarqueeItem>
							<MarqueeImage src={theme.marqueeImage6} />
						</MarqueeItem>
						{/* <MarqueeItem>
							<MarqueeImage src={theme.marqueeImage7} />
						</MarqueeItem> */}
						<MarqueeItem>
							<MarqueeImage src={theme.marqueeImage8} />
						</MarqueeItem>
						<MarqueeItem>
							<MarqueeImage src={theme.marqueeImage9} />
						</MarqueeItem>
						<MarqueeItem>
							<MarqueeImage src={theme.marqueeImage10} />
						</MarqueeItem>







					</MarqueeInnerContainer>
				</MarqueeOuterContainer>
			</MarqueeFullWidthContainer>
			{/* overview section */}
			<OverviewFullWidthContainer>
				<OverviewContainer>
					<OverviewLeftContainer>
						<BannerImage src={theme.companyOverviewBanner} />
					</OverviewLeftContainer>
					<OverviewRightContainer>
						<BannerMediumTitle style={{ alignSelf: window.innerWidth < 600 && 'center' }}>Company Overview Section</BannerMediumTitle>
						<GeneralTextMedium>
							Ready to grow At Snexus, we equip our clients to get access to cross-functional
							teams with expertise ranging from web to app design and development to growth
							marketing, a complete 360-degree solution. We aim to help business owners drive
							measurable growth by using software development solutions that empower your business.
							Boost your business to new dimensions with our marketing technology platform and
							marketing services.
						</GeneralTextMedium>
						<OverviewSectionIconsContainer>
							<OverviewSectionIcons>
								<OverviewSectionIconsIndividual
									style={{ backgroundColor: '#b7468f' }}
								>
									<SmallBusinessesIcon
										style={{ height: '50px', width: '50px' }}
									/>
								</OverviewSectionIconsIndividual>
								<IconsText style={{ textAlign: 'center' }}>
									Small <br sryle={{ display: window.innerWidth > 600 && 'none' }} />Businesses
								</IconsText>
							</OverviewSectionIcons>
							<OverviewSectionIcons>
								<OverviewSectionIconsIndividual
									style={{ backgroundColor: '#f7af14' }}
								>
									<LargeEnterpriseIcon
										style={{ height: '50px', width: '50px' }}
									/>
								</OverviewSectionIconsIndividual>
								<IconsText style={{ textAlign: 'center' }}>
									Large <br sryle={{ display: window.innerWidth > 600 && 'none' }} />Enterprises
								</IconsText>
							</OverviewSectionIcons>
							<OverviewSectionIcons>
								<OverviewSectionIconsIndividual
									style={{ backgroundColor: '#66a240' }}
								>
									<ResellersIcon style={{ height: '50px', width: '50px' }} />
								</OverviewSectionIconsIndividual>
								<IconsText style={{ textAlign: 'center' }}>
									Resellers <br sryle={{ display: window.innerWidth > 600 && 'none' }} />
									<span style={{ color: theme.background }}> h</span>
								</IconsText>
							</OverviewSectionIcons>
						</OverviewSectionIconsContainer>
						<Button
							to={{
								pathname: "/getInTouch",
								state: { letsTalk: true }
							}}
							style={{ borderRadius: 23, alignSelf: window.innerWidth < 600 && 'center' }}>
							<ButtonText>Let's Talk</ButtonText>
						</Button>
					</OverviewRightContainer>
				</OverviewContainer>
			</OverviewFullWidthContainer>
			{/* services section */}
			<ServicesContainer>
				<YellowTitle style={{ color: '#fcb818' }}>
					Our Services
				</YellowTitle>
				<BannerMediumTitle style={{
					marginTop: window.innerWidth > 600 ? '5px' : '1%',
					marginLeft: window.innerWidth > 600 && '200px',
					marginRight: window.innerWidth > 600 && '200px',
					textAlign: 'center'
				}}>
					Maximize the return of your digital investment through No. 1 technology solutions.
				</BannerMediumTitle>
				<OurServicesMarqueeContainer isHover={isHover} onMouseEnter={() => setIsHover('start')} onMouseLeave={() => setIsHover('end')}>
					{/* Only for mobile  view */}
					<Carousel
						style={{
							margin: '5% 0%',
							display: window.innerWidth > 600 && 'none',
							flexDirection: 'column',
							alignItems: window.innerWidth > 600 ? 'flex-start' : 'center'
						}}
						itemsToShow={1}
						showArrows={false}
						transitionMs={500}
						easing={"cubic-bezier(1,.15,.55,1.54)"}
						tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
						enableAutoPlay={true}
						autoPlaySpeed={10000}
					>
						<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0px 30px 10% 30px', justifyContent: 'center' }}>
							<OurServicesMarqueeItem>
								<OurServicesMarqueeItemContent
									style={{ backgroundColor: '#fff4cc' }}
								>
									<ProgressiveWebApplications style={ourServicesSVG} />
									<SmallSemiTitleBlack>
										Progressive Web Applications
									</SmallSemiTitleBlack>
									<GeneralTextRegularBlack>
										{strings.marqueeProgressiveWebApplications}
									</GeneralTextRegularBlack>
								</OurServicesMarqueeItemContent>
							</OurServicesMarqueeItem>
						</view>

						<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'center' }}>
							<OurServicesMarqueeItem>
								<OurServicesMarqueeItemContent
									style={{ backgroundColor: '#f1d8de' }}
								>
									<AmbientUiAndUx style={ourServicesSVG} />
									<SmallSemiTitleBlack>
										Ambient UI & UX
									</SmallSemiTitleBlack>
									<GeneralTextRegularBlack>
										{strings.marqueeAmbientUIandUx}
									</GeneralTextRegularBlack>
								</OurServicesMarqueeItemContent>
							</OurServicesMarqueeItem>
						</view>


						<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'center' }}>
							<OurServicesMarqueeItem>
								<OurServicesMarqueeItemContent
									style={{ backgroundColor: '#c6d2fa' }}
								>
									<MobileApps style={ourServicesSVG} />
									<SmallSemiTitleBlack>
										Mobile Apps
									</SmallSemiTitleBlack>

									<GeneralTextRegularBlack>
										{strings.marqueeMobileApps}
									</GeneralTextRegularBlack>
								</OurServicesMarqueeItemContent>
							</OurServicesMarqueeItem>
						</view>

						<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'center' }}>
							<OurServicesMarqueeItem>
								<OurServicesMarqueeItemContent
									style={{ backgroundColor: '#e6e2fb' }}
								>
									<DigitalMarketing style={ourServicesSVG} />
									<SmallSemiTitleBlack>
										Digital Marketing
									</SmallSemiTitleBlack>
									<GeneralTextRegularBlack>
										{strings.marqueeDigitalMarketing}
									</GeneralTextRegularBlack>
								</OurServicesMarqueeItemContent>
							</OurServicesMarqueeItem>
						</view>

						<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'center' }}>
							<OurServicesMarqueeItem>
								<OurServicesMarqueeItemContent
									style={{ backgroundColor: '#cbecdb' }}
								>
									<DevOps style={ourServicesSVG} />
									<SmallSemiTitleBlack>
										DevOps
									</SmallSemiTitleBlack>
									<GeneralTextRegularBlack>
										{strings.marqueeDevOps}
									</GeneralTextRegularBlack>
								</OurServicesMarqueeItemContent>
							</OurServicesMarqueeItem>
						</view>

						<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'center' }}>
							<OurServicesMarqueeItem>
								<OurServicesMarqueeItemContent
									style={{ backgroundColor: '#f2dcca' }}
								>
									<BlockchainDevelopment style={ourServicesSVG} />
									<SmallSemiTitleBlack>
										Blockchain Development
									</SmallSemiTitleBlack>
									<GeneralTextRegularBlack>
										{strings.marqueeBlockchainDevelopment}
									</GeneralTextRegularBlack>
								</OurServicesMarqueeItemContent>
							</OurServicesMarqueeItem>
						</view>
					</Carousel>

					{/* Only for laptops and desktops  */}
					<OurServicesMarqueeInnerContainer style={{ display: window.innerWidth < 600 && 'none' }}>
						{/* blank */}
						<OurServicesMarqueeItem>
							<OurServicesMarqueeItemContent
								style={{ backgroundColor: theme.background }}
							></OurServicesMarqueeItemContent>
						</OurServicesMarqueeItem>
						{/* marquee items */}
						<OurServicesMarqueeItem>
							<OurServicesMarqueeItemContent
								style={{ backgroundColor: '#fff4cc' }}
							>
								<ProgressiveWebApplications style={ourServicesSVG} />
								<SmallSemiTitleBlack>
									Progressive Web Applications
								</SmallSemiTitleBlack>
								<GeneralTextRegularBlack>
									{strings.marqueeProgressiveWebApplications}
								</GeneralTextRegularBlack>
							</OurServicesMarqueeItemContent>
						</OurServicesMarqueeItem>
						<OurServicesMarqueeItem>
							<OurServicesMarqueeItemContent
								style={{ backgroundColor: '#f1d8de' }}
							>
								<AmbientUiAndUx style={ourServicesSVG} />
								<SmallSemiTitleBlack>
									Ambient UI & UX
								</SmallSemiTitleBlack>
								<GeneralTextRegularBlack>
									{strings.marqueeAmbientUIandUx}
								</GeneralTextRegularBlack>
							</OurServicesMarqueeItemContent>
						</OurServicesMarqueeItem>
						<OurServicesMarqueeItem>
							<OurServicesMarqueeItemContent
								style={{ backgroundColor: '#c6d2fa' }}
							>
								<MobileApps style={ourServicesSVG} />
								<SmallSemiTitleBlack>
									Mobile Apps
								</SmallSemiTitleBlack>

								<GeneralTextRegularBlack>
									{strings.marqueeMobileApps}
								</GeneralTextRegularBlack>
							</OurServicesMarqueeItemContent>
						</OurServicesMarqueeItem>
						<OurServicesMarqueeItem>
							<OurServicesMarqueeItemContent
								style={{ backgroundColor: '#e6e2fb' }}
							>
								<DigitalMarketing style={ourServicesSVG} />
								<SmallSemiTitleBlack>
									Digital Marketing
								</SmallSemiTitleBlack>
								<GeneralTextRegularBlack>
									{strings.marqueeDigitalMarketing}
								</GeneralTextRegularBlack>
							</OurServicesMarqueeItemContent>
						</OurServicesMarqueeItem>
						<OurServicesMarqueeItem>
							<OurServicesMarqueeItemContent
								style={{ backgroundColor: '#cbecdb' }}
							>
								<DevOps style={ourServicesSVG} />
								<SmallSemiTitleBlack>
									DevOps
								</SmallSemiTitleBlack>
								<GeneralTextRegularBlack>
									{strings.marqueeDevOps}
								</GeneralTextRegularBlack>
							</OurServicesMarqueeItemContent>
						</OurServicesMarqueeItem>
						<OurServicesMarqueeItem>
							<OurServicesMarqueeItemContent
								style={{ backgroundColor: '#f2dcca' }}
							>
								<BlockchainDevelopment style={ourServicesSVG} />
								<SmallSemiTitleBlack>
									Blockchain Development
								</SmallSemiTitleBlack>
								<GeneralTextRegularBlack>
									{strings.marqueeBlockchainDevelopment}
								</GeneralTextRegularBlack>
							</OurServicesMarqueeItemContent>
						</OurServicesMarqueeItem>
					</OurServicesMarqueeInnerContainer>
				</OurServicesMarqueeContainer>
			</ServicesContainer>
			{/* case studies */}
			<CaseStudiesContainer>
				<BigSemiTitle style={{ marginTop: window.innerWidth > 600 && '60px' }}>
					We love transforming product ideas{' '}
					<br style={{ display: window.innerWidth < 600 && 'none' }} />
					to digital realities.
				</BigSemiTitle>
				{/* case studies 1 */}
				<CaseStudiesBannerContainer style={{
					display: window.innerWidth < 600 && 'inline-flex',
					flexDirection: window.innerWidth < 600 && 'column-reverse',
				}}>
					<CaseStudyImageContainer style={{ marginLeft: window.innerWidth < 600 && '15%' }}>
						<CaseStudiesImage style={{ marginTop: window.innerWidth > 600 ? '30px' : '5%', }} src={theme.caseStudy1} />
					</CaseStudyImageContainer>
					<CaseStudyInfoContainer >
						<CaseStudiesLogo src={theme.caseStudy1Logo} />
						<SmallSemiTitle>Swap <text style={{ color: '#dcbe72', fontWeight: '600' }}>Shop</text></SmallSemiTitle>
						<SmallSemiTitle style={{ fontSize: window.innerWidth > 600 ? '27px' : '20px', textAlign: window.innerWidth > 600 && 'left' }}>
						Got a surplus of stuff you don’t need but can't be bothered selling?
						</SmallSemiTitle>
						<GeneralTextRegular style={{ marginTop: '2%', width: '85%' }}>
							Trading your items on swap shop can be a quick and easy solution. There is a famous saying that one man’s
							trash is another man’s treasure, and a new marketplace called swap shop is putting this
							into practice. A swap shop is exactly what it sounds like: a place to trade the gently
							used goods you no longer want. With easy functionality, it is a user-friendly app for
							exchanging goods and bartering for services. With many other members, chances are you
							can easily get rid of some ofyour items in exchange for someone else’s.
						</GeneralTextRegular>
						<Button
							to={{
								pathname: "/getInTouch",
								state: { letsTalk: true }
							}}
							style={{ borderRadius: 23, marginTop: '5%' }}>
							<ButtonText>Let's Talk</ButtonText>
						</Button>
					</CaseStudyInfoContainer>
				</CaseStudiesBannerContainer>

				{/* case studies 2 */}
				<CaseStudiesBannerContainer>
					<CaseStudyInfoContainer>
						<CaseStudiesLogo src={theme.caseStudy2Logo} />
						<SmallSemiTitle style={{ color: '#ce33a3' }}>
							o<text style={{ color: '#5423bc', fontWeight: '600' }}>ffax</text>
						</SmallSemiTitle>
						<SmallSemiTitle style={{ fontSize: window.innerWidth > 600 ? '27px' : '20px', textAlign: window.innerWidth > 600 && 'left' }}>
						Simplify medical billing and maintain control of your practice
						</SmallSemiTitle>
						<GeneralTextRegular style={{ marginTop: '2%', width: '85%' }}>
							Offax is a reliable,
							affordable, and complete practice management solution. Offax automates invoicing and
							payment collection that entails generating invoices for orders, invoicing templatesfor
							different electronic billing, and facilitating the claims process. We integrate offax
							medical billing app with accounting software for a seamless experience. It also governs
							the payment process between patients and health care providers.
						</GeneralTextRegular>
						<Button
							to={{
								pathname: "/getInTouch",
								state: { letsTalk: true }
							}}
							style={{ borderRadius: 23, marginTop: '5%' }}>
							<ButtonText>Let's Talk</ButtonText>
						</Button>
					</CaseStudyInfoContainer>
					<CaseStudyImageContainer>
						<CaseStudiesImage src={theme.caseStudy2} />
					</CaseStudyImageContainer>
				</CaseStudiesBannerContainer>
				{/* case studies 3 */}
				<CaseStudiesBannerContainer style={{
					display: window.innerWidth < 600 && 'inline-flex',
					flexDirection: window.innerWidth < 600 && 'column-reverse',
				}}>
					<CaseStudyImageContainer style={{ marginLeft: window.innerWidth < 600 && '15%' }}>
						<CaseStudiesImage src={theme.caseStudy3} />
					</CaseStudyImageContainer>
					<CaseStudyInfoContainer>
						<CaseStudiesLogo src={theme.caseStudy3Logo} />
						<SmallSemiTitle>
							coin<text style={{ color: '#dcbe72', fontWeight: '600' }}>flex</text>
						</SmallSemiTitle>
						<SmallSemiTitle style={{ fontSize: window.innerWidth > 600 ? '27px' : '20px', textAlign: window.innerWidth > 600 && 'left' }} >
						Your go-to app for every day Crypto
						</SmallSemiTitle>
						<GeneralTextRegular style={{ marginTop: '2%' }}>
							 Coinflex allows you to securely buy, store and sell
							crypto currencies like bitcoin, bitcoin cash,Litecoin, Ethereum instantly. Coinflex works
							to make crypto currency simple, fast, and available to anyone. Start trading with safety and
							convenience. With Coinflex, you can receive and send crypto worldwide to your friends and
							family in seconds. For added security, you can store your funds in a vault with time-delayed
							withdrawals.
						</GeneralTextRegular>
						<Button 	
						 to={{pathname:"/getInTouch",
						state:{letsTalk:true}
						}} 
						 style={{ borderRadius: 23, marginTop: '5%' }}>
							<ButtonText>Let's Talk</ButtonText>
						</Button>
					</CaseStudyInfoContainer>
				</CaseStudiesBannerContainer>
			</CaseStudiesContainer>
			{/* technologies */}
			<TechnologyBackground />
			<TechnologiesContainer >
				<BigSemiTitle style={{ textAlign: 'center', fontSize: '28px', marginTop: window.innerWidth > 600 && '60px' }}>
					Technologies We Work With Section
				</BigSemiTitle>
				{/* This is just for mobile view */}
				<TechnologiesTabsContainerForMobile style={{ display: window.innerWidth > 600 && 'none' }}>
					<TechnologiesTabsTextForMobile
						onClick={() => setTechnology('cms')}
						style={{
							marginRight: '10px',
							backgroundColor: technology === 'cms' && '#fcb818',

						}}>
						CMS
					</TechnologiesTabsTextForMobile>

					<TechnologiesTabsTextForMobile
						onClick={() => setTechnology('mobile')}
						style={{
							marginRight: '10px',
							backgroundColor: technology === 'mobile' && '#fcb818',

						}}>
						Mobile
					</TechnologiesTabsTextForMobile>

					<TechnologiesTabsTextForMobile
						onClick={() => setTechnology('frontend')}
						style={{
							marginRight: '10px',
							backgroundColor: technology === 'frontend' && '#fcb818',

						}}>
						FrontEnd
					</TechnologiesTabsTextForMobile>
					<TechnologiesTabsTextForMobile
						onClick={() => setTechnology('backend')}
						style={{
							backgroundColor: technology === 'backend' && '#fcb818',

						}}>
						BackEnd
					</TechnologiesTabsTextForMobile>
				</TechnologiesTabsContainerForMobile>

				{/* This is just for mobile view */}
				<TechnologiesTabsContainerForMobile style={{ marginTop: '4%', display: window.innerWidth > 600 && 'none' }}>
					<TechnologiesTabsTextForMobile
						onClick={() => setTechnology('database')}
						style={{
							marginRight: '10px',
							backgroundColor: technology === 'database' && '#fcb818',

						}}>
						Database
					</TechnologiesTabsTextForMobile>
					<TechnologiesTabsTextForMobile
						onClick={() => setTechnology('infraAndDevOps')}
						style={{
							backgroundColor: technology === 'infraAndDevOps' && '#fcb818',

						}}>
						Infra & DevOPS
					</TechnologiesTabsTextForMobile>
				</TechnologiesTabsContainerForMobile>


				{/* This is just for mobile view */}
				<Carousel style={{ marginBottom: '5%', display: window.innerWidth > 600 && 'none', flexDirection: 'column', alignItems: window.innerWidth > 600 ? 'flex-start' : 'center' }} itemsToShow={1} showArrows={false}>
					{technology === 'mobile' && (
						<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'space-around' }}>
							<TechnologyContainer >
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#fcb512' }}
								>
									<IOS style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									iOS
								</IconsText>
							</TechnologyContainer>

							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#ee5121' }}
								>
									<Android style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Android
								</IconsText>
							</TechnologyContainer>

							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#4643aa' }}
								>
									<Swift style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Swift
								</IconsText>
							</TechnologyContainer>
						</view>
					)}

					{technology === 'mobile' && (
						<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'space-around' }}>

							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#71b9e9' }}
								>
									<Flutter style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Flutter
								</IconsText>
							</TechnologyContainer>

							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#69a741' }}
								>
									<Ionic style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Ionic
								</IconsText>
							</TechnologyContainer>

							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#f4891e' }}
								>
									<ReactNative style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									React Native
								</IconsText>
							</TechnologyContainer>


						</view>
					)}


					{technology === 'mobile' && (
						<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'space-around' }}>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#bb4792' }}
								>
									<Xamarim style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Xamarin
								</IconsText>
							</TechnologyContainer>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#db9070' }}
								>
									<Titanium style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Titanium
								</IconsText>
							</TechnologyContainer>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#fdca10' }}
								>
									<ObjectiveC style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									ObjectiveC
								</IconsText>
							</TechnologyContainer>
						</view>
					)}

					{technology === 'mobile' && (
						<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'space-around' }}>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#8978f4' }}
								>
									<Kotlin style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Kotlin
								</IconsText>
							</TechnologyContainer>
						</view>
					)}



					{technology === 'frontend' && (
						<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'space-around' }}>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#FAA712' }}
								>
									<AngularJs style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									AngularJs
								</IconsText>
							</TechnologyContainer>

							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#E73B1A' }}
								>
									<ReactJs style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									React.Js
								</IconsText>
							</TechnologyContainer>

							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#362E99' }}
								>
									<TypeScript style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									TypeScript
								</IconsText>
							</TechnologyContainer>
						</view>
					)}

					{technology === 'frontend' && (
						<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'space-around' }}>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#60AAE3' }}
								>
									<Vue style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Vue.Js
								</IconsText>
							</TechnologyContainer>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#589A33' }}
								>
									<WPF style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									WPF
								</IconsText>
							</TechnologyContainer>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#EF7618' }}
								>
									<HTML5 style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									HTML5
								</IconsText>
							</TechnologyContainer>
						</view>
					)}

					{technology === 'backend' && (
						<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'space-around' }}>

							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#60AAE3' }}
								>
									<NodeJs style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									NodeJs
								</IconsText>
							</TechnologyContainer>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#bb4792' }}
								>
									<PHP style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									PHP
								</IconsText>
							</TechnologyContainer>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#E73B1A' }}
								>
									<Java style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Java
								</IconsText>
							</TechnologyContainer>
						</view>
					)}

					{technology === 'backend' && (
						<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'space-around' }}>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#FAA712' }}
								>
									<Python style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Python
								</IconsText>
							</TechnologyContainer>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#589A33' }}
								>
									<Rails style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Rails
								</IconsText>
							</TechnologyContainer>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#362E99' }}
								>
									<NET style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									.NET
								</IconsText>
							</TechnologyContainer>
						</view>
					)}

					{technology === 'cms' && (
						<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'space-around' }}>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#FAA712' }}
								>
									<Drupal style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Drupal
								</IconsText>
							</TechnologyContainer>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#E73B1A' }}
								>
									<Joomla style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Joomla
								</IconsText>
							</TechnologyContainer>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#60AAE3' }}
								>
									<Magento style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Magento
								</IconsText>
							</TechnologyContainer>
						</view>
					)}

					{technology === 'cms' && (
						<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'space-around' }}>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#589A33' }}
								>
									<Shopify style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Shopify
								</IconsText>
							</TechnologyContainer>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#362E99' }}
								>
									<WordPress style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									WordPress
								</IconsText>
							</TechnologyContainer>
						</view>
					)}

					{technology === 'database' && (
						<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'space-around' }}>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#EF7618' }}
								>
									<DynamoDB style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									DynamoDB
								</IconsText>
							</TechnologyContainer>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#FAA712' }}
								>
									<MongoDB style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									MongoDB
								</IconsText>
							</TechnologyContainer>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#60AAE3' }}
								>
									<FireBase style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									FireBase
								</IconsText>
							</TechnologyContainer>
						</view>
					)}

					{technology === 'database' && (
						<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'space-around' }}>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#362E99' }}
								>
									<MsSQL style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									MsSQL
								</IconsText>
							</TechnologyContainer>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#AA2E7F' }}
								>
									<Oracle style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Oracle
								</IconsText>
							</TechnologyContainer>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#D07C5E' }}
								>
									<PostgreSQL style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									PostgreSQL
								</IconsText>
							</TechnologyContainer>
						</view>
					)}

					{technology === 'database' && (
						<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'space-around' }}>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#589A33' }}
								>
									<Realm style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Realm
								</IconsText>
							</TechnologyContainer>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#E73B1A' }}
								>
									<MySQL style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									MySQL
								</IconsText>
							</TechnologyContainer>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#FEC112' }}
								>
									<Redis style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Redis
								</IconsText>
							</TechnologyContainer>
						</view>
					)}


					{technology === 'infraAndDevOps' && (
						<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'space-around' }}>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#FAA712' }}
								>
									<AWS style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									AWS
								</IconsText>
							</TechnologyContainer>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#579A32' }}
								>
									<Appium style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Appium
								</IconsText>
							</TechnologyContainer>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#E73B1A' }}
								>
									<GoogleCloud style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									GoogleCloud
								</IconsText>
							</TechnologyContainer>
						</view>
					)}

					{technology === 'infraAndDevOps' && (
						<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'space-around' }}>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#362E99' }}
								>
									<Gradle style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Gradle
								</IconsText>
							</TechnologyContainer>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#60AAE3' }}
								>
									<Jenkins style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Jenkins
								</IconsText>
							</TechnologyContainer>
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#EF7618' }}
								>
									<Selenium style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Selenium
								</IconsText>
							</TechnologyContainer>
						</view>
					)}
				</Carousel>

				{/* This is just for laptops and desktops */}
				<TechnologiesTabsContainer style={{ display: window.innerWidth < 600 && 'none' }}>
					<GeneralTextMedium
						onClick={() => setTechnology('mobile')}
						style={{
							textDecoration: technology === 'mobile' ? 'underline' : 'none',
							color: technology === 'mobile' && '#fcb818',
							fontSize: '16px',
							marginRight: '44px',
							cursor: 'pointer',
						}}
					>
						Mobile
					</GeneralTextMedium>
					<GeneralTextMedium
						onClick={() => setTechnology('frontend')}
						style={{
							textDecoration: technology === 'frontend' ? 'underline' : 'none',
							color: technology === 'frontend' && '#fcb818',
							fontSize: '16px',
							marginRight: '44px',
							cursor: 'pointer',
						}}
					>
						Front End
					</GeneralTextMedium>
					<GeneralTextMedium
						onClick={() => setTechnology('backend')}
						style={{
							textDecoration: technology === 'backend' ? 'underline' : 'none',
							color: technology === 'backend' && '#fcb818',
							fontSize: '16px',
							marginRight: '44px',
							cursor: 'pointer',
						}}
					>
						Backend
					</GeneralTextMedium>
					<GeneralTextMedium
						onClick={() => setTechnology('database')}
						style={{
							textDecoration: technology === 'database' ? 'underline' : 'none',
							color: technology === 'database' && '#fcb818',
							fontSize: '16px',
							marginRight: '44px',
							cursor: 'pointer',
						}}
					>
						Database
					</GeneralTextMedium>
					<GeneralTextMedium
						onClick={() => setTechnology('cms')}
						style={{
							textDecoration: technology === 'cms' ? 'underline' : 'none',
							color: technology === 'cms' && '#fcb818',
							fontSize: '16px',
							marginRight: '44px',
							cursor: 'pointer',
						}}
					>
						CMS
					</GeneralTextMedium>
					<GeneralTextMedium
						onClick={() => setTechnology('infraAndDevOps')}
						style={{
							textDecoration:
								technology === 'infraAndDevOps' ? 'underline' : 'none',
							color: technology === 'infraAndDevOps' && '#fcb818',
							fontSize: '16px',
							marginRight: '44px',
							cursor: 'pointer',
						}}
					>
						Infra and DevOps
					</GeneralTextMedium>
				</TechnologiesTabsContainer>
				{/* This is just for laptops and desktops */}
				<TechnologiesIconsContainer style={{ display: window.innerWidth < 600 && 'none' }}>
					{/* mobile */}
					<TechnologiesIconsInner >
						{technology === 'mobile' && (
							<TechnologyContainer >
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#fcb512' }}
								>
									<IOS style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									iOS
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'mobile' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#ee5121' }}
								>
									<Android style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Android
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'mobile' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#4643aa' }}
								>
									<Swift style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Swift
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'mobile' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#71b9e9' }}
								>
									<Flutter style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Flutter
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'mobile' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#69a741' }}
								>
									<Ionic style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Ionic
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'mobile' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#f4891e' }}
								>
									<ReactNative style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									React Native
								</IconsText>
							</TechnologyContainer>
						)}
					</TechnologiesIconsInner>
					<TechnologiesIconsInner style={{ display: window.innerWidth < 600 && 'none' }}>
						{technology === 'mobile' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#bb4792' }}
								>
									<Xamarim style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Xamarin
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'mobile' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#db9070' }}
								>
									<Titanium style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Titanium
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'mobile' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#fdca10' }}
								>
									<ObjectiveC style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									ObjectiveC
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'mobile' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#8978f4' }}
								>
									<Kotlin style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Kotlin
								</IconsText>
							</TechnologyContainer>
						)}
					</TechnologiesIconsInner>
					{/* front end  */}
					<TechnologiesIconsInner>
						{technology === 'frontend' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#FAA712' }}
								>
									<AngularJs style={{ height: '50px', width: '50px', }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									AngularJs
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'frontend' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#E73B1A' }}
								>
									<ReactJs style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									React.Js
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'frontend' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#362E99' }}
								>
									<TypeScript style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									TypeScript
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'frontend' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#60AAE3' }}
								>
									<Vue style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Vue.Js
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'frontend' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#589A33' }}
								>
									<WPF style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									WPF
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'frontend' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#EF7618' }}
								>
									<HTML5 style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									HTML5
								</IconsText>
							</TechnologyContainer>
						)}
					</TechnologiesIconsInner>
					{/* Back End */}
					<TechnologiesIconsInner>
						{technology === 'backend' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#60AAE3' }}
								>
									<NodeJs style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									NodeJs
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'backend' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#bb4792' }}
								>
									<PHP style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									PHP
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'backend' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#E73B1A' }}
								>
									<Java style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Java
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'backend' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#FAA712' }}
								>
									<Python style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Python
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'backend' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#589A33' }}
								>
									<Rails style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Rails
								</IconsText>
							</TechnologyContainer>
						)}

						{technology === 'backend' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#362E99' }}
								>
									<NET style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									.NET
								</IconsText>
							</TechnologyContainer>
						)}
					</TechnologiesIconsInner>
					{/* CMS */}
					<TechnologiesIconsInner>
						{technology === 'cms' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#FAA712' }}
								>
									<Drupal style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Drupal
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'cms' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#E73B1A' }}
								>
									<Joomla style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Joomla
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'cms' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#60AAE3' }}
								>
									<Magento style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Magento
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'cms' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#589A33' }}
								>
									<Shopify style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Shopify
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'cms' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#362E99' }}
								>
									<WordPress style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									WordPress
								</IconsText>
							</TechnologyContainer>
						)}
					</TechnologiesIconsInner>
					{/* DataBase */}
					<TechnologiesIconsInner>
						{technology === 'database' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#EF7618' }}
								>
									<DynamoDB style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									DynamoDB
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'database' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#FAA712' }}
								>
									<MongoDB style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									MongoDB
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'database' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#60AAE3' }}
								>
									<FireBase style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									FireBase
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'database' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#362E99' }}
								>
									<MsSQL style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									MsSQL
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'database' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#AA2E7F' }}
								>
									<Oracle style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Oracle
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'database' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#D07C5E' }}
								>
									<PostgreSQL style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									PostgreSQL
								</IconsText>
							</TechnologyContainer>
						)}
					</TechnologiesIconsInner>
					<TechnologiesIconsInner>
						{technology === 'database' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#589A33' }}
								>
									<Realm style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Realm
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'database' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#E73B1A' }}
								>
									<MySQL style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									MySQL
								</IconsText>
							</TechnologyContainer>
						)}

						{technology === 'database' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#FEC112' }}
								>
									<Redis style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Redis
								</IconsText>
							</TechnologyContainer>
						)}
					</TechnologiesIconsInner>
					{/* Infra And DevOps */}
					<TechnologiesIconsInner>
						{technology === 'infraAndDevOps' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#FAA712' }}
								>
									<AWS style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									AWS
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'infraAndDevOps' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#579A32' }}
								>
									<Appium style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Appium
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'infraAndDevOps' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#E73B1A' }}
								>
									<GoogleCloud style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									GoogleCloud
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'infraAndDevOps' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#362E99' }}
								>
									<Gradle style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Gradle
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'infraAndDevOps' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#60AAE3' }}
								>
									<Jenkins style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Jenkins
								</IconsText>
							</TechnologyContainer>
						)}
						{technology === 'infraAndDevOps' && (
							<TechnologyContainer>
								<TechnologyIconImageContainer
									style={{ backgroundColor: '#EF7618' }}
								>
									<Selenium style={{ height: '50px', width: '50px' }} />
								</TechnologyIconImageContainer>
								<IconsText style={{ textAlign: 'center' }}>
									Selenium
								</IconsText>
							</TechnologyContainer>
						)}
					</TechnologiesIconsInner>
				</TechnologiesIconsContainer>
			</TechnologiesContainer>
			<Testimonials theme={theme}/>
		</HTML.FullWidthContainer>
	);
};

//HTML
const Container = styled.div`
	max-width: 1170px;
	width: 100%;
	@media (max-width: 768px) {
		// padding: 0 10px;
	}
	
`;
const BannerContainer = styled.div`
	background-image: url(${(props) => props.theme.bannerBackground});
	width: 100%;
	background-size: cover;
	background-position-x: 50%;
	display: flex;
	align-items: center;
	@media (max-width: 600px) {
		display:block;
	}
`;
const BannerInnerContainer = styled.div`
	width: 50%;
	height: 100%;
	//margin-left: 40px;
	align-items: flex-start;
	justify-content: middle;
	flex-direction: column;
	display: flex;
	margin-bottom:50px;

	@media (max-width: 600px) {
		width:100%;
		text-align:center;
		align-items:center;
		margin:0px;
	}
`;

const Button = styled(NavLink)`
	width:113px;
	height:46px;
	border-radius:23px;
	margin: 30px 0;
	color: white;
	background-color: #e14d1f;
	cursor: pointer;
	text-decoration: none;
	display: flex;

	font-size: 14.64px;
	font-weight: 700;
	justify-content:center;
	align-items: center;

	&:hover {
		opacity: 0.8;
	}
	@media(max-width:600px){
		margin:2% 0px 5% 0px;
		align-self:center;
	}
`;
const BannerImage = styled.img`
	width: 100%;
	// height: 100%;
	cursor: pointer;
	display: flex;
	
`;

//marquee
const MarqueeFullWidthContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100px;
	overflow: hidden;
	background-color: ${(props) => props.theme.marqueeBackground};
`;
const MarqueeOuterContainer = styled.div`
	display: flex;
	max-width: 1170px;
	height: 100%;
	overflow: hidden;
`;
const MarqueeInnerContainer = styled.ul`
	list-style: none;
	height: 100%;
	width: 100%;
	display: flex;
	animation: ${scrolling} 12s linear infinite;
	

	&:hover {
		animation-play-state: paused;
	}
	&:hover li:not(:hover) {
		opacity: 0.1;
	}

	@media (max-width: 600px) {
		width:300%;
		animation: ${scrollingMobile} 12s linear infinite;
		
	}
	
`;
const MarqueeItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 3px;
	width: 10vw;
	flex-shrink: 0;
	@media (max-width: 600px) {
		width: 50vw;
	}
`;
const MarqueeImage = styled.img`
	width: 70%;
	height: 70%;
	display: flex;
	 padding 0 1rem;
	overflow: hidden;
	//background-color:white;
	//filter:contrast(0),brightness(2.5);
	//filter:invert(1);

	${(props) => props.theme.background === '#151517' &&
		`filter:invert(1);`
	}
       
    
	
`;

//overview section
const OverviewFullWidthContainer = styled.div`
	background-image: url(${(props) => props.theme.overviewBannerBackground});
	width: 100%;
	display: flex;
	justify-content: center;
	background-repeat: no-repeat;
	background-size: 100%;
	background-position-x: 60px;
	background-position-y: 20px;
`;
const OverviewContainer = styled.div`
	padding-top: 4%;
	max-width: 1170px;
	width: 100%;
	display: flex;
	align-items: center;

	@media (max-width: 600px) {
		width: 100%;
		height:100%;
		flex-direction: column;
		pagging:0px;
		margin:5% 0px;
	}
`;
const OverviewLeftContainer = styled.div`
	margin-left: 5%;
	width: 45%;
	height: 100%;
	padding: 10px 5px 50px 40px;
	align-items: flex-start;
	justify-content: middle;
	flex-direction: column;
	display: flex;
	@media (max-width: 600px) {
		width: 90%;
		align-items:center;
		margin-left:0;
		padding:0 0 0 20px;
	}
`;
const OverviewRightContainer = styled.div`
	width: 55%;
	height: 100%;
	align-items: flex-start;
	justify-content: middle;
	flex-direction: column;
	display: flex;
	@media (max-width: 768px) {
		width: 100%;
	}
`;
const OverviewSectionIconsContainer = styled.div`
	width: 100%;
	height: 30%;
	margin-top: 30px;
	flex-direction: row;
	display: flex;
	@media (max-width: 600px) {
		margin:5% 0px;
		justify-content:space-around;
		align-items:center;
	}

`;
const OverviewSectionIcons = styled.div`
	height: 100%;
	width: 70px;
	margin-right: 57px;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media(max-width:600px)
	{
		margin-right:0px;
	}
`;
const OverviewSectionIconsIndividual = styled.div`
	width: 70px;
	min-height: 70px;
	border-radius: 10px;
	margin-bottom: 10%;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 1px 1px 6px #bfbcbb;
`;


//our services
const ServicesContainer = styled.div`
	padding: 4% 0;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	overflow: hidden;
	@media (max-width:600px){
		width:100%;
		margin:0 30px;
		
	}
`;

const OurServicesMarqueeContainer = styled.div`
	width: 100%;
	height: 100%;
	padding-top: 2%;

`;

const OurServicesMarqueeInnerContainer = styled.ul`
  list-style: none;
  height: 100%;
  display: flex;
  &:hover {
    animation: ${ourServicesScrolling} 6s linear forwards;
    // animation-play-state:paused;
  }
`;
const OurServicesMarqueeItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 3px;
	width: 302px;
	height: 400px;
	flex-shrink: 0;
	@media (max-width:600px){
		display:block;
	}
`;
const OurServicesMarqueeItemContent = styled.div`
	height: 100%;
	width: 100%;
	padding-top: 20px;
	margin-right: 25px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width:600px){
		padding-top: 0px;
	}
`;


// case studies
const CaseStudiesContainer = styled.div`
	margin-top: 2rem;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	overflow: hidden;

	background-color: ${(props) => props.theme.caseStudiesBackground};
	@media(max-width:600px){
		margin-top:0px;
	}
`;
const CaseStudiesBannerContainer = styled.div`
	max-width: 1170px;
	display: flex;
	align-items: center;
	overflow: hidden;
	@media (max-width: 600px) {
		display:block;
		width:100%;
		height:100%;
		
	}
`;
const CaseStudyImageContainer = styled.div`
	width: 40%;
	height: 100%;
	align-items: center;
	justify-content: center;
	padding-right: 50px;
	display: flex;
	@media (max-width: 600px) {
		width:100%;
		align-self:center;
	}
`;
const CaseStudyInfoContainer = styled.div`
	width: 60%;
	height: 100%;
	align-items: flex-start;
	justify-content: middle;
	flex-direction: column;
	display: flex;
	@media (max-width: 768px) {
		width: 100%;
		margin-top:5%;
		
		align-items:center;
	}
`;
const CaseStudiesImage = styled.img`
	overflow: hidden;
	@media (max-width: 600px) {
		padding:0 50px;
		width:100%;
		
	}
`;
const CaseStudiesLogo = styled.img`
	width: 70px;
	cursor: pointer;
	display: flex;
	margin-bottom: 2%;
	overflow: hidden;
`;

//technology
const TechnologyBackground = styled.div`
	background-image: url(${(props) => props.theme.technologyBackground});
	width: 100%;
	height: 110px;
	background-size: cover;
	background-position-x: 50%;
	display: flex;
	overflow: hidden;
	@media(max-width:600px){
		display:block;
		width:100%;
		height: 60px;
	}
`;
const TechnologiesContainer = styled.div`
	background-color: url(${(props) => props.theme.technologyBackgroundColor});
	padding: 3% 0;
	max-width: 1170px;
	width: 100%;
	display: flex;
	align-items: center;
	overflow: hidden;
	flex-direction: column;
`;
const TechnologiesTabsContainer = styled.div`
	margin-top: 1%;
	margin-bottom:20px;
	height: 50px;
	display: flex;
	// justify-content:space-around;
	align-items: center;
	overflow: hidden;
`;
const TechnologiesTabsContainerForMobile = styled.div`
		max-width:600px;
		display: flex;
		margin-top:5%;
		height:100%;
		width:100%
		margin:0 30px;
	justify-content:space-between;
		flex-direction:row;
	
`;


const TechnologiesIconsContainer = styled.div`
	width: 90%;
	display: flex;
	text-align: center;
	justify-content: center;
	flex-direction: column;
	@media (max-width: 768px) {
		flex-direction: row;
	}
`;
const TechnologiesIconsInner = styled.div`
	height: 50%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: 600px) {
		height: 100%;
		width: 100%;
	}
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
	margin: 35px 50px;
	@media(max-width:600px){
		margin:35px 0px;
	}
`;

export default (withRouter(Home));
