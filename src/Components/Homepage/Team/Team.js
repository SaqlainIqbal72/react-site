import React from "react";
import "./team.css";
function Team() {
  return (
    <>
      <section className="team">
        <h1>Our Team</h1>
        <div className="team-flex">
          <div className="team-flex-1">
            <div className="jv">
              <img src="/Images/Team/jv.png"></img>

              <div>
                <h3>Javed Iqbal</h3>
                <p>CEO and Co Founder</p>
              </div>
            </div>
            <div className="jv">
              <img src="/Images/Team/jv.png"></img>
              <div>
                <h3>Mehak Kawal</h3>
                <p>CTO and Co Founder</p>
              </div>
            </div>
            <div className="jv">
              <img src="/Images/Team/+.png"></img>
            </div>
          </div>
          <div className="team-flex-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <button>
              <a>Our Team</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
