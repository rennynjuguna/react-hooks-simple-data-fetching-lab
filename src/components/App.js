// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => {
        setImageURL(data.message);
      });
  }, []);

  return (
    <div>
      {!imageURL ? (
        <p>Loading...</p>
      ) : (
        <img src={imageURL} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;

