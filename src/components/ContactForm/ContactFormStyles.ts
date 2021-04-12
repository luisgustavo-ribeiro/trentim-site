import styled from "styled-components";

export const ContactFormStyles = styled.div`
  background-color: #fff;
  padding: 30px 60px 100px;
  border-radius: 2px;
  min-width: 600px;
  z-index: 9;

  .form-info {
    width: 100%;
  }

  .title-area {
    color: ${(props) => props.theme.colors.dark.yellow};
    margin: 0 0 24px;
    justify-content: center;
    transition: 10s ease-in-out all;
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

    input:not([type="checkbox"]),
    select {
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

    textarea {
      padding: 8px 16px;
      font: 400 18px system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
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

    &.checkbox {
      label {
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
        padding: 0;
        top: 0;
        left: 0;
      }
    }
  }

  #contactPreference {
    font-size: 18px;

    .title {
      margin: 0 0 8px;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        display: inline-flex;

        &:not(:last-child) {
          margin-right: 32px;
        }
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
    transition: 10s ease-in-out all;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  @media screen and (max-width: 768.99px) {
    min-width: 100%;
    padding: 24px 16px 16px;
  }
`;
