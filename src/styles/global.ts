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

  .title-area {
    display: flex;
    align-items: center;
    font-size: 48px;

    .form {
      margin-left: 0;
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

      .form {
        width: 30px;
        height: 30px;
        border-width: 3px;        
      }

      .title {
        padding: 0 0 6px;
      }
    }
  }

`
