import styled from "styled-components";

export const WhiteBannerStyles = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  background-color: white;

  p {
    color: ${(props) => props.theme.colors.base.blue2};
    font-size: 24px;
    line-height: 1.6;
    text-align: center;
    align-self: center;
    margin: 0 auto;
  }
`;
