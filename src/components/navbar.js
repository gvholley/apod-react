import React from 'react';

function Navbar() {

  return (
    <React.Fragment>
      <div className="navigation-container">
        <span className="background"></span>
            <span className="navigation-items" id="resultsNav">
                <h3 className="clickable">Favorites</h3>
                <h3>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</h3>
                <h3 className="clickable">Load!!!</h3>
            </span>

            <span className="navigation-items" id="favoritesNav">
                <h3 className="clickable">Favorites</h3>
                <h3>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</h3>
                <h3 className="clickable">Load New Images</h3>
            </span>
      </div>

    </React.Fragment>
    )
}

export default Navbar;
