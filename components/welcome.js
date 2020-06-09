
import React from 'react'
import Action from './action'
import Options from './options'
import AddOption from './addoptions'
import Header from './header'
import Footer from './footer'


export default class Welcome extends React.Component {

constructor(props){
  super(props)
  this.handleDeleteOptions=this.handleDeleteOptions.bind(this)
  this.handleAddOption=this.handleAddOption.bind(this)
  this.handleDeleteOption=this.handleDeleteOption.bind(this)
  this.state= {
  mydata :['admin','admin3']
  }
}
handleDeleteOptions(){
  
  this.setState=(() => {
    return {
      
      mydata:[]
    }
  })
}

componentDidMount(){
  console.log('component is renderd')
const json =localStorage.getItem('userdata')
const mydata =JSON.parse(json)
console.log(mydata)
this.setState(()=> ({mydata}))



}
componentDidUpdate()

{
  const json= JSON.stringify(this.state.mydata) ;
  localStorage.setItem('userdata' ,json)


}




handleAddOption(data){

if(!data){
  return 'enter valid data'
}else if (this.state.mydata.indexOf(data) > -1){
  return 'entered data already exist'
}

  this.setState((prevState) => {
return {
  mydata:prevState.mydata.concat(data)
}
  })
}

handleDeleteOption(data) {
  this.setState((prevState) =>({
mydata:prevState.mydata.filter((option) => data !== option)
  }))
}







render(){
  
  const headermsg='welcome to header'
  const footermsg='welcome to footer'

  return (

<div>
    <h3> welcome to child component </h3>

    <Header hm={headermsg}/>
    <Footer/>
    <AddOption adddata={this.handleAddOption}/>
    <Options md={this.state.mydata} dd={this.handleDeleteOptions}
    hdd={this.handleDeleteOption}
    />
    <Action hasData={this.state.mydata.length > 0}/>
</div>

  )
}


}