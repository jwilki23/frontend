import React from 'react';

function Home() {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <img
            src="../JoelHiltonHeadshot.jpg"
            alt="Joel Hilton"
            style={{ float: 'left' }}
          ></img>
        </div>
        <div className="col align-self-center">
          <h1 style={{ float: 'left', marginLeft: '20px' }}>
            Joel Hilton Film Collection
          </h1>
        </div>
      </div>
    </>
  );
}

export default Home;
