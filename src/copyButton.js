import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyButton = (props) => {
  return (
    <div>
      <CopyToClipboard
        text={props.text}
        className=""
      >
        <button>Copy To Clipboard</button>
      </CopyToClipboard>
    </div>
  );
};

export default CopyButton;
