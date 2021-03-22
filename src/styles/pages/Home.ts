import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  .form {
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: 5px solid;
    margin: 0 20px;

    &.open {
      height: 100px;
      width: 100px;      
    }

    &.square {
      border-radius: 0;
    }

    &.postIt {
      border-top-left-radius: 50%;
    }
    
    &.person {
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
    }

    &.lemon {
      border-top-left-radius: 50%;
      border-bottom-right-radius: 50%;
    }

    &.chat {
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
      border-bottom-right-radius: 50%;
    }

    &.circle {
      border-radius: 100%;
    }
  }
`;
