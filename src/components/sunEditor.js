import React from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { Animated } from "react-animated-css";

const MyEditor = (props) => {

  return (
    <div className="w-screen min-w-full " style={{  height: "500px", margin: "auto" }}>
      <Animated animationIn="animate__fadeInUpBig" animationOut="animate__fadeOut" isVisible={true}>
      <SunEditor 
      defaultValue={props.html} 
      height="60vh" 
      onChange={props.onChange}
      />
      </Animated>
    </div>
  );
};
export default MyEditor;
