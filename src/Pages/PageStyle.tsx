import styled from "styled-components";
import IconUser from "../assets/IcnUser.svg?react";

const IcnUser = styled(IconUser)`
  display: block;
`;

const PageContainer = styled.div`
  max-width: 1235px;
  margin: 0 auto;
  h1 {
    text-align: center;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    text-align: center;
  }

  @media (max-width: 480px) {
    max-width: 90%;
  }
`;

const FormContainer = styled.div`
  max-width: 100%;
  padding: 75px 30px 150px 30px;
  margin-top: 70px;
  background: #f7f7f7;
  border-radius: 20px;
  .svgTitle {
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    padding: 30px 15px;
    text-align: center;
    .svgTitle {
      text-align: center;
      justify-content: center;
      svg {
        margin-right: 5px;
      }
    }
  }
`;

export { PageContainer, FormContainer, IcnUser };
