
import React from 'react'


export default class AddOption extends React.Component {

  constructor(props) {
    super(props)
this.adduser= this.adduser.bind(this)
    this.state={
      localstate:undefined
    }
  }
adduser(e){
  e.preventDefault()
  const data=e.target.elements.udata.value
  const localstate=this.props.adddata(data)
  this.setState(() =>{
    return {localstate}
  })
   
}

render(){

  return (

<form onSubmit={this.adduser}>

Enter your name:<input type="text" name="udata"/>

<button>add user</button>
</form>
     

  )
}


}