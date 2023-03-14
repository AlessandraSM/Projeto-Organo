import { useState } from "react";
import Button from "../Button";
import CampoTexto from "../CampoTexto/index";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

function Formulario(props) {
//Acessando os valores de dentro do App (props)
  const times = [
    'Programação',
    'Front-End',
    'Data Science', 
    'Mobile',
    'Inovação e Gestão'
  ]


  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (evento) =>{
    //Criando nomes de objeto a ser impresso no console.log 
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome, 
      cargo, 
      imagem, 
      time})
  }
  

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto 
        obrigatorio={true} 
        label="Nome" 
        placeholder="Digite seu nome"
        valor={nome}
        aoAlterado={valor => setNome(valor)}
         />
        <CampoTexto 
        obrigatorio={true} 
        label="Cargo" 
        placeholder="Digite seu cargo"
        valor={cargo}
        aoAlterado={valor => setCargo(valor)} 
        />
        <CampoTexto 
        label="Imagem" 
        placeholder="Digite o endereço da imagem"
        valor={imagem}
        aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa 
        obrigatorio={true}
        label="Times" 
        itens={times} 
        valor={time}
        aoAlterado={valor => setTime(valor)}/>
        <Button>Criar Card</Button>
      </form>
    </section>
  );
}
export default Formulario;
