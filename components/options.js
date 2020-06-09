
import React from 'react'
import Option from './option'

export default class Options extends React.Component {


render(){

  return (

<div>
<button onClick={this.props.hdd}>delete all</button>

 {
   this.props.md.map((option) => <Option optiontext={option}  
   
   hdd={this.props.hdd}
   />)
 }
    
</div>
  )
}


}