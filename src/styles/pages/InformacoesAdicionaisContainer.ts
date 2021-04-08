import styled from "styled-components";

export const InformacoesAdicionaisContainer = styled.section`
  display: flex;
  padding: 100px 0;

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