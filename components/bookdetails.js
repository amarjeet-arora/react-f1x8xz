
import React from 'react'

import {connect} from 'react-redux'
 class BookDetails extends React.Component{
render (){

  if(!this.props.book) {
    return <div>select a book to get going</div>
  }
return (

<div>
    <h3> welcome to book details component </h3>
   <div> {this.props.book.title}</div>
      <div> {this.props.book.author}</div>
</div>
  )
}

 }

function mapStateToProps(state) {

  return {
    book:state.activeBook
  }
}
export default connect(mapStateToProps)(BookDetails)
