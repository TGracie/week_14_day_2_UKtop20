import React, {Component, Fragment} from 'react';

// const SongDetail = (props) => {
//   if(!props) return null;
//   return(
//     <>
//     <h2>Song Title: {this.props.name}</h2>
//     <h3>AAAAAAHHHHHH</h3>
//     </>
//   )
// }
//
// export default SongDetail;

export default class SongDetail extends Component {
  render(){
    return(
      <Fragment>
        <ol>Song Title: {this.props.name}</ol>
      </Fragment>
    )
  }
}
