import styled from "styled-components";

export const ProcessStyle = styled.section`
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
      max-width: 800px;
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

  @media screen and (max-width: 640px) {

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
`;
