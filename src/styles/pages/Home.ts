import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  section {
    position: relative;
  }

  #ms-partnership {
    display: flex;
    height: 450px;
    background-color: ${(props) => props.theme.colors.base.cyan};
    transition: 200ms ease-in-out all;

    .image-block {
      display: flex;
      overflow: hidden;
      width: calc(100% - 430px);

      @media (min-width: 770px) {
        margin-left: -20px;
      }

      img {
        object-fit: cover;
        width: 100%;
      }
    }

    .partner-block {
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 38px;
      justify-content: center;
      height: 100%;
      background-color: ${(props) => props.theme.colors.base.cyan};
      color: #fff;
      width: 430px;
      margin-left: auto;
      transition: 200ms ease-in-out all;
      :before {
        content: "";
        position: absolute;
        top: calc(50% - 24px);
        left: -44px;
        height: 48px;
        width: 48px;
        transform: rotate(45deg);
        z-index: 9;
        background-color: ${(props) => props.theme.colors.base.cyan};
      }
      li {
        z-index: 10;
      }
      @media (min-width: 770px) and (max-width: 1440px) {
        li {
          min-width: 270px;
        }
      }

      @media (min-width: 1200px) {
        padding: 0px;
        min-width: 500px;
        :before {
          left: -24px;
        }
        li {
          min-width: 270px;
        }
      }

      @media (min-width: 1441px) and (max-width: 1600.99px) {
        left: 5%;
        :before {
          left: -16%;
        }
        li {
          min-width: 270px;
        }
      }

      @media (min-width: 1601px) {
        left: 15%;
        :before {
          left: -43%;
        }
        li {
          min-width: 270px;
        }
      }
    }

    .partner-block-info {
      display: grid;
      grid-template-columns: 1fr 2fr;
      align-items: center;
      .info-title {
        text-align: right;
        font-weight: 400;
        padding: 24px;
        padding-left: 0;
        z-index: 1000;
        border-right: 3px solid #fff;
      }
      
      @media (max-width: 769px) {
        grid-template-columns: 1fr 1fr;
        margin-left: 5vw;
      }

      @media (min-width: 770px) and (max-width: 1440px) {
        grid-template-columns: 1fr 2fr;
        margin-left: -8%;
      }
    }

    @media (min-width: 1200px) {
        grid-template-columns: 1fr 2fr;
      }

    .info-list {
      list-style: none;
      padding-left: 24px;
      font-weight: 300;

      @media (min-width: 1200px) {
        min-width: 262px;
      }
    }

    @media screen and (max-width: 768.99px) {
      height: auto;
      .partner-block-info {
        /* microsoft partner alignment*/
        margin-left: -9%;
      }
      .container {
        flex-direction: column;
        padding: 0;
      }

      .image-block {
        width: 100%;
        height: 200px;
        z-index: 0;
      }

      .partner-block {
        margin: auto;
        width: 100%;
        padding: 20px;
        height: 200px;
        z-index: 1;

        &:before {
          top: -24px;
          left: auto;
          right: 40px;
          z-index: 0;
          z-index: -10000;
        }
      }
      li {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
      }
    }
  }

  #process {
    background-color: #fff;
    color: ${(props) => props.theme.colors.base.aqua};
    padding: 100px 0;
    min-height: 730px;

    .title-area {
      margin: 0 auto;
    }

    .section-subtitle {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      margin: 24px 0 40px;
      color: ${(props) => props.theme.colors.base.gray3};
      text-align: center;
    }

    .process-forms {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .forms-container {
        display: flex;
        margin: 40px 0 64px;
        justify-content: space-between;
        align-items: center;
      }

      .forms-container,
      .text-container {
        max-width: 820px;
        width: 100%;
      }

      .text-container {
        text-align: center;
      }

      .shape {
        cursor: pointer;
      }

      .text {
        color: ${(props) => props.theme.colors.base.gray3};
        font-size: 18px;
        line-height: 1.4;
        display: none;

        &.open {
          display: block;
          min-height: 80px;
        }
      }
    }

    @media screen and (max-width: 768.99px) {
      padding: 40px 0;
      overflow: hidden;
      min-height: 500px;

      .process-track {
        overflow: auto;
        width: 100%;

        .forms-container {
          min-width: 800px;
        }
      }

      .section-subtitle {
        font-size: 18px;
        margin: 40px 0 50px;
      }

      .text {
        font-size: 14px !important;
      }
    }
  }

  #contact {
    background-color: ${(props) => props.theme.colors.dark.yellow};
    transition: 10s ease-in-out all;
    padding: 100px 0;

    .contact-info {
      display: flex;
      flex-direction: column;
      color: #fff;
      width: 100%;
      padding: 30px 60px 100px;

      .title-area {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .subtitle {
        width: 100%;
        font-size: 18px;
        margin: 50px 0 60px;
        text-align: center;
      }

      .btn-work-hovered {
        display: flex;
        justify-content: center;
        line-height: 40px;
        height: 50px;
        width: 300px;
        border: 2px solid #fff;
        background-color: #fff;
        color: ${(props) => props.theme.colors.base.orange};
        font-size: 24px;
        border-radius: 2px;
        margin: 0 auto;
        cursor: pointer;
        text-decoration: none;
        transition: 10s ease-in-out all;

        @media screen and (max-width: 768.99px) {
          width: 100%;
          border: 2px solid #fff;
          background-color: #fff;
          color: ${(props) => props.theme.colors.base.orange};
        }

        &:hover {
          color: #fff;
          background-color: transparent;
          border-color: #fff;
          transition: 160ms ease-in-out all;
        }
      }

      .btn-work {
        display: flex;
        justify-content: center;
        line-height: 40px;
        height: 50px;
        width: 300px;
        border: 2px solid #fff;
        background-color: #fff;
        color: ${(props) => props.theme.colors.dark.yellow};
        font-size: 24px;
        border-radius: 2px;
        margin: 0 auto;
        cursor: pointer;
        text-decoration: none;
        transition: 160ms ease-in-out all;

        @media screen and (max-width: 768.99px) {
          width: 100%;
          border: 2px solid #fff;
          background-color: #fff;
          color: ${(props) => props.theme.colors.dark.yellow};
        }

        &:hover {
          color: #fff;
          background-color: transparent;
          border-color: #fff;
          transition: 160ms ease-in-out all;
        }
      }
    }

    @media screen and (max-width: 768.99px) {
      padding: 30px 0 70px;

      .container {
        flex-direction: column;
      }

      .contact-info {
        padding: 30px 16px;
        min-width: 100%;
      }
    }

    &.contact-hovered {
      background-color: ${(props) => props.theme.colors.base.orange};
      transition: 10s ease-in-out all;

      .contact-form .title-area {
        color: ${(props) => props.theme.colors.base.orange};
        transition: 10s ease-in-out all;
      }

      .send-button {
        background-color: ${(props) => props.theme.colors.base.orange};
        border-color: ${(props) => props.theme.colors.base.orange};
        transition: 10s ease-in all;

        &:hover {
          transition: 160ms ease-in-out all;
        }
      }

      .send-button.contact-hovered {
        background-color: ${(props) => props.theme.colors.base.orange};
        border-color: ${(props) => props.theme.colors.base.orange};
        transition: 160ms ease-in-out all;

        &:hover {
          color: ${(props) => props.theme.colors.base.orange};
          background-color: transparent;
          transition: 160ms ease-in-out all;
        }
      }
    }
  }

  #blog {
    background-color: #fff;
    color: ${(props) => props.theme.colors.base.red};
    padding: 100px 0;

    .title-area {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 0 60px;
    }

    .cards-container {
      display: grid;
      grid-template-columns: repeat(3, 280px);
      gap: 20px;
      justify-content: center;
      z-index: 10;

      .card {
        width: 100%;
        height: 420px;
        border-radius: 2px;
        overflow: hidden;
        background-color: ${(props) => props.theme.colors.base.gray6};
        z-index: 1;
        border: 2px solid #e0e0e0;

        .img-container {
          height: 180px;
          width: 100%;
          overflow: hidden;

          img {
            object-fit: cover;
            width: 100%;
          }
        }

        .title {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin: 8px 16px;
          font-size: 18px;
          font-weight: 600;
          color: ${(props) => props.theme.colors.base.gray2};
        }

        .text {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin: 0 16px 16px;
          font-size: 14px;
          color: ${(props) => props.theme.colors.base.gray3};
        }

        .button-container {
          width: 100%;
          padding: 0 16px 16px;
        }

        .button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          border: 2px solid ${(props) => props.theme.colors.base.red};
          color: ${(props) => props.theme.colors.base.red};
          font-size: 18px;
          font-weight: 600;
          height: 48px;
          text-decoration: none;
          cursor: pointer;

          &:hover {
            background-color: ${(props) => props.theme.colors.base.red};
            color: #fff;
          }
        }
      }
    }

    @media screen and (max-width: 768.99px) {
      padding: 40px 0;

      .cards-container {
        overflow: auto;
        width: 100%;
        justify-content: flex-start;
      }
    }
  }

  #newsletter {
    padding: 100px 0;
    background-color: ${(props) => props.theme.colors.base.red};
    color: #fff;

    .newsletter-container {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 80px;
      justify-content: center;
      z-index: 10;
    }

    .newsletter-info {
      display: flex;
      flex-direction: column;

      .text {
        margin: 0 0 16px;
        text-align: center;
      }

      form {
        display: flex;
        flex-direction: column;
      }

      input {
        height: 50px;
        border: 2px solid #fff;
        border-radius: 2px;
        line-height: 50px;
        font-size: 18px;
        padding: 0 16px;
        background-color: transparent;
        color: #fff;
      }

      .button-newsletter {
        border: 2px solid #fff;
        height: 40px;
        margin: 16px 0 0;
        background-color: #fff;
        color: ${(props) => props.theme.colors.base.red};
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        transition: 200ms ease-in-out all;

        &:hover {
          background-color: transparent;
          color: #fff;
          transition: 200ms ease-in-out all;
        }
      }
    }

    @media (max-width: 1024px) and (min-width: 769px) {
      .img-newsletter {
        display: none;
      }
      .newsletter-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0;
      }

      .newsletter-info {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        align-content: center;
        justify-content: center;
        width: 100%;

        .text {
          margin: 36px 0px 40px 0px;
          text-align: center;
          width: 100%;
        }

        input {
          width: 40% !important;
        }

        .button-newsletter {
          margin: 0px 0px 0px 12px;
          height: 50px;
          width: 40% !important;
        }
      }

      .form-area {
        display: flex;
        width: 100%;
        justify-content: center;
        flex-direction: row !important;
      }
    }

    @media screen and (max-width: 768.99px) {
      padding: 40px 0;

      .newsletter-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0;
      }

      .newsletter-info {
        align-self: normal;
        margin: 40px 0 0;
      }

      .text {
        font-size: 18px;
      }
    }
  }
`;
