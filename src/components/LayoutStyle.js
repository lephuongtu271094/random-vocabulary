import styled from 'styled-components';

export const DefaultLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%; text-align: center;
    position: relative;
    background:
		linear-gradient(
			limegreen,
			transparent
		),
		linear-gradient(
			90deg,
			skyblue,
			transparent
		),
		linear-gradient(
			-90deg,
			coral,
			transparent
		);
	background-blend-mode: screen;
    -webkit-animation: hue 30s infinite linear;
`