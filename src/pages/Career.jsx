import React from 'react';
import styled from 'styled-components';
import Carousel from "react-elastic-carousel";
import { useState,useEffect } from 'react';
import Files from 'react-files';
import { NavLink } from 'react-router-dom';
import { getTheme } from '../getTheme';
import HTML from '../constants/StyledComponents';
import { FaAngleDown } from 'react-icons/fa';
import { FaAngleUp } from 'react-icons/fa';
import { Link } from "react-scroll";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import emailjs from 'emailjs-com';

import { GeneralTextRegular, GeneralTextMedium, BannerBigTitle, BannerMediumTitle, SmallSemiTitle, IconsBoldTitle, BannerSmallTitle, MediumSemiTitle, ButtonText, IconsText, ErrorText } from '../constants/FontTags';

import { ReactComponent as CareerProgression } from '../assets/pages/career/careerProgression.svg';
import { ReactComponent as ContinuousLearning } from '../assets/pages/career/continuousLearning.svg';
import { ReactComponent as Empower } from '../assets/pages/career/empower.svg';
import { ReactComponent as Machine } from '../assets/pages/career/machine.svg';
import { ReactComponent as MeaningfulWork } from '../assets/pages/career/meaningfulWork.svg';
import { ReactComponent as MedicalInsurance } from '../assets/pages/career/medicalInsurance.svg';
import { ReactComponent as Play } from '../assets/pages/career/play.svg';
import { ReactComponent as Snacks } from '../assets/pages/career/meaningfulWork.svg';
import { ReactComponent as TeamEvents } from '../assets/pages/career/teamEvents.svg';
import { ReactComponent as WinOrLearn } from '../assets/pages/career/winOrLearn.svg';
import { ReactComponent as WorkLifeBalance } from '../assets/pages/career/workLifeBalance.svg';
import { ReactComponent as WorkBuddy } from '../assets/pages/career/play.svg';

const Career = (props) => {

	const theme = getTheme(props.themeName);
	const [verification, setVerification] = useState(false);
	const [filesTosend, setFilesToSend] = useState('');
	const [showDropDown, setShowDropDown] = useState(false);
	const [selectedDropDownValue, setSelectedDropDownValue] = useState('');
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [contactNumber, setContactNumber] = useState('');
	const [showPopup1, setShowPopup1] = useState(false);
	const [showPopup2, setShowPopup2] = useState(false);
	const [showPopup3, setShowPopup3] = useState(false);
	const [showPopup4, setShowPopup4] = useState(false);
	let check = [false, false, false, false, false];

	const dropDownValues = ['SEO Content Writer', 'SEO Executive'];

	const tooglePopup1 = () => setShowPopup1(!showPopup1);
	const tooglePopup2 = () => setShowPopup2(!showPopup2);
	const tooglePopup3 = () => setShowPopup3(!showPopup3);
	const tooglePopup4 = () => setShowPopup4(!showPopup4);

	const toggleDropDown = () => setShowDropDown(!showDropDown);

	const onDropDownValueClicked = (value) => () => {
		setSelectedDropDownValue(value);
		setShowDropDown(false);
		console.log(selectedDropDownValue);
	};

	// useEffect(() => {
	// 	console.log("useeffect ")
	// 		window.scrollTo({
	// 			top: 0,
	// 			behavior: "smooth"
	// 		  });

	//   }, [])

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

		if (selectedDropDownValue === '') {
			setSelectedDropDownValue(null);
		}
		else {
			check[3] = true;
		}

		if (filesTosend === '') {
			setFilesToSend(null);
		}
		else {
			check[4] = true;
		}

		if (check[0] && check[1] && check[2] && check[3] && check[4] === true) {
			console.log("all ok");
			const data = {
				fullName: fullName,
				email: email,
				contactNumber: contactNumber,
				selectedDropDownValue: selectedDropDownValue,
				file: filesTosend
			}



			console.log("after saving values in data", data);


			emailjs.send('service_js9zo9w', 'template_ms3pso7', data, 'user_cQLa68u8ZBhwul0kss5Xa')
				.then((result) => {
					console.log("email send successfully ");
					setFullName('');
					setEmail('');
					setContactNumber('');
					setSelectedDropDownValue('');
					setFilesToSend('');
					setVerification(true);
				}, (error) => {
					console.log(error.text);
				});
		}
	};

	const onFilesChange = (files) => {
		const blob = new Blob([files[0]], { type: 'application/pdf' })
		console.log('blob: ', blob)
		const url = URL.createObjectURL(blob)
		console.log("url: ", url)
		setFilesToSend(url);
		// console.log("onFilesChange",files);
		// console.log('files', filesTosend);
	};
	const onFilesError = (error, file) => {
		console.log('error code ' + error.code + ': ' + error.message);
	};

	const sendEmail = (e) => {
		console.log("================== send email ===================")

		e.preventDefault()
		console.log("full name", fullName)
		console.log("email", email)
		console.log("contact number", contactNumber)
		console.log("experties", selectedDropDownValue)
		console.log("cv", filesTosend)
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

		if (selectedDropDownValue === '') {
			setSelectedDropDownValue(null);
		}
		else {
			check[3] = true;
		}

		if (filesTosend === '') {
			setFilesToSend(null);
		}
		else {
			check[4] = true;
		}

		if (check[0] && check[1] && check[2] && check[3] && check[4] === true) {
			emailjs.sendForm('service_js9zo9w', 'template_ms3pso7', e.target, 'user_cQLa68u8ZBhwul0kss5Xa')
				.then((result) => {
					console.log("email send successfully ");
					setFullName('');
					setEmail('');
					setContactNumber('');
					setSelectedDropDownValue('');
					setFilesToSend('');
					setVerification(true);
				}, (error) => {
					console.log(error.text);
				});
		}

	}

	return (
		<HTML.FullWidthContainer>
			{/* Banner */}
			<BannerContainer>
				<MainBanner>
					<MainBannerInnerContainer >
						<BannerBigTitle>
							Be Part of <br style={{ display: window.innerWidth < 600 && 'none' }} />
							a Team that <br style={{ display: window.innerWidth < 600 && 'none' }} />
							Values you Daily!
						</BannerBigTitle>
						<GeneralTextMedium style={{ marginTop: window.innerWidth < 600 && '5%' }}>
							Begin your journey towards a successful career in the exciting
							<br style={{ display: window.innerWidth < 600 && 'none' }} />
							world of technology
						</GeneralTextMedium>
						<Button
							to={{
								pathname: "/getInTouch",
								state: { letsTalk: true }
							}}
							style={{ borderRadius: 23, marginTop: window.innerWidth < 600 ? '0%' : '30px' }}
						>
							<ButtonText>Let's Talk</ButtonText>
						</Button>
					</MainBannerInnerContainer>
					<MainBannerInnerContainer >
						<MainBannerImage />
					</MainBannerInnerContainer>
				</MainBanner>
			</BannerContainer>
			{/* Lead the future container */}
			<FullWidthContainerLead>
				<LeadContainer >
					<BannerMediumTitle>Let's Lead the Future Together!</BannerMediumTitle>
					<GeneralTextMedium style={{ margin: window.innerWidth > 600 ? '15px 0' : '5% 30px', textAlign: window.innerWidth > 600 && 'center' }}>
						Make your career goal to work in a fun environment with interesting, high-impact projects.
						<br />
						We are looking for awesome people to join us. If you think you have what it takes, send in your resume.
					</GeneralTextMedium>
				</LeadContainer>


				{/* This is only for mobiles */}
				<Carousel style={{ marginBottom: '5%', display: window.innerWidth > 600 && 'none', flexDirection: 'column', alignItems: window.innerWidth > 600 ? 'flex-start' : 'center' }} itemsToShow={1} showArrows={false} >
					<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '5% 30px 1% 30px', alignItems: 'center', justifyContent: 'center' }}>

						<OptionsInnerContainer >
							<BannerSmallTitle
								style={{
									margin: window.innerWidth > 600 ? '15px 0 0 15px' : '15px 0 15px 0px',
									textAlign: window.innerWidth < 600 && 'center',
								}}
							>
								SEO Content Writer
							</BannerSmallTitle>
							<GeneralTextMedium
								style={{
									margin: window.innerWidth > 600 ? '10px 0px 0px 15px' : '10px 0px 0px 0px',
								}}>
								Pakistan
							</GeneralTextMedium>
							<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
								<BulletPoints style={{ backgroundColor: '#FF605C' }} />
								<GeneralTextRegular
									style={{
										margin: window.innerWidth < 600 && '0px 0px 0px 5px',
										textAlign: 'left',
										textAlignLast: 'left'
									}} >
									Able to write at least 2000 words a day
								</GeneralTextRegular>

							</Points>

							<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
								<BulletPoints style={{ backgroundColor: '#FFBD44' }} />
								<GeneralTextRegular
									style={{
										margin: window.innerWidth < 600 && '0px 0px 0px 5px',
										textAlign: 'left',
										textAlignLast: 'left'
									}} >
									Comfortable in writing on multiple local industries
								</GeneralTextRegular>

							</Points>

							<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
								<BulletPoints style={{ backgroundColor: '#00CA4E' }} />
								<GeneralTextRegular
									style={{
										margin: window.innerWidth < 600 && '0px 0px 0px 5px',
										textAlign: 'left',
										textAlignLast: 'left'
									}}
								>
									Able to think 'outside the box'
								</GeneralTextRegular>

							</Points>

							<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
								<BulletPoints style={{ backgroundColor: '#FF605C' }} />
								<GeneralTextRegular
									style={{
										margin: window.innerWidth < 600 && '0px 0px 0px 5px',
										textAlign: 'left',
										textAlignLast: 'left'
									}}
								>
									Able to produce 100% original work
								</GeneralTextRegular>

							</Points>

							<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
								<BulletPoints style={{ backgroundColor: '#FFBD44' }} />
								<GeneralTextRegular
									style={{
										margin: window.innerWidth < 600 && '0px 0px 0px 5px',
										textAlign: 'left',
										textAlignLast: 'left'
									}}
								>
									Able to write content in all perspectives (1st & 3rd person)
								</GeneralTextRegular>

							</Points>

							<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
								<BulletPoints style={{ backgroundColor: '#00CA4E' }} />
								<GeneralTextRegular
									style={{
										margin: window.innerWidth < 600 && '0px 0px 0px 5px',
										textAlign: 'left',
										textAlignLast: 'left'
									}}
								>
									Able to thoroughly research written work to ensure all information included is factually accurate
								</GeneralTextRegular>

							</Points>

							<div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', margin: window.innerWidth < 600 ? '5% 0 5% 0px' : '5% 0 5% 0px' }}>
								<Link
									to="scroll"
									spy={true}
									smooth={true}
									duration={500}
									style={{
										borderRadius: 20, width: '80px', height: '36px', color: 'white',
										backgroundColor: '#e14d1f',
										fontSize: '0.8rem',
										fontWeight: '700',
										alignItems: 'center',
										cursor: 'pointer',
										//margin: window.innerWidth < 600 ? '5% 0 5% 30px' : '5% 0 5% 15px',
										justifyContent: 'center',
										display: 'flex',
									}}
								>
									<GeneralTextMedium style={{ color: 'white' }}>Apply</GeneralTextMedium>
								</Link>
								<div style={{
									color: theme.color,

									fontSize: '0.8rem',
									fontWeight: '700',
									alignItems: 'center',
									cursor: 'pointer',
									//	margin: window.innerWidth < 600 ? '5% 0 5% 30px' : '5% 0 5% 50px',
									justifyContent: 'center',
									display: 'flex',
								}}
									onClick={tooglePopup1}>
									<ButtonText
										style={{
											color: theme.color,
											textDecoration: 'underline',
											fontSize: '12px'
										}}>
										Read More
									</ButtonText>
								</div>
							</div>


						</OptionsInnerContainer>

					</view>

					<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '5% 30px 1% 30px', alignItems: 'center', justifyContent: 'center' }}>


						<OptionsInnerContainer >
							<BannerSmallTitle
								style={{
									margin: window.innerWidth > 600 ? '15px 0 0 15px' : '15px 0 15px 0px',
									textAlign: window.innerWidth < 600 && 'center',
								}}
							>
								SEO Executive
							</BannerSmallTitle>
							<GeneralTextMedium
								style={{
									margin: window.innerWidth > 600 ? '10px 0px 0px 15px' : '10px 0px 0px 0px',
								}}>
								Pakistan
							</GeneralTextMedium>
							<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
								<BulletPoints style={{ backgroundColor: '#FF605C' }} />
								<GeneralTextRegular
									style={{
										margin: window.innerWidth < 600 && '0px 0px 0px 5px',
										textAlign: 'left',
										textAlignLast: 'left'
									}} >
									Leading on-site and off-site analysis of web SEO competition.
								</GeneralTextRegular>

							</Points>

							<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
								<BulletPoints style={{ backgroundColor: '#FFBD44' }} />
								<GeneralTextRegular
									style={{
										margin: window.innerWidth < 600 && '0px 0px 0px 5px',
										textAlign: 'left',
										textAlignLast: 'left'
									}} >
									Using Google Analytics to conduct performance reports regularly.
								</GeneralTextRegular>

							</Points>

							<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
								<BulletPoints style={{ backgroundColor: '#00CA4E' }} />
								<GeneralTextRegular
									style={{
										margin: window.innerWidth < 600 && '0px 0px 0px 5px',
										textAlign: 'left',
										textAlignLast: 'left'
									}}
								>
									Creating high-quality and quantifiable SEO content.
								</GeneralTextRegular>

							</Points>

							<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
								<BulletPoints style={{ backgroundColor: '#FF605C' }} />
								<GeneralTextRegular
									style={{
										margin: window.innerWidth < 600 && '0px 0px 0px 5px',
										textAlign: 'left',
										textAlignLast: 'left'
									}}
								>
									Supporting in blog content.
								</GeneralTextRegular>

							</Points>

							<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
								<BulletPoints style={{ backgroundColor: '#FFBD44' }} />
								<GeneralTextRegular
									style={{
										margin: window.innerWidth < 600 && '0px 0px 0px 5px',
										textAlign: 'left',
										textAlignLast: 'left'
									}}
								>
									Leading keyword research and optimization of content.
								</GeneralTextRegular>

							</Points>

							<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
								<BulletPoints style={{ backgroundColor: '#00CA4E' }} />
								<GeneralTextRegular
									style={{
										margin: window.innerWidth < 600 && '0px 0px 0px 5px',
										textAlign: 'left',
										textAlignLast: 'left'
									}}
								>
									Keeping up-to-date with expansions in SEM and updated SEO practices, e.g. BERT, PENGUIN, etc.
								</GeneralTextRegular>

							</Points>



							<div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', margin: window.innerWidth < 600 ? '5% 0 5% 0px' : '5% 0 5% 0px' }}>
								<Link
									to="scroll"
									spy={true}
									smooth={true}
									duration={500}
									style={{
										borderRadius: 20, width: '80px', height: '36px', color: 'white',
										backgroundColor: '#e14d1f',
										fontSize: '0.8rem',
										fontWeight: '700',
										alignItems: 'center',
										cursor: 'pointer',
										//margin: window.innerWidth < 600 ? '5% 0 5% 30px' : '5% 0 5% 15px',
										justifyContent: 'center',
										display: 'flex',
									}}
								>
									<GeneralTextMedium style={{ color: 'white' }}>Apply</GeneralTextMedium>
								</Link>
								<div style={{
									color: theme.color,

									fontSize: '0.8rem',
									fontWeight: '700',
									alignItems: 'center',
									cursor: 'pointer',
									//	margin: window.innerWidth < 600 ? '5% 0 5% 30px' : '5% 0 5% 50px',
									justifyContent: 'center',
									display: 'flex',
								}}
									onClick={tooglePopup2}>
									<ButtonText
										style={{
											color: theme.color,
											textDecoration: 'underline',
											fontSize: '12px'
										}}>
										Read More
									</ButtonText>
								</div>
							</div>

						</OptionsInnerContainer>



					</view>
					{/* <view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '5% 30px 1% 30px', alignItems: 'center', justifyContent: 'center' }}>


						<OptionsInnerContainer >
							<BannerSmallTitle
								style={{
									margin: window.innerWidth > 600 ? '15px 0 0 15px' : '15px 0 15px 0px',
									textAlign: window.innerWidth < 600 && 'center',
								}}
							>
								UI-UX Designer
							</BannerSmallTitle>
							<GeneralTextMedium
								style={{
									margin: window.innerWidth > 600 ? '10px 0px 0px 15px' : '10px 0px 0px 0px',
								}}>
								Pakistan
							</GeneralTextMedium>
							<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
								<BulletPoints style={{ backgroundColor: '#FF605C' }} />
								<GeneralTextRegular
									style={{
										margin: window.innerWidth < 600 && '0px 0px 0px 5px',
										textAlign: 'left',
										textAlignLast: 'left'
									}} >
									Create original graphic designs
								</GeneralTextRegular>

							</Points>

							<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
								<BulletPoints style={{ backgroundColor: '#FFBD44' }} />
								<GeneralTextRegular
									style={{
										margin: window.innerWidth < 600 && '0px 0px 0px 5px',
										textAlign: 'left',
										textAlignLast: 'left'
									}} >
									Gather & Evaluate user requirements
								</GeneralTextRegular>

							</Points>

							<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
								<BulletPoints style={{ backgroundColor: '#00CA4E' }} />
								<GeneralTextRegular
									style={{
										margin: window.innerWidth < 600 && '0px 0px 0px 5px',
										textAlign: 'left',
										textAlignLast: 'left'
									}}
								>
									Identify & Troubleshoot UX problems
								</GeneralTextRegular>

							</Points>

							<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
								<BulletPoints style={{ backgroundColor: '#FF605C' }} />
								<GeneralTextRegular
									style={{
										margin: window.innerWidth < 600 && '0px 0px 0px 5px',
										textAlign: 'left',
										textAlignLast: 'left'
									}}
								>
									Optimize UI Designs with essential tools
								</GeneralTextRegular>

							</Points>




							<div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', margin: window.innerWidth < 600 ? '5% 0 5% 0px' : '5% 0 5% 0px' }}>
								<Link
									to="scroll"
									spy={true}
									smooth={true}
									duration={500}
									style={{
										borderRadius: 20, width: '80px', height: '36px', color: 'white',
										backgroundColor: '#e14d1f',
										fontSize: '0.8rem',
										fontWeight: '700',
										alignItems: 'center',
										cursor: 'pointer',
										//margin: window.innerWidth < 600 ? '5% 0 5% 30px' : '5% 0 5% 15px',
										justifyContent: 'center',
										display: 'flex',
									}}
								>
									<GeneralTextMedium style={{ color: 'white' }}>Apply</GeneralTextMedium>
								</Link>
								<div style={{
									color: theme.color,

									fontSize: '0.8rem',
									fontWeight: '700',
									alignItems: 'center',
									cursor: 'pointer',
									//	margin: window.innerWidth < 600 ? '5% 0 5% 30px' : '5% 0 5% 50px',
									justifyContent: 'center',
									display: 'flex',
								}}
									onClick={tooglePopup3}>
									<ButtonText
										style={{
											color: theme.color,
											textDecoration: 'underline',
											fontSize: '12px'
										}}>
										Read More
									</ButtonText>
								</div>
							</div>

						</OptionsInnerContainer>

					</view>

					<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '5% 30px 1% 30px', alignItems: 'center', justifyContent: 'center' }}>
						<OptionsInnerContainer >
							<BannerSmallTitle
								style={{
									margin: window.innerWidth > 600 ? '15px 0 0 15px' : '15px 0 15px 0px',
									textAlign: window.innerWidth < 600 && 'center',
								}}
							>
								SDR
							</BannerSmallTitle>
							<GeneralTextMedium
								style={{
									margin: window.innerWidth > 600 ? '10px 0px 0px 15px' : '10px 0px 0px 0px',
								}}>
								Pakistan
							</GeneralTextMedium>
							<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
								<BulletPoints style={{ backgroundColor: '#FF605C' }} />
								<GeneralTextRegular
									style={{
										margin: window.innerWidth < 600 && '0px 0px 0px 5px',
										textAlign: 'left',
										textAlignLast: 'left'
									}} >
									Identifying Business Opportunities
								</GeneralTextRegular>

							</Points>

							<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
								<BulletPoints style={{ backgroundColor: '#FFBD44' }} />
								<GeneralTextRegular
									style={{
										margin: window.innerWidth < 600 && '0px 0px 0px 5px',
										textAlign: 'left',
										textAlignLast: 'left'
									}} >
									Expanding Customer Base In Target Regions
								</GeneralTextRegular>

							</Points>

							<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
								<BulletPoints style={{ backgroundColor: '#00CA4E' }} />
								<GeneralTextRegular
									style={{
										margin: window.innerWidth < 600 && '0px 0px 0px 5px',
										textAlign: 'left',
										textAlignLast: 'left'
									}}
								>
									Communicating product information to clients
								</GeneralTextRegular>

							</Points>

							<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
								<BulletPoints style={{ backgroundColor: '#FF605C' }} />
								<GeneralTextRegular
									style={{
										margin: window.innerWidth < 600 && '0px 0px 0px 5px',
										textAlign: 'left',
										textAlignLast: 'left'
									}}
								>
									Cold/Warm Calling & Qualifying Leads
								</GeneralTextRegular>

							</Points>




							<div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', margin: window.innerWidth < 600 ? '5% 0 5% 0px' : '5% 0 5% 0px' }}>
								<Link
									to="scroll"
									spy={true}
									smooth={true}
									duration={500}
									style={{
										borderRadius: 20, width: '80px', height: '36px', color: 'white',
										backgroundColor: '#e14d1f',
										fontSize: '0.8rem',
										fontWeight: '700',
										alignItems: 'center',
										cursor: 'pointer',
										//margin: window.innerWidth < 600 ? '5% 0 5% 30px' : '5% 0 5% 15px',
										justifyContent: 'center',
										display: 'flex',
									}}
								>
									<GeneralTextMedium style={{ color: 'white' }}>Apply</GeneralTextMedium>
								</Link>
								<div style={{
									color: theme.color,

									fontSize: '0.8rem',
									fontWeight: '700',
									alignItems: 'center',
									cursor: 'pointer',
									//	margin: window.innerWidth < 600 ? '5% 0 5% 30px' : '5% 0 5% 50px',
									justifyContent: 'center',
									display: 'flex',
								}}
									onClick={tooglePopup4}>
									<ButtonText
										style={{
											color: theme.color,
											textDecoration: 'underline',
											fontSize: '12px'
										}}>
										Read More
									</ButtonText>
								</div>
							</div>
						</OptionsInnerContainer>
					</view> */}
				</Carousel>


				{/* this is for laptops and desktops */}
				<OptionsContainer style={{ display: window.innerWidth < 600 && 'none', }}>
					<OptionsInnerContainer >
						<BannerSmallTitle
							style={{
								margin: window.innerWidth > 600 ? '15px 0 0 15px' : '15px 0 15px 0px',
								textAlign: window.innerWidth < 600 && 'center',
							}}
						>
							SEO Content Writer
						</BannerSmallTitle>
						<GeneralTextMedium style={{ margin: window.innerWidth > 600 ? '10px 0 0 15px' : '10px 0 0 40px', textAlign: window.innerWidth < 600 && '', }}>
							Pakistan
						</GeneralTextMedium>
						<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
							<BulletPoints style={{ backgroundColor: '#FF605C' }} />
							<GeneralTextRegular style={{ margin: window.innerWidth > 600 && '0px 0px 0px 20px' }} >
							Able to write at least 2000 words a day
							</GeneralTextRegular>

						</Points>

						<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
							<BulletPoints style={{ backgroundColor: '#FFBD44' }} />
							<GeneralTextRegular style={{ margin: window.innerWidth > 600 && '0px 0px 0px 20px' }} >Comfortable in writing on multiple local industries</GeneralTextRegular>

						</Points>

						<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
							<BulletPoints style={{ backgroundColor: '#00CA4E' }} />
							<GeneralTextRegular style={{ margin: window.innerWidth > 600 && '0px 0px 0px 20px' }} >Able to think 'outside the box'</GeneralTextRegular>

						</Points>

						<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
							<BulletPoints style={{ backgroundColor: '#FF605C' }} />
							<GeneralTextRegular style={{ margin: window.innerWidth > 600 && '0px 0px 0px 20px' }} >Able to write content in all perspectives (1st & 3rd person)</GeneralTextRegular>

						</Points>




						<div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', margin: window.innerWidth < 600 ? '5% 0 5% 0px' : '5% 0 5% 0px' }}>
							<Link
								to="scroll"
								spy={true}
								smooth={true}
								duration={500}
								style={{
									borderRadius: 20, width: '80px', height: '36px', color: 'white',
									backgroundColor: '#e14d1f',
									fontSize: '0.8rem',
									fontWeight: '700',
									alignItems: 'center',
									cursor: 'pointer',
									//margin: window.innerWidth < 600 ? '5% 0 5% 30px' : '5% 0 5% 15px',
									justifyContent: 'center',
									display: 'flex',
								}}
							>
								<GeneralTextMedium style={{ color: 'white' }}>Apply</GeneralTextMedium>
							</Link>
							<div style={{
								color: theme.color,

								fontSize: '0.8rem',
								fontWeight: '700',
								alignItems: 'center',
								cursor: 'pointer',
								//	margin: window.innerWidth < 600 ? '5% 0 5% 30px' : '5% 0 5% 50px',
								justifyContent: 'center',
								display: 'flex',
							}}
								onClick={tooglePopup1}>
								<ButtonText style={{ color: theme.color, textDecoration: 'underline', fontSize: '12px' }}>Read More</ButtonText>
							</div>
						</div>

					</OptionsInnerContainer>

					<OptionsInnerContainer >
						<BannerSmallTitle
							style={{
								margin: window.innerWidth > 600 ? '15px 0 0 15px' : '15px 0 15px 0px',
								textAlign: window.innerWidth < 600 && 'center',
							}}
						>
							SEO Executive <br />
						</BannerSmallTitle>
						<GeneralTextMedium style={{ margin: window.innerWidth > 600 ? '10px 0 0 15px' : '10px 0 0 40px', textAlign: window.innerWidth < 600 && '', }}>
							Pakistan
						</GeneralTextMedium>





						<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
							<BulletPoints style={{ backgroundColor: '#FF605C' }} />
							<GeneralTextRegular style={{ margin: window.innerWidth > 600 && '0px 0px 0px 20px' }} >Leading on/off-site analysis</GeneralTextRegular>

						</Points>

						<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
							<BulletPoints style={{ backgroundColor: '#FFBD44' }} />
							<GeneralTextRegular style={{ margin: window.innerWidth > 600 && '0px 0px 0px 20px' }} >Using Google Analytics to Conduct Performance Reports</GeneralTextRegular>

						</Points>

						<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
							<BulletPoints style={{ backgroundColor: '#00CA4E' }} />
							<GeneralTextRegular style={{ margin: window.innerWidth > 600 && '0px 0px 0px 20px' }} >Creating high-quality and quantifiable SEO content</GeneralTextRegular>

						</Points>

						<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
							<BulletPoints style={{ backgroundColor: '#FF605C' }} />
							<GeneralTextRegular style={{ margin: window.innerWidth > 600 && '0px 0px 0px 20px' }} >Leading keyword research and optimization of content</GeneralTextRegular>

						</Points>


						{/* <Link
							to="scroll"
							spy={true}
							smooth={true}
							duration={500}
							style={{
								borderRadius: 20, width: '80px', height: '36px', color: 'white',
								backgroundColor: '#e14d1f',
								fontSize: '0.8rem',
								fontWeight: '700',
								alignItems: 'center',
								cursor: 'pointer',
								margin: window.innerWidth < 600 ? '5% 0 5% 30px' : '5% 0 5% 15px',
								justifyContent: 'center',
								display: 'flex',
							}}
						>
							<GeneralTextMedium style={{ color: 'white' }}>Apply</GeneralTextMedium>
						</Link> */}

						<div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', margin: window.innerWidth < 600 ? '5% 0 5% 0px' : '5% 0 5% 0px' }}>
							<Link
								to="scroll"
								spy={true}
								smooth={true}
								duration={500}
								style={{
									borderRadius: 20, width: '80px', height: '36px', color: 'white',
									backgroundColor: '#e14d1f',
									fontSize: '0.8rem',
									fontWeight: '700',
									alignItems: 'center',
									cursor: 'pointer',
									//margin: window.innerWidth < 600 ? '5% 0 5% 30px' : '5% 0 5% 15px',
									justifyContent: 'center',
									display: 'flex',
								}}
							>
								<GeneralTextMedium style={{ color: 'white' }}>Apply</GeneralTextMedium>
							</Link>
							<div style={{
								color: theme.color,

								fontSize: '0.8rem',
								fontWeight: '700',
								alignItems: 'center',
								cursor: 'pointer',
								//	margin: window.innerWidth < 600 ? '5% 0 5% 30px' : '5% 0 5% 50px',
								justifyContent: 'center',
								display: 'flex',
							}}
								onClick={tooglePopup2}>
								<ButtonText style={{ color: theme.color, textDecoration: 'underline', fontSize: '12px' }}>Read More</ButtonText>
							</div>
						</div>


					</OptionsInnerContainer>

					{/* <OptionsInnerContainer >
						<BannerSmallTitle
							style={{
								margin: window.innerWidth > 600 ? '15px 0 0 15px' : '15px 0 15px 0px',
								textAlign: window.innerWidth < 600 && 'center',
							}}
						>
							UI-UX Designer <br />
						</BannerSmallTitle>
						<GeneralTextMedium style={{ margin: window.innerWidth > 600 ? '10px 0 0 15px' : '10px 0 0 40px', textAlign: window.innerWidth < 600 && '', }}>
							Pakistan
						</GeneralTextMedium>




						<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
							<BulletPoints style={{ backgroundColor: '#FF605C' }} />
							<GeneralTextRegular style={{ margin: window.innerWidth > 600 && '0px 0px 0px 20px' }} >Create original graphic designs</GeneralTextRegular>

						</Points>

						<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
							<BulletPoints style={{ backgroundColor: '#FFBD44' }} />
							<GeneralTextRegular style={{ margin: window.innerWidth > 600 && '0px 0px 0px 20px' }} >Gather & Evaluate user requirements</GeneralTextRegular>

						</Points>

						<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
							<BulletPoints style={{ backgroundColor: '#00CA4E' }} />
							<GeneralTextRegular style={{ margin: window.innerWidth > 600 && '0px 0px 0px 20px' }} >Identify & Troubleshoot UX problems</GeneralTextRegular>

						</Points>

						<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
							<BulletPoints style={{ backgroundColor: '#FF605C' }} />
							<GeneralTextRegular style={{ margin: window.innerWidth > 600 && '0px 0px 0px 20px' }} >Optimize UI Designs with essential tools</GeneralTextRegular>

						</Points>


						<div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', margin: window.innerWidth < 600 ? '5% 0 5% 0px' : '5% 0 5% 0px' }}>
							<Link
								to="scroll"
								spy={true}
								smooth={true}
								duration={500}
								style={{
									borderRadius: 20, width: '80px', height: '36px', color: 'white',
									backgroundColor: '#e14d1f',
									fontSize: '0.8rem',
									fontWeight: '700',
									alignItems: 'center',
									cursor: 'pointer',
									//margin: window.innerWidth < 600 ? '5% 0 5% 30px' : '5% 0 5% 15px',
									justifyContent: 'center',
									display: 'flex',
								}}
							>
								<GeneralTextMedium style={{ color: 'white' }}>Apply</GeneralTextMedium>
							</Link>
							<div style={{
								color: theme.color,
								fontSize: '0.8rem',
								fontWeight: '700',
								alignItems: 'center',
								cursor: 'pointer',
								justifyContent: 'center',
								display: 'flex',
							}}
								onClick={tooglePopup3}>
								<ButtonText style={{ color: theme.color, textDecoration: 'underline', fontSize: '12px' }}>Read More</ButtonText>
							</div>
						</div>

					</OptionsInnerContainer> */}

					{/* <OptionsInnerContainer >
						<BannerSmallTitle
							style={{
								margin: window.innerWidth > 600 ? '15px 0 0 15px' : '15px 0 15px 0px',
								textAlign: window.innerWidth < 600 && 'center',
							}}
						>
							SDR <br />
						</BannerSmallTitle>
						<GeneralTextMedium style={{ margin: window.innerWidth > 600 ? '10px 0 0 15px' : '10px 0 0 40px', textAlign: window.innerWidth < 600 && '', }}>
							Pakistan
						</GeneralTextMedium>





						<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
							<BulletPoints style={{ backgroundColor: '#FF605C' }} />
							<GeneralTextRegular style={{ margin: window.innerWidth > 600 && '0px 0px 0px 20px' }} >Identifying Business Opportunities</GeneralTextRegular>

						</Points>

						<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
							<BulletPoints style={{ backgroundColor: '#FFBD44' }} />
							<GeneralTextRegular style={{ margin: window.innerWidth > 600 && '0px 0px 0px 20px' }} >Expanding Customer Base In Target Regions</GeneralTextRegular>

						</Points>

						<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
							<BulletPoints style={{ backgroundColor: '#00CA4E' }} />
							<GeneralTextRegular style={{ margin: window.innerWidth > 600 && '0px 0px 0px 20px' }} >Communicating product information to clients</GeneralTextRegular>

						</Points>

						<Points style={{ margin: window.innerWidth > 600 ? '25px 0 0 15px' : '5% 30px 0px 30px' }}>
							<BulletPoints style={{ backgroundColor: '#FF605C' }} />
							<GeneralTextRegular style={{ margin: window.innerWidth > 600 && '0px 0px 0px 20px' }} >Cold/Warm Calling & Qualifying Leads</GeneralTextRegular>

						</Points>



						<div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', margin: window.innerWidth < 600 ? '5% 0 5% 0px' : '5% 0 5% 0px' }}>
							<Link
								to="scroll"
								spy={true}
								smooth={true}
								duration={500}
								style={{
									borderRadius: 20, width: '80px', height: '36px', color: 'white',
									backgroundColor: '#e14d1f',
									fontSize: '0.8rem',
									fontWeight: '700',
									alignItems: 'center',
									cursor: 'pointer',
									//margin: window.innerWidth < 600 ? '5% 0 5% 30px' : '5% 0 5% 15px',
									justifyContent: 'center',
									display: 'flex',
								}}
							>
								<GeneralTextMedium style={{ color: 'white' }}>Apply</GeneralTextMedium>
							</Link>
							<div style={{
								color: theme.color,

								fontSize: '0.8rem',
								fontWeight: '700',
								alignItems: 'center',
								cursor: 'pointer',
								//	margin: window.innerWidth < 600 ? '5% 0 5% 30px' : '5% 0 5% 50px',
								justifyContent: 'center',
								display: 'flex',
							}}
								onClick={tooglePopup4}>
								<ButtonText style={{ color: theme.color, textDecoration: 'underline', fontSize: '12px' }}>Read More</ButtonText>
							</div>
						</div>
					</OptionsInnerContainer> */}

					{/* popup for 1st job */}
					<Popup
						position='fixed'
						contentStyle={{ width: '70%', borderRadius: "10px", height: '71%', zIndex: 1, overflowY: 'scroll', padding: '20px', backgroundColor: theme.background }}
						open={showPopup1}
						closeOnDocumentClick
						onClose={() => setShowPopup1(false)}
					>
						<div style={{ borderRadius: 50, backgroundColor: 'red', position: 'fixed', top: window.innerWidth < 600 ? "14%" : "14%", right: window.innerWidth < 600 ? "13%" : "15%", zindex: 10000, cursor: 'pointer' }} onClick={() => setShowPopup1(false)}>
							<p style={{ padding: '1px 9px', color: 'white' }}>x</p>
						</div>
						<BannerMediumTitle >
							Snexus Private Limited
						</BannerMediumTitle>
						<BannerSmallTitle>
							SEO Content Writer
						</BannerSmallTitle>
						<SmallSemiTitle style={{ textAlign: window.innerWidth > 600 ? 'left' : 'center' }}>
							Job Description
						</SmallSemiTitle>
						<GeneralTextRegular style={{ margin: window.innerWidth < 600 && '0px' }}>
						We are looking for a capable and engaging technical writer for our ongoing projects.
						This is a full time, on-site job opportunity. 
						</GeneralTextRegular>
						<SmallSemiTitle style={{ textAlign: window.innerWidth > 600 ? 'left' : 'center' }}>Applicants must be:</SmallSemiTitle>
						<ul style={{ paddingLeft: '30px' }}>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular
									style={{
										margin: window.innerWidth < 600 && '0px',
										textAlign: window.innerWidth < 600 && 'left',
										textAlignLast: window.innerWidth < 600 && 'left'
									}}
								>
									Having an experience of at least one year in technical content writing.</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Efficient in SEO Optimized content</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Address all malware attacks and deal with security-related issues</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Experienced in working on Service based sites</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Able to write at least 2000 words a day</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Comfortable in writing on multiple local industries</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Able to think 'outside the box'</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Able to produce 100% original work</GeneralTextRegular>
							</li>
						</ul>


						{/* <SmallSemiTitle style={{ textAlign: window.innerWidth > 600 ? 'left' : 'center' }}>Skills and Qualifications</SmallSemiTitle> */}
						<ul style={{ paddingLeft: '30px' }}>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Able to write content in all perspectives (1st & 3rd person)</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Able to thoroughly research written work to ensure all information included is factually accurate</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Experienced in multi-tasking and can manage and deliver multiple pieces at once</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Able to work effectively with a team or alone</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Having an excellent eye for detail</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Be able to deliver articles, posts, blogs, web-content without spelling or grammatical errors</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Be fluent in spoken and written English</GeneralTextRegular>
							</li>
							
						</ul>
					</Popup>

					{/* popup for 2nd job */}
					<Popup
						position='fixed'
						contentStyle={{ width: '70%', borderRadius: "10px", height: '72%', zIndex: 1, overflowY: 'scroll', padding: '20px', backgroundColor: theme.background }}
						open={showPopup2}
						closeOnDocumentClick
						onClose={() => setShowPopup2(false)}
					>
						<div style={{ borderRadius: 50, backgroundColor: 'red', position: 'fixed', top: window.innerWidth < 600 ? "14%" : "14%", right: window.innerWidth < 600 ? "13%" : "15%", zindex: 10000, cursor: 'pointer' }} onClick={() => setShowPopup2(false)}>
							<p style={{ padding: '1px 9px', color: 'white' }}>x</p>
						</div>
						<BannerMediumTitle >
							Snexus Private Limited
						</BannerMediumTitle>
						<BannerSmallTitle>
							SEO Executive Job Description
						</BannerSmallTitle>
						<SmallSemiTitle style={{ textAlign: window.innerWidth > 600 ? 'left' : 'center' }}>
							Job Description
						</SmallSemiTitle>
						<GeneralTextRegular style={{ margin: window.innerWidth < 600 && '0px' }}>
							We are looking for a result-driven SEO Executive who will beresponsible for developing
							optimized web content. The SEO Executive's responsibilitiesinclude working closely with the
							marketing and web development team to achieve SEOobjectives, gauging the success of SEO and
							ROI, and helping with the preservation of thewebsite's architecture to guarantee user approachability.
							<br />
							<br />
							To be prosperous as an SEO Executive, you should have vigorous copywriting andanalytical
							skills, familiarity with coding techniques, and a commitment to persistentlyimproving on key
							skills. The right candidate for the position of SEO Executive should haveoutstanding knowledge
							of SEO, enthusiasm for the industry and time management skills.
						</GeneralTextRegular>
						<SmallSemiTitle style={{ textAlign: window.innerWidth > 600 ? 'left' : 'center' }}>Responsibilities</SmallSemiTitle>
						<ul style={{ paddingLeft: '30px' }}>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Leading on-site and off-site analysis of web SEO competition.</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Using Google Analytics to conduct performance reports regularly.</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Creating high-quality and quantifiable SEO content.</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Supporting in blog content.</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular
									style={{
										margin: window.innerWidth < 600 && '0px',
										textAlign: window.innerWidth < 600 && 'left',
										textAlignLast: window.innerWidth < 600 && 'left'
									}}>Leading keyword research and optimization of content.</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Keeping up-to-date with expansions in SEM and updated SEO practices, e.g. BERT,PENGUIN, etc.</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Possess excellent collaborative and team-work skills and a growth-oriented attitude.</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Proficiency in communication skills.</GeneralTextRegular>
							</li>
						</ul>


						<SmallSemiTitle style={{ textAlign: window.innerWidth > 600 ? 'left' : 'center' }}>Skills and Qualifications</SmallSemiTitle>
						<ul style={{ paddingLeft: '30px' }}>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Marketing degree or related.</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Wide experience of minimum 2 years in SEO.</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Working knowledge of Google Analytics.</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Familiarity with coding techniques.</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Thorough understanding of web design and site structures.</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Good knowledge of back link strategies and analysis</GeneralTextRegular>
							</li>

						</ul>
					</Popup>

					{/* popup for 3rd job */}
					<Popup
						position='fixed'
						contentStyle={{ width: '70%', borderRadius: "10px", height: '70%', zIndex: 1, overflowY: 'scroll', padding: '20px', backgroundColor: theme.background }}
						open={showPopup3}
						closeOnDocumentClick
						onClose={() => setShowPopup3(false)}
					>
						<div style={{ borderRadius: 50, backgroundColor: 'red', position: 'fixed', top: window.innerWidth < 600 ? "14%" : "14%", right: window.innerWidth < 600 ? "13%" : "15%", zindex: 10000, cursor: 'pointer' }} onClick={() => setShowPopup3(false)}>
							<p style={{ padding: '1px 9px', color: 'white' }}>x</p>
						</div>
						<BannerMediumTitle >
							Snexus Private Limited
						</BannerMediumTitle>
						<BannerSmallTitle>
							UI-UX & Graphic Designer
						</BannerSmallTitle>
						<SmallSemiTitle style={{ textAlign: window.innerWidth > 600 ? 'left' : 'center' }}>
							Job Description
						</SmallSemiTitle>
						<GeneralTextRegular style={{ margin: window.innerWidth < 600 && '0px' }}>
							Snexus Private Limited is seeking an experienced and creative UI-UX & GraphicDesigner. As UI-UX Designer, you will be responsible for delivering the best onlineuser experience, which makes your role extremely important for our success andcertifying customer satisfaction and fidelity.
							<br />
							<br />
							You will be designing ideas using various methods and latest technology. You will bedesigning graphic user interface elements, like menus, tabs, forms, and widgets andwork with a range of print and web projects, such as print ads, logo design, landingpages’ design, collateral material, and web graphics.
							<br />
							<br />
							Qualified candidates will possess strong graphic design skills, be detail-oriented,self-driven and have the ability to consolidate and execute tasks in a fast-pacedenvironment.
						</GeneralTextRegular>
						<SmallSemiTitle style={{ textAlign: window.innerWidth > 600 ? 'left' : 'center' }}>Responsibilities</SmallSemiTitle>
						<ul style={{ paddingLeft: '30px' }}>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular
									style={{
										margin: window.innerWidth < 600 && '0px',
										textAlign: window.innerWidth < 600 && 'left',
										textAlignLast: window.innerWidth < 600 && 'left'
									}}>Plan and implement new designs</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular
									style={{
										margin: window.innerWidth < 600 && '0px',
										textAlign: window.innerWidth < 600 && 'left',
										textAlignLast: window.innerWidth < 600 && 'left'
									}}>Optimize existing user interface designs</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular
									style={{
										margin: window.innerWidth < 600 && '0px',
										textAlign: window.innerWidth < 600 && 'left',
										textAlignLast: window.innerWidth < 600 && 'left'
									}}>Identify and Troubleshoot UX problems</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Test for creativity and experience</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Communicate with clients to understand their business goals and objectives</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Develop technical and business requirements and always strive to deliverintuitive and user-centered solutions</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Combine creativity with an awareness of the design elements</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Create prototypes for new product ideas</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Test new ideas before implementing</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Conduct an ongoing user research</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Assist other designers in the team with design of persuasive web graphics,reviews, flyers, posters, invitations and marketing materials as needed</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Retouch and re-design images and adhere to project guidelines and deadlines</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Use graphic design software and work with a wide variety of media</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Update website with text, images, logos, video etc.</GeneralTextRegular>
							</li>

						</ul>


						<SmallSemiTitle style={{ textAlign: window.innerWidth > 600 ? 'left' : 'center' }}>Skills and Qualifications</SmallSemiTitle>
						<ul style={{ paddingLeft: '30px' }}>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Preferably, UI-UX and Graphic design major or enrolled in a related degree program</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>At least 3 years of experience in the related field performing a similar role</GeneralTextRegular>
							</li>

							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Compelling portfolio of graphic design work</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Strong creative and analytical skills and a commendable aesthetic sense</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Exceptional written and verbal communication, strong editing skills</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Knowledge of digital media software – Illustrator and Photoshop, Adobe InDesign,Acrobat and Dreamweaver and other graphic design software(s)</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Knowledge of video editing software – iMovie, Final Cut, or Windows Live MovieMaker is a plus </GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>WordPress experience and self-motivated to bring new ideas</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Ability to contribute individually, and participate in cross-functional teams</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Some knowledge of Usability Factors in Human Computer Interaction.</GeneralTextRegular>
							</li>

						</ul>
					</Popup>

					{/* popup for 4th job */}
					<Popup
						position='fixed'
						contentStyle={{ width: '70%', borderRadius: "10px", height: '71%', zIndex: 1, overflowY: 'scroll', padding: '20px', backgroundColor: theme.background }}
						open={showPopup4}
						closeOnDocumentClick
						onClose={() => setShowPopup4(false)}
					>
						<div style={{ borderRadius: 50, backgroundColor: 'red', position: 'fixed', top: window.innerWidth < 600 ? "14%" : "14%", right: window.innerWidth < 600 ? "13%" : "15%", zindex: 10000, cursor: 'pointer' }} onClick={() => setShowPopup4(false)}>
							<p style={{ padding: '1px 9px', color: 'white' }}>x</p>
						</div>
						<BannerMediumTitle >
							Snexus Private Limited
						</BannerMediumTitle>
						<BannerSmallTitle>
							SDR-Sales Development Representative
						</BannerSmallTitle>
						<SmallSemiTitle style={{ textAlign: window.innerWidth > 600 ? 'left' : 'center' }}>
							Job Description
						</SmallSemiTitle>
						<GeneralTextRegular style={{ margin: window.innerWidth < 600 && '0px' }}>
							Snexus is seeking an energetic Sales Development Executive, who would like to be a part of a growing enterprise solution company.
							<br />
							<br />
							Your job as a Sales Development Representativeis to identify sales leads, pitch goods or services to new clients, and maintain a good working relationship with new contacts. This is a pure prospecting role, heavy outbound calling to prospective clients to close the deals.This position revolves around good communication and so whatever business you work in your duties are likely to include.
						</GeneralTextRegular>
						<SmallSemiTitle style={{ textAlign: window.innerWidth > 600 ? 'left' : 'center' }}>Responsibilities</SmallSemiTitle>
						<ul style={{ paddingLeft: '30px' }}>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Following up new business opportunities and setting up meetings</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Planning and preparing presentations (say hello to PowerPoint)</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Communicating new product developments to prospective clients</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Overseeing the development of marketing literature</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Providing management with feedback</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Expand our customer base by identifying business opportunities in target regions</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Qualify the incoming leads generated for appointments with companies and business owners to provide quick response times and meet their needs</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Contact prospects after the initial meeting via phone calls, email, and other forms of communication to add them to the sales pipeline and cultivate marketing qualified leads</GeneralTextRegular>
							</li>


						</ul>


						<SmallSemiTitle style={{ textAlign: window.innerWidth > 600 ? 'left' : 'center' }}>Skills and Qualifications</SmallSemiTitle>
						<ul style={{ paddingLeft: '30px' }}>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Excellent interpersonal and English communication skills</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Good knowledge of digital marketing</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>0 - 6 months of Call Centre Experience</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Excellent Negotiating skills</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Should think like an entrepreneur</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Prior experience in Digital Marketing and website development Sales would be a Plus</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Positive attitude</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>An organized and strong systems builder</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Problem solver</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Strong social skills</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Team player</GeneralTextRegular>
							</li>
							<li style={{ color: theme.color }}>
								<GeneralTextRegular style={{
									margin: window.innerWidth < 600 && '0px',
									textAlign: window.innerWidth < 600 && 'left',
									textAlignLast: window.innerWidth < 600 && 'left'
								}}>Fact and task-oriented</GeneralTextRegular>
							</li>
						</ul>
					</Popup>
				</OptionsContainer>

			</FullWidthContainerLead>
			{/* Catalyst and long tern growth container */}
			<CatalystContainer >
				<MediumSemiTitle>Catalysts for positive & long-term Growth</MediumSemiTitle>
				<GeneralTextMedium style={{ marginTop: '10px', textAlign: 'center' }}>
					Do you want to find a new challenge in the best working environment with the latest
					technologies? Use our career section to browse a huge number of vacancies on all job types,
					locations, and levels. Apply directlyonline through our system that will match your profile
					with the latest opportunities available.
				</GeneralTextMedium>
				{/* This is just for Mobile View */}
				<Carousel style={{ marginBottom: '5%', display: window.innerWidth > 600 && 'none', flexDirection: 'column', alignItems: window.innerWidth > 600 ? 'flex-start' : 'center' }} itemsToShow={1} showArrows={false} >
					<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '10% 30px 0px 30px', alignItems: 'center', justifyContent: 'space-around' }}>
						<TechnologyContainer>
							<TechnologyIconImageContainer
								style={{ backgroundColor: '#fcb512', marginBottom: '7px' }}
							>
								<MeaningfulWork style={{ height: '50px', width: '50px' }} />
							</TechnologyIconImageContainer>
							<IconsText style={{ textAlign: 'center' }}>
								Meaningful Work
							</IconsText>
						</TechnologyContainer>





						<TechnologyContainer>
							<TechnologyIconImageContainer
								style={{ backgroundColor: '#ee5121', marginBottom: '7px' }}
							>
								<TeamEvents style={{ height: '50px', width: '50px' }} />
							</TechnologyIconImageContainer>
							<IconsText style={{ textAlign: 'center' }}>
								Team Events
							</IconsText>
						</TechnologyContainer>




					</view>

					<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '10% 30px 0px 30px', alignItems: 'center', justifyContent: 'space-around' }}>
						<TechnologyContainer>
							<TechnologyIconImageContainer
								style={{ backgroundColor: '#4643aa', marginBottom: '7px' }}
							>
								<Empower style={{ height: '50px', width: '50px' }} />
							</TechnologyIconImageContainer>
							<IconsText style={{ textAlign: 'center' }}>
								Empower
							</IconsText>
						</TechnologyContainer>
						<TechnologyContainer>
							<TechnologyIconImageContainer
								style={{ backgroundColor: '#69a741', marginBottom: '7px' }}
							>
								<ContinuousLearning style={{ height: '50px', width: '50px' }} />
							</TechnologyIconImageContainer>
							<IconsText style={{ textAlign: 'center' }}>
								Continuous Learning
							</IconsText>
						</TechnologyContainer>

					</view>



					<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '10% 30px 0px 30px', alignItems: 'center', justifyContent: 'space-around' }}>
						<TechnologyContainer>
							<TechnologyIconImageContainer
								style={{ backgroundColor: '#735DF0', marginBottom: '7px' }}
							>
								<WinOrLearn style={{ height: '50px', width: '50px' }} />
							</TechnologyIconImageContainer>
							<IconsText style={{ textAlign: 'center' }}>
								Win Or Learn
							</IconsText>
						</TechnologyContainer>




						<TechnologyContainer>
							<TechnologyIconImageContainer
								style={{ backgroundColor: '#CF7C5E', marginBottom: '7px' }}
							>
								<WorkBuddy style={{ height: '50px', width: '50px' }} />
							</TechnologyIconImageContainer>
							<IconsText style={{ textAlign: 'center' }}>
								Work Buddy
							</IconsText>
						</TechnologyContainer>

					</view>

					<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '10% 30px 0px 30px', alignItems: 'center', justifyContent: 'space-around' }}>
						<TechnologyContainer>
							<TechnologyIconImageContainer
								style={{ backgroundColor: '#AA2E81', marginBottom: '7px' }}
							>
								<CareerProgression style={{ height: '50px', width: '50px' }} />
							</TechnologyIconImageContainer>
							<IconsText style={{ textAlign: 'center' }}>
								Career<br /> Progression
							</IconsText>
						</TechnologyContainer>



						<TechnologyContainer>
							<TechnologyIconImageContainer
								style={{ backgroundColor: '#EF7617', marginBottom: '7px' }}
							>
								<MedicalInsurance style={{ height: '50px', width: '50px' }} />
							</TechnologyIconImageContainer>
							<IconsText style={{ textAlign: 'center' }}>
								Medical<br /> Insurance
							</IconsText>
						</TechnologyContainer>

					</view>

					<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '10% 30px 0px 30px', alignItems: 'center', justifyContent: 'space-around' }}>
						<TechnologyContainer>
							<TechnologyIconImageContainer
								style={{ backgroundColor: '#5FAAE2', marginBottom: '7px' }}
							>
								<Snacks style={{ height: '50px', width: '50px' }} />
							</TechnologyIconImageContainer>
							<IconsText style={{ textAlign: 'center' }}>
								Snacks
							</IconsText>
						</TechnologyContainer>



						<TechnologyContainer>
							<TechnologyIconImageContainer
								style={{ backgroundColor: '#E73B1A', marginBottom: '7px' }}
							>
								<Play style={{ height: '50px', width: '50px' }} />
							</TechnologyIconImageContainer>
							<IconsText style={{ textAlign: 'center' }}>
								Play
							</IconsText>
						</TechnologyContainer>

					</view>

					<view style={{ width: '100%', flexDirection: 'row', display: 'flex', margin: '10% 30px 0px 30px', alignItems: 'center', justifyContent: 'space-around' }}>

						<TechnologyContainer>
							<TechnologyIconImageContainer
								style={{ backgroundColor: '#FEC112', marginBottom: '7px' }}
							>
								<WorkLifeBalance style={{ height: '50px', width: '50px' }} />
							</TechnologyIconImageContainer>
							<IconsText style={{ textAlign: 'center' }}>
								Work-Life Balance
							</IconsText>
						</TechnologyContainer>



						<TechnologyContainer>
							<TechnologyIconImageContainer
								style={{ backgroundColor: '#CF7C5E', marginBottom: '7px' }}
							>
								<Machine style={{ height: '50px', width: '50px' }} />
							</TechnologyIconImageContainer>
							<IconsText style={{ textAlign: 'center' }}>
								Machine
							</IconsText>
						</TechnologyContainer>

					</view>


				</Carousel>
				{/* this is just for lap top views */}
				<ValuesContainer style={{ display: window.innerWidth < 600 && 'none' }}>
					<TechnologyContainer
						style={{
							marginRight: 0,
							marginBottom: '15px',
						}}
					>
						<TechnologyIconImageContainer
							style={{ backgroundColor: '#fcb512', marginBottom: '7px' }}
						>
							<MeaningfulWork style={{ height: '50px', width: '50px' }} />
						</TechnologyIconImageContainer>
						<IconsBoldTitle style={{ textAlign: 'center' }}>
							Meaningful Work
						</IconsBoldTitle>
						<GeneralTextMedium style={{ textAlign: 'center', marginTop: '15px' }}>
							We’re at our best when we know the challenges we’re working towards.
						</GeneralTextMedium>
					</TechnologyContainer>
					<TechnologyContainer
						style={{
							marginRight: 0,
							marginBottom: 0,
						}}
					>
						<TechnologyIconImageContainer
							style={{ backgroundColor: '#ee5121', marginBottom: '7px' }}
						>
							<TeamEvents style={{ height: '50px', width: '50px' }} />
						</TechnologyIconImageContainer>
						<IconsBoldTitle style={{ textAlign: 'center' }}>
							Team Events
						</IconsBoldTitle>
						<GeneralTextMedium style={{ textAlign: 'center', marginTop: '15px' }}>
							Good teams are built on good friendships. Capturing the fun at our regular team events.
						</GeneralTextMedium>
					</TechnologyContainer>
					<TechnologyContainer
						style={{
							marginRight: 0,
							marginBottom: 0,
						}}
					>
						<TechnologyIconImageContainer
							style={{ backgroundColor: '#4643aa', marginBottom: '7px' }}
						>
							<Empower style={{ height: '50px', width: '50px' }} />
						</TechnologyIconImageContainer>
						<IconsBoldTitle style={{ textAlign: 'center' }}>
							Empower
						</IconsBoldTitle>
						<GeneralTextMedium style={{ textAlign: 'center', marginTop: '15px' }}>
							Let’s get to work—together. A community of people who dream of making a difference.
						</GeneralTextMedium>
					</TechnologyContainer>
					<TechnologyContainer
						style={{
							marginRight: 0,
							marginBottom: 0,
						}}
					>
						<TechnologyIconImageContainer
							style={{ backgroundColor: '#69a741', marginBottom: '7px' }}
						>
							<ContinuousLearning style={{ height: '50px', width: '50px' }} />
						</TechnologyIconImageContainer>
						<IconsBoldTitle style={{ textAlign: 'center' }}>
							Continuous Learning
						</IconsBoldTitle>
						<GeneralTextMedium style={{ textAlign: 'center', marginTop: '15px' }}>
							This is a continuous learning lab where you experiment and develop new products.
							{/* These ideas are brought to life with the help of teamwork. */}
						</GeneralTextMedium>
					</TechnologyContainer>
				</ValuesContainer>

				<ValuesContainer style={{ display: window.innerWidth < 600 && 'none' }}>
					<TechnologyContainer
						style={{
							marginRight: 0,
							marginBottom: 0,
						}}
					>
						<TechnologyIconImageContainer
							style={{ backgroundColor: '#735DF0', marginBottom: '7px' }}
						>
							<WinOrLearn style={{ height: '50px', width: '50px' }} />
						</TechnologyIconImageContainer>
						<IconsBoldTitle style={{ textAlign: 'center' }}>
							Win Or Learn
						</IconsBoldTitle>
						<GeneralTextMedium style={{ textAlign: 'center', marginTop: '15px' }}>
							Win or learn, and always keep striving. Take what you need and move forward.
						</GeneralTextMedium>
					</TechnologyContainer>

					<TechnologyContainer
						style={{
							marginRight: 0,
							marginBottom: 0,
						}}
					>
						<TechnologyIconImageContainer
							style={{ backgroundColor: '#CF7C5E', marginBottom: '7px' }}
						>
							<WorkBuddy style={{ height: '50px', width: '50px' }} />
						</TechnologyIconImageContainer>
						<IconsBoldTitle style={{ textAlign: 'center' }}>
							Work Buddy
						</IconsBoldTitle>
						<GeneralTextMedium style={{ textAlign: 'center', marginTop: '15px' }}>
							The guys at work are your mileage. Get to know your coworkers and build lasting relationships.
						</GeneralTextMedium>
					</TechnologyContainer>

					<TechnologyContainer
						style={{
							marginRight: 0,
							marginBottom: 0,
						}}
					>
						<TechnologyIconImageContainer
							style={{ backgroundColor: '#AA2E81', marginBottom: '7px' }}
						>
							<CareerProgression style={{ height: '50px', width: '50px' }} />
						</TechnologyIconImageContainer>
						<IconsBoldTitle style={{ textAlign: 'center' }}>
							Career Progression
						</IconsBoldTitle>
						<GeneralTextMedium style={{ textAlign: 'center', marginTop: '15px' }}>
							Vaulting over challenges to reach new heights is a big part of my job here.
						</GeneralTextMedium>
					</TechnologyContainer>

					<TechnologyContainer
						style={{
							marginRight: 0,
							marginBottom: 0,
						}}
					>
						<TechnologyIconImageContainer
							style={{ backgroundColor: '#EF7617', marginBottom: '7px' }}
						>
							<MedicalInsurance style={{ height: '50px', width: '50px' }} />
						</TechnologyIconImageContainer>
						<IconsBoldTitle style={{ textAlign: 'center' }}>
							Medical Insurance
						</IconsBoldTitle>
						<GeneralTextMedium style={{ textAlign: 'center', marginTop: '15px' }}>
							We wish you don’t have to use it but we offer the coverage.
						</GeneralTextMedium>
					</TechnologyContainer>
				</ValuesContainer>

				<ValuesContainer style={{ display: window.innerWidth < 600 && 'none' }}>
					<TechnologyContainer
						style={{
							marginRight: 0,
							marginBottom: 0,
						}}
					>
						<TechnologyIconImageContainer
							style={{ backgroundColor: '#5FAAE2', marginBottom: '7px' }}
						>
							<Snacks style={{ height: '50px', width: '50px' }} />
						</TechnologyIconImageContainer>
						<IconsBoldTitle style={{ textAlign: 'center' }}>
							Snacks
						</IconsBoldTitle>
						<GeneralTextMedium style={{ textAlign: 'center', marginTop: '15px' }}>
							Life at work isn’t complete without the good snacks to go with it.
						</GeneralTextMedium>
					</TechnologyContainer>

					<TechnologyContainer
						style={{
							marginRight: 0,
							marginBottom: 0,
						}}
					>
						<TechnologyIconImageContainer
							style={{ backgroundColor: '#E73B1A', marginBottom: '7px' }}
						>
							<Play style={{ height: '50px', width: '50px' }} />
						</TechnologyIconImageContainer>
						<IconsBoldTitle style={{ textAlign: 'center' }}>
							Play
						</IconsBoldTitle>
						<GeneralTextMedium style={{ textAlign: 'center', marginTop: '15px' }}>
							The workspace doesn’t have to be boring. Light up your mood with somegaming in the office.
						</GeneralTextMedium>
					</TechnologyContainer>

					<TechnologyContainer
						style={{
							marginRight: 0,
							marginBottom: 0,
						}}
					>
						<TechnologyIconImageContainer
							style={{ backgroundColor: '#FEC112', marginBottom: '7px' }}
						>
							<WorkLifeBalance style={{ height: '50px', width: '50px' }} />
						</TechnologyIconImageContainer>
						<IconsBoldTitle style={{ textAlign: 'center' }}>
							Work-Life Balance
						</IconsBoldTitle>
						<GeneralTextMedium style={{ textAlign: 'center', marginTop: '15px' }}>
							We offer paid holidays and the option to work from home if the need arises.
						</GeneralTextMedium>
					</TechnologyContainer>

					<TechnologyContainer
						style={{
							marginRight: 0,
							marginBottom: 0,
						}}
					>
						<TechnologyIconImageContainer
							style={{ backgroundColor: '#CF7C5E', marginBottom: '7px' }}
						>
							<Machine style={{ height: '50px', width: '50px' }} />
						</TechnologyIconImageContainer>
						<IconsBoldTitle style={{ textAlign: 'center' }}>
							Machine
						</IconsBoldTitle>
						<GeneralTextMedium style={{ textAlign: 'center', marginTop: '15px' }}>
							Juggle more at work with fast-running machines.
						</GeneralTextMedium>
					</TechnologyContainer>
				</ValuesContainer>
			</CatalystContainer>

			<CvContainer id='scroll'>
				<CvMainContainer>
					<CvMainContainersInnerContainer style={{ paddingTop: window.innerWidth > 600 ? '5%' : '5%' }}>
						<MediumSemiTitle style={{ textAlign: window.innerWidth > 600 && 'left' }}>
							Sky's the limit!
							<br />
							Accelerate your career
							<br />
							in the right direction
						</MediumSemiTitle>



						{/* <div >
							<form onSubmit={sendEmail}>

								<input type='text' placeholder="full name" name="fullName"/>
								<input type='email' placeholder="full name" name="email"/>
								<input  type="file" class='cvFile' name="file" accept="application/pdf"/>
								<input type="submit" value="Send email"></input>
							</form>

						</div> */}
						<form onSubmit={sendEmail}>

							<InputFieldLabel style={{ justifyContent: window.innerWidth < 600 && 'center' }}>
								<SmallSemiTitle style={{ fontSize: '18px', marginRight: window.innerWidth < 600 && '0px' }}>
									Full Name
								</SmallSemiTitle>
								<SmallSemiTitle style={{ color: "red", marginLeft: window.innerWidth < 600 && '0px' }}>*</SmallSemiTitle>
							</InputFieldLabel>
							<Input type="text" name="fullName" value={fullName} onChange={e => setFullName(e.target.value)} id="nameCheck" style={{ marginLeft: window.innerWidth < 600 && '8%' }} />
							{fullName === null && <ErrorText>Please Enter The Full Name</ErrorText>}


							<InputFieldLabel style={{ marginTop: '20px', justifyContent: window.innerWidth < 600 && 'center' }}>
								<SmallSemiTitle style={{ fontSize: '18px', marginRight: window.innerWidth < 600 && '0', textAlign: window.innerWidth < 600 && 'left' }}>
									Your Email{' '}
								</SmallSemiTitle>
								<SmallSemiTitle style={{ color: 'red', marginLeft: window.innerWidth < 600 && '0px' }}>*</SmallSemiTitle>
							</InputFieldLabel>
							<Input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} id="emailCheck" style={{ marginLeft: window.innerWidth < 600 && '8%' }} />
							{email === null && <ErrorText>Please Enter The Email</ErrorText>}

							<InputFieldLabel style={{ marginTop: '20px', justifyContent: window.innerWidth < 600 && 'center' }}>
								<SmallSemiTitle style={{ fontSize: '18px', marginRight: window.innerWidth < 600 && '0px' }}>
									Contact Number
								</SmallSemiTitle>
								<SmallSemiTitle style={{ color: "red", marginLeft: window.innerWidth < 600 && '0px' }}>*</SmallSemiTitle>
							</InputFieldLabel>
							<Input type="tel" name="contactNumber" value={contactNumber} onChange={e => setContactNumber(e.target.value)} id="contactNumberCheck" style={{ marginLeft: window.innerWidth < 600 && '8%' }} />
							{contactNumber === null && <ErrorText>Please Enter The Contact Number</ErrorText>}

							<InputFieldLabel style={{ marginTop: '20px', justifyContent: window.innerWidth < 600 && 'center' }}>
								<SmallSemiTitle style={{ fontSize: '18px', marginRight: window.innerWidth < 600 && '0', textAlign: window.innerWidth < 600 && 'left' }}>
									Expertise{' '}
								</SmallSemiTitle>
								<SmallSemiTitle style={{ color: 'red', marginLeft: window.innerWidth < 600 && '0px' }}>*</SmallSemiTitle>
							</InputFieldLabel>


							<DropDownContainer style={{ cursor: 'pointer', marginLeft: window.innerWidth < 600 && '8%' }} >
								<DropDownHeader onClick={toggleDropDown} id="expertiseCheck">
									{selectedDropDownValue || 'Select'}
									{!showDropDown && (
										<FaAngleDown
											size={'17px'}
											style={{ float: 'right', marginTop: '5px' }}
											color={'black'}
										/>
									)}
									{showDropDown && (
										<FaAngleUp
											size={'17px'}
											style={{ float: 'right', marginTop: '5px' }}
											color={'black'}
										/>
									)}
								</DropDownHeader>
								{showDropDown && (
									<DropDownListContainer >
										<DropDownList  >
											{dropDownValues.map((value) => (
												<ListItem
													onClick={onDropDownValueClicked(value)}
													key={Math.random()}
												>
													{value}
												</ListItem>
											))}
										</DropDownList>
									</DropDownListContainer>
								)}
							</DropDownContainer>
							{selectedDropDownValue === null && <ErrorText>Please Select</ErrorText>}

							<input type='text' placeholder="experties" name="selectedDropDownValue" value={selectedDropDownValue} style={{ display: 'none' }} />

							{/* <select style={{
								width: window.innerWidth > 600 ? '502px' : '300px', height: '52px', margin: '10px 0',
								border: "1px solid #cdcdcd"
							}} name="selectedDropDownValue" id="cars" placeholder="Select" value={selectedDropDownValue} onChange={}>
								<option value="Software Engineer" style={{ fontSize: '14px' }}>Software Engineer</option>
								<option value="Designing and UI/UX">Designing and UI/UX</option>
								<option value="Business Development and Sales">Business Development and Sales</option>
								<option value="Content Writing and Marketing">Content Writing and Marketing</option>
								<option value="Human Resource">Human Resource</option>
								<option value="Accounts and Finance">Accounts and Finance</option>
								<option value="Other">Other</option>
							</select>
							{selectedDropDownValue === null && <ErrorText>Please Select</ErrorText>} */}




							<JustToMakeRow style={{ marginLeft: window.innerWidth < 600 && '8%' }}>
								<label class="custom-file-upload">
									<input type="file" class='cvFile' name="file" onChange={(e) => setFilesToSend(e.target.files)} accept=".pdf,doc,docx" />
									CV/Resume
								</label>



								<GeneralTextMedium
									style={{
										margin: '20px 0',
										padding: window.innerWidth > 600 ? '15px 25px' : '10px 20px',
										fontWeight: 'bold',
									}}
								>
									Allowed type(s):&nbsp;&nbsp; .pdf, .doc, .docx
								</GeneralTextMedium>
							</JustToMakeRow>

							{filesTosend !== "" && filesTosend !== null &&
								<GeneralTextMedium style={{ marginBottom: window.innerWidth < 600 ? '5%' : '10px' }}>
									Your file is uploaded successfully
								</GeneralTextMedium>
							}
							{filesTosend === null &&
								<ErrorText style={{ marginBottom: window.innerWidth < 600 ? '5%' : '10px' }}>
									Please upload the Cv/Resume
								</ErrorText>
							}



							<input style={{
								borderRadius: 23,
								marginTop: window.innerWidth > 600 ? '20px' : '0%',
								marginBottom: window.innerWidth < 600 && '0',
								color: "white",
								backgroundColor: '#e14d1f',
								cursor: 'pointer',
								textDecoration: 'none',
								display: 'flex',
								//padding: 0.5rem 1rem;
								fontWeight: '700',
								alignItems: 'center',
								width: '113px',
								height: '46px',
								justifyContent: 'center',
								border: 'none',
								alignSelf: window.innerWidth < 600 && 'center',
								margin: window.innerWidth < 600 && 'auto'

							}}
								type="submit" value="Submit"></input>

							{verification &&
								<GeneralTextMedium style={{ marginTop: window.innerWidth < 600 ? '5%' : '10px' }}>
									Your message sent successfully
								</GeneralTextMedium>
							}


						</form>


						{/* <UploadButtonContainer>
							<div className="files">
								<Files
									className="files-dropzone"
									onChange={onFilesChange}
									// onChange={(data)=>console.log('data returned: ',data)}
									onError={onFilesError}
									accepts={['.doc', '.pdf', '.docx']}
									multiple={false}
									maxFiles={1}
									maxFileSize={10000000}
									minFileSize={0}
									clickable
								>
									<JustToMakeRow >
										<UploadButton id="cvCheck"> <GeneralTextMedium style={{ color: 'black', margin: '5% 0' }}> CV/Resume</GeneralTextMedium></UploadButton>
										<GeneralTextMedium
											style={{
												margin: '20px 0',
												padding: window.innerWidth > 600 ? '15px 25px' : '10px 20px',
												fontWeight: 'bold',
											}}
										>
											Allowed type(s):&nbsp;&nbsp; .pdf, .doc, .docx
										</GeneralTextMedium>
									</JustToMakeRow>
									{filesTosend !== "" && filesTosend !== null &&
										<GeneralTextMedium>
											Your file is uploaded successfully
										</GeneralTextMedium>
									}
									{filesTosend === null &&
										<ErrorText style={{ marginBottom: window.innerWidth < 600 && '5%' }}>
											Please upload the Cv/Resume
										</ErrorText>
									}
								</Files>
							</div>
						</UploadButtonContainer> */}

						{/* <SubmitButton
							style={{
								borderRadius: 23,
								marginTop: window.innerWidth > 600 ? '30px' : '0%',
								marginBottom: window.innerWidth < 600 && '0',
							}}
							onClick={() => onSubmitForm()}
						>
							<GeneralTextMedium style={{ color: 'white' }}>Submit</GeneralTextMedium>

						</SubmitButton> */}

					</CvMainContainersInnerContainer>
					<CvImageContainer >
						<CvSectionImage />
					</CvImageContainer>
				</CvMainContainer>
			</CvContainer>

		</HTML.FullWidthContainer >
	);
};

//HTML
const BannerContainer = styled.div`
	//background-image: url(${(props) => props.theme.bannerBackground});
	//background-color: ${(props) => props.theme.caseStudiesBackground};
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
	//justify-content: middle;
	flex-direction: column;
	display: flex;
	@media (max-width: 600px) {
		width:100%;
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
`;
const MainBannerImage = styled.div`
	background-image: url(${(props) => props.theme.careerBanner});
	width: 580px;
	height: 350px;
	background-size: cover;
	display: flex;
	overflow: hidden;
	@media (max-width: 600px) {
		
		width: 350px;
	height: 210px;
	}

`;
//Lead the Future container
const FullWidthContainerLead = styled.div`
	padding: 3% 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
    align-item:center:
	height: 100%;
	width: 100%;
	background-color: ${(props) => props.theme.caseStudiesBackground};
`;
const LeadContainer = styled.div`
	max-width: 1170px;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	align-self:center;
	@media (max-width: 600px) {
		display:block;
		width:100%;
	}
`;


const OptionsContainer = styled.div`
	max-width: 1170px;
	width: 100%;
	height: 100%;
	margin: 60px 0;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-self:center;
	@media (max-width: 600px) {
		display:block;
		width:100%;
		align-self:center;
		margin:0 30px;
	}
`;

const OptionsInnerContainer = styled.div`
	height: 100%;
	width: 280px;
	display: flex;
	background-color: ${(props) => props.theme.OptionsContainer};
	border: 2px solid;
	border-radius: 10px;
	border-color: #d7d7d7;
	align-item: center;
	flex-direction: column;
	
	&:hover {
		background-color:#fdb514;
	}

	@media (max-width: 600px) {
		margin:2% 0;
		
		display:inline-flex;
	}
	
`;

const BulletPoints = styled.div`

	width:10px;
	height:10px;
	margin-top:5px;
	margin-right:10px;
	border-radius:20px;
	position:absolute;
	

@media (max-width: 600px) {
	margin-left:-10px;
	position:absolute;

}
`;



const Points = styled.div`
	display:flex;
	flex-direction:row;
`;

const CatalystContainer = styled.div`
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

const TechnologyIconImageContainer = styled.div`
	height: 75px;
	width: 75px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 10%;
	border-radius: 10px;
	box-shadow: -20px 10px 50px rgba(0, 0, 0, 0.3);
	@media(max-width:600px){
		box-shadow:none;
	}
`;
const TechnologyContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: start;
	flex-direction: column;
	margin-right: 115px;
	margin-bottom: 72px;
	width:210px;
	height:210px;
	@media (max-width: 600px) {
		width:90px;
	height:130px;
	margin-right: 0px;
	margin-bottom: 0px;
	
		
	}
`;


const CvContainer = styled.div`
	//background-image: url(${(props) => props.theme.bannerBackground});
	background-color: ${(props) => props.theme.caseStudiesBackground};
	width: 100%;
	background-size: cover;
	background-position-x: 75%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const CvMainContainer = styled.div`
	max-width: 1170px;
	width: 100%;
	display: flex;
	align-items: center;
	padding: 4% 0;

	@media (max-width: 600px) {
		display:block;
		width:100%;
		padding:0%;
		
	}
`;
const CvMainContainersInnerContainer = styled.div`
	width: 50%;
	height: 100%;
	//align-items: flex-start;
	flex-direction: column;
	display: flex;
	@media (max-width: 600px) {
		
		width:100%;
		height:100%;
		justify-content:center;
		align-items:center;

		
	}
`;





const InputFieldLabel = styled.div`
	flex-direction: row;
	display: flex;
	@media (max-width: 600px) {
		width:80%;
		margin:0 30px;
		
		
	}

`;

const Input = styled.input`
	width: 480px;
	font-size: 18px;
	padding: 10px;
	margin: 10px 0;
	background: white;
	border: 1px solid #cdcdcd;
	border-radius: 3px;
	::placeholder {
		color: #cdcdcd;
	}
	&:focus {
		outline-color: #cdcdcd !important;
	}

	@media (max-width: 600px) {
		width:300px;
	}
`;


const File = styled.input`
	width: 480px;
	font-size: 18px;
	padding: 10px;
	margin: 10px 0;
	background: white;
	border: 1px solid #cdcdcd;
	border-radius: 3px;
	::placeholder {
		color: #cdcdcd;
	}
	&:focus {
		outline-color: #cdcdcd !important;
	}

	@media (max-width: 600px) {
		width:300px;
	}
`;

const DropDownContainer = styled('div')`
	width: 500px;
	margin: 10px 0;
	@media (max-width: 600px) {
		width:320px;
		align-self:center;
	}
`;
const DropDownHeader = styled('div')`
	color: black;
	margin-bottom: 10px;
	padding: 10px;
	background: white;
	border: 1px solid #cdcdcd;
`;
const DropDownListContainer = styled('div')``;
const DropDownList = styled('ul')`
height:125px;
	padding: 0;
	overflow-y: scroll;
	margin: 0;
	padding-left: 1em;
	background: #ffffff;
	border: 1px solid #cdcdcd;
	// box-sizing: border-box;
	color: black;
	&:first-child {
		padding-top: 0.8em;
	}
	
`;
const ListItem = styled('li')`
	list-style: none;
	margin-bottom: 0.8em;
`;

const UploadButtonContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
`;

const UploadButton = styled.div`
	height: 30px;
	margin: 20px 0;
	color: black;
	background-color: #cacbcd;
	cursor: pointer;
	border-radius: 5px;
	text-decoration: none;
	display: flex;
	padding: 10px 15px;
	font-size: 0.8rem;
	font-weight: 700;
	align-items: center;

	&:hover {
		opacity: 0.8;
	}

	@media (max-width: 600px) {
		width:30%;
		height: 30px;
		margin-left:30px;
		font-size: 0.7rem;
		align-items:center;
	}
`;

const JustToMakeRow = styled.div`
	display: flex;
	flex-direction: row;
`;

const CvImageContainer = styled.div`
	width: 50%;
	height: 100%;
	align-items: flex-start;
	//justify-content: middle;
	flex-direction: column;
	display: flex;
	
	@media (max-width: 600px) {
		
		width:100%
	}
`;

const CvSectionImage = styled.div`
	background-image: url(${(props) => props.theme.cvSectionImage});
	width: 600px;
	height: 710px;
	background-size: cover;
	display: flex;
	overflow: hidden;

	@media (max-width: 600px) {
		
		width:350px;
		height:382px;
	}
`;

const SubmitButton = styled.div`
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
`;

export default Career;