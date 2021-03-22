import styled from "styled-components";

export const NewsletterStyles = styled.section`
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

  .title-area {
    display: flex;
    align-items: center;

    .title {
      font-size: 48px;
      padding: 0 0 12px;
    }
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
`;
