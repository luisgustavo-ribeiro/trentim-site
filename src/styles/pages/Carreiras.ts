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

      iframe {
        width: 100%;
        height: 220px;
        background-color: #000;
        border: 5px solid #c4c4c4
      }
    }
  }

  #carreiras-vagas {
    padding: 60px 0;
    background-color: ${props => props.theme.colors.dark.pink};

    .bloco-vagas {
      display: flex;
      flex-direction: column;
      text-align: center;

      .title {
        color: #FFF;
        font-size: 48px;
        margin: 0 0 42px;
      }

      .text {
        color: #FFF;
        font-size: 18px;
        margin: 0 0 27px;
      }

      button {
        background-color: #FFF;
        border: 2px solid #FFF;
        height: 50px;
        width: 100%;
        color: ${props => props.theme.colors.dark.pink};
        font-size: 24px;
        cursor: pointer;

        &:hover {
          background-color: transparent;
          color: #FFF;
        }
      }
    }
  }
`