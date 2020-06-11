
import React from 'react'
import {connect} from 'react-redux'

class Header extends React.Component {

  renderList() {
    return this.props.bk.map((book) =>{
      return (
        <li 
        key={book.title}
        className="list-group-item">
        {book.title}
        </li>
      )
    })
  }
render(){

  return (
    <div>
    <ul>
{this.renderList()}
 </ul>
</div>
  )
}
}
function mapStateToProps(state){

  return {
    bk: state.books
  }
}

export default connect(mapStateToProps)(Header)