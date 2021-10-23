import React ,{useState}from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyButton = (props) => {
  const [button, clickState] = useState("");

  return (
    <div>
      <CopyToClipboard
        text={props.text}
        className=" m-3 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
        
      >
        <button onClick={()=>clickState("clicked" )}>{button == "clicked" ? <h3>Copied !</h3> : <>Click To Copy</>}</button>
      </CopyToClipboard>
      
    </div>
  );
};

export default CopyButton;
