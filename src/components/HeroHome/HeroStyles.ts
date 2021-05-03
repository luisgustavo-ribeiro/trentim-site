import styled from "styled-components";
import HOME_BG from "../../assets/img/pages/home/home-hero.jpg";

export const HeroContent = styled.section`
  width: 100%;

  .hero-banner {
    display: flex;
    flex-direction: column;
    height: 600px;
    background: linear-gradient(
        to right,
        rgba(0, 114, 198, 0.85),
        rgba(0, 114, 198, 0.85)
      ),
      url("${HOME_BG}");
    background-size: cover;
    overflow: hidden;
    position: relative;

    .hero-title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      z-index: 10;
      color: #fff;

      .shape {
        width: 8vmax;
        height: 8vmax;
        border-width: 1vmax;
        margin-left: 0;
        margin-right: 30px;
      }

      .title {
        display: flex;
        align-items: center;
        font-size: 8vmax;
        padding: 0 0 2vmax;
      }

      .title-center {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
      }
    }

    .hero-subtitle {
      font-size: 24px;
      line-height: 1.6;
      display: flex;
      align-items: center;
      text-align: center;
    }
  }

  .bg-container {
    position: absolute;
    opacity: 0.1;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    height: 560px;
    width: 100%;
    z-index: 1;
    background-repeat: repeat-x;
    background-position: left center;
  }

  .white-banner {
    width: 100%;
    display: flex;
    padding: 72px 0;
    background-color: #fff;
  }

  .hero-cases {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 200px;

    .box-info {
      position: relative;
      display: flex;
      align-items: center;

      .info {
        display: none;
        grid-auto-rows: auto;
        gap: 24px;

        .title {
          font-size: 24px;
          font-weight: 600;
        }

        .text {
          font-size: 18px;
          line-height: 1.5;
        }
        &.active {
          display: grid;
        }
      }

      .btn-case {
        display: flex;
        font-size: 18px;
        font-weight: 600;
        text-decoration: none;
        color: ${(props) => props.theme.colors.base.blue2};
        justify-self: flex-start;
      }
    }

    .box-logos {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      justify-content: center;
      align-items: center;
      align-content: center;
      justify-items: center;

      .logo {
        cursor: pointer;
        opacity: 0.5;
        filter: grayscale(1);
        transition: 200ms ease-in-out all;
        &:hover {
          opacity: 1;
          transition: 200ms ease-in-out all;
        }
        &.active {
          opacity: 1;
          filter: grayscale(0);
          transition: 200ms ease-in-out all;
        }
      }
    }
  }

  @media screen and (max-width: 1024.99px) {
    .hero-cases {
      gap: 24px;

      .box-logos {
        grid-template-columns: repeat(2, minmax(100px, 1fr));
      }

      img {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 768.99px) {
    .hero-banner {
      height: 400px;

      .hero-subtitle {
        font-size: 14px;
        line-height: 19px;
        font-style: normal;
        font-weight: 600;
        display: flex;
        align-items: center;
        text-align: center;
      }
    }

    .shape {
      width: 60px;
      height: 60px;
      border-width: 8px;
    }

    .title {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
    }

    .hero-subtitle {
      font-size: 14px;
    }

    .hero-cases {
      height: 400px;
      grid-template-columns: 1fr;
      gap: 24px;

      .box-info {
        order: 1;
        grid-template-columns: repeat(4, 1fr);
        .info {
          .title {
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 24px;
          }
          .text {
            font-size: 14px;
            line-height: 1.5;
          }
        }
      }

      .box-logos {
        grid-template-columns: repeat(4, 1fr);
        gap: 32px;
        overflow: auto;
        justify-content: flex-start;

        .logo {
          display: flex;

          img {
            height: 60px;
            width: 110px;
            object-fit: contain;
          }
        }
      }
    }
  }
`;
