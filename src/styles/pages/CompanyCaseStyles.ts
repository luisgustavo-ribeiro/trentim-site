import styled from "styled-components";

export const CompanyCaseStyles = styled.section`
  background-color: #fff;
  position: relative;

  .hero-columns {
    p {
      font-size: 36px !important;
      line-height: 1.4 !important;
    }
  }

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
        color: ${(props) => props.theme.colors.base.gray2};
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

  #contact {
    background-color: ${props => props.theme.colors.dark.yellow};
  }

  @media screen and (max-width: 768.99px) {
    .case-item-container {
      display: flex;
      flex-flow: column nowrap;
      margin: 0 -20px;
      height: auto;
    }

    .block {

      &.image {
        order: 0;
        height: 200px;

        img {
          object-position: top center;
        }
      }

      &.info {
        padding: 0 20px;
        order: 1;
        margin: 0 0 40px;

        .title {
          margin: 30px 0;
          font-size: 18px;
        }

        p {
          font-size: 14px;
        }
      }
    }

    #contact {
      padding: 30px 0;
    }
  }
`;
