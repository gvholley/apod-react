import React from 'react';

function Navbar() {

  return (
    <React.Fragment>
      <div class="navigation-container">
        <span class="background"></span>
            <span class="navigation-items" id="resultsNav">
                <h3 class="clickable" onclick="updateDOM('favorites')">Favorites</h3>
                <h3>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</h3>
                <h3 class="clickable" onclick="getNasaPictures()">Load!!!</h3>
            </span>

            <span class="navigation-items" id="favoritesNav">
                <h3 class="clickable" onclick="updateDOM('favorites')">Favorites</h3>
                <h3>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</h3>
                <h3 class="clickable" onclick="getNasaPictures()">Load New Images</h3>
            </span>
      </div>

    </React.Fragment>
    )
}

export default Navbar;
