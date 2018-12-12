import React from 'react';
import SongList from '../components/SongList.js';
// import SongDetail from '../components/SongDetail.js';


class SongContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    };
    // this.handleSelectedSong = this.handleSelectedSong.bind(this);
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if(request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      // console.log("Data loaded", data);
      // console.log("Entries?", data.feed.entry);
      const entries = data.feed.entry;
      // console.log("Entries again", entries);
      this.setState({songs: entries})
      // console.log("this.state.songs.entries", this.state.songs.entries);
    });
    request.send();
  }

  // handleSelectedSong(index){
  //   const selectedSong = this.state.songs[index];
  //   this.setState({currentSong: selectedSong})
  // }

  render(){
    return (
      <div className="container">
      <h2>UK TOP 20 SONGS!</h2>
      <SongList data={this.state.songs}/>
      </div>
    )
  }
}// class end

export default SongContainer;
