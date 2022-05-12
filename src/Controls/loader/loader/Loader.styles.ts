import styled, { keyframes } from 'styled-components'
 
const LoaderRippleAnimation = keyframes`
	0% {
		top: 36px;
		left: 36px;
		width: 0;
		height: 0;
		opacity: 1;
	}
	100% {
		top: 0px;
		left: 0px;
		width: 72px;
		height: 72px;
		opacity: 0;
	}
`
export const Fade = keyframes`
	0%{
		opacity: 1;
	}
	100%{
		opacity: 0;
	}
`

export const LoaderDiv = styled.div`
	position: fixed;
	inset: 0;
	background-color: rgba(255, 255, 255, 0.7);
	z-index: 999;
	display: ${(props: { display: string }) => props.display};
	align-items: center;
	justify-content: center;
`
export const LoaderRipple = styled.div`
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;
	div:nth-child(2) {
		animation-delay: -0.5s;
	}
`

export const LoaderDivChild = styled.div`
	position: absolute;
	border: 4px solid #19b9f5;
	opacity: 1;
	border-radius: 50%;
	animation: ${LoaderRippleAnimation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`
