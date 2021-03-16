import styled from 'styled-components';

export const NavbarContent = styled.div`
  
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.otherColor.blue};

  .nav-container {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    max-width: 1320px;
    padding: 0 20px;
    margin: 0 auto;  
  }

  .links-container {
    display: flex;
    margin-left: auto;
  }

  .nav-link {
    display: flex;
    align-items: center;
    margin-left: 8px;

    a {
      display: flex;
      align-items: center;
      text-transform: lowercase;
      padding: 14px 10px;
      text-decoration: none;
      line-height: 1;
      color: #fff;
    }
  }

`;
