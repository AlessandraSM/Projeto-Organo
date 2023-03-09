import Button from "../Button";
import CampoTexto from "../CampoTexto/index";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

function Formulario() {

  const times = [
    'Programação',
    'Front-End',
    'Data Science', 
    'Mobile',
    'Inovação e Gestão'
  ]

  const aoSalvar = (evento) =>{
    evento.preventDefault()
    console.log("fui chamado")
  }
  
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa obrigatorio={true}label="Times" itens={times} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
}
export default Formulario;
