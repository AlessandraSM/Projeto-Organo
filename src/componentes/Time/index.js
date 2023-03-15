import "./Time.css";

function Time(props) {
    const css = {backgroundColor: props.corSecundaria}

  return (
    // dentro das chaves do style={} abrimos outra chave {} para indicar que há uma variável ali dentro
    // assim, colocamos as estilizações que, nesse caso, está no App.js
    <section className="time" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
    </section>
  );
}
export default Time;
