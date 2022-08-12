import styled from 'styled-components';

export const Box = styled.div`
padding: 10px 90px;
// background: black;
background: linear-gradient(160deg,#00cdac    20%, #6dd5ed 100%);
position: sticky;
overflow:none;
width: auto;
height:auto;
margin-bottom:-100px;
margin-right:-50px;
border:solid yellow;
// background: red;

@media (max-width: auto) {
	padding: 70px 30px;
}
`

// export const copyright=styled.div`
// margin-bottom:-10px;
// `
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	// max-width: 1000px;
    margin-top:40px;
	height:auto;
	margin-left:3.5%;
    margin-bottom:-80px;
    padding:auto auto;
    background: red;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
// text-align: left;
// margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
margin-top: 50px;
grid-template-columns: repeat(auto-fill,
						minmax(250px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}

`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 16px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: black;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 20px;
color: #fff;
margin-bottom: 10px;
font-weight: bold;
`;
