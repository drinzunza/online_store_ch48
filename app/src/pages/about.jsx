import { useState } from 'react';
import './about.css';

function About() {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  function showInfo() {
    setIsInfoVisible(true);
  }

  function getInfo() {
    if (isInfoVisible) {
      return (
        <div className="info">
          <p>email: sinzunza@sdgku.edu</p>
          <p>phone: 951 123 4567</p>
        </div>
      );
    } else {
      return <p className="alert alert-warning">Click the button to view my info</p>;
    }
  }

  return (
    <div className="about">
      <h2>Sergio Inzunza</h2>

      {getInfo()}

      {isInfoVisible ? (
        ''
      ) : (
        <button onClick={showInfo} className="btn btn-sm btn-outline-dark">
          View my contact info
        </button>
      )}
    </div>
  );
}

export default About;
