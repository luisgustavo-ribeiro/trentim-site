import styled from "styled-components";

export const SectionWithShapeStyles = styled.section`
  display: flex;
  padding: 120px 0;
  align-items: center;

  .shape {
    margin: 0 !important;
  }

  p {
    white-space: pre-line;
  }

  .section-container {
    display: grid;
    gap: 200px;
    width: 100%;
    align-items: center;

    iframe {
      border: none;
    }

    &.multi-info {
      .col,
      .media-shape,
      .media-container {
        height: 100%;
      }
    }

    .media-shape {
      position: relative;

      .shape-image {
        position: absolute;
        margin: 0;
        height: 290px;
        width: 290px;
        border-width: 16px;
      }

      .shape-left {
        top: -30px;
        left: -30px;
      }

      .shape-right {
        bottom: -30px;
        right: 15px;
      }
    }

    .media-container {
      position: relative;
      display: flex;
      width: 100%;
      height: 290px;
      overflow: hidden;
      z-index: 0;

      img {
        display: flex;
        object-fit: cover;
        width: 100%;
      }
    }

    .col {

      .info-box {
        padding: 40px 0;
      }

      .title {
        font-size: 36px;
        font-weight: 600;
        margin: 0 0 24px;
      }

      .text {
        font-size: 18px;
        line-height: 1.6;
      }

      .multi-shapes {
        position: absolute;
        z-index: 2;
        top: calc(50% - 50px);
      }
      
      .title-area {
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin: 0 0 40px;

        .title,
        .subtitle {
          font-size: 24px;
          margin: 0;
          padding: 0;
        }
      }

      .shape-container {
        display: flex;
        position: absolute;
        top: calc(50% - 50px);
        z-index: 10;
      }

      &.left {
        .shape-container {
          right: -50px;
        }
      }

      &.right {
        .shape-container {
          left: -50px;
        }
      }
    }
  }

  .section-container.mobile {
    display: flex;
    flex-flow: column nowrap;
    gap: 0;

    iframe {
      position: absolute;
      height: 100%;
    }

    .block-media {
      .media-container {
        height: 200px;
      }

      .shape-image {
        height: 200px;
        width: 200px;
        border-width: 10px;
      }

      .shape-left {
        top: -20px;
        left: -20px;
      }

      .shape-right {
        bottom: -20px;
        right: 15px;
      }
    }

    .block-media,
    .block-text {
      position: relative;
      width: 100%;
    }

    .block-text {
      .title {
        font-size: 24px;
        margin: 24px 0;
        font-weight: 600;
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024.99px) {
    .section-container {
      grid-template-columns: 1fr 1fr !important;
      gap: 20px !important;

      .col {
        .title {
          font-size: 24px;
        }
        .text {
          font-size: 1rem;
        }
        &.left {
          padding: 0 !important;
        }
        &.right {
          padding: 0 !important;
        }
      }
    }
  }

  @media screen and (max-width: 768.99px) {
    padding: 32px 0 40px;
  }
`;

export const SectionWithShapeMobile = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 !important;

  .title-area {
    display: flex;
    flex-direction: column;
    margin: 0 0 24px;

    .title {
      padding: 0;
      font-weight: 600;
    }

    .title, 
    .subtitle {
      align-self: end;
    }
  }

  .title-n-shape {
    display: grid;
    grid-template-columns: 75px 1fr;

    .shape-inline { 
      top: -12px;
      left: -12px;
    }
  }

  .info-box {
    margin: 0 0 20px;
  }

`;