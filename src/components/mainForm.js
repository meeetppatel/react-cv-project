import React, { Component } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { GenInfo } from "./info/genInfo";
import { WorkExp } from "./info/pracExp";
import uniqid from "uniqid";
import ReactToPrint from "react-to-print";

class Maincont extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genInfo: {
        name: "",
        email: "",
        phoneNO: "",
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

        <div className="mainCont flex-grow flex flex-row w-full overflow-y-scroll">
          {/* form */}
          <div className=" flex flex-col  w-1/2 mx-10">
            <div className="bg-black flex flex-col items-center my-10 p-12 md:gap-4 md:space-y-0 w-full text-white rounded-md h-full ">
              <div className="w-full text-center">
                <GenInfo />
              </div>
              <div className="w-full text-center">
                <GenInfo />
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
          <div className=" flex flex-col mx-10 w-1/2">
            <div className="bg-black flex flex-col items-center my-10 w-full text-white rounded-md h-full">
              <h1 className="title">cv</h1>
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
