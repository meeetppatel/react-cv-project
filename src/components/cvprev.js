import React from "react";

const Cvpreview = (props) => {
    return (
      <div className="cv-cont">
        <div className="name">{props.name}</div>
        <div className="email">{props.email}</div>
        <div className="phoneNo">{props.phoneNo}</div>
        <div className="desc">{props.desc}</div>
      </div>
    );
  };
  
  export { Cvpreview };