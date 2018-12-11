import React, {Component} from 'react';
import SongDetail from './SongDetail.js'

export default class SongList extends Component {
  render(){

    const songNodes = this.props.data.map((song) => {
      return <SongDetail
      key={song.id}
      name={song}
      />
    })

    return(
      <div className="song-list">
      {songNodes}
      <h2>FUCK THIS</h2>
      </div>
    )
  }
}
