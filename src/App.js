import React, { useEffect, useState } from 'react';
import ImageCard from './components/ImageCard';

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
}, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <ImageCard key={index} image={image} />
        ))}H
      </div>
    </div>
  );
}

export default App;
