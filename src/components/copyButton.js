import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Animated } from "react-animated-css";

const CopyButton = (props) => {
  const [button, clickState] = useState("");

  return (
    <div className="">
      <CopyToClipboard
        text={props.text}
        className={`m-3 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-4 border-green-700 hover:border-green-500 rounded`}
      >
        <button onClick={() => clickState("clicked")}>
        <p className={button === "clicked" ? "hidden" : ""}>Click To Copy</p>
          <Animated
            animationInDuration="500"
            animationIn="zoomIn"
            animationOut="fadeOut"
            isVisible={button === "clicked" ? true : false}
          >
            {button === "clicked" ?  <p>Copied !</p> : <></>}
          </Animated>
        </button>
      </CopyToClipboard>

      {/* <Animated animationInDuration="300" animationIn="slideInUp" animationOut="fadeOut" isVisible={button === "clicked" ? true : false} className={button === "clicked" ? "absolute -top-8 left-9" : "hidden"}>
      <h3 className="text-white text-xl text-center top-0 right-0 bg-green-500 rounded p-2" >Copied !</h3>

      </Animated> */}
    </div>
  );
};

export default CopyButton;
