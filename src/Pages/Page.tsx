import { PageContainer, FormContainer, IcnUser } from "./PageStyle";
import Form from "../Components/Form/Form";

const Page = () => {
  return (
    <PageContainer>
      <h1>CDC - Confirmação de Dados do Concluinte</h1>
      <FormContainer>
        <div className="svgTitle">
          <IcnUser />
          <h2>Dados Cadastrais</h2>
        </div>
        <span>
          Por favor, confira abaixo os seus dados para emissão do certificado de
          conclusão e, se necessário, atualize-os.
        </span>
        <Form />
      </FormContainer>
    </PageContainer>
  );
};

export default Page;
