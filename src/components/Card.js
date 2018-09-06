import React from "react";

const style = {
  borderBottom: "1px solid gray"
};

const padding = {
  padding: "10px",
  minWidth: "150px",
  display: "inline-block"
};

function ZapItem(props) {
  var discount = 0;
  if (props.data.pricingInfos.price) {
    discount =
      props.data.pricingInfos.price - props.data.pricingInfos.price * 0.1;
  }
  return (
    <div style={style}>
      <a style={padding} data-cy={props.data.id} href={"/zap/" + props.data.id}>
        {props.data.id}
      </a>
      <span style={padding}>
        {props.data.pricingInfos.businessType
          ? props.data.pricingInfos.businessType
          : null}
      </span>
      <span style={padding}>
        price:
        {props.data.pricingInfos.price ? props.data.pricingInfos.price : null}
      </span>
      <span style={padding}>
        discount:
        {props.boundinBoxZap ? props.boundinBoxZap : null}
        {props.boundinBoxZap ? " por: R$ " + discount : null}
      </span>
      <span style={padding}>
        lon:
        {props.data.address.geoLocation.location.lon
          ? props.data.address.geoLocation.location.lon
          : null}
      </span>
      <span style={padding}>
        lat:
        {props.data.address.geoLocation.location.lat
          ? props.data.address.geoLocation.location.lat
          : null}
      </span>
    </div>
  );
}

export default ZapItem;
