import styled from "styled-components";

export const ShapesStyles = styled.div`
  display: flex;
  position: relative;

  .shape-inline {
    position: absolute;
    top: -25px;
    left: -25px;
    z-index: 1;
    border-width: 4px;
  }
  .shape-filled {
    position: relative;
    z-index: 0;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
.shape-inline {
    position: absolute;
    top: -10px;
    left: -15px;
    z-index: 1;
    border-width: 3px;
  }
  .shape-filled {
    position: relative;
    z-index: 0;
  }
  }
`;