import styled from "styled-components";

export const MSPartnershipStyle = styled.div`
  display: flex;
  height: 450px;
  background-color: ${(props) => props.theme.colors.base.cyan};

  .image-block {
    display: flex;
    overflow: hidden;
    width: calc(100% - 430px);

    img {
      object-fit: cover;
      width: 100%;
    }
  }

  .partner-block {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 48px;
    padding-right: 0;
    justify-content: center;
    height: 100%;
    background-color: ${(props) => props.theme.colors.base.cyan};
    color: #fff;
    width: 430px;
    margin-left: auto;

    :before {
      content: "";
      position: absolute;
      top: calc(50% - 24px);
      left: -24px;
      height: 48px;
      width: 48px;
      transform: rotate(45deg);
      z-index: 9;
      background-color: ${(props) => props.theme.colors.base.cyan};
    }
  }

  .partner-block-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    .info-title {
      text-align: right;
      font-weight: 400;
      padding: 24px;
      padding-left: 0;
      border-right: 3px solid #fff;
    }
  }

  .info-list {
    list-style: none;
    padding-left: 24px;
    font-weight: 300;
  }
`;
