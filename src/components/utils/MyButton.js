import React from "react";
import Button from "@mui/material/Button";

import TicketIcon from "../../resources/images/icons/ticket.png";

const MyButton = (props) => {
  return (
    <Button
      href={props.link}
      variant="contained"
      size={props.size ? props.size : "large"}
      style={{ background: "#8e8e8e", color: "#ffffff", ...props }}
    >
      <img src={TicketIcon} className="iconImage" alt="icon_button" />
      {props.text}
    </Button>
  );
};
export default MyButton;
