import React, { useState, useEffect } from "react";
import Json from "../reviews.json";
import MyEditor from "./sunEditor";
import CopyButton from "./copyButton";
import { Animated } from "react-animated-css";

const GenerateHtml = (props) => {
  const [html, updateState] = useState("");

  // functions
  // setting current date
  var myPastDate = new Date(new Date());
  //shuffling Json data everytime
  const shuffledData = Json.sort(() => Math.random() - 0.5);
  //setting date for 3 reviews
  const finalArrayData = shuffledData.map((obj, index) => {
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

  //getting dynamic data from parent state
  const reviewsColor = props.reviewsColor;
  const styles = props.styles;

  // generating final html with dynamic data
  const finalHtml = finalArrayData
    .map((obj, index) => {
      if (props.displayingHtmlFor === "Buckley" || "Celeron") {
        //setting left align to one review
        if (index % 2 === 0) {
          obj.html = `<!-- left -->
          <div style="align-self: flex-start; ${styles}">
          <div class="speech-bubble-l" style="
           background-color: #cfcfcf;
           width: 100%; margin: auto; padding: 20px; position: relative; border-radius: 0.4em; ">
          <div style="text-align: left"> ${obj.comment} </div>
          </div>
          <div style="margin-top: 30px"> <strong style="color: ${reviewsColor};"> ${obj.name} </strong> - ${obj.date} </div>
          </div>`;
        } else {
          //setting right align to one review
          obj.html = `<!-- right -->
          <div style="align-self: flex-end; ${styles}">
          <div
          class="speech-bubble-r"
          style="
          background-color: #cfcfcf; width: 100%; margin: auto; padding: 20px; position: relative; border-radius: 0.4em; ">
          <div style="text-align: left">
          ${obj.comment}
          </div>
          </div>
          <div style="margin-top: 30px; text-align: end">
          <strong style="color: ${reviewsColor};"> ${obj.name} </strong> - ${obj.date}
          </div>
          </div>`;
        }

        return obj.html;
      } else {
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
      }
    })
    .join("");

  const buckleyHtml = `
  <style>

  
      .speech-bubble-r:after {
          content: "";
          position: absolute;
          bottom: 0;
          right: 50px;
          width: 0;
          height: 0;
          border: 16px solid transparent;
          border-top-color: #cccccc;
          border-bottom: 0;
          margin-left: -16px;
          margin-bottom: -16px;
      }

      .speech-bubble-l:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50px;
          width: 0;
          height: 0;
          border: 16px solid transparent;
          border-top-color: #cccccc;
          border-bottom: 0;
          margin-left: -16px;
          margin-bottom: -16px;
      }

</style>

  <div style="width:100%; display: flex; flex-direction: column; margin: auto;">
  ${finalHtml}
  </div>`;

  useEffect(() => {
    updateState(
      props.displayingHtmlFor === "Buckley" || "Celeron"? buckleyHtml : finalHtml
    );
  }, []);

  return (
    <Animated
      animationIn="animate__zoomIn"
      animationOut="animate__zoomOut"
      isVisible={true}
    >
    <div className="w-4/5 md:w-6/12 h-full mx-auto bg-gray-600 border-4 flex flex-wrap">
      <div className="flex flex-wrap w-full ">
        <h3 className="text-xl text-white m-auto flex flex-wrap"> Displaying Html For:
          < Animated animationIn="animate__zoomInDown" animationOut="animate__fadeOut" isVisible={true}>
            < span className="ml-1 p-1 border-b-4 border-green-400"> {" "} {props.displayingHtmlFor} {" "}
            </span>{" "}
          </ Animated > {" "}
        </h3>{" "}
        <div className="">
          < CopyButton text={html} />{" "}
        </div> {" "}
      </div>
      < MyEditor html={props.displayingHtmlFor === "Buckley" || "Celeron" ? buckleyHtml : finalHtml} onChange={updateState} />{" "} {console.log(buckleyHtml)} {" "}
    </div>
   </Animated>
  );
};

export default GenerateHtml;