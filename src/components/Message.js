import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import "./message.css";
const Message = ({onBack}) => {
  return (
    <div>
      <ArrowCircleLeftIcon className="circle" onClick={onBack} />
      <div className="container">
        <div className="icons__container">
          <CheckCircleOutlineIcon />
        </div>
        <div className="message__info">
          <p>Thank You ! </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
