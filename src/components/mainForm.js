import React, { Component } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { GenInfo } from "./info/genInfo";
import { WorkExp } from "./info/pracExp";
import { Cvpreview } from "./cvprev";
import uniqid from "uniqid";
import ReactToPrint from "react-to-print";

class Maincont extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genInfo: {
        name: "",
        email: "",
        phoneNo: "",
        desc: "",
      },

      eduExp: {
        universityName: "",
        city: "",
        degree: "",
        subject: "",
        startDate: "",
        endDate: "",
        id: uniqid(),
      },

      eduExpArr: [
        {
          universityName: "",
          city: "",
          degree: "",
          subject: "",
          startDate: "",
          endDate: "",
          id: uniqid(),
        },
      ],

      workExp: {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
        id: uniqid(),
      },

      workExpArr: [
        {
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          description: "",
          id: uniqid(),
        },
      ],
    };
    this.genInfoHandler = this.genInfoHandler.bind(this);
  }


  genInfoHandler = (e) => {
    this.setState({
      genInfo :{
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phoneNo: document.getElementById("phoneNo").value,
        desc: document.getElementById("desc").value,
      },
    });
  }

  loadExample = (e) => {
    console.log("click");
  };

  render() {
    return (
      <div className="flex flex-col min-h-screen">
        <div>
          <Header />
        </div>

        <div className="mainCont flex-grow flex flex-row w-full ">
          {/* form */}
          <div className=" flex flex-col  w-1/2 mx-10">
            <div className="bg-black flex flex-col items-center my-10 p-12 md:gap-4 md:space-y-0 w-full text-white rounded-md h-full ">
              <div className="w-full text-center">
                <GenInfo change={this.genInfoHandler} />
              </div>
              <div >
                <WorkExp />
              </div>


              <div className="flex flex-col gap-4 justify-center items-center">
              <div>
                <button
                  className="misc-btn bg-green-500 border-transparent"
                  onClick={this.loadExample}>
                  Load Example
                </button>
              </div>
              <div>
                <button className="misc-btn bg-red-500 border-transparent" onClick={this.reload}>
                  Reset
                </button>
              </div>
              <div>
                <ReactToPrint
                  trigger={() => {
                    return (
                      <button className="misc-btn bg-violet-600">Print</button>
                    );
                  }}
                  content={() => this.componentRef}
                  documentTitle="CV"
                  pageStyle="print"
                />
              </div>
            </div>
            </div>
          </div>

          {/* cv preview */}
          <div className=" flex flex-col mx-10 w-1/2 h-fit">
            <div className="bg-gray-200 order-2 flex flex-col items-center my-10 w-full text-black rounded-md h-full">
              <Cvpreview 
                name={this.state.genInfo.name}
                email={this.state.genInfo.email}
                phoneNo={this.state.genInfo.phoneNo}
                desc={this.state.genInfo.desc}
              />
            </div>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
export { Maincont };
