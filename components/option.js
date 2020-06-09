
import React from 'react'


 const Option =(props) => {


 

  return (


     <div>

{props.optiontext}

<button onClick={(e) =>{
props.hdd(props.optiontext)}}>delete</button>
  </div>
  )
}

export default Option

 