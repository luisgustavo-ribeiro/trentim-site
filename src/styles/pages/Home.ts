import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  section {
    position: relative;
  }

  #white-banner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    background-color: white;    

    p {
      color: ${(props) => props.theme.colors.base.blue2};
      font-size: 24px;
      line-height: 1.6;
      text-align: center;
      align-self: center;
      margin: 0 auto;

      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
    }
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

      img {
        object-fit: cover;
        width: 100%;
      }
    }

    .partner-block {
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 48px;
      padding-right: 0;
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
        left: -24px;
        height: 48px;
        width: 48px;
        transform: rotate(45deg);
        z-index: 9;
        background-color: ${(props) => props.theme.colors.base.cyan};
      }
    }

    .partner-block-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;

      .info-title {
        text-align: right;
        font-weight: 400;
        padding: 24px;
        padding-left: 0;
        border-right: 3px solid #fff;
      }
    }

    .info-list {
      list-style: none;
      padding-left: 24px;
      font-weight: 300;
    }

    @media screen and (max-width: 768px) {
      height: auto;

      .container {
        flex-direction: column;
        padding: 0;
      }

      .image-block {
        width: 100%;
        height: 200px;
      }

      .partner-block {
        width: 100%;
        padding: 20px;
        height: 200px;

        &:before {
          top: -24px;
          left: auto;
          right: 40px;
        }
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
        }
      }
    }

    @media screen and (max-width: 768px) {
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

    &:hover {
      background-color: ${(props) => props.theme.colors.base.orange};
      transition: 10s ease-in-out all;

      .form-info {
        .title-area {
          color: ${(props) => props.theme.colors.base.orange};
          transition: 10s ease-in-out all;
        }

        .send-button {
          background-color: ${(props) => props.theme.colors.base.orange};
          border-color: ${(props) => props.theme.colors.base.orange};
          transition: 10s ease-in-out all;
        }
      }
    }

    .contact-form {
      background-color: #fff;
      padding: 30px 60px 100px;
      border-radius: 2px;
      min-width: 600px;
      z-index: 2;

      .form-info {
        width: 100%;
      }

      .title-area {
        color: ${(props) => props.theme.colors.dark.yellow};
        margin: 0 0 24px;
        justify-content: center;
      }

      .subtitle {
        margin: 0 0 24px;
      }

      .extra {
        margin: 0 0 30px;
      }

      .subtitle,
      .extra {
        text-align: center;
        font-size: 18px;
        color: ${(props) => props.theme.colors.base.gray2};
      }

      .form-group {
        display: flex;
        flex-direction: column;
        position: relative;
        margin: 0 0 10px;

        input {
          height: 50px;
          line-height: 50px;
          border: 1px solid #828282;
          border-radius: 2px;
          padding: 0 16px;
          font-size: 18px;
          color: ${(props) => props.theme.colors.base.gray2};

          &:focus,
          &:active {
            outline-color: ${(props) => props.theme.colors.dark.yellow};
          }
        }

        label {
          position: absolute;
          left: 12px;
          padding: 0 4px;
          font-size: 18px;
          top: 12px;
          transition: 200ms ease-in-out all;

          &.has-value {
            top: -10px;
            background-color: #fff;
            font-size: 12px;
            transition: 200ms ease-in-out all;
          }
        }

        .error-msg {
          display: none;
          color: ${(props) => props.theme.colors.base.red};
          font-size: 12px;

          &.show-error {
            display: block;
          }
        }
      }

      .send-button {
        cursor: pointer;
        display: flex;
        width: 100%;
        height: 64px;
        border: 2px solid ${(props) => props.theme.colors.dark.yellow};
        border-radius: 2px;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 24px;
        font-weight: 700;
        background-color: ${(props) => props.theme.colors.dark.yellow};
        transition: 160ms ease-in-out all;

        &:hover {
          color: ${(props) => props.theme.colors.dark.yellow};
          background-color: transparent;
          transition: 160ms ease-in-out all;
        }
      }
    }

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

      .btn-work {
        height: 50px;
        width: 300px;
        border: 1px solid #fff;
        background-color: #fff;
        color: ${(props) => props.theme.colors.dark.yellow};
        font-size: 24px;
        border-radius: 2px;
        margin: 0 auto;
        cursor: pointer;
      }
    }

    @media screen and (max-width: 768px) {
      padding: 30px 0 70px;

      .container {
        flex-direction: column;
      }

      .contact-form,
      .contact-info {
        padding: 30px 16px;
        min-width: 100%;
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
          cursor: pointer;

          &:hover {
            background-color: ${(props) => props.theme.colors.base.red};
            color: #fff;
          }
        }
      }
    }

    @media screen and (max-width: 768px) {
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
        margin: 16px 0 0;
        background-color: #fff;
        color: ${(props) => props.theme.colors.base.red};
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
      }
    }

    @media screen and (max-width: 768px) {
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
