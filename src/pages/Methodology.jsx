import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import { getTheme } from '../getTheme';
import { GeneralTextMedium, BannerBigTitle, BannerMediumTitle, BulletPointsText, ButtonText } from '../constants/FontTags';

// testimonials
import Testimonials from '../components/Testimonials';

import HTML from '../constants/StyledComponents';


const Methodology = ({ themeName }) => {
	const theme = getTheme(themeName);

	return (
		<HTML.FullWidthContainer>
			{/* main banner */}
			<BannerContainer>
				<MainBanner>
					<MainBannerInnerContainer>
						<BannerBigTitle >Methodology</BannerBigTitle>
						<GeneralTextMedium style={{ marginTop: window.innerWidth < 600 ? '3%' : '10px' }}>
							Our software development team follows a detailed software execution<br style={{ display: window.innerWidth < 600 && 'none' }} />
							methodology to manage a project effectively and ensure perfection.<br style={{ display: window.innerWidth < 600 && 'none' }} />
							We follow the DevOps software development methodology to reduce <br style={{ display: window.innerWidth < 600 && 'none' }} />
							the chances of failure rate in the new projects. In this methodology, <br style={{ display: window.innerWidth < 600 && 'none' }} />
							the project managers evaluate, design, develop, and test the<br style={{ display: window.innerWidth < 600 && 'none' }} />
							software before deployment.

						</GeneralTextMedium>
						<Button
								 to={{pathname:"/getInTouch",
								 state:{letsTalk:true}
								 }} 
							style={{ borderRadius: 23, marginTop: window.innerWidth < 600 ? '0%' : '30px' }}
						>
							<ButtonText>Let's Talk</ButtonText>
						</Button>
					</MainBannerInnerContainer>
					<MainBannerInnerContainer>
						<MainBannerImage />
					</MainBannerInnerContainer>
				</MainBanner>
			</BannerContainer>
			{/* methodologies */}
			{/* 1 */}
			<MethodologiesContainer style={{
				display: window.innerWidth < 600 && 'inline-flex',
				flexDirection: window.innerWidth < 600 && 'column-reverse',
			}}>
				<MethodologiesBannerContainer style={{ backgroundColor: '#a8e2c2' }}>
					<MethodologiesBanner src={theme.methodologiesBanner1} />
				</MethodologiesBannerContainer>
				<MethodologiesTextContainer>
					<MethodologiesInnerTextContainer>
						<BannerBigTitle style={{ color: '#dddddd' }}>01</BannerBigTitle>
						<BannerMediumTitle>Ideation and evaluation</BannerMediumTitle>
						<GeneralTextMedium style={{ marginTop: '10px', marginBottom: '25px' }}>
							Our community collaborators will come up with expert business analyses
							to generate new ideas. The team will then filter out the ideas to cut
							down the one that is closely related to your product. The focus is mainly
							on user experience and providing an innovative solution through the
							final product.
						</GeneralTextMedium>
						<view>

							{theme.methodologiesPoints1.map((point) => (
								<ListItem key={Math.random()}>
									{/* <ListItemImage src={point.listItemImage} /> */}
									<BulletPoints style={{ backgroundColor: point.color }} />
									<BulletPointsText>
										{point.text}
									</BulletPointsText>

								</ListItem>


							))}
						</view>
					</MethodologiesInnerTextContainer>
				</MethodologiesTextContainer>
			</MethodologiesContainer>
			{/* 2 */}
			<MethodologiesContainer>
				<MethodologiesTextContainer style={{ alignItems: 'flex-end' }}>
					<MethodologiesInnerTextContainer >
						<BannerBigTitle style={{ color: '#dddddd' }}>02</BannerBigTitle>
						<BannerMediumTitle>Product design</BannerMediumTitle>
						<GeneralTextMedium style={{ marginTop: '10px', marginBottom: '25px' }}>
							The design phase is where you get the fully developed design of your product.
							Once the product is defined, we’ll conduct user research following the prototyping
							and compiling specifications. Product designs are industry-specific and finalized
							for development after ensuring speed and improved user experience.
						</GeneralTextMedium>

						{theme.methodologiesPoints2.map((point) => (
							<ListItem key={Math.random()}>
								{/* <ListItemImage src={point.listItemImage} /> */}
								<BulletPoints style={{ backgroundColor: point.color }} />
								<BulletPointsText>
									{point.text}
								</BulletPointsText>
							</ListItem>
						))}
						{/* <Button
							exact
							to="/"
							style={{ borderRadius: 23, marginTop: window.innerWidth < 600 ? '5%' : '30px' }}
						>
							<ButtonText>Let's Talk</ButtonText>
						</Button> */}
					</MethodologiesInnerTextContainer>
				</MethodologiesTextContainer>
				<MethodologiesBannerContainerLeft
					style={{
						backgroundColor: '#fcb316',
					}}
				>
					<MethodologiesBanner src={theme.methodologiesBanner2} />
				</MethodologiesBannerContainerLeft>
			</MethodologiesContainer>
			{/* 3 */}
			<MethodologiesContainer style={{
				display: window.innerWidth < 600 && 'inline-flex',
				flexDirection: window.innerWidth < 600 && 'column-reverse',
			}}>
				<MethodologiesBannerContainer style={{ backgroundColor: '#9badec' }}>
					<MethodologiesBanner src={theme.methodologiesBanner3} />
				</MethodologiesBannerContainer>
				<MethodologiesTextContainer>
					<MethodologiesInnerTextContainer>
						<BannerBigTitle style={{ color: '#dddddd' }}>03</BannerBigTitle>
						<BannerMediumTitle>Development</BannerMediumTitle>
						<GeneralTextMedium style={{ marginTop: '10px', marginBottom: '25px' }}>
							Diving into the nitty-gritty of the ideas, the coders and programmers bring
							the abstract concepts to life. The software is laid with wireframe to ensure
							smooth running. We create feature-rich and innovative products to make your
							business setups safer, more productive, and efficient.

						</GeneralTextMedium>

						{theme.methodologiesPoints3.map((point) => (
							<ListItem key={Math.random()}>
								{/* <ListItemImage src={point.listItemImage} /> */}
								<BulletPoints style={{ backgroundColor: point.color }} />
								<BulletPointsText>
									{point.text}
								</BulletPointsText>
							</ListItem>
						))}
						{/* <Button
							exact
							to="/"
							style={{ borderRadius: 23, marginTop: window.innerWidth < 600 ? '5%' : '30px' }}
						>
							<ButtonText>Let's Talk</ButtonText>
						</Button> */}
					</MethodologiesInnerTextContainer>
				</MethodologiesTextContainer>
			</MethodologiesContainer>
			{/* 4 */}
			<MethodologiesContainer>
				<MethodologiesTextContainer style={{ alignItems: 'flex-end' }}>
					<MethodologiesInnerTextContainer style={{ maxWidth: '550px' }}>
						<BannerBigTitle style={{ color: '#dddddd' }}>04</BannerBigTitle>
						<BannerMediumTitle>Testing</BannerMediumTitle>
						<GeneralTextMedium style={{ marginTop: '10px', marginBottom: '25px' }}>
							Quality assurance of any software is essential to test how
							valuable the product is. Initial testing of the software before
							launching it enhances usability and reduces maintenance costs.
							To ensure the software product is free from defects, we follow
							these testing methods:

						</GeneralTextMedium>

						{theme.methodologiesPoints4.map((point) => (
							<ListItem key={Math.random()} >
								{/* <ListItemImage src={point.listItemImage} /> */}

								<BulletPoints style={{ backgroundColor: point.color }} />
								<BulletPointsText>
									{point.text}
								</BulletPointsText>

							</ListItem>
						))}
						{/* <Button
							exact
							to="/"
							style={{ borderRadius: 23, marginTop: window.innerWidth < 600 ? '5%' : '30px' }}
						>
							<ButtonText>Let's Talk</ButtonText>
						</Button> */}
					</MethodologiesInnerTextContainer>
				</MethodologiesTextContainer>
				<MethodologiesBannerContainerLeft
					style={{
						backgroundColor: '#e6bdc8',
					}}
				>
					<MethodologiesBanner src={theme.methodologiesBanner4} />
				</MethodologiesBannerContainerLeft>
			</MethodologiesContainer>
			{/* 5 */}
			<MethodologiesContainer style={{
				display: window.innerWidth < 600 && 'inline-flex',
				flexDirection: window.innerWidth < 600 && 'column-reverse',
			}}>
				<MethodologiesBannerContainer style={{ backgroundColor: '#9db49c' }}>
					<MethodologiesBanner src={theme.methodologiesBanner5} />
				</MethodologiesBannerContainer>
				<MethodologiesTextContainer>
					<MethodologiesInnerTextContainer>
						<BannerBigTitle style={{ color: '#dddddd' }}>05</BannerBigTitle>
						<BannerMediumTitle>Deployment</BannerMediumTitle>
						<GeneralTextMedium style={{ marginTop: '10px', marginBottom: '25px' }}>
							One of the most important aspects of developing any software is deployment.
							A smooth deployment means smooth operations in your organization.
							Through advanced automation of performance monitoring, our primary goal
							is to release the product successfully.

						</GeneralTextMedium>

						{theme.methodologiesPoints5.map((point) => (
							<ListItem key={Math.random()}>
								{/* <ListItemImage src={point.listItemImage} /> */}
								<BulletPoints style={{ backgroundColor: point.color }} />
								<BulletPointsText>
									{point.text}
								</BulletPointsText>
							</ListItem>
						))}
						{/* <Button
							exact
							to="/"
							style={{ borderRadius: 23, marginTop: window.innerWidth < 600 ? '5%' : '30px' }}
						>
							<ButtonText>Let's Talk</ButtonText>
						</Button> */}
					</MethodologiesInnerTextContainer>
				</MethodologiesTextContainer>
			</MethodologiesContainer>
			{/* testimonials */}
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
		width:100%;
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
		
	}
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

	@media (max-width: 600px) {
		
		align-self:center;
	}
`;
const MainBannerImage = styled.div`
	background-image: url(${(props) => props.theme.methodologyBanner});
	width: 591px;
	height: 445px;
	background-size: cover;
	display: flex;
	overflow: hidden;
	@media (max-width: 600px) {
		width:350px;
		height:265px;
		margin:7% 0;
		align-self:center;
	}
`;
// methodlogies
const MethodologiesContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	margin-bottom: 65px;
	@media (max-width: 600px) {
		display:block;
		margin-bottom:0;
		bargin-top:5%;
	
	}
`;
const MethodologiesBannerContainer = styled.div`
	width: 50%;
	margin-right: 60px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	@media (max-width: 600px) {
		width:100%;
		margin:5% 0;
	}
`;

const MethodologiesBannerContainerLeft = styled.div`
	width: 50%;
	margin-left: 60px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	@media (max-width: 600px) {
		justify-content:center;
		align-items:center;
		width:100%;
		margin:5% 0;
		

	}
`;
const MethodologiesTextContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	@media (max-width: 600px) {
		width:100%;
	}
`;
const MethodologiesInnerTextContainer = styled.div`
	width: 100%;
	max-width: 550px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	@media (max-width: 600px) {
		max-width:600px;
		width:100%;
		text-align:center;
		justify-content:center;
		align-items:center;
	}

	
`;
const MethodologiesBanner = styled.img`
	width: 586px;
	height: 500px;
	padding: 2%;
	@media (max-width: 600px) {
		width: 350px;
		height: 300px;
		padding: 2%;
	}
`;

const ListItem = styled('li')`
	list-style: none;
	display:flex;
	align-items:baseline;
	

	@media (max-width: 600px) {
		width:100%;
		margin-bottom:10px;
		// display:-webkit-inline-box;

	}
	
`;

const BulletPoints = styled.div`

	width:10px;
	height:10px;
	margin-top:11px;
	border-radius:20px;

@media (max-width: 600px) {
	margin-left:30px;
	margin-top:0px;
	width:13px;
}
`;

export default Methodology;
