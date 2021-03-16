import React from 'react';

function createDOMNodes(page) {
  const currentArray = page === 'results' ? resultsArray : Object.values(favorites);

  return (
    <React.Fragment>
      currentArray.forEach((result) => {
    const card = document.createElement('div');
    card.classList.add('card')
    const link = document.createElement('a');
    link.href = result.hdurl;
    link.title = 'View Full Image';
    link.target = '_blank';
    const image = document.createElement('img');
    image.src = result.url;
    image.alt = 'NASA APOD';
    image.loading = 'lazy';
    image.classList.add('card-img-top');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = result.title;
    const saveText = document.createElement('p');
    saveText.classList.add('clickable');
    if (page === 'results') {
      saveText.textContent = 'Add to Favorites';
      saveText.setAttribute('onclick', `saveFavorite('${result.url}')`);
  } else {
      saveText.textContent = 'Remove from Favorites';
      saveText.setAttribute('onclick', `removeFavorite('${result.url}')`);
  }
    const cardText = document.createElement('p');
    cardText.textContent = result.explanation;
    const footer = document.createElement('small');
    footer.classList.add('text-muted');
    const date = document.createElement('strong');
    date.textContent = result.date;
    const copyrightResult = result.copyright === undefined ? '' : result.copyright;
    const copyright = document.createElement('span');
    copyright.textContent = `${copyrightResult}`;
    footer.append(date, copyright);
    cardBody.append(cardTitle, saveText, cardText, footer);
    link.appendChild(image);
    card.append(link, cardBody);
    imagesContainer.appendChild(card);
  });
}

    </React.Fragment>
    )
}

export default createDOMNodes;
