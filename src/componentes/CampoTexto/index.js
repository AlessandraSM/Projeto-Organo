import { useState } from "react";
import "./CampoTexto.css";

function CampoTexto(props) {
  const placeholderModificada = `${props.placeholder}...`;

  // let valor = 'Alessandra Marmiroli'


  //vai retornar o valor em si + o set, que é pra quando eu quiser alterar, essa função set será chamada
  // não posso alterar o valor direto por atribuição, é preciso passar pelo set

  const aoDigitado = (evento) => {
  props.aoAlterado(evento.target.value)
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
    </div>
  );
}
export default CampoTexto;
