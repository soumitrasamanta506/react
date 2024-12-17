import react from 'react'

// main syntax
/*
function Card(props){
    console.log(props);
    return(
        <div>{props.cardName}</div>
    )
}
*/

// second syntax
function Card({cardName}){  // object de-structuring
    return(
        <div>{cardName}</div>
    )
}
export default Card