import React, { useState, useEffect } from "react";
import styled from "styled-components";
import emailjs from 'emailjs-com';

import { NavLink, withRouter } from "react-router-dom";
import { Link } from "react-scroll";
import { getTheme } from "../getTheme";
import HTML from "../constants/StyledComponents";
import { FaAngleDown } from 'react-icons/fa';
import { FaAngleUp } from 'react-icons/fa';
import { GeneralTextMedium, BannerBigTitle, BannerMediumTitle, SmallSemiTitle, BannerSmallTitle, ButtonText, ErrorText } from '../constants/FontTags';

const GetInTouch = (props) => {
  
  const theme = getTheme(props.themeName);
  const [verification, setVerification] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [showDropDown1, setShowDropDown1] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [message, setMessage] = useState('');
  let check = [false, false, false, false, false];


  var element = document.getElementById("contact-form");

  useEffect(() => {
    console.log("useeffect ")
    if (props.location.state) {
      if (props.location.state.letsTalk) {
        console.log('inside if')
        document.getElementById('contact-form').scrollIntoView()
      }
    }


  }, [])

  const [selectedDropDownValue, setSelectedDropDownValue] = useState('');
  const [selectedDropDown1Value, setSelectedDropDown1Value] = useState('');
  const dropDownValues = ["Mobile Application Development", "Web Application Development", "Blockchain and Smart Contracts",
    "SEO and Marketing", "UI/UX Designing", "SMB ERP Solutions", "Other"];

  const dropDown1Values = ["Search Engine", "Social Media Marketing", "Blog or Publication",
    "Peer Referral", "Third-Party Review", "Other"];

  const toggleDropDown = () => setShowDropDown(!showDropDown);
  const toggleDropDown1 = () => setShowDropDown1(!showDropDown1);
  const onDropDownValueClicked = (value) => () => {
    setSelectedDropDownValue(value);
    setShowDropDown(false);
    console.log(selectedDropDownValue);
  };

  const onDropDown1ValueClicked = (value) => () => {
    setSelectedDropDown1Value(value);
    setShowDropDown1(false);
    // console.log(selectedDropDownValue);
  };

  const onSubmitForm = () => {
    console.log("full name is =", fullName);
    console.log("email is =", email);
    console.log("contact Number is =", contactNumber);
    console.log("IntrestedIn =", selectedDropDownValue);
    console.log("How you get us =", selectedDropDown1Value);
    console.log('company Name =', companyName);
    console.log('message  =', message);
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

    if (selectedDropDown1Value === '') {
      setSelectedDropDown1Value(null);
    }
    else {
      check[4] = true;
    }

    if (check[0] && check[1] && check[2] && check[3] && check[4] === true) {
      const data = {
        fullName: fullName,
        email: email,
        contactNumber: contactNumber,
        selectedDropDownValue: selectedDropDownValue,
        selectedDropDown1Value: selectedDropDown1Value,
        companyName: companyName,
        message: message
      }

      emailjs.send('service_js9zo9w', 'template_znlbj9t', data, 'user_cQLa68u8ZBhwul0kss5Xa')
        .then((result) => {
          console.log("email send successfully ");
          setFullName('');
          setCompanyName('');
          setContactNumber('');
          setEmail('');
          setMessage('');
          setSelectedDropDown1Value('');
          setSelectedDropDownValue('');
          setVerification(true);
        }, (error) => {
          console.log("error");
        });
    }
  };



  return (
    <HTML.FullWidthContainer>
      {/* main banner */}
      <MainBanner>
        <MainBannerInnerContainer>
          <BannerBigTitle>
            We’ll help you<br /> build your next <br />big project
          </BannerBigTitle>
          <GeneralTextMedium style={{ marginTop: '20px' }}>
            Establish a business-centric futuristic product by discussing your<br />
            requirements over a cup of coffee!
          </GeneralTextMedium>
          {/* <Button exact to="/" style={{ borderRadius: 23, marginTop: window.innerWidth < 600 && '0px' }}>
            <ButtonText>Let's Talk</ButtonText>
          </Button> */}

          <Link
            to="contact-form"
            spy={true}
            smooth={true}
            duration={500}
            style={{
              borderRadius: 23,
              margin: window.innerWidth > 600 ? "30px 0" : '0 0',
              color: "white",
              backgroundColor: "#e14d1f",
              cursor: "pointer",
              textDecration: "none",
              display: "flex",
              //padding: 0.5rem 1rem;
              fontSize: "0.8rem",
              fontWeight: "700",
              alignItems: "center",
              width: "113px",
              height: "46px",
              justifyContent: "center",

            }}
          >
            <ButtonText>Let's Talk</ButtonText>
          </Link>
        </MainBannerInnerContainer>
        <MainBannerInnerContainer>
          <TechnologyBackground />
        </MainBannerInnerContainer>
      </MainBanner>
      {/* contact form */}
      <ContactFullWidthContainer id='contact-form'>
        <ContactContainer>
          <BannerMediumTitle>
            Get ready for a digital transformation through innovation
          </BannerMediumTitle>
          <GeneralTextMedium style={{ marginTop: "10px", marginBottom: window.innerWidth > 600 ? "10px" : '20px' }}>
            Fill this up and leave the rest to us!
          </GeneralTextMedium>
          {/* name email */}
          <InputFieldsRow>
            <InputFieldContainer>
              <InputFieldLabel>
                <SmallSemiTitle style={{ fontSize: '18px', marginRight: window.innerWidth < 600 && '0px' }}>
                  Full Name
                </SmallSemiTitle>
                <SmallSemiTitle style={{ color: "red", marginLeft: window.innerWidth < 600 && '0px' }}>*</SmallSemiTitle>
              </InputFieldLabel>
              {/* <Input /> */}
              <Input type="text" value={fullName} onChange={e => setFullName(e.target.value)} id="nameCheck" />
              {fullName === null && <ErrorText>Please Enter The Full Name</ErrorText>}
            </InputFieldContainer>
            <InputFieldContainer>
              <InputFieldLabel>
                <SmallSemiTitle style={{ fontSize: '18px', marginRight: window.innerWidth < 600 && '0px' }}>Email</SmallSemiTitle>
                <SmallSemiTitle style={{ color: "red", marginLeft: window.innerWidth < 600 && '0px' }}>*</SmallSemiTitle>
              </InputFieldLabel>
              {/* <Input /> */}
              <Input type="email" value={email} onChange={e => setEmail(e.target.value)} id="emailCheck" />
              {email === null && <ErrorText>Please Enter The Email</ErrorText>}
            </InputFieldContainer>
          </InputFieldsRow>
          {/* company name and interested in */}
          <InputFieldsRow>
            <InputFieldContainer>
              <InputFieldLabel>
                <SmallSemiTitle style={{ fontSize: '18px', marginRight: window.innerWidth < 600 && '0px' }}>
                  Company Name
                </SmallSemiTitle>
                {/* <SmallSemiTitle style={{ color: "red", marginLeft: window.innerWidth < 600 && '0px' }}>*</SmallSemiTitle> */}
              </InputFieldLabel>
              {/* <Input /> */}
              <Input type="text" value={companyName} onChange={e => setCompanyName(e.target.value)} />
            </InputFieldContainer>
            <InputFieldContainer>
              <InputFieldLabel>
                <SmallSemiTitle style={{ fontSize: '18px', marginRight: window.innerWidth < 600 && '0px' }}>
                  Interested In
                </SmallSemiTitle>
                <SmallSemiTitle style={{ color: "red", marginLeft: window.innerWidth < 600 && '0px' }}>*</SmallSemiTitle>
              </InputFieldLabel>
              <DropDownContainer style={{cursor:'pointer'}}>
                <DropDownHeader onClick={toggleDropDown}>
                  {selectedDropDownValue || <span>Select</span>}
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
                  <DropDownListContainer>
                    <DropDownList >
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
            </InputFieldContainer>
          </InputFieldsRow>
          {/* Contact number and How Did You Hear About Us */}
          <InputFieldsRow>
            <InputFieldContainer>
              <InputFieldLabel>
                <SmallSemiTitle style={{ fontSize: '18px', marginRight: window.innerWidth < 600 && '0px' }}>
                  Contact Number
                </SmallSemiTitle>
                <SmallSemiTitle style={{ color: "red", marginLeft: window.innerWidth < 600 && '0px' }}>*</SmallSemiTitle>
              </InputFieldLabel>
              {/* <Input /> */}
              <Input type="tel" value={contactNumber} onChange={e => setContactNumber(e.target.value)} />
              {contactNumber === null && <ErrorText>Please Enter The Contact Number</ErrorText>}
            </InputFieldContainer>
            <InputFieldContainer>
              <InputFieldLabel>
                <SmallSemiTitle style={{ fontSize: '18px', marginRight: window.innerWidth < 600 && '0px' }}>
                  How Did You Hear About Us
                </SmallSemiTitle>
                <SmallSemiTitle style={{ color: "red", marginLeft: window.innerWidth < 600 && '0px' }}>*</SmallSemiTitle>
              </InputFieldLabel>
              <DropDownContainer style={{cursor:'pointer'}}>
                <DropDownHeader onClick={toggleDropDown1}>
                  {selectedDropDown1Value || <span>Select</span>}
                  {!showDropDown1 && (
                    <FaAngleDown
                      size={'17px'}
                      style={{ float: 'right', marginTop: '5px' }}
                      color={'black'}
                    />
                  )}
                  {showDropDown1 && (
                    <FaAngleUp
                      size={'17px'}
                      style={{ float: 'right', marginTop: '5px' }}
                      color={'black'}
                    />
                  )}
                </DropDownHeader>

                {showDropDown1 && (
                  <DropDownListContainer>
                    <DropDownList >
                      {dropDown1Values.map((value) => (
                        <ListItem
                          onClick={onDropDown1ValueClicked(value)}
                          key={Math.random()}
                        >
                          {value}
                        </ListItem>
                      ))}
                    </DropDownList>
                  </DropDownListContainer>
                )}
              </DropDownContainer>
              {selectedDropDown1Value === null && <ErrorText>Please Select</ErrorText>}
            </InputFieldContainer>
          </InputFieldsRow>
          {/* detail */}
          <InputFieldsRow style={{ marginTop: window.innerWidth < 600 && '10px' }}>
            <InputFieldContainer>
              <InputFieldLabel>
                <GeneralTextMedium>
                  Share your product idea with confidence, your concept will be
                  confidential and protected by a non-disclosure agreement.
                </GeneralTextMedium>
              </InputFieldLabel>
              <TextArea type="text" value={message} onChange={e => setMessage(e.target.value)} />
            </InputFieldContainer>
          </InputFieldsRow>
          {/* submit */}
          <SubmitButton
            style={{
              borderRadius: 23,
              marginTop: window.innerWidth > 600 ? '30px' : '5%',
              marginBottom: window.innerWidth < 600 && '0',
              alignSelf: window.innerWidth > 600 && 'start'
            }}
            onClick={() => onSubmitForm()}
          >
            <GeneralTextMedium style={{ color: 'white' }}>Submit</GeneralTextMedium>

          </SubmitButton>
          {verification &&
								<GeneralTextMedium style={{ marginTop: window.innerWidth < 600 ? '5%' : '5px',textAlign:window.innerWidth<600 && 'center' }}>
									Your message sent successfully
								</GeneralTextMedium>
							}
        </ContactContainer>
      </ContactFullWidthContainer>
      {/* sandbox */}
      <SandBoxFullWidthContainer >
        <SandBoxContainer>
          <BannerMediumTitle style={{ textAlign: 'center' }}>Our Sandbox</BannerMediumTitle>
          <GeneralTextMedium style={{ textAlign: "center", marginTop: "10px" }}>
            Snexus operates globally to strengthen your businesses,
            <br style={{ display: window.innerWidth < 600 && 'none' }} />
            Here's where we modernize your ideas!
          </GeneralTextMedium>
          <SandboxIconsContainer >
            <SandboxIconsIndividualContainer style={{ marginBottom: window.innerWidth < 600 && '5%' }} >
              <SandboxIcons src={theme.usa} />
              <BannerSmallTitle style={{ textAlign: "center", marginTop: "10px", fontSize: '20px', }}>
                USA
              </BannerSmallTitle>
            </SandboxIconsIndividualContainer>
            <SandboxIconsIndividualContainer style={{ marginBottom: window.innerWidth < 600 && '5%' }}>
              <SandboxIcons src={theme.uae} />
              <BannerSmallTitle style={{ textAlign: "center", marginTop: "10px", fontSize: '20px', }}>
                UAE
              </BannerSmallTitle>
            </SandboxIconsIndividualContainer>
            <SandboxIconsIndividualContainer style={{ marginBottom: window.innerWidth < 600 && '5%' }}>
              <SandboxIcons src={theme.pakistan} />
              <BannerSmallTitle style={{ textAlign: "center", marginTop: "10px", fontSize: '20px', }}>
                Pakistan
              </BannerSmallTitle>
            </SandboxIconsIndividualContainer>
          </SandboxIconsContainer>
        </SandBoxContainer>
      </SandBoxFullWidthContainer>
    </HTML.FullWidthContainer>
  );
};

// HTML
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
const TechnologyBackground = styled.div`
  background-image: url(${(props) => props.theme.getInTouchBanner});
  width: 600px;
  height: 435px;
  background-size: cover;
  display: flex;
  overflow: hidden;

  @media (max-width: 600px) {
  background-size: contain;
   width:100%;
   height:275px;
   background-repeat:no-repeat;
    }
`;

const ContactFullWidthContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.caseStudiesBackground};
  display: flex;
  justify-content: center;
`;
const ContactContainer = styled.div`
  width: 100%;
  max-width: 1170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4% 0;
  @media (max-width: 600px) {
		width:100%;
    height:100%;
    align-items:center;
		
	}
`;

const Input = styled.input`
  width: 550px;
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
		width:80%;
    margin:0px 0px 20px 30px;
		
	}
`;

const InputFieldContainer = styled.div``;
const InputFieldsRow = styled.div`
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
  @media (max-width: 600px) {
		width:100%;
    flex-direction:column;
		margin:0 30px;
    
	}
`;
const InputFieldLabel = styled.div`
  flex-direction: row;
  display: flex;
  width:100%;
`;

const DropDownContainer = styled("div")`
  width: 570px;
  margin: 10px 0;
  @media (max-width: 600px) {
		width:86%;
   
		margin:0 30px;
	}
`;
const DropDownHeader = styled("div")`
  color: black;
  margin-bottom: 10px;
  padding: 10px;
  background: white;
  border: 1px solid #cdcdcd;
`;
const DropDownListContainer = styled("div")``;
const DropDownList = styled("ul")`
height:125px;
overflow-y: scroll;
  padding: 0;
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
const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;
const TextArea = styled.textarea`
  width: 1150px;
  height: 80px;
  font-size: 18px;
  rows: 3;
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
		width:80%;
    height:100px;
    flex-direction:column;
		margin:0 0 0 30px;
	}
`;
// HTML
const SandBoxFullWidthContainer = styled.div`
  background-color: ${(props) => props.theme.caseStudiesBackground1};
  width: 100%;
  display: flex;
  justify-content: center;
`;
const SandBoxContainer = styled.div`
  max-width: 1170px;
  width: 100%;
  padding: 4% 0;
  @media (max-width: 600px) {
    padding:0;
	}

`;
const SandboxIconsContainer = styled.div`
  margin-top: 70px;
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 600px) {
		width:100%;
   display:block;
   margin-top:0;
	}
`;
const SandboxIconsIndividualContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
		width:100%;
    align-self:center;
   
	}
`;
const SandboxIcons = styled.img`
  width: 189px;
  height: 195px;
  cursor: pointer;
  display: flex;
  @media (max-width: 600px) {
		align-self:center;
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

export default (withRouter(GetInTouch));
