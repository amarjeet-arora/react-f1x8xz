import React from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/myaction";
import { bindActionCreators } from "redux";

class Header extends React.Component {
  renderList() {
    return this.props.bk.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.sb(book)}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    bk: state.books
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sb: selectBook }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
