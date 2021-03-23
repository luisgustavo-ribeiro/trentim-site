import styled from "styled-components";

export const BlogStyles = styled.section`
  background-color: #fff;
  color: ${(props) => props.theme.colors.base.red};
  padding: 100px 0;

  .title-area {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 60px;
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(3, 280px);
    gap: 20px;
    justify-content: center;

    .card {
      width: 100%;
      height: 420px;
      border-radius: 2px;
      overflow: hidden;
      background-color: ${(props) => props.theme.colors.base.gray6};
      z-index: 1;

      .img-container {
        height: 180px;
        width: 100%;
        overflow: hidden;

        img {
          object-fit: cover;
          width: 100%;
        }
      }

      .title {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin: 8px 16px;
        font-size: 18px;
        font-weight: 600;
        color: ${(props) => props.theme.colors.base.gray2};
      }

      .text {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin: 0 16px 16px;
        font-size: 14px;
        color: ${(props) => props.theme.colors.base.gray3};
      }

      .button-container {
        width: 100%;
        padding: 0 16px 16px;
      }

      .button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        border: 2px solid ${(props) => props.theme.colors.base.red};
        color: ${(props) => props.theme.colors.base.red};
        font-size: 18px;
        font-weight: 600;
        height: 48px;
        cursor: pointer;

        &:hover {
          background-color: ${(props) => props.theme.colors.base.red};
          color: #fff;
        }
      }
    }
  }
`;
