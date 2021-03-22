import styled from "styled-components";

export const ProcessStyle = styled.section`
  background-color: #fff;
  color: ${(props) => props.theme.colors.base.aqua};
  padding: 100px 0;
  min-height: 680px;

  .section-title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    font-weight: 400;
  }

  .section-subtitle {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    margin: 24px 0 40px;
    color: ${(props) => props.theme.colors.base.gray3};
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
      max-width: 800px;
      width: 100%;
    }

    .text-container {
      text-align: center;
    }

    .form {
      cursor: pointer;
    }

    .text {
      color: ${props => props.theme.colors.base.gray3};
      font-size: 18px;
      line-height: 1.4;
      display: none;

      &.open {
        display: block;
      }
    }
  }
`;
