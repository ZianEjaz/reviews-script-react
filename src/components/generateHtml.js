import React, { useState, useEffect } from "react";
import Json from "../reviews.json";
import MyEditor from "./sunEditor";
import CopyButton from "./copyButton";
import { Animated } from "react-animated-css";

// functions
// setting current date
var myPastDate = new Date(new Date());
//shuffling Json data everytime
const shuffledData = Json.sort(() => Math.random() - 0.5);
//setting date for 3 reviews
const newArray = shuffledData.map((obj, index) => {
  if (index % 3 === 0) {
    myPastDate.setDate(myPastDate.getDate() - 1);
    obj.date = myPastDate;
  }
  var dt = myPastDate;
  var mm = dt.getMonth() + 1;
  var dd = dt.getDate();
  var yyyy = dt.getFullYear();
  obj.date = dd + "/" + mm + "/" + yyyy;
  return obj;
});

const GenerateHtml = (props) => {
  const [html, updateState] = useState("");

  //getting dynamic data from parent state
  const reviewsColor = props.reviewsColor;
  const styles = props.styles;

  // generating final html with dynamic data
  const finalHtml = newArray
    .map((obj, index) => {
      //setting left align to one review
      if (index % 2 === 0) {
        obj.html = `<div align="left" style="${styles} text-align: left;">
            <p><strong><em>${obj.comment}</em></strong></p>
            <div><span style="color: ${reviewsColor}; font-weight: bold;">${obj.name}</span> - ${obj.date}</div>
        </div>`;
        //setting right align to one review
      } else {
        obj.html = `<div align="right" style="${styles} text-align: right;">
            <p><strong><em>${obj.comment}</em></strong></p>
            <div><span style="color: ${reviewsColor}; font-weight: bold;">${obj.name}</span> - ${obj.date}</div>
        </div>`;
      }
      return obj.html;
    })
    .join("");

  useEffect(() => {
    updateState(finalHtml);
  }, []);

  return (
    // <Animated
    //   animationIn="bounceInLeft"
    //   animationOut="fadeOut"
    //   isVisible={true}
    // >
      <div className="w-4/5 md:w-6/12 h-full mx-auto bg-gray-600 border-4 flex flex-wrap">
        <div className="flex flex-wrap w-full ">
          
          <h3 className="text-xl text-white m-auto flex flex-wrap">
            Displaying Html For :
            <Animated animationIn="zoomInDown" animationOut="fadeOut" isVisible={true}>
            <span className="ml-1 p-1 border-b-4 border-green-400"> {props.displayingHtmlFor}</span>
            </Animated>
          </h3>
          <div className="">
          <CopyButton text={html} />
          </div>
        </div>

        <MyEditor html={finalHtml} onChange={updateState} />
      </div>
    // </Animated>
  );
};

export default GenerateHtml;
