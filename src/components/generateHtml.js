import React,{useState, useEffect} from "react";
import Json from "../reviews.json";
import MyEditor from "./sunEditor";
import CopyButton from './copyButton';

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

  const [html, updateState] = useState('');


//getting dynamic data from parent state
const reviewsColor = props.reviewsColor;
const styles = props.styles;

// generating final html with dynamic data
const finalHtml = newArray.map((obj, index)=>{
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
  }).join("")
  
useEffect(()=>{
  updateState(finalHtml)
}, [])

  return (
<div className="w-4/5 md:w-6/12 mx-auto bg-gray-600">
  <div className="flex flex-wrap">
< CopyButton text ={html}/>
<h3 className="text-xl text-white m-auto">Displaying Html For <span className="{``}">{props.displayingHtmlFor}</span> </h3>
</div>
< MyEditor html ={finalHtml}

 onChange={updateState}
 />
</div>
  );
};

export default GenerateHtml;
