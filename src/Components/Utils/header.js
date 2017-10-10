import React from 'react';

const Header = (props) => {
    return (
        <div className="row">
            <div className="col-lg-12 text-center">
              <h1 style={{'marginTop':'30px'}}>{props.header}</h1>
              <hr className="star-primary"></hr>
            </div>
        </div>
    );
}

export default Header;
