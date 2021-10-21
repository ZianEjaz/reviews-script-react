import React, { useEffect} from "react";
import Json from "../reviews.json";
import MyEditor from "./sunEditor";

const GenerateHtml = (props) => {
//getting dynamic data from parent state
const reviewsColor = props.reviewsColor;
const styles = props.styles;





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
    props.getHtml(finalHtml)
}, [])
  return (
<div>

< MyEditor html ={finalHtml}
 onChange={props.sendHtmlToState}/>
</div>
  );
};

export default GenerateHtml;
