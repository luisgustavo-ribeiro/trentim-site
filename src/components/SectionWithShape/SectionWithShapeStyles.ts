import styled from "styled-components";

export const SectionWithShapeStyles = styled.section`
  display: flex;
  padding: 120px 0;
  align-items: center;

  .section-container {
    display: grid;    
    gap: 200px;
    width: 100%;
    align-items: center;

    .media-w-shape {
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

      iframe {
        background-color: #000;
      }
    }

    .col {
      .title {
        font-size: 36px;
        font-weight: 600;
        margin: 0 0 24px;
      }

      .text {
        font-size: 18px;
        line-height: 1.6
      }
    }
  }
`
