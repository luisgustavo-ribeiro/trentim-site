import styled from "styled-components";

export const CarreirasContainer = styled.div`
  display: flex;
  flex-direction: column;

  #carreiras-videos {
    padding: 80px 0;
    position: relative;

    .video-section {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 36px;
      width: 100%;
      z-index: 9;

      iframe {
        width: 100%;
        height: 220px;
        border: none;

        @media screen and (max-width: 1024.99px) {
          background-color: #000;
        }
      }
    }

    @media screen and (max-width: 768.99px) {
      padding: 40px 0;

      .video-section {
        overflow: auto;
        grid-template-columns: repeat(3, 200px);

        iframe {
          width: 200px;
          height: 120px;
        }
      }
    }
  }

  #carreiras-vagas {
    padding: 60px 0;
    background-color: ${(props) => props.theme.colors.dark.pink};

    .bloco-vagas {
      display: flex;
      flex-direction: column;
      text-align: center;
      z-index: 10;

      .title {
        color: #fff;
        font-size: 48px;
        margin: 0 0 42px;
      }

      .text {
        color: #fff;
        font-size: 18px;
        margin: 0 0 27px;
      }

      a {
        display: flex;
        background-color: #fff;
        border: 2px solid #fff;
        border-radius: 2px;
        height: 50px;
        line-height: 40px;
        width: 100%;
        color: ${(props) => props.theme.colors.dark.pink};
        font-size: 24px;
        cursor: pointer;
        text-decoration: none;
        justify-content: center;
        transition: 160ms ease-in-out all;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;

        &:hover {
          color: #fff;
          background-color: transparent;
          transition: 160ms ease-in-out all;
        }
      }

      @media screen and (max-width: 768.99px) {
        margin: auto;
      }

      @media screen and (min-width: 480.99px) and (max-width: 768.99px) {
        .shape-sv-carreiras {
          .shape-left {
            left: 20%;
          }
        }
      }
    }
  }
`;
