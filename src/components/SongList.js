import React, {Component} from 'react';
import SongDetail from './SongDetail.js'

export default class SongList extends Component {
  render(){

    const songNodes = this.props.data.entries.map((song) => {
      return <SongDetail
      key={song.id}
      name={song["im:name"]}
      />
    })
    console.log("songNodes", songNodes);

    return(
      <div className="song-list">
      {songNodes}
      <h2>FUCK THIS</h2>
      </div>
    )
  }
}
