import React, { useState, useEffect } from "react";

const count = 6;
const apiKey = 'Qx2dxWtEzDNgGAZ0MQdXyZZwjkBMctbDhzt6ACNd'
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;


function Card() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(apiURL);
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);


return (

    <React.Fragment>
    <div>
<h1></h1>
    </div>
    </React.Fragment>
  );
};

export default Card;
