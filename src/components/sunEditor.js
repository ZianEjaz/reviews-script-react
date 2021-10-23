import React from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

const MyEditor = (props) => {

  return (
    <div style={{ width: "100%", height: "500px", margin: "auto" }}>
      <SunEditor 
      defaultValue={props.html} 
      height="60vh" 
      onChange={props.onChange}
      />
    </div>
  );
};
export default MyEditor;
