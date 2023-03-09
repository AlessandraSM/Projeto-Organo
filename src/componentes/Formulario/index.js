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
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa label="Times" itens={times} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
}
export default Formulario;
