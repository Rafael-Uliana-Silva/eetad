import React from "react";
import {
  SeloContainer,
  SeloBg,
  IconTitle,
  IcnCert,
  IcnStamp,
} from "./SeloStyle";
import SeloCec from "../../assets/SeloCec.png";

const Selo = () => {
  return (
    <SeloContainer>
      <IconTitle>
        <IcnCert />
        <h2>Item de enobrecimento que receberá em seu certificado.</h2>
      </IconTitle>
      <SeloBg>
        <div>
          <IconTitle>
            <IcnStamp />
            <span>Selo da CGABD</span>
          </IconTitle>
          <p>
            Selo de autenticação do Conselho de Educação e Cultura da CGADB
            (Convenção Geral das Assembleias de Deus no Brasil).
          </p>
        </div>
        <div>
          <img
            src={SeloCec}
            alt="Selo do conselho de educação e cultura CGADB"
          />
        </div>
      </SeloBg>
    </SeloContainer>
  );
};

export default Selo;
