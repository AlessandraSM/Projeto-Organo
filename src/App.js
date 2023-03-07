import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto';


function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite seu nome"/>
      <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
      <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
      <CampoTexto label="Time" placeholder="Insira um tempo"/>
    </div>
  );
}

export default App;
