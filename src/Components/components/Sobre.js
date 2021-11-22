import React from "react";
import NavBar from "./NavBar";

function Sobre() {
  return (
    <div class="text-justify">
      <NavBar />
      <h1 className="text-center">Conheça o Radar da Caridade</h1>
      <div className="text-xs-right">
        <div className="container-fluid">
          <p>
            O projeto "Radar da Caridade" é uma iniciativa que visa dar resposta
            à necessidade urgente de algo que a humanidade sempre enfrentou: A
            assistência aos menos favorecidos! Hoje, segundo a ONU, mais de 780
            milhões de pessoas vivem abaixo do Limiar Internacional da Pobreza
            (com menos de 1,90 dólar por dia). Isso significa que mais de 11% da
            população mundial vive na pobreza extrema! Pensando nisso, o Gerente
            de Operações e Service Desk Denis Carneiro, criou o projeto Radar da
            Caridade. Um espaço onde as pessoas podem unir-se para fazer o bem!
          </p>
          <br />
          <h2>Como funciona?</h2>
          <p>
            Basta cadastrar o tipo de caridade que você irá realizar, o local e
            a hora! O mapa ficará marcado com a sua ação e assim mais pessoas
            poderão se juntar a você para fazer o bem!
            <p>OBS: METER AQUI UMA IMAGEM DA PÁGINA DE CADASTRO</p>
          </p>
          <br />
          <h2>Como posso ajudar?</h2>
          <p>
            Para se juntar a alguém em uma ação de caridade, basta pesquisar no
            mapa a localização onde você se encontra e uma lista com as ações
            próximas a você será mostrada! Ou você pode também clicar no coração
            mostrado no mapa e será redirecionado para os detalhes sobre aquela
            ação!
            <p>OBS: METER AQUI UMA IMAGEM DO MAPA</p>
          </p>
          <br />
          <h2>Um pouco mais sobre o idealizador:</h2>
          <p>
            Nascido em Minas Gerais e atualmente vivendo em Niterói, no Rio de
            Janeiro, casado e pai de família, Denis Carneiro possui uma vasta
            experiência como Gerente de Operações e Service Desk. Tendo
            inclusive já desempenhado suas funções na Globo.com, Banco BBM e
            Ministério Público do Estado do Rio de Janeiro. De formação
            católica, sempre foi incentivado por seus pais à pratica da
            caridade.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Sobre;
