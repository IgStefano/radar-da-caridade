import CadastroField from "./CadastroField";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";

export default function EditarAção() {
  const params = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nomeAção: "", // Input type String
    cepAção: "", // API viaCEP para validar o local
    logradouro: "", // definido automaticamente pelo viaCEP
    bairro: "",
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
  });
  const [isSending, setIsSending] = useState(false);

  function handleChange(event) {
    // ATENÇÃO: a função de atualização de state é DESTRUTIVA, ou seja, ela substitui o state anterior pelo novo. Quando o state é um objeto, se não quisermos perder as chaves anteriores em uma atualização, precisamos salvar todas as chaves existentes usando a sintaxe de espalhamento (...)
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  }

  useEffect(() => {
    axios
      .get(`https://ironrest.herokuapp.com/radar-da-caridade/${params.id}`)
      .then((response) => {
        delete response.data._id;
        setFormData(response.data);
        console.log(response.data);
        // Tira o estado de "enviando"
        setIsSending(false);
      })
      .catch((err) => {
        console.log(err);
        setIsSending(false);
      });
  }, []);

  function handleSubmit(event) {
    // Impedir o comportamento padrão do formulário de enviar os dados pela URL
    event.preventDefault();

    // Coloca o estado do formulário como "enviando"
    setIsSending(true);

    // Entregar os dados armazenados no state para nossa API disparando uma requisição HTTP do tipo PUT
    axios
      .put(
        `https://ironrest.herokuapp.com/radar-da-caridade/${params.id}`,
        formData
      )
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

    // O método post do Axios recebe 2 argumentos: primeiro a URL da API, segundo o objeto contendo as informações que queremos enviar
  }

  const [loading, setLoading] = useState(false);

  function handleAddressSearch(event) {
    // Atualiza os dados de endereço do formulário
    event.preventDefault();
    setLoading(true);
    axios
      .get(`https://viacep.com.br/ws/${formData.cepAção}/json`)
      .then((response) => {
        console.log(response.data);
        const { cep, logradouro, uf, localidade, bairro } = response.data;
        setFormData({
          cepAção: cep,
          logradouro: logradouro,
          bairro: bairro,
          cidade: localidade,
          estado: uf,
        });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
  console.log(formData);
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="border-bottom border-light border-2 w-100 d-flex justify-content-center flex-column align-items-center">
        <NavBar />
        <h2>Editar minha ação</h2>
      </div>
      <form
        id="cadastro"
        className="mt-3"
        style={{ fontFamily: "Cairo" }}
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

        <div className="">
          <div className="form-control d-flex justify-content-between align-items-center mb-2">
            <label>CEP</label>
            <input
              readOnly={loading}
              name="cepAção"
              onChange={handleChange}
              value={formData.cepAção}
            />
            <button
              className="btn btn-primary"
              disabled={loading}
              onClick={handleAddressSearch}
            >
              Confirmar CEP
            </button>
          </div>

          <div className="form-control mb-2">
            <label>Logradouro</label>
            <input
              className="ms-3"
              readOnly={loading}
              name="logradouro"
              onChange={handleChange}
              value={formData.logradouro}
            />
          </div>

          <div className="form-control mb-2">
            <label>Bairro</label>
            <input
              className="ms-3"
              readOnly={loading}
              name="bairro"
              onChange={handleChange}
              value={formData.bairro}
            />
          </div>

          <div className="form-control mb-2">
            <label>Cidade</label>
            <input
              className="ms-3"
              readOnly={loading}
              name="cidade"
              onChange={handleChange}
              value={formData.cidade}
            />
          </div>

          <div className="form-control mb-2">
            <label>Estado</label>
            <input
              className="ms-3"
              readOnly={loading}
              name="estado"
              onChange={handleChange}
              value={formData.estado}
            />
          </div>
        </div>

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
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-success w-50 mb-3"
            style={{ fontFamily: "Roboto Slab" }}
            disabled={isSending}
            type="submit"
          >
            Editar a Ação
          </button>
        </div>
      </form>
    </div>
  );
}
