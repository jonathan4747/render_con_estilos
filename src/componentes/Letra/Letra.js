import './Letra.css'
function Letra (props){
    console.log("render Letra")
    console.log(props)
    return(
        <div>
            <p style={{color: props.match.params.color , backgroundColor: props.match.params.fondo}}>The word is: {props.match.params.palabra}</p>
        </div>
    )
}
export default Letra