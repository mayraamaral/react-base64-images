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
        console.log(reader.result);

        const bebida = {
          nome: "Garrafinha",
          descricao: "Refrigerante",
          imagem: base64,
          quantidade: 2,
          preco: 5.9,
          tipoProduto: "BEBIDA",
          marca: "PEPSI",
          tamanhoProduto: "PEQUENO",
        };

        fetch(
          "http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-caramelos-back/produto/bebida/15",
          {
            method: "PUT",
            body: JSON.stringify(bebida),
          }
        );
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
