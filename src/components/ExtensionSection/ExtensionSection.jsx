import React from 'react';
import './ExtensionSection.css';

const ExtensionSection = () => {
  return (
    <section className="extension">
      <h2 className="extension-title">Download the extension</h2>
      <p className="extension-subtitle">
        We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
      </p>

      <div className="extension-cards">
        <div className="card">
          <img src="/src/assets/image/logo-chrome.svg" alt="Chrome logo" className="card-logo" />
          <h3 className="card-title">Add to Chrome</h3>
          <p className="card-text">Minimum version 62</p>
          <button className="card-button">Add & Install Extension</button>
        </div>

        <div className="card">
          <img src="/src/assets/image/logo-firefox.svg" alt="Firefox logo" className="card-logo" />
          <h3 className="card-title">Add to Firefox</h3>
          <p className="card-text">Minimum version 55</p>
          <button className="card-button">Add & Install Extension</button>
        </div>

        <div className="card">
          <img src="/src/assets/image/logo-opera.svg" alt="Opera logo" className="card-logo" />
          <h3 className="card-title">Add to Opera</h3>
          <p className="card-text">Minimum version 46</p>
          <button className="card-button">Add & Install Extension</button>
        </div>
      </div>
    </section>
  );
};

export default ExtensionSection;
