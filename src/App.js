import React, { useEffect, useState } from 'react';
import ImageCard from './components/ImageCard';
import Search from './components/Search';

function App() {
const [images, setImages] = useState([]);
const [isLoading, setLoading] = useState(true);
const [term, setTerm] = useState('');

useEffect(() => {
  fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${term}&image_type=photo`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits)
      setLoading(false)
    })
    .catch(err => console.log(err));
}, [term]);

  return (
    <div className="container mx-auto">
      <Search searchText={text => setTerm(text)} />
      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt32">No Images Found</h1>}
      {isLoading ? <h1 className="text-6xl text-center mx-auto">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <ImageCard key={index} image={image} />
        ))}
      </div>
      }
    </div>
  );
}

export default App;
