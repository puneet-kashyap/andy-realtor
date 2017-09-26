import React from 'react';

const Youtube = (props) => {
  return (
    <div>
      <div className="embed-responsive embed-responsive-4by3">
        <iframe title="Andy video" className="embed-responsive-item" src={props.src}></iframe>
      </div>

  </div>
  )
}

export default Youtube;
