function Number(props){
    console.log(props)
    console.log("render number")
    return(
        <div>
            {
            isNaN(props.match.params.number)?
                <div>the word is :{props.match.params.number}</div>:<div>The number is: {props.match.params.number}</div>
            }
        </div>
    )
}
export default Number