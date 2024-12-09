import styled from "styled-components";
import IconCert from "../../assets/IcnCert.svg?react";
import IconStamp from "../../assets/IcnStamp.svg?react";

const IcnCert = styled(IconCert)``;
const IcnStamp = styled(IconStamp)``;

const SeloContainer = styled.div`
  grid-column: 1 / 4;
  padding-top: 170px;
  h2 {
    font-size: 25px;
    color: #05399e;
  }
  @media (max-width: 768px) {
    text-align: center;
    padding-top: 70px;
  }
`;

const IconTitle = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;
  svg {
    margin-right: 30px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-content: center;
    padding-left: 0px;
    justify-self: center;
    text-align: center;
    svg {
      margin-right: 0px;
      margin-bottom: 10px;
    }
  }
`;

const SeloBg = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #c4cfe4;
  border-radius: 20px;
  margin: 30px 0px;
  padding: 30px;
  span {
    font-weight: 600;
  }
  p {
    color: #000;
    margin-top: 50px;
    margin-left: 30px;
    max-width: 510px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 15px 0px;
    p {
      margin-left: 0px;
    }
    img {
      margin-top: 15px;
    }
  }
`;

export { SeloContainer, SeloBg, IconTitle, IcnCert, IcnStamp };
