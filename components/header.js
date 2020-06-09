
import React from 'react'


export default class Header extends React.Component {

  constructor(props) {
    super(props);

this.add= this.add.bind(this)

    this.state={
      count:1
    }
  }

add(){
 this.setState((preState)=>{
   return {
     count:preState.count+1
   }
 })

}
subtract(){
alert('sub')
}
reset(){
alert('reset')
}
render(){

  return (
<div>
<h3> Count : {this.state.count}</h3>

<button onClick={this.add}>add </button> <br/>

<button onClick={this.subtract}>sub </button><br/>
<button onClick={this.reset}>reset </button>

    <h3> {this.props.hm} </h3>



    </div>

  )
}


}