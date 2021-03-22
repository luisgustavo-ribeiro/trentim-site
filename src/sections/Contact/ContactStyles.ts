import styled from "styled-components";

export const ContactStyle = styled.section`
  background-color: ${props => props.theme.colors.base.yellow};
  transition: 10s ease-in-out all;
  padding: 100px 0;
  
  &:hover {
    background-color: ${props => props.theme.colors.base.orange};
    transition: 10s ease-in-out all;
  }

  .contact-form {
    background-color: #fff;

    .title {
      color: ${props => props.theme.colors.base.yellow};
    }
  }
`;
