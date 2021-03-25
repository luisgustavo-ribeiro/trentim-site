import styled from "styled-components";

export const FooterStyles = styled.footer`
  position: relative;
  background-color: #fff;
  color: ${props => props.theme.colors.base.gray1};
  padding: 150px 0 280px;

  a {
    color: ${props => props.theme.colors.base.purple};
    text-decoration: none;
  }

  .footer-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 120px;

    .left-col,
    .mid-col,
    .right-col {
      display: flex;
      flex-direction: column;
    }

    #address-info {
      list-style: none;
      padding: 0;
      margin: 32px 0;

      li {
        margin: 0 0 10px;
      }
    }

    .social-media {
      display: flex;
      flex-direction: row;

      .social-icon {
        display: flex;

        &:not(:last-child) {
          margin-right: 10px;
        }
      }
    }

    .termos {
      margin: 12px 0 0;
    }
  }

  .title-area {
    color: ${props => props.theme.colors.base.purple};
  }

  @media screen and (max-width: 640px) {
    padding: 40px 0 60px;

    .footer-container {
      display: flex;
      flex-flow: column;
      gap: 0;
    }
  }
`;
