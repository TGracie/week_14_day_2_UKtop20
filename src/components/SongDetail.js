import React, {Component, Fragment} from 'react';

const SongDetail = ({name}) => {
  // if(!props) return null;
  return(
    <>
    <h2>Song Title: {name}</h2>
    <h3>AAAAAAHHHHHH</h3>
    </>
  )
}

export default SongDetail;

// export default class SongDetail extends Component {
//   render(){
//     return(
//       <Fragment>
//         <ol>Song Title: {this.props.name}</ol>
//       </Fragment>
//     )
//   }
// }
