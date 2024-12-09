import styled from "styled-components";
import IconTruck from "../../assets/IcnTruck.svg?react";
import IconChurch from "../../assets/IcnChurch.svg?react";
import IconHouseLine from "../../assets/IcnHouseLine.svg?react";
import IconMapPin from "../../assets/IcnMapPin.svg?react";

const IcnTruck = styled(IconTruck)`
  display: block;
`;

const IcnChurch = styled(IconChurch)`
  display: block;
`;

const IcnHouseLine = styled(IconHouseLine)`
  display: block;
`;

const IcnMapPin = styled(IconMapPin)`
  display: block;
`;

const FormDados = styled.form`
  display: grid;
  margin: 0 auto;
  grid-auto-flow: row;
  grid-template-columns: 32% 32% 32%;
  justify-content: space-between;
  gap: 16px;
  padding-top: 70px;
  .nomeRow {
    input {
      width: 95%;
    }
    grid-column: 1 / 3;
  }
  .cepRow {
    justify-content: space-between;
    grid-column: 1 / 3;
    p {
      font-size: 20px;
    }
    input {
      width: 20%;
    }
    button {
      margin-left: 30px;
      margin-bottom: 30px;
    }
  }
  @media (max-width: 768px) {
    max-width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .cepRow {
      align-items: center;
    }
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    input {
      width: 100%;
    }
    .nomeRow {
      input {
        width: 90%;
      }
    }
    .cepRow {
      input {
        width: 90%;
      }
      button {
        margin-top: 30px;
        margin-left: 0px;
      }
    }
  }
`;

const FormInput = styled.div`
  label {
    display: block;
    margin-bottom: 5px;
  }
  input {
    width: 90%;
    border: 1px solid #bfbfbf;
    border-radius: 10px;
    padding: 10px;
  }
`;

const FormError = styled.span`
  display: block;
  color: #d30c0f;
  margin: 15px 0px;
`;

const FormEnvioContainer = styled.div`
  grid-column: 1 / 4;
  h2 {
    margin: 70px 0;
  }
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    .svgTitle {
      margin: 0 auto;
      svg {
        margin-right: 5px;
      }
    }
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

const FormEnvioTitle = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 30px;
  }
`;

const FormEnvio = styled.fieldset`
  display: flex;
  flex-direction: column;
  legend {
    margin-bottom: 30px;
  }
  label {
    font-size: 25px;
  }
  div {
    display: flex;
    align-items: center;
    margin-left: 25px;
    margin-bottom: 20px;
    svg {
      margin: 0px 10px;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      margin-bottom: 70px;
      margin-left: 0px;
      input {
        margin-bottom: 30px;
      }
    }
    @media (max-width: 480px) {
      flex-direction: column;
    }
  }
`;

export {
  FormDados,
  FormError,
  FormInput,
  FormEnvioContainer,
  FormEnvioTitle,
  FormEnvio,
  IcnTruck,
  IcnChurch,
  IcnHouseLine,
  IcnMapPin,
};
