import React, { useState, useEffect } from "react";

const count = 12;
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
      { photoData.length && (photoData.map(item => <React.Fragment>
          <div className="card">
            <a href={item.hdurl} title="View Full Image" target="_blank">
              <img src={item.url} alt="NASA APOD" loading="lazy" className="card-img-top" />
            </a>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="clickable">Add to Favorites</p>
              <p>{item.explanation}</p>
              <small className="text-muted">
                <p>{item.date}</p>
                <strong>{item.copyright === undefined ? '' : item.copyright}</strong>
              </small>
            </div>
          </div>
        </React.Fragment>))}
    </div>
  );
};

//<p>{item.date}</p>

export default Card;
