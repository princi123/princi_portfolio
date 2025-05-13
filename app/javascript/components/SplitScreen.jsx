import React from "react";
import Left from './Left'
import Right from './Right'

const SplitScreen = () => {
  return(
    <section className="new-hero d-flex align-items-center justify-content-center text-white" style={{ backgroundColor: '#212529', padding: '5rem 0' }}>
      <div className="container d-flex flex-column-reverse flex-lg-row align-items-center justify-content-between py-5">
        <Left />
        <Right />
      </div>
    </section>
  );
}

export default SplitScreen;
