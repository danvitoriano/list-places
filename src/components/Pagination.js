import React from "react";

// class Pagination extends React.Component {
//     constructor(props){
//         super(props)
//     }

//   listPages() {
//     var size = 20;
//     var items = this.state.data.slice(0, size);
//     var countTotal = this.state.data.length;
//     var pages = countTotal / size;
//     var listPages1;
//     // return pages;
//     for (let index = 0; index < pages.length; index++) {
//       const element = pages[index];
//       listPages1 += element;
//     }
//     return listPages1;
//   }

//   componentDidMount(){

//   }

//   render() {
//     return <p>{this.listPages()}</p>;
//   }
// }

function Pagination(props) {
  return (
    <div>
      <p>total pages: {props.totalpages}</p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default Pagination;
