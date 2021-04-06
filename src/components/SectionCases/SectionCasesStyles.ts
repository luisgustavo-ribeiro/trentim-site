import styled from "styled-components";

export const SectionCasesStyles = styled.section`
  position: relative;
  margin: 70px 0 0;
  height: 650px;  

  .columns {
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;

    &.img-left {
      .col.right {
        padding: 0 80px;
      }
    }

    &.img-right {
      .col.left {
        padding-right: 160px;
      }
    }
  }

  .col {
    display: flex;
    width: 100%;
    align-items: center;
  }

  .block {
    position: relative;

    &.image {
      display: flex;
      width: 100%;
      height: 100%;
      overflow: hidden;

      img {
        display: flex;
        object-fit: cover;
      }
    }

    &.info {
      display: flex;
      flex-direction: column;

      .logo-container {
        height: 56px;
        margin: 0 0 20px;

        img {
          height: 100%;
        }
      }

      .title {
        font-size: 24px;
        font-weight: 600;
        margin: 0 0 24px;
      }

      .text {
        font-size: 18px;
      }

      .btn-cases {
        display: flex;
        align-self: end;
        border: 2px solid;
        border-radius: 2px;
        height: 48px;
        font-size: 16px;
        font-weight: 600;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        min-width: 160px;
        transition: 200ms ease-in-out all;
        text-decoration: none;
        margin: 32px 0 0;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
    }
  }

  @media screen and (max-width: 768.99px) {
    margin: 0;
    height: auto;
  }

  .case-mobile {
    display: flex;
    flex-direction: column;
    flex: 1;

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 40px 0;
    }

    .image {
      margin: 0 -20px;
      position: relative;
      height: 200px;
      overflow: hidden;

      img {
        display: flex;
        width: 100%;
        object-fit: cover;
        object-position: center center;
        height: 100%;
      }
    }

    .title {
      font-size: 18px;
      font-weight: 600;
      margin: 32px 0 24px;
    }

    .text {
      font-size: 14px;
      margin: 0 0 24px;
    }

    .btn-cases {
      display: flex;
      border: 2px solid;
      text-decoration: none;
      height: 40px;
      align-items: center;
      padding: 0 16px;
      justify-content: center;
      margin: 0 0 40px;
    }
  }
`;
