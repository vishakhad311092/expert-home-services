import React from "react";

const description = props => {
  return (
    <div>
      <div className="detailHeading">
        <h2 className="float-left">{props.title} </h2><br/>
        <h4 className="float-left">{props.subTitle}</h4>
      </div>
      <div className="pageDescription float-left">
        <ul className="float-left">
          {props.details.map(obj => {
            return <li>{obj}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default description;
