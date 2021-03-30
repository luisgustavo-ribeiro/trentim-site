import styled from "styled-components";

export const SectionCasesStyles = styled.section`
  position: relative;
  margin: 70px 0 100px;
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
        width: 100%;
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
    }
  }
`;