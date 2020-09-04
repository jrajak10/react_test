import React from 'react';
import logo from './logo.svg';
import underneath from './underneath.jpg';
import folkesange from './folkesange.jpg';
import splid from './splid.jpg'
import dead_men from './dead_men.png'
import log from './log.jpg'
import './App.css';


function App() {
  const DESCRIPTION = {
    "Code Orange": "Code Orange take metal to another dimension on this album. Their mix of " +
                   "metal and hardcore punk riffs with the dark eletronic effects and sudden " +
                   "killswitches of Reba Myers' guitar is a perfect reflection of the uncertain " +
                   "times we are currently living in as a society.",
    "Myrkur": "Folkesange is an absolutely flawless album. It's a nice twist from the ambient " +
              "black metal music she usually releases. Her soulful voice could calm a storm.",
    "Kvelertak": "Splid is Kvelertak's first album without their charismatic frontman, Erlend Hjelvik. " +
                 "However, fans can be reassured with this album, as their vocals are in the safe hands of " +
                 "Ivar Nikolaisen. This is also the first album which features songs in English, rather than " +
                 "being exclusively Norwegian.",
    "Trivium": "What The Dead Men Say is by far Trivium's best albums since Shogun. Brutal from the start to the " +
               "finish.",
    "Lamb of God": "This new release by Lamb of God is the first release without drummer Steve Adler. It is a solid " +
                   "return, with your standard Lamb of God heaviness."
  }

  const ALBUM_URL = {
    "Code Orange": "https://open.spotify.com/embed/album/70kThssMOMBi4GyBPCk0Gu",
    "Myrkur": "https://open.spotify.com/embed/album/1aRhu0xtlPbAb1X8us0uOD",
    "Kvelertak": "https://open.spotify.com/embed/album/2pWZs59DuDL7ZTpRjjRq65",
    "Trivium": "https://open.spotify.com/embed/album/0aXIJYbWk4u41iJmoJmp8y",
    "Lamb of God": "https://open.spotify.com/embed/album/34Y9ZcZ4b3WGbhx66zS0QV"
  }

  const SONGS = {"Myrkur": ["Harpens Kraft", "House Carpenter"],
                "Code Orange": ["Swallowing the Rabbit Whole", "In Fear", "Underneath"],
                "Kvelertak": ["Rogaland", "Crack of Doom", "Bråtebrann"], 
                "Trivium": ["What the Dead Men Say", "Catastrophist"],
                "Lamb of God": ["Memento Mori"]}

  return (
    <div>
      <Header />
      <AlbumDescription albumTitle="1. Myrkur: Folkesange"  album={folkesange} description={DESCRIPTION["Myrkur"]}
        src={ALBUM_URL["Myrkur"]} songs={SONGS["Myrkur"]} />
      <AlbumDescription albumTitle="2. Code Orange: Underneath" album={underneath} description={DESCRIPTION["Code Orange"]}
        src={ALBUM_URL["Code Orange"]} songs={SONGS["Code Orange"]} />
      <AlbumDescription albumTitle="3. Kvelertak: Splid" album={splid} description={DESCRIPTION["Kvelertak"]}
        src={ALBUM_URL["Kvelertak"]} songs={SONGS["Kvelertak"]} />
        <AlbumDescription albumTitle="4. Trivium: What The Dead Men Say" album={dead_men} description={DESCRIPTION["Trivium"]}
        src={ALBUM_URL["Trivium"]} songs={SONGS["Trivium"]} />
        <AlbumDescription albumTitle="5. Lamb of God: Lamb of God" album={log} description={DESCRIPTION["Lamb of God"]}
        src={ALBUM_URL["Lamb of God"]} songs={SONGS["Lamb of God"]} />
    </div>
  );
}

function Header() {
  const HEADER_STYLE = {
    width: '50%',
    height: 75,
    borderRadius: 5,
    marginLeft: "25%",
    marginRight: "25%",
    marginBottom: 50
  }

  return (
    <div id="header-box" style={HEADER_STYLE}>
      <h1 id="header">My Top 5 Albums Of 2020</h1>
    </div>
  );
}


function AlbumCover(props) {
  return (
    <img src={props.album} alt="album cover" />
  )
}

function AlbumEmbed(props) {
  return (
    <iframe src={props.src}></iframe>
  )
}

function SongsToListenTo(props){
  const songs = props.songs
  const LIST_ITEMS = songs.map((song) => <li class='songs'>{song}</li>)
  return (
    <ul>
      {LIST_ITEMS}
    </ul>
  )
}

function AlbumDescription(props) {
  
  return (
    <div class="album-description">
      <AlbumCover album={props.album} />
      <h2>{props.albumTitle}</h2>
      <p class="description">{props.description}</p>
      <p class="description">Songs to listen to:</p>
      <SongsToListenTo songs={props.songs} />
      <p id="preview">Listen to the album in full below:</p>
      <AlbumEmbed src={props.src} />
    </div>
  )
}






export default App;

