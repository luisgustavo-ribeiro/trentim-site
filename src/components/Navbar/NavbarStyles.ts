import styled from "styled-components";

export const Navigation = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.base.blue2};
  position: relative;
  z-index: 100;

  .nav-container {
    display: flex;
    align-items: center;
    width: 100%;
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

  @media screen and (max-width: 768px) {
    position: fixed;
    height: 100vh;
    flex-direction: column;
    width: 300px;
    left: -100%;
    opacity: 0;
    transition: 180ms ease-in-out all;

    &.menu-open {
      left: 0;
      opacity: 1;
      transition: 180ms ease-in-out all;
    }

    a {
      flex: 1;
    }

    .links-container {
      flex-direction: column;
      margin: 0 !important;
      width: 100%;
    }

    .nav-container {
      flex-direction: column;
      align-items: flex-start;
    }

    .logo {
      height: 70px;
      width: 100%;
      display: flex;
      align-items: center;
      margin: 0 0 8px;
    }

    .nav-link {
      margin: 0 !important;

      a {
        padding: 16px 0;
      }
    }
  }
`;
