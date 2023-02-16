import { useState, useEffect } from "react";
import Gallery from "./Gallery";
import ButtomBar from "./ButtomBar";
import './App.css';


function App() {

  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})

  useEffect(() => {
    document.title = `Welcome to Museum of Art`
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(response => response.json())
      .then(resData => setData(resData))
  }, [artId])

  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
  }

  return (
    <div className="App">
      <h1>ArtWorld</h1>
      <h3>{data.title}</h3>
      <Gallery
        objectImg={data.primaryImage}
        artist={data.artistDisplayName}
        title={data.title}
      />
      <ButtomBar handleIterate={handleIterate} />
      
    </div>
  )
}

export default App;
