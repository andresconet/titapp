import styled from 'styled-components';
import Account from './Account';

 
 const Logo = styled.h1`
 margin: 1.3rem 3rem;
 position: relative;
 a{
   color: white;
   text-decoration: none;
   padding: 0.5rem 1rem;
   letter-spacing: 4px;
  font-size: 3.5rem;
 }
`;

const HeaderStyles = styled.header`
background: #3d4cad;
 .bar {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  max-width: 1600px;
  margin: 0 auto;
  color: #fff;
 }
 @media (max-width: 768px) {
  .bar {
    flex-direction: column;
   }
}
`;

 const Header = () => {
  return (
    <HeaderStyles>
    <div className="bar">
      <Logo>
        <a href="/">TITAPP</a>
      </Logo>
      <Account /> 
    </div>
  </HeaderStyles>
  );
}

export default Header;