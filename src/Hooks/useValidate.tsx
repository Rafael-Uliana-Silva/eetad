import React from "react";

interface validatorProps {
  formato: (valor: string) => string;
  validacao?: (valor: string) => boolean;
}

interface validatorReturn {
  valorFormatado: string;
  valorBruto: string;
  valido: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function useValidate({ formato, validacao }: validatorProps): validatorReturn {
  const [valorFormatado, setValorFormatado] = React.useState<string>("");
  const [valorBruto, setValorBruto] = React.useState<string>("");
  const [valido, setValido] = React.useState<boolean>(true);

  const handleFormato = (valor: string): string => {
    return formato(valor);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const valor = event.target.value;

    const bruto = valor.replace(/\D/g, "");
    setValorBruto(bruto);

    const formatado = handleFormato(bruto);
    setValorFormatado(formatado);

    if (validacao) {
      setValido(validacao(bruto));
    }
  };

  return {
    valorFormatado,
    valorBruto,
    valido,
    handleChange,
  };
}

export default useValidate;
