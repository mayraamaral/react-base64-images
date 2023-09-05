import { useState } from "react";
import { useForm } from "react-hook-form";

export function Enviando() {
  const { register, handleSubmit } = useForm();
  const reader = new FileReader();

  const sendImage = (e) => {
    if (e.imagem[0]) {
      console.log(e.imagem[0]);
      reader.readAsDataURL(e.imagem[0]);
      reader.onload = async () => {
        const base64 = reader.result;
        console.log(base64);

        const bebida = {
          nome: "Pitchulinha",
          descricao: "Refrigerante",
          imagem: base64,
          quantidade: 1,
          preco: 5.9,
          tipoProduto: "BEBIDA",
          marca: "PEPSI",
          tamanhoProduto: "MEDIO",
        };

        fetch("http://localhost:8080/produto/bebida/37", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bebida),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
      };
    }
  };
  return (
    <form onSubmit={handleSubmit(sendImage)}>
      <input
        id="imagem"
        type="file"
        accept=".jpg, .jpeg, .png"
        {...register("imagem")}
      />
      <input type="submit" value="Enviar" />
    </form>
  );
}
