import { useEffect, useState } from "react";

export function Consumindo() {
  const [base64, setBase64] = useState("");

  useEffect(() => {
    // Faz a requisição para a API
    fetch(
      "http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-caramelos-back/produto/19"
    )
      .then((response) => response.json()) // Converte a resposta para JSON
      .then((data) => {
        // Obtém o valor do atributo "imagem" e define no estado "base64"
        setBase64(data.imagem);
        console.log(data);
      })
      .catch((error) => {
        console.error("Erro na requisição: ", error);
      });
  }, []);

  return (
    <div className="App">
      <img src={base64} alt="star wars" />
    </div>
  );
}
