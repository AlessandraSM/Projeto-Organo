import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';


function App() {
  
  const [colaboradores, setColaboradores] = useState([])
  //criando o estado do colaborador 

  const aoNovoColaboradoAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
    //Copia o estado ex. 05 colaboradores e adiciona o 06 colaborador 
  }
  //função responsavel pra receber esse colaborador 
  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradoAdicionado(colaborador)}/>
      <Time nome="Programação"/>
      <Time nome="Frontend"/> 
      <Time nome="Data Science"/>
      </div>
      //Dentro do Formulario eu passo a função responsável que recebe o NoboColaborador!
  );
}

export default App;
