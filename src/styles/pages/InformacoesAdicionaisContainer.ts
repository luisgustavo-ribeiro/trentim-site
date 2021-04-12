import styled from "styled-components";

export const Hero = styled.section`
  position: relative;
  padding: 160px 0 100px;
  width: 100%;
  background-color: ${props => props.theme.colors.base.blue2};
  color: #FFF;
  text-transform: uppercase;

  .detail {
    position: absolute;
    top: 0;
    z-index: 0;
    opacity: 0.5;
  }

  .title {
    font-size: 32px;
    font-weight: 600;
    z-index: 10;
  }
`;

export const InformacoesAdicionaisContainer = styled.section`
  display: flex;
  padding: 50px 0 0;

  .info-block {
    position: relative;
    margin: 0;
    max-width: 700px;

    .title {
      color: ${props => props.theme.colors.base.blue2};
      line-height: 1.5;
      margin: 60px 0 24px;
    }

    .text {
      white-space: pre-line;
      line-height: 1.6;
      font-size: 18px;
      margin: 0;
    }
  }
`;