import CadastroField from "./CadastroField";
import { useState } from "react";
import axios from "axios";
import ViaCep from "react-via-cep";

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nomeAção: "", // Input type String
    cepAção: "", // API viaCEP para validar o local
    logradouro: "", // definido automaticamente pelo viaCEP
    cidade: "", // definida automaticamente pelo viaCEP
    estado: "", // definido automaticamente pelo viaCEP
    número: "", // number
    complemento: "", // string
    data: "", // Date
    horário: "", // Time
    descrição: "", // Text-area
    nomeOrg: "", // String
    telOrg: "", // Tel => lembrar de usar label
    emailOrg: "", // Email => lembrar de usar label
  });
  const [isSending, setIsSending] = useState(false);

  // Para o valor da data, usar a linha abaixo
  // value={new Date(formData.birthDate).toISOString().slice(0, 10)}

  // {} => chave (curly bracket)
  // [] => colchete (square bracket)

  function handleChange(event) {
    // ATENÇÃO: a função de atualização de state é DESTRUTIVA, ou seja, ela substitui o state anterior pelo novo. Quando o state é um objeto, se não quisermos perder as chaves anteriores em uma atualização, precisamos salvar todas as chaves existentes usando a sintaxe de espalhamento (...)
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  }

  function handleSubmit(event) {
    // Impedir o comportamento padrão do formulário de enviar os dados pela URL
    event.preventDefault();

    // Coloca o estado do formulário como "enviando"
    setIsSending(true);

    // Entregar os dados armazenados no state para nossa API disparando uma requisição HTTP do tipo POST

    // O método post do Axios recebe 2 argumentos: primeiro a URL da API, segundo o objeto contendo as informações que queremos enviar
    axios
      .post("https://ironrest.herokuapp.com/radar-da-caridade", formData)
      .then((response) => {
        console.log(response);
        // Tira o estado de "enviando"
        setIsSending(false);
      })
      .catch((err) => {
        console.log(err);
        setIsSending(false);
      });
  }

  // State do CEP
  const [cep, setCep] = useState(0);

  // Função para setar o CEP
  function handleCep(event) {
    setCep(event.target.value);
    console.log(cep);
  }

  function handleSuccess(cepData) {
    console.log(cepData);
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Input nomeAção */}
      <CadastroField
        label="Nome da Ação"
        id="inputnomeAção"
        type="text"
        name="nomeAção" // O atributo name obrigatoriamente precisa ter o mesmo valor que os nome da chave do objeto de state que guarda o valor desse campo
        // As linhas abaixo tornam esse input controlado pelo React, ou seja, sua informação está sempre sincronizada com o state e toda vez que ela muda, o state é atualizado.
        onChange={handleChange}
        value={formData.nomeAção}
        required // Torna o preenchimento desse campo obrigatório
      />

      {/* Input CEP */}
      <ViaCep cep={cep} onSuccess={handleSuccess} lazy>
        {({ data, loading, error, fetch }) => {
          if (loading) {
            return <p>loading...</p>;
          }
          if (error) {
            return <p>error</p>;
          }
          if (data) {
            return (
              <div>
                <p>
                  CEP: {data.cep} <br />
                  LOGRADOURO: {data.logradouro} <br />
                  CIDADE: {data.localidade} <br />
                  UF: {data.uf} <br />
                </p>
              </div>
            );
          }
          return (
            <div>
              <input
                onChange={handleCep}
                value={cep}
                placeholder="CEP"
                name="cep"
                type="number"
              />
              <button onClick={fetch}>Pesquisar</button>
            </div>
          );
        }}
      </ViaCep>

      {/* Input Logradouro */}
      <CadastroField
        label="Local"
        id="inputLocal"
        type="text"
        name="local"
        onChange={handleChange}
        value={formData.local}
        required // Torna o preenchimento desse campo obrigatório
      />

      {/* Input Cidade */}
      <CadastroField
        label="Local"
        id="inputLocal"
        type="text"
        name="local"
        onChange={handleChange}
        value={formData.local}
        required // Torna o preenchimento desse campo obrigatório
      />

      {/* Input Estado */}
      <CadastroField
        label="Local"
        id="inputLocal"
        type="text"
        name="local"
        onChange={handleChange}
        value={formData.local}
        required // Torna o preenchimento desse campo obrigatório
      />

      {/* Input Número */}
      <CadastroField
        label="Local"
        id="inputLocal"
        type="text"
        name="local"
        onChange={handleChange}
        value={formData.local}
        required // Torna o preenchimento desse campo obrigatório
      />

      {/* Input Complemento */}
      <CadastroField
        label="Local"
        id="inputLocal"
        type="text"
        name="local"
        onChange={handleChange}
        value={formData.local}
        required // Torna o preenchimento desse campo obrigatório
      />

      {/* Input Data */}
      <CadastroField
        label="Data"
        id="inputData"
        type="date"
        name="data"
        onChange={handleChange}
        value={formData.data}
        required // Torna o preenchimento desse campo obrigatório
      />

      {/* Input Horário */}
      <CadastroField
        label="Horário"
        id="inputHorário"
        type="time"
        name="horário"
        onChange={handleChange}
        value={formData.horário}
        required // Torna o preenchimento desse campo obrigatório
      />

      {/* Input Descrição => se não funcionar com textarea, ver outras alternativas */}
      <textarea
        label="Descrição"
        id="inputDescrição"
        type="textArea"
        name="local"
        onChange={handleChange}
        value={formData.nomeAção}
        required // Torna o preenchimento desse campo obrigatório
      />

      {/* Input Nome do Organizador */}
      <CadastroField
        label="Organizada por"
        id="inputNomeOrg"
        type="text"
        name="nomeOrg"
        onChange={handleChange}
        value={formData.nomeOrg}
        required // Torna o preenchimento desse campo obrigatório
      />

      {/* Input Contato do Organizador */}
      <CadastroField
        label="Telefone do(a) responsável pela ação (opcional)"
        id="inputTelOrg"
        type="tel"
        name="telOrg"
        onChange={handleChange}
        value={formData.telOrg}
      />

      {/* Input Contato do Organizador */}
      <CadastroField
        label="E-mail do(a) responsável pela ação (opcional)"
        id="inputEmailOrg"
        type="email"
        name="emailOrg"
        onChange={handleChange}
        value={formData.emailOrg}
      />

      <button disabled={isSending} type="submit">
        Enviar a Ação
      </button>
    </form>
  );
}
