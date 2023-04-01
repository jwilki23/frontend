import React from 'react';
import styles from './Blah.module.css';

function TopBanner(props: any) {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <img src="./JoelHiltonHeadshot.jpg" alt="Joel Hilton"></img>
        </div>
        <div className="col align-self-center">
          <h1 className={styles.h1}>{props.saying}</h1>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
