import React from "react";

export default function Alert(props) {
  const firstLetterCaps = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{firstLetterCaps(props.alert.type)}</strong> : {props.alert.msg}
      </div>
    )
  );
}
// props.alert && means props.alert is null then don't that <div></div>
// if not null then show that div tag
