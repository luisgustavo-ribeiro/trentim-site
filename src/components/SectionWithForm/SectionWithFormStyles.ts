import styled from "styled-components";

export const SectionWithFormStyles = styled.section`
  display: flex;
  padding: 120px 0;
  align-items: center;

  .section-container {
    display: grid;
    grid-template-columns: repeat(2, 500px);
    gap: 100px;

    .img-container {
      width: 100%;
      height: 290px;
      position: relative;
      z-index: 1;
    }
  }
`