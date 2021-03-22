import styled from "styled-components";

export const ContactStyle = styled.section`
  background-color: ${(props) => props.theme.colors.dark.yellow};
  transition: 10s ease-in-out all;
  padding: 100px 0;

  &:hover {
    background-color: ${(props) => props.theme.colors.base.orange};
    transition: 10s ease-in-out all;
  }

  .contact-form {
    background-color: #fff;
    padding: 30px 60px 100px;
    border-radius: 2px;
    min-width: 600px;

    .form-info {
      width: 100%;
    }

    .title-area {
      display: flex;
      color: ${(props) => props.theme.colors.dark.yellow};
      font-size: 48px;
      margin: 0 0 24px;
      align-items: center;
      justify-content: center;

      .title {
        padding: 0 0 12px;
      }
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

      .title {
        font-size: 48px;
        padding: 0 0 12px;
      }
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
`;
