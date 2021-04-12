import styled from "styled-components";

export const FooterStyles = styled.section`
  overflow: hidden;
  position: relative;
  background-color: #fff;
  color: ${(props) => props.theme.colors.base.gray1};
  padding: 100px 0 220px;

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

      @media screen and (max-width: 768.99px) {
        margin: 32px 0 0;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        justify-items: flex-start;
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

        @media screen and (max-width: 768.99px) {
          flex: 1 1 100%;
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

  @media screen and (max-width: 768.99px) {
    padding: 40px 0 60px;

    .footer-container {
      display: flex;
      flex-flow: column;
      gap: 0;
    }
  }
`;
