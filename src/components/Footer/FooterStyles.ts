import styled from "styled-components";

export const FooterStyles = styled.section`
  overflow: hidden;
  position: relative;
  background-color: #fff;
  color: ${(props) => props.theme.colors.base.gray1};
  padding: 100px 0 220px;

  @media (max-width: 1024px) and (min-width: 769px) {
    overflow: hidden;
  }

  a {
    color: ${(props) => props.theme.colors.base.purple};
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

      @media screen and (max-width: 1024.99px) {
        align-items: center;
      }

      @media screen and (max-width: 768.99px) {
        flex: 1 1 100%;
        justify-self: flex-start;
        align-items: flex-start;
      }
    }

    #address-info {
      list-style: none;
      padding: 0;
      margin: 0 0 32px;

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

      @media screen and (max-width: 768.99px) {
        margin: 12px 0 32px;
      }
    }

    .right-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 32px;
      grid-auto-rows: auto;
      align-items: center;
      justify-content: center;
      align-content: center;
      justify-items: center;

      @media (max-width: 1024px) and (min-width: 769px) {
        margin-top: 24px;
        position: relative;
        display: flex;
      }

      @media screen and (max-width: 768.99px) {
        margin: 32px 0 0;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        align-content: center;
        justify-items: center;
        grid-template-columns: inherit;
      }

      .ms-gold {
        height: 120px;

        img {
          height: 100%;
        }
      }

      .gptw {
        height: 120px;

        img {
          height: 100%;
        }
      }

      .pmi {
        display: inline-flex;
        grid-column: 1/-1;

        @media screen and (max-width: 1024.99px) {
          justify-self: flex-start;
        }

        img {
          height: 50px;
          margin: 4px;
        }
      }
    }
  }

  .title-area {
    color: ${(props) => props.theme.colors.base.purple};
    margin: 0 0 32px;
  }

  .address {
    display: grid;
    grid-template-columns: 50px 1fr;
    gap: 20px;
    align-items: center;

    &:not(:last-child) {
      margin: 0 0 32px;
    }

    .text {
      color: #5c5c5c;
      font-size: 16px;

      ul {
        list-style: none;
        padding: 0;
      }
    }
  }

  @media screen and (min-width: 768.99px) and (max-width: 1024px) {
    padding: 40px 0 60px;

    .footer-container {
      position: relative;
      display: flex;
      flex-flow: column;
      gap: 0;
    }

    .title-area {
      color: ${(props) => props.theme.colors.base.purple};
      margin: 0 0 32px;
      position: relative;
      justify-content: center;
    }
  }

  @media screen and (max-width: 768.99px) {
    padding: 40px 0 60px;

    .footer-container {
      display: flex;
      flex-flow: column;
      gap: 0;
    }
  }
`;
