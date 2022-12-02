import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <PhotoAlbum></PhotoAlbum>
    </div>
  );
}

function PhotoAlbum() {

  const [photos, setPhotos] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => setPhotos(data))
  },[])

  return (
    <div>
      <h1>Total Photos:-{photos.length}</h1>
      <div className='photo-container'>
      {
        photos.map(photo => <Photo title={photo.title} id={photo.id} url={photo.url}></Photo>)
      }
      </div>
      
    </div>
  )
}

function Photo(props) {
  return (
    <div className='photo'>
      <h4>Photo Id:{props.id}</h4>
      <p>Title:{props.title}</p>
      <img src={props.url}></img>
    </div>
  )
}


export default App;
