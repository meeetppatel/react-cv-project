import React, { Component } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

class Maincont extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="maincont flex flex-col min-h-screen">
        <div>
          <Header/>
        </div>


        <div className="flex-grow">
          <h1>Content Dalo </h1>
        </div>


        <div>
          <Footer/>
        </div>
      </div>
    );
  }
}
export { Maincont };
