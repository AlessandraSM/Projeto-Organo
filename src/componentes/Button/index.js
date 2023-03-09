import './Button.css'

function Button(props){
    return(
      <button className="botao">{props.children}</button>
    )
}
export default Button