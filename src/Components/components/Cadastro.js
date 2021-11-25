import CadastroField from "./CadastroField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";
import ViaCep from "react-via-cep";
import cadastro from "../../Assets/Styles/cadastro.css";

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nomeAção: "", // Input type String
    cepAção: "", // API viaCEP para validar o local
    logradouro: "", // definido automaticamente pelo viaCEP
    cidade: "", // definida automaticamente pelo viaCEP
    estado: "", // definido automaticamente pelo viaCEP
    numero: "", // number
    complemento: "", // string
    data: "", // Date
    horário: "", // Time
    descrição: "", // Text-area
    nomeOrg: "", // String
    telOrg: "", // Tel => lembrar de usar label
    emailOrg: "", // Email => lembrar de usar label
    checkbox: "", // Checkbox
  });
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();

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
        navigate("/"); // Navega de volta à lista
      })
      .catch((err) => {
        console.log(err);
        setIsSending(false);
      });
  }

  // State do CEP
  const [cep, setCep] = useState("");

  // Função para setar o CEP
  function handleCep(event) {
    setCep(event.target.value);
  }

  function handleSuccess(cepData) {
    console.log(cepData);
  }

  function handleLoadData(event) {
    // Atualiza os dados de endereço do formulário
    if (event.target.cepAção !== undefined) {
      setFormData({
        ...formData,
        cepAção: event.target.cepAção.value,
        logradouro: event.target.logradouro.value,
        cidade: event.target.cidade.value,
        estado: event.target.estado.value,
      });
      console.log(formData);
    }
  }
  console.log(formData);
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="border-bottom border-light border-2 w-100 d-flex justify-content-center flex-column align-items-center">
        <NavBar />
        <h2>Cadastre a sua ação abaixo</h2>
      </div>
      <form
        id="cadastro"
        className="mt-3"
        style={{ fontFamily: "Cairo" }}
        onClick={handleLoadData}
        onSubmit={handleSubmit}
      >
        {/* Input nomeAção */}
        <CadastroField
          className="form-control"
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
              return <p>Carregando o seu endereço...</p>;
            }
            if (error) {
              return <p>Erro! Atualize a página e tente novamente.</p>;
            }
            if (data) {
              return (
                /* <div>
                {setFormData({
                  ...formData,
                  cepAção: data.cep,
                  logradouro: data.logradouro,
                  cidade: data.localidade,
                  estado: data.uf,
                })}
              </div> */
                <div className="d-flex flex-row justify-content-around align-text-center">
                  <CadastroField
                    className="form-control-plaintext m-0 p-0"
                    // label="CEP"
                    id="inputCep"
                    type="text"
                    name="cepAção"
                    readOnly={true}
                    onChange={handleChange}
                    value={`${data.cep}`}
                    required // Torna o preenchimento desse campo obrigatório
                  />
                  <div className="d-flex flex-column justify-content-around">
                    <CadastroField
                      // label="Logradouro"
                      className="form-control-plaintext m-0 p-0"
                      id="inputLogradouro"
                      type="text"
                      name="logradouro"
                      value={`${data.logradouro}`}
                      onChange={handleChange}
                      readOnly={true}
                      required // Torna o preenchimento desse campo obrigatório
                    />

                    <CadastroField
                      className="form-control-plaintext m-0 p-0"
                      // label="Cidade"
                      id="inputCidade"
                      type="text"
                      name="cidade"
                      readOnly={true}
                      onChange={handleChange}
                      value={`${data.localidade}`}
                      required // Torna o preenchimento desse campo obrigatório
                    />

                    <CadastroField
                      className="form-control-plaintext m-0 p-0"
                      // label="UF"
                      id="inputEstado"
                      type="text"
                      name="estado"
                      readOnly={true}
                      onChange={handleChange}
                      value={`${data.uf}`}
                      required // Torna o preenchimento desse campo obrigatório
                    />
                  </div>
                </div>
              );
            }
            return (
              <div className="container">
                <div className="mb-1 row align-items-center">
                  <div className="col-form-label">
                    <label htmlFor="cep-input">CEP</label>
                    <div className="border-0">
                      <input
                        onChange={handleCep}
                        value={cep}
                        style={{ width: "104%" }}
                        className="form-control"
                        placeholder="(apenas números)"
                        id="cep-input"
                        name="cep"
                        type="number"
                      />
                    </div>
                  </div>
                  <button
                    className="btn btn-primary"
                    style={{ height: "50%", marginTop: "25px" }}
                    onClick={cep.length !== 8 ? null : fetch}
                  >
                    Confirmar CEP
                  </button>
                </div>
              </div>
            );
          }}
        </ViaCep>

        {/* Input Número */}
        <CadastroField
          className="form-control"
          label="Número"
          id="inputNumero"
          placeholder="(se houver)"
          type="number"
          name="numero"
          onChange={handleChange}
          value={formData.numero}
        />
        {/* Input Complemento */}
        <CadastroField
          className="form-control"
          label="Complemento"
          id="inputComplemento"
          placeholder="(se houver)"
          type="text"
          name="complemento"
          onChange={handleChange}
          value={formData.complemento}
        />
        {/* Input Data */}
        <CadastroField
          className="form-control"
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
          className="form-control"
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
          className="form-control"
          id="inputDescrição"
          form="cadastro"
          name="descrição"
          onChange={handleChange}
          value={formData.descrição}
        >
          Insira aqui a descrição da ação{" "}
        </textarea>
        {/* Input Nome do Organizador */}
        <CadastroField
          className="form-control"
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
          className="form-control"
          label="Telefone do(a) responsável pela ação"
          placeholder="(opcional)"
          id="inputTelOrg"
          type="tel"
          name="telOrg"
          onChange={handleChange}
          value={formData.telOrg}
        />
        {/* Input Contato do Organizador */}
        <CadastroField
          className="form-control"
          label="E-mail do(a) responsável pela ação"
          placeholder="(opcional)"
          id="inputEmailOrg"
          type="email"
          name="emailOrg"
          onChange={handleChange}
          value={formData.emailOrg}
        />

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="checkbox"
            id="inputCheckbox"
            value=""
            required
          />
          <label className="form-check-label" htmlFor="inputCheckbox">
            Eu confirmo que as informações acima estão corretas.
          </label>
        </div>

        <div className="d-flex justify-content-center">
          <button
            className="btn btn-success w-50 mb-3"
            style={{ fontFamily: "Roboto Slab" }}
            disabled={isSending}
            type="submit"
          >
            Enviar a Ação
          </button>
        </div>
      </form>
    </div>
  );
}
