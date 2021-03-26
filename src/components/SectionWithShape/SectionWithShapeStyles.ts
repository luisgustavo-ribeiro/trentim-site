import styled from "styled-components";

export const SectionWithShapeStyles = styled.section`
  display: flex;
  padding: 120px 0;
  align-items: center;

  .section-container {
    display: grid;    
    gap: 200px;
    width: 100%;

    .img-w-shape {
      position: relative;

      .shape-image {
        position: absolute;
        margin: 0;
        height: 290px;
        width: 290px;
        border-width: 10px;
      }

      .shape-left {
        top: -30px;
        left: -30px;
      }

      .shape-right {
        bottom: -30px;
        right: 30px;
      }
    }

    .img-container {
      display: flex;
      width: 100%;
      height: 290px;
      overflow: hidden;
      z-index: 1;

      img {
        display: flex;
        object-fit: cover;
        width: 100%;
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
