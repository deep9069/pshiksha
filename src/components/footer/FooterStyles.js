import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 60px;
background: rgb(41, 52, 46);
position: sticky;
overflow:auto;
width: auto;
margin-bottom:-100px;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`

export const copyright=styled.div`
margin-bottom:10px;
`
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
    margin-top:10px;
//   margin-bottom:-80px;

  //background: red;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
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
	color: #1eb2a6;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 20px;
color: #fff;
margin-bottom: 10px;
font-weight: bold;
`;
