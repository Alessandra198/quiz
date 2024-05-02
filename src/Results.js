import React from "react";

export default function Results(props) {
  if (props.bool) {
    if (props.check >= 10) {
      return <h3>You WON!</h3>;
    } else {
      return <h3>You LOST!</h3>;
    }
  } else {
    return null;
  }
}
