import styled from "styled-components";

export const HeroStyles = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.base.blue2};
  height: 610px;

  .detail {
    opacity: 0.2;
    top: 50%;
    transform: translateY(-50%);
    width: 1280px;
    overflow: hidden;
  }

  .hero-columns {
    display: grid;
    grid-template-columns: 720px 560px;
    color: #fff;

    .col {
      overflow: hidden;

      &.left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-right: 300px;

        .hero-title {
          font-size: 36px;
          font-weight: 600;
          margin: 0 0 24px;
        }

        p {
          font-size: 24px;
          line-height: 1.6;
        }
      }

      &.right {
        position: relative;
        display: flex;

        img {
          width: 100%;
          object-fit: cover;
          object-position: right;
          display: flex;
        }
      }
    }
  }
`;
