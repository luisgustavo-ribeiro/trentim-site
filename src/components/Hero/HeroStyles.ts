import styled from "styled-components";

export const HeroStyles = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.base.blue2};
  height: 600px;
  overflow: hidden;

  .detail {
    position: absolute;
    opacity: 0.1;
    top: 50%;
    transform: translateY(-50%);
    width: 1280px;
    overflow: hidden;
    z-index: 1;
  }

  .logo {
    display: flex;
    margin: 0 0 20px -4px;
  }

  .hero-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: #fff;

    .col {
      overflow: hidden;

      &.left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0px 80px;
        z-index: 2;

        .hero-title {
          font-size: 36px;
          font-weight: 600;
          margin: 0 0 24px;

          @media screen and (min-width: 769px) and (max-width: 1024.99px) {
            font-size: 24px;
            margin-left: -100px;
          }

          .subtitle {
            margin: 8px 0 0;
            font-size: 24px;
            font-weight: 600;          
          }
        }

        p {
          font-size: 24px;
          line-height: 1.6;

          @media screen and (min-width: 769px) and (max-width: 1024.99px) {
            font-size: 18px;
            margin-left: -100px;
          }
        }
      }

      &.right {
        position: relative;
        display: flex;

        @media screen and (min-width: 769px) and (max-width: 1024.99px) {
          margin-right: -20px;
        }

        img {
          width: 100%;
          object-fit: cover;
          display: flex;
        }
      }
    }
  }

  @media screen and (max-width: 1024.99px) {
    .hero-columns {
      grid-template-columns: 1fr 1fr;

      .col.left {
        padding: 0 100px;
      }
    }
  }

  @media screen and (max-width: 768.99px) {
    overflow: hidden;
    height: 400px;

    .hero-columns {
      display: flex;
      flex-direction: column;

      .col {
        &.left {
          padding: 0;
          height: 100%;
          justify-content: center;

          p,
          .hero-title .subtitle {
            font-size: 18px;
          }
        }
        &.right {
          display: none;
        }
      }
    }

    .detail {
      display: flex !important;
      left: 0;
    }
  }
  
  @media screen and (min-width: 768.99px) and (max-width: 1024.99px) {
    .container {
      padding-right: 0;
    }
  }
`;
