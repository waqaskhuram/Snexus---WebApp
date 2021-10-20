import styled from 'styled-components';
import { NavLink } from "react-router-dom";


export const GeneralTextRegular = styled.p`
	font-size: 14px;
	color: ${(props) => props.theme.generalTextColor};
    font-family: poppinsRegular;
	

	@media (max-width: 600px) {
		font-size:14px;
		margin:0 30px;
		text-align:center;
		text-align-last: center;

	}
`;

export const IconsText = styled.p`
	font-size: 14px;
	color: ${(props) => props.theme.generalTextColor};
    font-family: poppinsBold;
	white-space: nowrap;

	@media (max-width: 600px) {
		font-size:14px;
		margin:0;
		text-align:justify;

	}
`;

export const GeneralTextRegularBlack = styled.p`
	font-size: 14px;
	color: #000000;
    font-family: poppinsRegular;
	margin:5% 20px;
	text-align:center;

	@media (max-width: 600px) {
		font-size:14px;
		margin:2% 30px;
		text-align:center;
		text-align-last: center;

	}
`;


export const GeneralTextMedium = styled.p`
	font-size: 14px;
	color: ${(props) => props.theme.generalTextColor};
    font-family: poppinsMedium;


	@media (max-width: 600px) {
		font-size:14px;
		margin:5% 30px;
		text-align:center;
		text-align-last: center;

	}
`;

export const BannerBigTitle = styled.p`
	font-size: 55px;
	color: ${(props) => props.theme.generalTextColor};
    font-family: poppinsBold;
	line-height: 1.2;

	@media (max-width: 600px) {
		font-size:25px;
		margin:0 30px;
		text-align:center;
		line-height: 1.5;

	}
`;

export const BannerMediumTitle = styled.p`
	font-size: 32px;
	color: ${(props) => props.theme.generalTextColor};
    font-family: poppinsBold;
	

	@media (max-width: 600px) {
		font-size:25px;
		margin:5% 30px 0px 30px;
		text-align:center;
	}
`;

export const BannerSmallTitle = styled.p`
	font-size: 22px;
	color: ${(props) => props.theme.generalTextColor};
    font-family: poppinsBold;

	@media (max-width: 600px) {
		font-size:20px;
		margin:0 30px;
		text-align:center;

	}
`;

export const IconsBoldTitle = styled.p`
	font-size: 16px;
	color: ${(props) => props.theme.generalTextColor};
    font-family: poppinsBold;

	@media (max-width: 600px) {
		font-size:12px;
		margin:0 30px;
		text-align:center;

	}
`;

export const BulletPointsText = styled.p`
	font-size: 14px;
	width:100%;
	color: ${(props) => props.theme.generalTextColor};
    font-family: poppinsBold;
	margin-top:11px;
	margin-left:8px;

	@media (max-width: 600px) {
		font-size:14px;
		margin:0 30px;
		text-align:left;

	}
`;

export const SmallSemiTitleBlack = styled.p`
	font-size: 20px;
	color: #000000;
    font-family: poppinsSemiBold;
	text-align:center;
	margin-top:3%;

	@media (max-width: 600px) {
		font-size:18px;
		margin:2% 30px;
		text-align:center;

	}
`;

export const SmallSemiTitle = styled.p`
	font-size: 20px;
	color: ${(props) => props.theme.generalTextColor};
    font-family: poppinsSemiBold;
	text-align:center;
	margin-top:1%;

	@media (max-width: 600px) {
		font-size:20px;
		margin:2% 30px;
		text-align:center;

	}
`;

export const BigSemiTitle = styled.p`
	font-size: 42px;
	color: ${(props) => props.theme.generalTextColor};
    font-family: poppinsSemiBold;
	text-align:center;

	@media (max-width: 600px) {
		font-size:25px;
		margin:5% 30px 0px 30px;
		text-align:center;

	}
`;

export const MediumSemiTitle = styled.p`
	font-size: 34px;
	color: ${(props) => props.theme.generalTextColor};
    font-family: poppinsSemiBold;
	text-align:center;

	@media (max-width: 600px) {
		font-size:25px;
		margin:2% 30px;
		text-align:center;

	}
`;



export const YellowTitle = styled.p`
	font-size: 20px;
	color: #fdb514;
    font-family: poppinsRegular;

	@media (max-width: 600px) {
		font-size:20px;
		margin:0 30px;
		text-align:center;

	}
`;


export const NavbarText = styled(NavLink)`
	font-size: 14px;
	color: ${(props) => props.theme.color};
    font-family: poppinsSemiBold;
	margin-right:20px;
	text-decoration:none;

	&:hover {
		color: #FCB414;
	  }
	 &:hover . &:active {
		opacity: 0.4;
	  }
	

	@media (max-width: 600px) {
		font-size:14px;
		margin:1.5% 30px;
		text-align:center;

	}
`;

export const ButtonText = styled.p`
	font-size: 14px;
	color: white;
    font-family: poppinsMedium;
	text-align:center;


	@media (max-width: 600px) {
		font-size:14px;
		text-align:center;

	}
`;

export const ErrorText = styled.p`
	font-size: 14px;
	color: red;
    font-family: poppinsMedium;
	text-align:left;


	@media (max-width: 600px) {
		font-size:14px;
		text-align:center\;

	}
`;

export const TechnologiesTabsTextForMobile = styled.p`
		font-size:12px;
		height:100%;
		font-family:poppinsMedium;
		padding:6px 15px;
		background-color:#DDDDDD;
		border-radius:20px;
		text-align:center;
		color:black;
`;