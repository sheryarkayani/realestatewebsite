import React from 'react';
import '../../styles/home.css';
import craneImage from '../../assets/all-images/Crain-Rdc-1-2.png';

const ConstructionTimeline = () => {
  return (
    <section className="construction-timeline">
      <div className="grid-container">
        {/* Left Box: Crane and Milestones */}
        <div className="crane-timeline">
          <div className="crane">
            <img src={craneImage} alt="Crane" />
          </div>
          <div className="milestones">
            <div className="milestone">
              <h3>2026</h3>
              <p>Project Delivery</p>
            </div>
            
            <div className="milestone">
              <h3>2024</h3>
              <p>Gray Structure Completion</p>
            </div>
            <div className="milestone">
              <h3>2022</h3>
              <p>Ground Breaking</p>
            </div>
          </div>
        </div>

        {/* Right Box: Video Section */}
        <div className="video-section">
          <div className="video-preview">
            <iframe
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/Wzgv4IrjzjU"
              title="Construction Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-description">
            <p>Watch the construction of the complex in real time</p>
            <button className="book-now-button">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionTimeline;
