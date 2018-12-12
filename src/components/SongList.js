import React, {Component} from 'react';
import SongDetail from './SongDetail.js'

export default class SongList extends Component {
  render(){

    // const songArray = this.props.data.entries;
    console.log("List Props", this.props.data);
    const songArray = this.props.data;

    const songNodes = songArray.map((song) => {
      console.log(song["im:name"].label);
      return <SongDetail
      name={song["im:name"].label}
      />
    });

    return(
      <div className="song-list">
      {songNodes}
      </div>
    )
  }
}
