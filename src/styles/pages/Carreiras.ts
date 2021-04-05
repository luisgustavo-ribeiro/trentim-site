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

    @media screen and (max-width: 768px) {
      padding: 40px 0;

      .video-section {
        overflow: auto;
        grid-template-columns: repeat(3,200px);
        
        iframe {
          width: 200px;
          height: 120px;
        }
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

      a {
        display: flex;        
        background-color: #FFF;
        border: 2px solid #FFF;
        border-radius: 2px;
        height: 50px;
        line-height: 40px;
        width: 100%;
        color: ${props => props.theme.colors.dark.pink};
        font-size: 24px;
        cursor: pointer;
        text-decoration: none;
        justify-content: center;
        transition: 160ms ease-in-out all;

        &:hover {
          color: #FFF;
          background-color: transparent;
          transition: 160ms ease-in-out all;
        }
      }

      @media screen and (max-width: 768px) {
        margin: auto;
      }
    }
  }
`