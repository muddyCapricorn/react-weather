import React from "react";

export default function FormatDate(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  return (
    <div>
      {day}
      <br />
      {hours}:{minutes}
    </div>
  );
}
