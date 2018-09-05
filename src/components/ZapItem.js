import React from "react";

function ZapItem(props) {
  return (
    <div>
      <a href={"/zap/" + props.data.id}>{props.data.id}</a>
    </div>
  );
}

export default ZapItem;
