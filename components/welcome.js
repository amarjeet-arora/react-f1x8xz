import React from "react";
import Action from "./action";
import Options from "./options";
import AddOption from "./addoptions";
import Header from "./header";
import Footer from "./footer";
import BookDetails from './bookdetails'
export default class Welcome extends React.Component {
  
  render() {
    const headermsg = "welcome to header";
    const footermsg = "welcome to footer";

    return (
      <div>
        <h3> welcome to child component </h3>

        <Header hm={headermsg} />
       <BookDetails/>
      </div>
    );
  }
}
