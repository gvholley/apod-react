import React, { useState, useEffect } from "react";

const count = 6;
const apiKey = 'Qx2dxWtEzDNgGAZ0MQdXyZZwjkBMctbDhzt6ACNd'
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;


const Card = () => {
  const [photoData, setPhotoData] = useState([]);

async function fetchPhoto() {
      const res = await fetch(apiURL);
      const data = await res.json();
      console.log(data)

      setPhotoData(data);
    }

  useEffect(() => {
    fetchPhoto();
  }, []);

  return (
    <div className="images-container">
      { photoData.length && (photoData.map(item => <>
          <p>{item.date}</p>
        </>))}
    </div>
  );
};

export default Card;
