import styled from "styled-components";

export const ShapesStyles = styled.div`
  display: flex;
  position: relative;

  .shape-inline {
    position: absolute;
    top: -12px;
    left: -12px;
    z-index: 1;
    border-width: 4px;
  }
  .shape-filled {
    position: relative;
    z-index: 0;
  }
`;