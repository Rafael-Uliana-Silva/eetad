import React from "react";
import axios from "axios";
import Selo from "../Selo/Selo";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  FormDados,
  FormError,
  FormInput,
  FormEnvioContainer,
  FormEnvio,
  FormEnvioTitle,
  IcnTruck,
  IcnChurch,
  IcnHouseLine,
  IcnMapPin,
} from "./FormStyle";
import { Alert } from "@mui/material";
import useValidate from "../../Hooks/useValidate";

interface FormValues {
  nome: string;
  whatsapp: string;
  email: string;
  cpf: string;
  rg: string;
  cep: string;
  envio: string;
}

interface CepData {
  cep: string;
  street: string;
  complemento: string;
  neighborhood: string;
  city: string;
  state: string;
  erro?: boolean;
}

const Form = () => {
  const [cepData, setCepData] = React.useState<CepData | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [formSucess, setFormSucess] = React.useState<string | null>(null);

  const { valorFormatado: cpfFormatado, handleChange: handleCpfChange } =
    useValidate({
      formato: (valor) =>
        valor
          .replace(/\D/g, "")
          .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"),
      validacao: (valor) => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(valor),
    });

  const { valorFormatado: rgFormatado, handleChange: handleRgChange } =
    useValidate({
      formato: (valor) =>
        valor
          .replace(/\D/g, "")
          .replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4"),
      validacao: (valor) => /^\d{2}\.\d{3}\.\d{3}-\d{1}$/.test(valor),
    });

  const {
    valorFormatado: whatsappFormatado,
    handleChange: handleWhatsappChange,
  } = useValidate({
    formato: (valor) =>
      valor.replace(/\D/g, "").replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"),
    validacao: (valor) => /^\(\d{2}\) \d{5}-\d{4}$/.test(valor),
  });

  const {
    valorFormatado: cepFormatado,
    valorBruto,
    handleChange: handleCepChange,
    valido: cepValido,
  } = useValidate({
    formato: (valor) =>
      valor.replace(/\D/g, "").replace(/(\d{5})(\d{3})/, "$1-$2"),
    validacao: (valor) => /^\d{5}-\d{3}$/.test(valor),
  });

  const handleCep = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!valorBruto || valorBruto.length !== 8) {
      setError("CEP inválido");
      setCepData(null);
      return;
    }
    setError(null);

    setLoading(true);
    try {
      const { data } = await axios.get<CepData>(
        `https://brasilapi.com.br/api/cep/v2/${valorBruto}`,
      );
      if (data.erro) throw new Error();
      setCepData(data);
    } catch {
      setError("CEP não encontrado. Tente novamente.");
      setCepData(null);
    } finally {
      setLoading(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      const dadosExistentes = JSON.parse(
        localStorage.getItem("userData") || "[]",
      );
      const novosDados = [...dadosExistentes, data];
      localStorage.setItem("userData", JSON.stringify(novosDados));

      setFormSucess("Dados salvos com sucesso!");
      setTimeout(() => {
        setFormSucess(null);
      }, 3000);
    } catch (error) {
      console.error("Erro ao salvar dados", error);
      setFormSucess(null);
    }
  };

  return (
    <div>
      <FormDados onSubmit={handleSubmit(onSubmit)}>
        <FormInput className="nomeRow">
          <label htmlFor="nome">Nome Completo *</label>
          <input
            {...register("nome", {
              required: "Por favor insira o nome completo",
            })}
            id="nome"
            type="text"
            pattern=".{3,}"
          />
          {errors.nome && <FormError>{errors.nome.message}</FormError>}
        </FormInput>

        <FormInput>
          <label htmlFor="whatsapp">Whatsapp *</label>
          <input
            {...register("whatsapp", {
              required: "O WhatsApp é obrigatório",
              pattern: {
                value: /^\(\d{2}\) \d{5}-\d{4}$/,
                message: "Whatsapp inválido",
              },
            })}
            id="whatsapp"
            value={whatsappFormatado}
            onChange={handleWhatsappChange}
            type="text"
            placeholder="(XX) XXXXX-XXXX"
          />
          {errors.whatsapp && <FormError>{errors.whatsapp.message}</FormError>}
        </FormInput>

        <FormInput>
          <label htmlFor="email">Email *</label>
          <input
            {...register("email", {
              required: "O email é obrigatório",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email inválido",
              },
            })}
            id="email"
            type="text"
            placeholder="exemplo@gmail.com"
          />
          {errors.email && <FormError>{errors.email.message}</FormError>}
        </FormInput>

        <FormInput>
          <label htmlFor="cpf">CPF *</label>
          <input
            {...register("cpf", {
              required: "O CPF é obrigatório",
              pattern: {
                value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                message: "CPF inválido",
              },
            })}
            id="cpf"
            type="text"
            placeholder="XXX.XXX.XXX-XX"
            value={cpfFormatado}
            onChange={handleCpfChange}
            maxLength={14}
          />
          {errors.cpf && <FormError>{errors.cpf.message}</FormError>}
        </FormInput>

        <FormInput>
          <label htmlFor="rg">RG *</label>
          <input
            {...register("rg", {
              required: "O RG é obrigatório",
              pattern: {
                value: /^\d{2}\.\d{3}\.\d{3}-\d{1}$/,
                message: "RG inválido",
              },
            })}
            id="rg"
            type="text"
            maxLength={12}
            value={rgFormatado}
            onChange={handleRgChange}
            placeholder="XX.XXX.XXX-X"
          />
          {errors.rg && <FormError>{errors.rg.message}</FormError>}
        </FormInput>

        <FormInput className="cepRow">
          <label htmlFor="cep">CEP *</label>
          <input
            {...register("cep", {
              required: "O CEP é obrigatório",
              pattern: {
                value: /^\d{5}-\d{3}$/,
                message: "CEP inválido",
              },
            })}
            id="cep"
            type="text"
            maxLength={9}
            value={cepFormatado}
            onChange={handleCepChange}
            placeholder="XXXXX-XXX"
          />
          <button onClick={handleCep} disabled={cepValido || loading}>
            {loading ? "Buscando..." : "Buscar CEP"}
          </button>
          <div>
            {error && <FormError>{error}</FormError>}
            {cepData && (
              <div>
                <span>
                  {cepData.street}, {cepData.neighborhood},{cepData.city},{" "}
                  {cepData.state}
                </span>
              </div>
            )}
          </div>
        </FormInput>

        <FormEnvioContainer>
          <FormEnvioTitle>
            <div className="svgTitle">
              <IcnTruck />
              <h2>Sobre o envio</h2>
            </div>
          </FormEnvioTitle>
          <FormEnvio>
            <legend>
              Sobre o envio do seu certificado, você quer que o enviemos: *
            </legend>

            <div>
              <input
                type="radio"
                id="remessa"
                value="remessa"
                {...register("envio", {
                  required: "Selecione uma opção de envio",
                })}
              />
              <IcnChurch />
              <label htmlFor="remessa">
                Juntamente com a próxima remessa de materiais para o seu Núcleo.
                <br />
                <span>Esta opção é gratuita.</span>
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="residencia"
                value="residencia"
                {...register("envio", {
                  required: "Selecione uma opção de envio",
                })}
              />
              <IcnHouseLine />
              <label htmlFor="residencia">
                Para o seu endereço residencial.
                <br />
                <span>Neste caso, haverá cobrança das despesas postais.</span>
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="retirada"
                value="retirada"
                {...register("envio", {
                  required: "Selecione uma opção de envio",
                })}
              />
              <IcnMapPin />
              <label htmlFor="retirada">
                Retirada presencial do certificado na sede nacional da EETAD, em
                Campinas (SP).
                <br />
                <span>Esta opção é gratuita.</span>
              </label>
            </div>

            {errors.envio && <FormError>{errors.envio.message}</FormError>}
          </FormEnvio>
        </FormEnvioContainer>
        <Selo />
        <button type="submit">Salvar Dados</button>
      </FormDados>
      {formSucess && (
        <Alert
          style={{ marginTop: "30px" }}
          variant="outlined"
          severity="success"
        >
          {formSucess}
        </Alert>
      )}
    </div>
  );
};

export default Form;
