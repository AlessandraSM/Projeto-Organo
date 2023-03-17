import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSegundaria: "#D9F7E9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSegundaria: "#E8F8FF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSegundaria: "#F0F8E2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSegundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSegundaria: "#FAE9F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSegundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSegundaria: "#FFEEDF",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);
  //criando o estado do colaborador

  const aoNovoColaboradoAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
    //Copia o estado ex. 05 colaboradores e adiciona o 06 colaborador
  };
  //função responsavel pra receber esse colaborador
  return (
    <div className="App">
      <Banner />
      <Formulario nomeDosTimes={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradoAdicionado(colaborador)
        }
      />
      {times.map((time) => (<Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSegundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />
      ))}
    </div>
    //Dentro do Formulario eu passo a função responsável que recebe o NoboColaborador!
    //chave Key é usada para controlar a renderização
  );
}

export default App;
