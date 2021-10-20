import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { getTheme } from '../getTheme';
import HTML from '../constants/StyledComponents';
import strings from '../constants/Strings';
import Testimonials from '../components/Testimonials';
import { useEffect } from 'react';
import { GeneralTextRegular, GeneralTextMedium, BannerBigTitle, BigSemiTitle, SmallSemiTitle, ButtonText } from '../constants/FontTags';



const CaseStudies = ({ themeName }) => {
	const theme = getTheme(themeName);

	// useEffect(() => {
	// 	console.log("useeffect ")
	// 		window.scrollTo({
	// 			top: 0,
	// 			behavior: "smooth"
	// 		  });

	//   }, [])


	return (
		<HTML.FullWidthContainer>
			<Container >
				<BannerContainer >
					<BannerInnerContainer style={{ width: window.innerWidth > 600 && '60%' }}>
						<BannerBigTitle>
							We love transforming <br style={{ display: window.innerWidth < 600 && 'none' }} /> product ideas to<br style={{ display: window.innerWidth < 600 && 'none' }} />digital realities.
						</BannerBigTitle>
						<GeneralTextMedium >
							A successful offshore software application development company
							since 1997, providing a full range of website and mobile app
							development, games development, IoT, AR-VR and other IT services
							and solutions globally.
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
					<BannerInnerContainer style={{ marginTop: window.innerWidth > 600 && '80px' }}>
						<BannerImage src={theme.caseStudiesBannerImage} />
					</BannerInnerContainer>
				</BannerContainer>
			</Container>
			<CaseStudiesContainer>

				{/* case studies 1 */}
				<BigSemiTitle style={{ marginTop: '30px' }}>
					We love transforming product ideas
					<br style={{ display: window.innerWidth < 600 && 'none' }} />
					to digital realities.
				</BigSemiTitle>
				{/* case studies 1 */}
				<CaseStudiesBannerContainer style={{
					display: window.innerWidth < 600 && 'inline-flex',
					flexDirection: window.innerWidth < 600 && 'column-reverse',
				}}>
					<CaseStudyImageContainer style={{ marginLeft: window.innerWidth < 600 && '15%' }}>
						<CaseStudiesImage style={{ marginTop: '30px', }} src={theme.caseStudy1} />
					</CaseStudyImageContainer>
					<CaseStudyInfoContainer >
						<CaseStudiesLogo src={theme.caseStudy1Logo} />
						<SmallSemiTitle>Swap <text style={{ color: '#dcbe72', fontWeight: '600' }}>Shop</text></SmallSemiTitle>
						<SmallSemiTitle style={{ fontSize: window.innerWidth > 600 && '27px', textAlign: window.innerWidth > 600 && 'left' }}>
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
							o<text style={{ color: '#5423bc', fontSize: '20px', fontWeight: '600' }}>ffax</text>
						</SmallSemiTitle>
						<SmallSemiTitle style={{ fontSize: window.innerWidth > 600 && '27px', textAlign: window.innerWidth > 600 && 'left' }}>
							Simplify medical billing and maintain control of your practice
						</SmallSemiTitle>
						<GeneralTextRegular style={{ marginTop: '2%', width: '85%' }}>
							Offax is a reliable, affordable, and complete practice management solution.
							Offax automates invoicing and
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
						<SmallSemiTitle style={{ fontSize: window.innerWidth > 600 && '27px', textAlign: window.innerWidth > 600 && 'left' }} >
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
							to={{
								pathname: "/getInTouch",
								state: { letsTalk: true }
							}}
							style={{ borderRadius: 23, marginTop: '5%' }}>
							<ButtonText>Let's Talk</ButtonText>
						</Button>
					</CaseStudyInfoContainer>
				</CaseStudiesBannerContainer>
			</CaseStudiesContainer>
			{/* TESTAMONIALS */}
			<Testimonials theme={theme}/>
		</HTML.FullWidthContainer>
	);
};

const Container = styled.div`
	width: 100%;		
	max-width: 1170px;
	@media (max-width:600px){
		max-width: 600px;
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
		width:100%;
	}
`;
const BannerInnerContainer = styled.div`
	width: 44%;
	height: 100%;
	 //margin-left: 40px;
	align-items: flex-start;
	justify-content: middle;
	flex-direction: column;
	margin-top:110px;
	display: flex;
	@media (max-width: 600px) {	
		width:100%;
		margin-left: 0px;
		margin-top:5%;
	}

`;

const BannerImage = styled.img`
	width:450px;
	height:342px;
	cursor: pointer;
	display: flex;
	padding: 2%;
	@media (max-width: 600px) {
		width:280px;
		height:210px;
		align-self:center;
	}
`;


const CaseStudiesContainer = styled.div`
	margin-top: 2rem;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	overflow: hidden;

	//background-color: ${(props) => props.theme.caseStudiesBackground};
`;
const CaseStudiesBannerContainer = styled.div`
	max-width: 1170px;
	display: flex;
	align-items: center;
	overflow: hidden;
	@media (max-width: 600px) {
		display:block;
		width:100%;
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


const Button = styled(NavLink)`
	margin: 30px 0;
	color: white;
	background-color: #e14d1f;
	cursor: pointer;
	text-decoration: none;
	display: flex;
	//padding: 0.5rem 1rem;
	font-size: 0.8rem;
	font-weight: 700;
	align-items: center;
	width:113px;
  height:46px;
  justify-content:center;

	&:hover {
		opacity: 0.8;
	}

	@media (max-width: 768px) {
		
		align-self:center;
	}
	@media (max-width: 600px) {
		margin: 0 0;
		align-self:center;
	}
`;



export default CaseStudies;
