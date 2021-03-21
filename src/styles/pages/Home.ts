import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  .white-banner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    background-color: white;

    p {
      color: ${(props) => props.theme.otherColor.blue};
      font-size: 24px;
      line-height: 1.6;
      text-align: center;
      align-self: center;
      margin: 0 auto;
    }
  }

  #ms-partnership {
    display: flex;
    height: 450px;
    background-color: ${(props) => props.theme.mainColor.tec};
    
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
      background-color: ${(props) => props.theme.mainColor.tec};
      color: #fff;
      width: 430px;
      z-index: 10;
      margin-left: auto;

      :before {
        content: "";
        position: absolute;
        top: calc(50% - 24px);
        left: -24px;
        height: 48px;
        width: 48px;
        transform: rotate(45deg);
        z-index: 9;
        background-color: ${(props) => props.theme.mainColor.tec};
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
  }

  #process {
    height: 100vh;
    background-color: #fff;
    color: ${(props) => props.theme.mainColor.exp};
    padding: 100px 0;

    .section-title {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 48px;
      font-weight: 400;
    }
    
    .process-forms {
      display: flex;
      justify-content: center;
    }
  }

  .form {
    width: 48px;
    height: 48px;
    background-color: transparent;
    border: 4px solid;
    margin: 0 20px;

    &.square {
      border-radius: 0;
    }

    &.postIt {
      border-top-left-radius: 50%;
    }

    &.lemon {
      border-top-left-radius: 50%;
      border-bottom-right-radius: 50%;
    }

    &.chat {
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
      border-bottom-right-radius: 50%;
    }

    &.circle {
      border-radius: 100%;
    }
  }
`;
