import styled from "styled-components";

export const HeroContent = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${(props) => props.theme.colors.base.blue2};
  overflow: hidden;

  .bg-container {
    position: absolute;
    opacity: 0.2;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    height: 560px;
    width: 100%;
    z-index: 1;
    background-repeat: repeat-x;
    background-position: left center;
  }

  .hero-items {
    display: grid;
    grid-template-columns: 800px 480px;
    height: 100%;
  }

  .hero-left-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.base.blue2};
    padding-right: 130px;
    position: relative;
  }

  .hero-right-col {
    width: 480px;
    background-color: #fff;
  }

  .hero-carousel {
    display: flex;
    flex-direction: column;
    z-index: 2;
  }

  .hero-carousel-content {
    margin: 0 0 50px;    
    overflow: hidden;
    opacity: 0;
    z-index: -1;
    position: absolute;

    .content-img {
      transform: translateY(20px);
      opacity: 0;
      transition: 400ms ease-in-out all;
    }

    .content-info {
      transform: translateY(20px);
      opacity: 0;
      transition: 300ms ease-in-out all;
    }
    
    &.open {
      position: relative;
      opacity: 1;
      z-index: 99;

      .content-img,
      .content-info {
        transform: translateY(0px);
        opacity: 1;
        transition: 400ms ease-in-out all;
        transition-delay: 200ms;
      }
    }
  }

  .content-img {
    display: flex;
    height: 60px;
    margin: 0 0 40px;

    img {
      filter: grayscale(1) brightness(10);
    }
  }

  .content-info {
    position: relative;

    p {
      color: #fafafa;
      font-size: 24px;
      line-height: 1.6;
    }
  }

  .hero-carousel-items {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 160px);
    gap: 10px;
  }

  .carousel-logo-container {
    display: flex;
    background-color: ${(props) => props.theme.colors.base.gray3};
    padding: 8px 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 2px;
    box-shadow: 0px 2px 8px -2px rgb(22 33 44 / 20%);
    cursor: pointer;

    img {
      width: 100%;
      display: flex;
      filter: grayscale(1) brightness(10);
    }
  }
`;
