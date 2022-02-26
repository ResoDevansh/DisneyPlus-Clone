import styled from 'styled-components';
import React from 'react';

const Login=()=>{
    return(
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" />
                    <GetThere>Get all There</GetThere>
                    <Description>Hotstar has been discontinued in the US, but you can enjoy LIVE cricket, your favorite Indian entertainment, & more with The Disney Bundle (Disney+, Hulu, and ESPN+). If you had a Hotstar subscription before it was discontinued, please check your email for details.</Description>
                    <CTALogoTwo src='/images/cta-logo-two.png' />
                </CTA>
                
                
                <BgImage />
            </Content>
        </Container>
    )
}
const Container=styled.section`

display: flex;
flex-direction:column;
height: 100vh;
text-align:center;
margin: 0px;
border: 2px solid red;
`
const Content=styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-content:center;
min-height: 50%;
border:2px solid white;
margin: 0px;
`
const BgImage=styled.div`
 background-image: url('/images/login-background.jpg');
 border: 2px solid green;
 z-index: -1;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
`
const CTA=styled.div`
 border: 2px solid white;
 margin-top: 130px;
 display: flex;
 flex-flow: column wrap;
`
const GetThere=styled.button`
 padding: 2rem;
 font-weight: 600;
 color: #f9f9f9;
 font-size: 25px;
 text-transform: uppercase;
 background-color: blue;
 text-indent: 5px;
 min-width: 30%;
 margin-left: auto;
 margin-right: auto;
 margin-top: 10px;
 border-radius: 7px;
 transition: all 300ms ease-in;
 &:hover{
     background-color: #ADD8E6;
 }
`
const Description=styled.p`
color: #ffffff;
max-width: 400px;
margin-left: auto;
margin-right: auto;
letter-spacing: 0.1em;
font-size: 15px;
`
const CTALogoOne=styled.img`
height: 100px;
border: 2px solid yellow;
`
const CTALogoTwo=styled.img`
height: 100px;
width: 500px;
border: 2px solid white;
margin-left: auto;
margin-right: auto;
`
export default Login;