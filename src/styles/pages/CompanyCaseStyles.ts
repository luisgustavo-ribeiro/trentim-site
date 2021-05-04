import styled from "styled-components";

export const CompanyCaseStyles = styled.div`
  background-color: #fff;
  position: relative;

  #case-hero {
    height: 400px;
    display: flex;
    width: 100%;
    background-size: cover !important;
    margin: 0 0 80px;

    @media screen and (max-width: 768.99px) {
      margin: 0;
    }

    .hero-items {
      width: 100%;
      display: grid;
      grid-template-rows: 80px auto;
      gap: 32px;
      align-items: center;
      align-content: center;
      justify-content: center;
      justify-items: center;
      color: #fff;

      .logo {
        display: flex;
        height: 80px;

        img {
          height: 100%;
        }
      }

      .text {
        font-size: 24px;
        font-weight: 600;
        white-space: pre-wrap;
        text-align: center;
      }
    }
  }

  .case-item-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .block {
    position: relative;

    &.info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px 72px;

      .title {
        color: ${(props) => props.theme.colors.base.gray2};
        font-size: 24px;
        margin: 0 0 48px;
        font-weight: 600;
        align-self: end;
      }

      p {
        white-space: pre-line;
        font-size: 18px;
        line-height: 1.4;
      }
    }

    &.image {
      overflow: hidden;
      display: flex;

      img {
        display: flex;
        width: 100%;
        object-fit: cover;
      }
    }
  }

  .used-tech {
    display: flex;
    flex-flow: column;
    margin: 48px 0 48px 72px;

    @media screen and (max-width: 768.99px) {
      margin: 48px 0 0;
    }

    .title {
      font-size: 24px;
      margin: 0 0 32px;
      color: ${props => props.theme.colors.base.gray2}
    }

    .tech-icons {
      display: inline-flex;
      margin: 0 0 32px;
    }

    .icon-box {
      display: flex;
      height: 64px;
      width: 64px;
      padding: 14px;
      font-size: 36px;
      background-color: ${(props) => props.theme.colors.base.gray4};
      margin-right: 24px;
      color: #fff;
    }
  }

  #contact {
    position: relative;
    background-color: ${(props) => props.theme.colors.dark.yellow};
    padding: 60px 0;
    margin: 100px 0 0;
  }

  @media screen and (max-width: 768.99px) {
    .case-item-container {
      display: flex;
      flex-flow: column nowrap;
      margin: 0 -20px;
      height: auto;
    }

    .block {
      &.image {
        order: 0;
        height: 200px;

        img {
          object-position: top center;
        }
      }

      &.info {
        padding: 0 20px;
        order: 1;
        margin: 0 0 40px;

        .title {
          margin: 30px 0;
          font-size: 18px;
        }

        p {
          font-size: 14px;
        }
      }
    }

    #contact {
      padding: 30px 0;
    }
  }
`;
