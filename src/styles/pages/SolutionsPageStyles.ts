import styled from "styled-components";

export const SolutionsPage = styled.div`

  section {
    padding: 0;
    margin: 50px 0;
  }

  .section-container .media-container {
    height: 350px;
  }

  #solutions-banner {
    padding: 60px 0;
    background-color: ${props => props.theme.colors.base.blue2};
    overflow: hidden;
    position: relative;

    .sq-details {
      bottom: -190px;
      opacity: 0.2;
      z-index: 0
    }

    p {
      color: #FFF;
      font-size: 24px;
      text-align: center;
      z-index: 10;
      width: 100%;
    }
  }
`;

export const SolutionsPageMobile = styled.div``;
