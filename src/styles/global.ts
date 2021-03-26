import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 16px system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    background-color: #fafafa;
  }

  .detail {
    display: flex;
    position: absolute;
    z-index: 1;
  }

  .container {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 1320px;
    padding: 0 20px;
    margin: 0 auto;

    &.col {
      flex-flow: column;
    }
  }

  .shape {
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: 5px solid;
    margin: 0 20px;

    &.open {
      height: 100px;
      width: 100px;      
    }

    &.square {
      border-radius: 0;
    }

    &.postIt {
      border-top-left-radius: 50%;
    }
    
    &.person {
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
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

  .title-area {
    display: flex;
    align-items: center;
    font-size: 48px;

    .shape {
      margin-left: 0 !important;
    }

    .title {
      padding: 0 0 12px;      
    }
  }

  @media screen and (max-width: 640px) {
    .detail {
      display: none;
    }

    .title-area {
      font-size: 24px;

      .shape {
        width: 30px !important;
        height: 30px !important;
        border-width: 3px !important;       
      }

      .title {
        padding: 0 0 6px;
      }
    }
  }

`
