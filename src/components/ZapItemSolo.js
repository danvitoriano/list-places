import React from "react";

// var items = this.state.data.slice(0, this.state.itemsPerPage);

function ZapItemSolo(props) {
  console.log(props.data.id);
  console.log(typeof props.data.id);

  return (
    <div>
      <a href={"/zap/" + props.data.id}>{props.data.id}</a>
    </div>
    // <div>
    //   {props.data.map(c => (
    //     <div key={c.id}>
    //       <a id={c.id} href={"/zap/" + c.id}>
    //         {c.id}
    //       </a>
    //     </div>
    //   ))}
    // </div>
  );
}

export default ZapItemSolo;
