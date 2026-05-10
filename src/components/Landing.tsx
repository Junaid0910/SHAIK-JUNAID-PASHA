import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              SHAIK JUNAID
              <br />
              <span>PASHA</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A CREATIVE</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">SOFTWARE</div>
              <div className="landing-h2-2">DATA</div>
            </h2>
            <h2>
              <div className="landing-h2-info">ANALYST</div>
              <div className="landing-h2-info-1">DEVELOPER</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
