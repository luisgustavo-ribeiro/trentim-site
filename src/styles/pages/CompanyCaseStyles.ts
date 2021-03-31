import styled from "styled-components";

export const CompanyCaseStyles = styled.section`
  position: relative;
  background-color: #fff;

  .case-item-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 600px;
  }

  .block {
    position: relative;

    &.info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 72px;

      .title {
        color: ${props => props.theme.colors.base.gray2};
        font-size: 24px;
        margin: 0 0 48px;
        font-weight: 600;
        align-self: end;
      }

      p {
        white-space: pre-line;
        font-size: 18px;
        line-height: 1.4;
      }
    }

    &.image {
      overflow: hidden;
      display: flex;

      img {
        display: flex;
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;
