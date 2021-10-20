import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getTheme } from '../getTheme';
import { NavLink } from 'react-router-dom';
import AnalogClock from 'analog-clock-react';
import Carousel from "react-elastic-carousel";
import youtube from '../assets/components/youtube.png';
import instagram from '../assets/components/instagram.png';
import linkedIn from '../assets/components/linkedIn.png';
import faceBook from '../assets/components/facebook.png';
import twitter from '../assets/components/twitter.png';
import pintrest from '../assets/components/pintrest.png';
import emailjs from 'emailjs-com';
import { GeneralTextRegular, BannerBigTitle, BannerMediumTitle, ButtonText, ErrorText, GeneralTextMedium } from '../constants/FontTags';

const Footer = (props) => {
	let theme = getTheme(props.themeName);
	const [verification, setVerification] = useState(false);
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [contactNumber, setContactNumber] = useState('');
	let check = [false, false, false,];

	const onSubmitForm = () => {

		if (fullName === '') {
			setFullName(null);

		}
		else {
			check[0] = true;
		}

		if (email === '') {
			setEmail(null);
		}
		else {
			let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
			if (reg.test(email) === false) {
				console.log("Email is Not Correct");
				setEmail(null);
			}
			else {
				check[1] = true;
			}
		}

		if (contactNumber === '') {
			setContactNumber(null);
		}
		else {
			check[2] = true;
		}

		if (check[0] && check[1] && check[2] === true) {
			console.log("all ok");
			const data = {
				fullName: fullName,
				email: email,
				contactNumber: contactNumber,
			}
			console.log("after saving values in data", data);
			emailjs.send('service_js9zo9w', 'template_776c2g1', data, 'user_cQLa68u8ZBhwul0kss5Xa')
				.then((result) => {
					console.log("email send successfully ");
					setFullName('');
					setContactNumber('');
					setEmail('');
					setVerification(true);
				}, (error) => {
					console.log(error.text);
				});



		}
	};

	let options = {
		useCustomTime: true,
		width: '100px',
		border: true,
		baseColor: '#fcb612',
		borderColor: (themeName) => getTheme(themeName).analogClocksBorderColor,
		//theme.analogClocksBorderColor,
		centerColor: '#fcb612',
		centerBorderColor: '#000',
		handColors: {
			second: '#fff',
			minute: '#000',
			hour: '#000',
		},
	};

	const [usaValue, setUsaValue] = useState();
	const [uaeValue, setUaeValue] = useState();
	const [pakValue, setPakValue] = useState();

	useEffect(() => {

		let interval = setInterval(() => {
			let usaTime = new Date().toLocaleString('en-US', {
				timeZone: 'America/New_York',
			});
			let usaDate = new Date(usaTime);
			let uaeTime = new Date().toLocaleString('en-US', {
				timeZone: 'Asia/Dubai',
			});
			let uaeDate = new Date(uaeTime);
			let pakTime = new Date().toLocaleString('en-US', {
				timeZone: 'Asia/Karachi',
			});
			let pakDate = new Date(pakTime);
			//console.log('options1 :',options1);

			setUsaValue({
				...options,
				borderColor: theme.analogClocksBorderColor,
				seconds: usaDate.getSeconds(),
				minutes: usaDate.getMinutes(),
				hours: usaDate.getHours(),
			});
			setUaeValue({
				...options,
				borderColor: theme.analogClocksBorderColor,
				seconds: uaeDate.getSeconds(),
				minutes: uaeDate.getMinutes(),
				hours: uaeDate.getHours(),
			});
			setPakValue({
				...options,
				borderColor: theme.analogClocksBorderColor,
				seconds: pakDate.getSeconds(),
				minutes: pakDate.getMinutes(),
				hours: pakDate.getHours(),
			});
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<FullWidthContainer>
			{/* to new heights */}
			<ToNewHeightsFullWidthContainer>
				<ToNewHeightsContainer>
					<ToNewHeightsLeftContainer >
						<Logo
							style={{ height: '25px', width: '100px', marginTop: window.innerWidth < 600 && '5%' }}
							src={theme.darkLogo}
						/>
						<BannerBigTitle
							style={{ color: 'white', fontSize: window.innerWidth > 600 ? '46px' : '30px' }}
						>
							To New Heights
						</BannerBigTitle>
						<GeneralTextRegular style={{
							color: '#BFCEC0', marginTop: window.innerWidth < 600 && '5%'
						}}>
							Our goal is to formulate long-term strategic partnerships with businesses
							through shared leadership, advanced technology, and transparent relationships.
						</GeneralTextRegular>
					</ToNewHeightsLeftContainer>
					<Button
						to={{
							pathname: "/getInTouch",
							state: { letsTalk: true }
						}}
						style={{ borderRadius: 23, width: window.innerWidth > 600 && '100px', margin: window.innerWidth < 600 && '5% 0px' }}
					>
						<ButtonText style={{ fontSize: window.innerWidth > 600 && '13px' }}>Let's Talk now</ButtonText>
					</Button>
				</ToNewHeightsContainer>
			</ToNewHeightsFullWidthContainer>

			{/* Analog Clocks for mobile */}
			<Carousel style={{ marginBottom: '5%', display: window.innerWidth > 600 && 'none', flexDirection: 'column', alignItems: window.innerWidth > 600 ? 'flex-start' : 'center' }} itemsToShow={1} showArrows={false} >
				<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'center' }}>
					<AnalogClocksIndividualContainer>
						<AnalogClock {...usaValue} />
						<BannerMediumTitle style={{ fontSize: '20px' }}>USA</BannerMediumTitle>
						<GeneralTextRegular
							style={{
								color: '#606061',
								marginTop: '5%',
								textAlign: 'center',
								fontSize: '14px',
								width: '80%'
							}}
						>
							16202 Brinton Ct,<br /> Houston, TX 77095
						</GeneralTextRegular>
					</AnalogClocksIndividualContainer>
				</view>
				<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'center' }}>
					<AnalogClocksIndividualContainer>
						<AnalogClock {...uaeValue} />
						<BannerMediumTitle style={{ fontSize: '20px' }}>UAE</BannerMediumTitle>
						<GeneralTextRegular
							style={{
								color: '#606061',
								marginTop: '5%',
								textAlign: 'center',
								fontSize: '14px',
								width: '80%'
							}}
						>
							Level 23, Boulevard Plaza 2
							Sheikh Mohammed bin Rashid
							Boulevard-Dubai
						</GeneralTextRegular>
					</AnalogClocksIndividualContainer>
				</view>
				<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '0 30px', justifyContent: 'center' }}>
					<AnalogClocksIndividualContainer>
						<AnalogClock {...pakValue} />
						<BannerMediumTitle style={{ fontSize: '20px' }}>PAKISTAN</BannerMediumTitle>
						<GeneralTextRegular
							style={{
								color: '#606061',
								marginTop: '5%',
								textAlign: 'center',
								fontSize: '14px',
								width: '80%'
							}}
						>
							69-B, Main Boulevard,
							Block H Gulberg 2,
							Lahore, Punjab
						</GeneralTextRegular>
					</AnalogClocksIndividualContainer>
				</view>
			</Carousel>


			{/* analog clocks  for laptops and Desktops*/}
			<AnalogClocksFullWidthContainer style={{ display: window.innerWidth < 600 && 'none', }}>
				<AnalogClocksContainer>
					<AnalogClocksIndividualContainer>
						<AnalogClock {...usaValue} />
						<BannerMediumTitle style={{ fontSize: '20px' }}>USA</BannerMediumTitle>
						<GeneralTextRegular
							style={{
								color: theme.footerText,
								marginTop: '10px',
								textAlign: 'center',
								fontSize: '16px'
							}}
						>
							16202 Brinton Ct,<br /> Houston, TX 77095
						</GeneralTextRegular>
					</AnalogClocksIndividualContainer>
					<AnalogClocksIndividualContainer>
						<AnalogClock {...uaeValue} />
						<BannerMediumTitle style={{ fontSize: '20px' }}>UAE</BannerMediumTitle>
						<GeneralTextRegular
							style={{
								color: theme.footerText,
								marginTop: '10px',
								textAlign: 'center',
								fontSize: '16px'
							}}
						>
							Level 23, Boulevard Plaza 2
							<br />Sheikh Mohammed bin Rashid
							<br /> Boulevard-Dubai
						</GeneralTextRegular>
					</AnalogClocksIndividualContainer>
					<AnalogClocksIndividualContainer>
						<AnalogClock {...pakValue} />
						<BannerMediumTitle style={{ fontSize: '20px' }}>PAKISTAN</BannerMediumTitle>
						<GeneralTextRegular
							style={{
								color: theme.footerText,
								marginTop: '10px',
								textAlign: 'center',
								fontSize: '16px',
							}}
						>
							69-B, Main Boulevard,
							<br />Block H Gulberg 2,
							<br />
							Lahore, Punjab
						</GeneralTextRegular>
					</AnalogClocksIndividualContainer>
				</AnalogClocksContainer>
			</AnalogClocksFullWidthContainer>


			{/* footer */}
			<FooterContainer >
				<FooterLogoColumn >
					<FooterLogo src={theme.listItemImage} />
					<GeneralTextRegular style={{ color: theme.footerText, marginTop: '25px' }}>
						Get Free Estimation
					</GeneralTextRegular>
					<a href="mailto:hello@snexus.com" style={{ textDecoration: 'none' }}>
						<BannerMediumTitle style={{ fontSize: '14px' }}>
							hello@snexus.com
						</BannerMediumTitle>
					</a>
					<BannerMediumTitle
						style={{
							marginTop: window.innerWidth > 600 ? '30px' : '5%',
							fontSize: '16px',
						}}
					>
						USA
					</BannerMediumTitle>
					<a href="tel:(888) 405 0441" style={{ textDecoration: 'none' }}>
						<GeneralTextRegular style={{ color: theme.footerText, fontSize: '16px' }}>
							(888) 405 0441
						</GeneralTextRegular>
					</a>
					<BannerMediumTitle
						style={{
							marginTop: window.innerWidth > 600 ? '30px' : '5%',
							fontSize: '16px',
						}}
					>
						PAKISTAN
					</BannerMediumTitle>
					<a href="tel:0302-9411133" style={{ textDecoration: 'none' }}>
						<GeneralTextRegular style={{ color: theme.footerText, fontSize: '16px' }}>
							+92 302 9411133
						</GeneralTextRegular>
					</a>
				</FooterLogoColumn>
				<FooterLogoColumn >
					<BannerMediumTitle
						style={{
							marginTop: window.innerWidth > 600 ? '0px' : '5%',
							fontSize: '20px',
						}}
					>
						Company
					</BannerMediumTitle>
					<GoTo href="/company">
						<GeneralTextRegular style={{ color: theme.footerText, marginTop: '10px', }}>
							About Us
						</GeneralTextRegular>
					</GoTo>
					<GoTo href="/careers">
						<GeneralTextRegular style={{ color: theme.footerText, marginTop: '10px' }}>
							Careers
						</GeneralTextRegular>
					</GoTo>
					<GeneralTextRegular style={{ color: theme.footerText, marginTop: '10px', display: window.innerWidth < 600 && 'none' }}>
						Blog
					</GeneralTextRegular>
					<GeneralTextRegular style={{ color: theme.footerText, marginTop: '10px', display: window.innerWidth < 600 && 'none' }}>
						Branding
					</GeneralTextRegular>
					<GeneralTextRegular style={{ color: theme.footerText, marginTop: '10px', display: window.innerWidth < 600 && 'none' }}>
						How to Engage
					</GeneralTextRegular>
					<GoTo href="/caseStudies">
						<GeneralTextRegular style={{ color: theme.footerText, marginTop: '10px' }}>
							We Work With
						</GeneralTextRegular>
					</GoTo>
					<GeneralTextRegular style={{ color: theme.footerText, marginTop: '10px', display: window.innerWidth < 600 && 'none' }}>
						Testimonials
					</GeneralTextRegular>
					<GeneralTextRegular style={{ color: theme.footerText, marginTop: '10px', display: window.innerWidth < 600 && 'none' }}>
						FAQs
					</GeneralTextRegular>
					<GeneralTextRegular style={{ color: theme.footerText, marginTop: '10px' }}>
						Policies
					</GeneralTextRegular>
					<GeneralTextRegular style={{ color: theme.footerText, marginTop: '10px' }}>
						Sitemap
					</GeneralTextRegular>
					{/* <GeneralText style={{ color: theme.footerText, marginTop: '10px' }}>
						Contact
					</GeneralText> */}
				</FooterLogoColumn>
				<FooterLogoColumn style={{ display: window.innerWidth < 600 && 'none' }}>
					<BannerMediumTitle
						style={{
							marginTop: 0,
							fontSize: '20px',
						}}
					>
						Services
					</BannerMediumTitle>
					<GeneralTextRegular style={{ color: theme.footerText, marginTop: '10px' }}>
						Android App Development
					</GeneralTextRegular>
					<GeneralTextRegular style={{ color: theme.footerText, marginTop: '10px' }}>
						AngularJs Development
					</GeneralTextRegular>
					<GeneralTextRegular style={{ color: theme.footerText, marginTop: '10px' }}>
						Augmented Reality
					</GeneralTextRegular>
					<GeneralTextRegular style={{ color: theme.footerText, marginTop: '10px' }}>
						AWS Development
					</GeneralTextRegular>
					<GeneralTextRegular style={{ color: theme.footerText, marginTop: '10px' }}>
						BigCommerce
					</GeneralTextRegular>
					<GeneralTextRegular style={{ color: theme.footerText, marginTop: '10px' }}>
						CakePHP Development
					</GeneralTextRegular>
					<GeneralTextRegular style={{ color: theme.footerText, marginTop: '10px' }}>
						CodeIgniter Development
					</GeneralTextRegular>
					<GeneralTextRegular style={{ color: theme.footerText, marginTop: '10px' }}>
						Cross-Platform Apps
					</GeneralTextRegular>
					<GeneralTextRegular style={{ color: theme.footerText, marginTop: '10px' }}>
						.Net Development
					</GeneralTextRegular>
					<GeneralTextRegular style={{ color: theme.footerText, marginTop: '10px' }}>
						Drupal Development
					</GeneralTextRegular>
					{/* <GeneralText style={{ color: '#606061', marginTop: '10px' }}>
						DynamoDB Development
					</GeneralText>
					<GeneralText style={{ color: '#606061', marginTop: '10px' }}>
						Firebase Development
					</GeneralText>
					<GeneralText style={{ color: '#606061', marginTop: '10px' }}>
						Google Clound
					</GeneralText> */}
				</FooterLogoColumn>
				<FooterLogoColumnThird>
					<div style={{ display: window.innerWidth > 600 ? 'flex' : 'block', flexDirection: 'row', marginLeft: window.innerWidth < 600 && "30px" }}>
						<div style={{ display: "flex", flexDirection: 'column' }}>
							<BannerMediumTitle
								style={{
									marginTop: 0,
									fontSize: '20px',
									width: window.innerWidth < 600 && '91%',
									marginRight: window.innerWidth < 600 && '0px',
									marginLeft: window.innerWidth < 600 && '0px'
								}}>
								Full Name
							</BannerMediumTitle>
							<Input type="text" value={fullName} onChange={e => setFullName(e.target.value)}
								style={{
									width: window.innerWidth > 600 ? '190px' : '88%',
									paddingLeft: '10px',
									fontSize: '14px'
								}} />
							{fullName === null && <ErrorText>Please Enter The Full Name</ErrorText>}
						</div>
						<div style={{ display: "flex", flexDirection: 'column' }}>
							<BannerMediumTitle
								style={{
									marginTop: window.innerWidth < 600 && '5%',
									fontSize: '20px',
									marginLeft: window.innerWidth > 600 ? "20px" : '0px',
									width: window.innerWidth < 600 && '91%',
									marginRight: window.innerWidth < 600 && '0px',

								}}>
								Contact Number
							</BannerMediumTitle>
							<Input
								type="tel" value={contactNumber} onChange={e => setContactNumber(e.target.value)}
								style={{
									width: window.innerWidth > 600 ? '190px' : '88%',
									paddingLeft: '10px',
									marginLeft: window.innerWidth > 600 && "20px",
									fontSize: '14px'
								}} />
							{contactNumber === null && <ErrorText style={{ marginLeft: window.innerWidth > 600 && "20px", }}>Please Enter The Contact Number</ErrorText>}
						</div>
					</div>

					<BannerMediumTitle
						style={{
							marginTop: '25px',
							fontSize: '20px',
							width: window.innerWidth < 600 && '91%',
							marginRight: window.innerWidth < 600 && '0px',
							marginLeft: window.innerWidth < 600 && '20px'

						}}>
						Email Address
					</BannerMediumTitle>
					<Input
						type="email" value={email} onChange={e => setEmail(e.target.value)}
						style={{
							width: window.innerWidth > 600 ? '410px' : '80%',
							paddingLeft: '10px',
							fontSize: '14px'
						}} />
					{email === null && <ErrorText>Please Enter The Email</ErrorText>}


					<GetInTouchButton style={{
						margin: window.innerWidth > 600 ? '30px 0px 30px 160px' : '10% 0px 5% 35%',
					}}
						onClick={() => onSubmitForm()} >
						<ButtonText style={{ color: 'black' }}>Get In Touch</ButtonText>
					</GetInTouchButton>

					{verification &&
						<GeneralTextMedium style={{ marginTop: window.innerWidth < 600 ? '5%' : '5px', textAlign: 'center' }}>
							Your message sent successfully
						</GeneralTextMedium>
					}

					<BannerMediumTitle
						style={{
							marginTop: '25px',
							fontSize: '20px',
							marginLeft: window.innerWidth > 600 ? '170px' : '10%'
						}}
					>
						Follow Us
					</BannerMediumTitle>

					<SocialMediaIconsContainer
						style={{
							width: window.innerWidth < 600 && '90%',
							margin: window.innerWidth < 600 && '5%'
						}}
					>
						<GoTo href="#">
							<YouTube src={youtube} />
						</GoTo>

						<GoTo href="https://www.facebook.com/teamsnexus" target="_blank">
							<FaceBook src={faceBook} />
						</GoTo>

						<GoTo href="https://www.instagram.com/invites/contact/?i=pwhw755hq854&utm_content=lim77bf" target="_blank">
							<Instagram src={instagram} />
						</GoTo>

						<GoTo href="#">
							<Twitter src={twitter} />
						</GoTo>

						<GoTo href="https://www.linkedin.com/company/snexusllc/mycompany/" target="_blank">
							<LinkedIn src={linkedIn} />
						</GoTo>

						<GoTo href="#">
							<PintRest src={pintrest} />
						</GoTo>
					</SocialMediaIconsContainer>
					{/* <CareerButton exact to="/career"> Career</CareerButton> */}
				</FooterLogoColumnThird>
			</FooterContainer>
			<FooterRedLine />

			<GeneralTextRegular
				style={{ color: '#606061', marginTop: window.innerWidth > 600 ? '33px' : '5%', marginBottom: window.innerWidth > 600 ? '33px' : '5%' }}
			>
				<Span>&#169;</Span> 2021 <SnexusTextFooter>Snexus.</SnexusTextFooter>{' '}
				All Rights Reserved. Terms of Use. Privacy Policy.
			</GeneralTextRegular>
		</FullWidthContainer>
	);
};

//HTML
const FullWidthContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 100%;
`;
// to new heights
const ToNewHeightsFullWidthContainer = styled.div`
	background-color: ${(props) => props.theme.toNewHeightsBackground};
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const GoTo = styled.a`
text-decoration:none;

&:hover {
	opacity: 0.5;
}


`;

const ToNewHeightsContainer = styled.div`
	background-color: ${(props) => props.theme.toNewHeightsBackground};
	width: 1170px;
	height: 180px;
	display: flex;
	align-items: center;
	overflow: hidden;
	@media (max-width: 600px) {
		display:block;
		width:100%;
		height:100%;
		text-align:center;
		justify-content:center;
		align-items:center;
		align-self:center;
		
	}
`;
const ToNewHeightsLeftContainer = styled.div`
	width: 100%;
	height: 185px;
	display: flex;
	flex-direction: column;
	@media (max-width: 600px) {
		display:block;
		width:100%;
		height:100%
		
	}
`;
const Logo = styled.img`
	margin-top: 40px;
	width: 80px;
	height: 20px;
`;
// analog clocks
const AnalogClocksFullWidthContainer = styled.div`
	width: 100%;
	background-color: ${(props) => props.theme.analogClocksBackground};
	display: flex;
	align-items: center;
	justify-content: center;
	

`;
const AnalogClocksContainer = styled.div`
	display: flex;
	justify-content: space-around;
	//height: 280px;
	max-width: 1170px;
	width: 100%;
	padding:4% 0;
	@media (max-width: 600px) {
		display:block;
		height:100%;
	}
`;
const AnalogClocksIndividualContainer = styled.div`
width:250px;
heigth:215px;
	display: flex;
	align-items: center;
	flex-direction: column;
	align-text: center;
	@media (max-width: 600px) {
		align-items:center;
		justify-content:center;
		align-self:center;
		margin:5% 30px;
	}

`;

const Button = styled(NavLink)`
	margin: 1rem 0;
	width:141px;
	height:46px;
	color: white;
	background-color: #e14d1f;
	cursor: pointer;
	text-decoration: none;
	display: flex;
	padding: 0px 1rem;
	font-weight: 700;
	align-items: center;

	&:hover {
		opacity: 0.8;
	}

	@media (max-width: 600px) {
	
		display:inline-grid;
		margin:5% 0;
		width:auto;
		height:46px;
	}

`;
//footer
const FooterContainer = styled.div`
	width: 100%;
	max-width: 1170px;
	height: 100%;
	display: flex;
	flex-direction: row;
	padding: 4% 0;
	@media (max-width: 600px) {
		display:block;
		width:100%;
		padding:0px;
	}

`;
const FooterLogoColumn = styled.div`
	width: 250px;
	height: 100%;
	@media (max-width: 600px) {
		width:100%;
		text-align:center;
		margin-left:0 !important;
		margin-top:5%;
		
	}

`;

const FooterLogoColumnThird = styled.div`
	//width: 330px;
	width:420px;
	height: 100%;
	//margin-left:90px;
	@media (max-width: 600px) {
		width:100%;
		text-align:center;
		margin-left:0;
		margin-top:5%;
		justify-content:center;
		
	}

`;
const FooterRedLine = styled.div`
	height: 1px;
	width: 1170px;
	background-color: red;
	@media (max-width: 600px) {
		width:100%;
	}

`;
const FooterLogo = styled.img`
	width: 90px;
	height: 80px;
	margin-top:10px;
`;

const SocialMediaIconsContainer = styled.div`
	//width: 220px;
	width:420px;
	height: 50px;
	margin: 10px 0;
	display: flex;
	//justify-content:space-between;
	justify-content:space-around;
	@media (max-width: 600px) {
		margin:3% 30px 0px 30px;
		text-align:center;
		display:inline-flex;
		justify-content:space-around;
		align-items:center;
		align-self:center;
		
	}

`;
const YouTube = styled.img`
	width: 30px;
	height: 30px;
	transition: all 0.5s ease;


	&:hover {
		transform: scale(1.3);
	}
`;
const Instagram = styled.img`
	width: 30px;
	height: 30px;
	transition: all 0.5s ease;

	&:hover {
		opacity: 0.5;
		transform: scale(1.3);
       
	}
`;
const Twitter = styled.img`
	width: 30px;
	height: 30px;
	transition: all 0.5s ease;

	&:hover {
		opacity: 0.5;
		transform: scale(1.3);
	}
`;
const FaceBook = styled.img`
	width: 30px;
	height: 30px;
	transition: all 0.5s ease;

	&:hover {
		opacity: 0.5;
		transform: scale(1.3);
	}
`;
const LinkedIn = styled.img`
	width: 30px;
	height: 30px;
	transition: all 0.5s ease;

	&:hover {
		opacity: 0.5;
		transform: scale(1.3);
	}
`;
const PintRest = styled.img`
	width: 30px;
	height: 30px;
	transition: all 0.5s ease;

	&:hover {
		opacity: 0.5;
		transform: scale(1.3);
	}
`;


const SnexusTextFooter = styled.span`
	font-size: 14px;
	font-weight: bold;
	color: ${(props) => props.theme.emailText};
`;

const Input = styled.input`
	 width: 225px;
	height:46px;
	//padding-left: 20px;
	font-size: 18px;
	background: #ebebeb;
	border: none;
	//border-radius: 5px 0 0 5px;
	margin-top:5px;
	border-radius:5px;
	::placeholder {
		color: #cdcdcd;
	}
	&:focus {
		outline: none;
	}

	@media (max-width: 600px) {
		width: 150px;
	}
	
`;
const GetInTouchButton = styled.div`
        width: 113px;
		height: 46px;
		border-radius: 5px;				
		color: white;
		background-color: #fcb516;
		cursor: pointer;
		display: flex;
		font-size: 14.64px;
		font-weight: 700;
		justify-content: center;
		align-items: center;
		align-self: center;

		&:hover {
		opacity: 0.8;
		} 
`;


const Span = styled.span``;



export default Footer;
