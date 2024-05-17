import "./Landing.css";
const img = "./soccer.jpeg";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-image"></div>
      <div className="landing-container">
        <div className="landing-content">
          <h1>Welcome to the Hub</h1>
          <p>
            Take a tour of Canada's only synchrotron research facility, for
            free! Take a tour of Canada's only synchrotron research facility,
            for free! Take a tour of Canada's only synchrotron research
            facility, for free! Take a tour of Canada's only synchrotron
            research facility, for free!
          </p>
          <button className="btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
