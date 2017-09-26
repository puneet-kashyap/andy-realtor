import React from 'react';

const Map = (props) => {
    return (
        <section id="map" className="map" style={{'margin':'50px 0px'}}>
            <iframe width="100%" height="100%" title="Andy Location" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
              src={props.loc} allowFullScreen></iframe>
            <br />
            <small>
                <a href={props.loc}>.</a>
            </small>
        </section>
    );
}

export default Map;
