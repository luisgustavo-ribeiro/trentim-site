import styled from "styled-components";

export const FooterStyles = styled.footer`
  position: relative;
  background-color: #fff;
  color: ${props => props.theme.colors.base.purple};
  padding: 150px 0;

  .title-area {
    display: flex;
    align-items: center;
    font-size: 48px;

    .title {
      padding: 0 0 12px;
    }
  }
`;
