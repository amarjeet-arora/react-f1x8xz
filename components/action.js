
import React from 'react'


export default class Action extends React.Component {

invokeapp(){
  alert('welcome to alert')
}
render(){

  return (


     <div>
<button disabled ={!this.props.hasData} onClick={this.invokeapp}>call me</button>
     </div>

  )
}


}