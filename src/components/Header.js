import styled from 'styled-components';

const Header=()=>{
  return(
      <Navbar><LogoOne><img src="/images/logo.svg" alt="broken"></img></LogoOne>
      <NavMenu>
          <a href="/home">
              <img src="images/home-icon.svg" alt="broken"></img>
              <span>HOME</span>
          </a>
          <a href="/search">
              <img src="images/search-icon.svg" alt="broken"></img>
              <span>SEARCH</span>
          </a>
          <a href="/watchlist">
              <img src="images/watchlist-icon.svg" alt="broken"></img>
              <span>WATCHLIST</span>
          </a>
          <a href='/original'>
              <img src="images/original-icon.svg" alt="broken"></img>
              <span>ORIGINALS</span>
          </a>
          <a href="/movie">
              <img src="images/movie-icon.svg" alt="broken"></img>
              <span>MOVIES</span>
          </a>
          <a href="/series">
              <img src="images/series-icon.svg" alt="broken"></img>
              <span>SERIES</span>
          </a>
          <LoginButton>Login</LoginButton>
      </NavMenu>
      </Navbar>
  );
};

const Navbar=styled.nav`
postion: fixed;
top: 0px;
left: 0px;
right: 0px;
background-color: #090b13;
height: 100px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0px 36px;
z-index: 3;
`
const LogoOne=styled.a`
width: 100px;
margin: 10px;
display: inline-block;
img{
    display: block;
    width: 100%;
}
`
const NavMenu=styled.div`
display: flex;
//border: 2px solid yellow;
font-size: 20px;
margin-left: 50px;
margin-right: auto;
height: 100%;
align-items: center;
min-width: 50%;

    a{
        //border: 2px solid white;
        height: 100%;
        display: inline-block;
        margin: 0px 10px;
        img{
            //border: 2px solid pink;
            height: 50%;
            margin: 25px 0px;
            display: inline-block;
        }
        span{
            // border: 1px solid red;
            display: inline-block;
            color: rgb(249,249,249);
            position: relative;
            whitespace: nowrap;
            letter-spacing: 1.42px;
            top: -40px;
            font-size: 16px;

            &:before{
                background-color: rgb(249,249,249);
                //border: 2px solid green;
                height: 2px;
                //border-radius: 0px 0px 4px 4px;
                position: absolute;
                left: 0px;
                right: 0px;
                top: 20px;
                content: "";
                transfrom: scaleX(0);
                transform-origin: left center;
                opacity: 0;
                transition: all 250ms cubic-bezier(0.25,0.46.0.45,0.94) 0s;
                visibility: hidden;
            }
        }
    &:hover{
        span:before{
            transfrom: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
           }
       }
    }
`
const LoginButton=styled.div`
color: #f9f9f9; 
//border: 2px solid green;
font-weight: 600;
text-transform: uppercase;
transition: all 1ms ease-out 0s;
position: relative;
left: 40px;
height: 40px;
padding-top: 10px;
padding-left: 10px;
padding-right: 10px;

&:hover{
    color: black;
    background-color: white;
}
`
export default Header;